---
aside: false
---

# 未梳理内容临时位置：

<!-- `fatal: HTTP/2 stream 1 was not closed cleanly before end of the underlying stream` -->

<!-- `Failed to connect to github.com port 443 after 75004 ms: Operation timed out` -->

`SourceHanSansSC-Normal`


<div v-if='!isMobile' ref="el" class="draggable" :style="style" style="position: fixed">
    🚧 useDraggable test
</div>


<script setup>
import { ref, computed  } from 'vue'
import { useDraggable } from '@vueuse/core'

const el = ref(null)

const isMobile = computed(() => {
  if(window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
        return true; // 移动端
    } else {
        return false; // PC端
    }
})


const { x, y, style } = useDraggable(el, {
  initialValue: { x: 330, y: 550 },
})
</script>

<style scoped>
.draggable{
    padding: 10px;
    cursor: pointer;
    user-select: none;
    background-color: var(--vp-c-bg);
    z-index: 2;
}
</style>