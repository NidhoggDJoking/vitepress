<script setup>
import DefaultTheme from 'vitepress/theme'
import { ref, onMounted, onUnmounted } from 'vue'

const { Layout } = DefaultTheme

const show = ref(true)

let clientHeight = document.body.clientHeight

onMounted(() => window.addEventListener('scroll', onScrollFun))

onUnmounted(() => window.removeEventListener('scroll', onScrollFun))

function ReturnToTop() {
  var djs = setInterval(function () {
    var oTop = document.body.scrollTop || document.documentElement.scrollTop
    if (oTop > 0) {
      document.body.scrollTop = document.documentElement.scrollTop = oTop - 50
    } else {
      clearInterval(djs)
      show.value = false
    }
  }, 10)
}

function onScrollFun() {
  if (document.documentElement.scrollTop == 0) {
    show.value = false
  } else if (clientHeight < document.documentElement.scrollTop) {
    show.value = true
  }
}
</script>

<template>
  <Layout>
    <template #aside-outline-after>
      <Transition>
        <div class="return2top" v-if="show" @click="ReturnToTop">
          <img src="/rocket.svg" alt="">
        </div>
      </Transition>
    </template>
  </Layout>
</template>


<style scoped>
.return2top {
  position: absolute;
  bottom: 37px;
  right: 0;
  cursor: pointer;
}
.return2top svg,img{
  width: 70px;
  height: 70px;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>