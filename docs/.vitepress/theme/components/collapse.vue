<template>
  <details>
    <summary>
      <b>{{ title }}</b>
    </summary>
    <p>
      <slot></slot>
    </p>
  </details>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps(['title'])

// 计数器只是将 props.initialCounter 作为初始值
// 像下面这样做就使 prop 和后续更新无关了
const title = ref(props.title)
</script>

<style scoped>
b {
  cursor: pointer;
}
</style>