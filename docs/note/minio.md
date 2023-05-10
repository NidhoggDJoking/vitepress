# Minio 分片上传封装组件代码案例



```html
<el-upload
    :disabled="!folderId"
     accept=".csv"
     :show-file-list="false"
    :http-request="handleUpload">
    <el-button :disabled="!folderId" icon="icon-xx">
        xx
    </el-button>
</el-upload>
```

```js
import SparkMD5 from 'spark-md5'
import axios from 'axios'
import { mapActions } from 'vuex'
import { getFileInfo, mergeFile, continueFile } from '../../api'
const CHUNK_SIZE = 5 * 1024 * 1024
const blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice
export default {
  data() {
    return {
       // 0 上传中， 1 上传暂停， 2 上传成功， 3 上传失败（中断）
      UPLOAD_STATUS: {
        WAIT: -1,
        ING: 0,
        PAUSE: 1,
        SUCCESS: 2,
        FAIL: 3
      },
      UPLOAD_TASK: {}
    }
  },
  props: {
    folderId: {
      type: String,
      default: ''
    },
    beforeUpload: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    calcPercentage(task) {
      let { totalChunkCounts, stsUploadId, doneParts } = task
      let doneCount = doneParts.length
      let val = parseInt(doneCount / totalChunkCounts * 100).toFixed(0)
      console.log('已完成：', doneCount, '总共：', totalChunkCounts, '进度：', val + '%')
      task.percentage = val
      task.percentage = val
      this.$emit('updateUploadStatus', stsUploadId, task)
    },
    handleUpload(e) {
      if (!e.file) return
      this.computeMD5(e.file)
    },
    // 继续上传
    async restartUpload(task) {
      if (!task) return false
      console.log('重新上传', task)
      try {
        const { stsUploadId, filename, uniqueIdentifier, totalChunkCounts } = task
        let result = await continueFile({
          stsUploadId,
          fileName: filename,
          md5: uniqueIdentifier,
          partCount: totalChunkCounts
        })
        const { minioUrlMap, minioUploadId, fileStatus } = result
         // fileStatus 0: 已存在，1：不分片 2：多片
        task.fileStatus = fileStatus
        task.uploadUrls = minioUrlMap
        task.minioUploadId = minioUploadId
        task.doneParts = new Array(totalChunkCounts - Object.keys(minioUrlMap).length)

        // 创建任务，刷新列表
        this.$set(this.UPLOAD_TASK, stsUploadId, task)
        let newTask = this.UPLOAD_TASK[stsUploadId]
        this.$emit('updateUploadStatus', stsUploadId, newTask)
        if (fileStatus === '0') {
            // 秒传
          this.mergeRequest(newTask)
        } else {
          this.$emit('updateUploadStatus', stsUploadId, newTask)
          // 断点续传，应该有 uploadUrls
          this.uploadChunks(newTask)
        }
        } catch (err) {
          console.log('继续上传报错', err)
        }
      },
      // 生成文件上传的进度handler
      createProgressHandler(item) {
        return e => {
            item.percentage = parseInt(String((e.loaded / e.total) * 100))
        }
      },
      // 并发上传文件碎片
      async uploadChunks(task) {
        console.log('MINIO开始上传...')
        let that = this
        let { fileChunkList, uploadUrls, chunks, stsUploadId, doneParts } = task
        function uploadMinio(item) {
            const { url, chunk } = item
            console.log('上传的MINIO URL', url)
            console.log('上传的MINIO FILE', chunk)
            return new Promise((resolve, reject) => {
              axios.put(url, chunk, {
                onUploadProgress: that.createProgressHandler(item)
                }).then(function(res) {
                   doneParts.push(url)
                   console.log('上传分片 MINIO 结果：', res)
                   that.calcPercentage(task)
                   resolve(res)
                }).catch(function(err) {
                   console.log(err)
                   reject(err)
              })
            })
        }
        try {
        let clist = fileChunkList
        let urls = uploadUrls
        chunks = []
        Object.keys(urls).forEach(idx => {
          chunks.push({
            url: urls[idx],
            chunk: clist[idx - 1]['chunk'],
            percentage: 0,
            size: clist[idx - 1]['size']
          })
        })
         const requestList = chunks.map(async(item) => {
          await uploadMinio(item)
        })
        await Promise.all(requestList)
        console.log('上传MINIO完成，发送合并请求')
        this.mergeRequest(task)
      } catch (err) {
         console.log(err)
        task.status = this.UPLOAD_STATUS.FAIL
        this.$emit('updateUploadStatus', stsUploadId, task)
      }
    },
     // 发送合并请求告知后端合并文件
     async mergeRequest(task) {
        const { stsUploadId, minioUploadId, filename } = task
        try {
          let res = await mergeFile({
            stsUploadId: stsUploadId,
            minioUploadId: minioUploadId
          })
        console.log('合并文件RES：' + filename, res)
        // 直接触发刷新，不进行状态更新
        task.status = this.UPLOAD_STATUS.SUCCESS
        task.percentage = ''
        this.$emit('updateUploadStatus', stsUploadId, task, true)
         } catch (err) {
        console.log('合并文件请求发生错误', err)
        task.status = this.UPLOAD_STATUS.FAIL
        this.$emit('updateUploadStatus',stsUploadId, task)
      }
    },
    // 获取文件上传信息：上传ID，上传状态，分片信息
    async getFileInfoByMd5(task) {
      try {
        let { totalChunkCounts, filename, filesize, uniqueIdentifier } = task
        let result = await getFileInfo({
          folderId: this.folderId,
          partCount: totalChunkCounts,
          fileName: filename,
          fileSize: filesize,
          md5: uniqueIdentifier
        })
        console.log('获取上传信息结果！', result)
        const { minioUrlMap, minioUploadId, fileStatus, stsUploadId } = result
        // fileStatus 0: 已存在，1：不分片 2：多片
        task.fileStatus = fileStatus
        task.uploadUrls = minioUrlMap
        task.minioUploadId = minioUploadId
        task.stsUploadId = stsUploadId
        task.doneParts = []
        task.chunks = []
        this.$set(this.UPLOAD_TASK, stsUploadId, task)
        return this.UPLOAD_TASK[stsUploadId]
      } catch (err) {
        console.log('请求文件信息失败', err)
        return false
      }
    },
    // 准备上传
    async prepareUpload(task) {
      let newTask = await this.getFileInfoByMd5(task)
      let stsUploadId = newTask.stsUploadId
      console.log('上传任务：', newTask)
      this.$emit('updateUploadStatus', stsUploadId, newTask, true)
      if (newTask.fileStatus === '0') {
        // 秒传
        this.mergeRequest(newTask)
      } else {
        newTask['status'] = this.UPLOAD_STATUS.ING
        this.$emit('updateUploadStatus', stsUploadId, newTask)
        // 断点续传，应该有 uploadUrls
        this.uploadChunks(newTask)
      }
    },
    // 计算MD5
    computeMD5(file) {
       let task = {
        $_type: 'minio',
        file,
        filename: file.name,
        filesize: file.size,
        status: this.UPLOAD_STATUS.WAIT,
        percentage: '0'
      }
      let chunks = Math.ceil(task.filesize / CHUNK_SIZE)
      let fileChunkList = []
      let currentChunk = 0
      let spark = new SparkMD5.ArrayBuffer()
      let fileReader = new FileReader()
      let time = new Date().getTime()
      console.log('计算MD5...')
      task.totalChunkCounts = chunks
      loadNext()
      fileReader.onload = (e) => {
        fileChunkList.push({ chunk: e.target.result, size: e.total })
        spark.append(e.target.result) // Append array buffer
        currentChunk++
        if (currentChunk < chunks) {
          console.log(`第${ currentChunk }分片解析完成, 
          开始第${currentChunk + 1}/${ chunks }分片解析`)
          loadNext()
        } else {
          let md5 = spark.end()
            console.log(
            `MD5计算完成：${ task.filename } \n
            MD5：${ md5 } \n
            分片：${ chunks } 大小:${ task.filesize} 
            用时：${ (new Date().getTime() - time) / 1000 } s`
          )
          spark.destroy() // 释放缓存
          task.uniqueIdentifier = md5 // 将文件md5赋值给文件唯一标识
          task.cmd5 = false // 取消计算md5状态
          task.fileChunkList = fileChunkList
          this.prepareUpload(task)
        }
      }
       fileReader.onerror = () => {
        console.warn('oops, something went wrong.')
        file.cancel()
      }
      function loadNext() {
         let start = currentChunk * CHUNK_SIZE
         let end = start + CHUNK_SIZE >= file.size ? file.size : start + CHUNK_SIZE
         fileReader.readAsArrayBuffer(blobSlice.call(file, start, end))
      }
    }
  }
}
```