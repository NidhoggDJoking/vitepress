---
aside: false
---

# 未梳理内容临时位置：

<!-- `fatal: HTTP/2 stream 1 was not closed cleanly before end of the underlying stream` -->

<!-- `Failed to connect to github.com port 443 after 75004 ms: Operation timed out` -->

`SourceHanSansSC-Normal`


<div ref="el" :style="style" style="position: fixed">
    🚧 useDraggable test
</div>


<script setup>
import { ref } from 'vue'
import { useDraggable } from '@vueuse/core'

const el = ref(null)

const { x, y, style } = useDraggable(el, {
  initialValue: { x: 330, y: 250 },
})
</script>