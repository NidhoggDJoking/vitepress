---
aside: false
---
# Gitee Go

```sh
# ========================================================
# ElementUI 构建打包示例
# 功能：前端构建 ElementUI 并输出构建物到制品库
# ========================================================
name: element-ui-ci-build                   # 定义一个唯一 ID 标识为 element-ui-ci-build ，名称为 “前端构建流水线” 的流水线
displayName: '前端构建流水线'
triggers:                                   # 流水线触发器配置
  push:                                     # 设置 master 分支 在产生代码 push 时精确触发（PRECISE）构建
    - matchType: PRECISE
      branch: master
commitMessage: ''                           # 通过匹配当前提交的 CommitMessage 决定是否执行流水线
stages:                                     # 构建阶段配置
  - stage:                                  # 定义一个 ID 标识为 element-build-stage ,名为 “Build Stage” 的阶段
      name: element-build-stage
      displayName: 'Build Stage'
      failFast: false                       # 允许快速失败，即当 Stage 中有任务失败时，直接结束整个 Stage
      steps:                                # 构建步骤配置
        - step: npmbuild@1                  # 采用 npm 编译环境
          name: element-build               # 定义一个 ID 标识为 element-build ,名为 “Build Step” 的阶段
          displayName: 'Build Step'
          inputs:                           # 构建输入参数设定
            nodeVersion: 14.15              # 指定 node 环境版本为 14.15
            goals: |                        # 输出 构建环境 Node 和 npm 信息，安装依赖并构建
              node -v
              npm -v
              npm install
              npm run dist
            uploadArtifact: true            # 构建完成后是否将构建物作为制品产出，非必填项，与下方上传参数需同时定义
            uploadArtifactOptions:          # 构建物上传参数，非必填项，与 `uploadArtifact` 参数需同时定义
              artifactPath: './lib'         # 构建完成后要打包的构建物所在路径
              artifactRepository: 'default' # 制品库名称，可以理解为一批构建物的集合
              artifactName: 'element-lib'   # 构建物打包后的制品名
```
