<script setup>
import DefaultTheme from 'vitepress/theme'
import { ref, onMounted, onUnmounted } from 'vue'
import debounce from 'lodash.debounce'
const { Layout } = DefaultTheme
const show = ref(true)
let clientHeight = document.body.clientHeight

onMounted(() =>
  window.addEventListener(
    'scroll',
    debounce(() => {
      onScrollFun()
    }, 200)
  )
)

onUnmounted(() => window.removeEventListener('scroll', onScrollFun))

function ReturnToTop() {
  var timer = setInterval(function () {
    var oTop = document.body.scrollTop || document.documentElement.scrollTop
    if (oTop > 0) {
      document.body.scrollTop = document.documentElement.scrollTop = oTop - 66
    } else {
      clearInterval(timer)
      show.value = false
    }
  }, 10)
}

function onScrollFun() {
  var oTop = document.body.scrollTop || document.documentElement.scrollTop
  if (oTop == 0) {
    show.value = false
  } else if (clientHeight < oTop) {
    show.value = true
  }
}

var speak;
let text = '吃葡萄倒吐葡萄皮'
function palyRadio(){
  speak = window,speechSynthesis,
  speak = new SpeechSynthesisUtterance(text)
  speak.lang = 'zh-cn'
  speak.onend = () => {}
  window.speechSynthesis.speak(speak)
}

function pauseRadio(){
  window.speechSynthesis.pause()
}

function resumeRadio(){
  window.speechSynthesis.resume()
}

function stopRadio(){
  window.speechSynthesis.cancel()
}

</script>

<template>
  <Layout>
    <template #aside-outline-after>
      <Transition>
        <div class="return2top" v-if="show" @click="ReturnToTop">
          <img src="/rocket.svg" alt="" />
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

.return2top svg,img {
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