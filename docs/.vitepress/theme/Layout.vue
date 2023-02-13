<script setup>
import DefaultTheme from 'vitepress/theme'
import { ref } from 'vue'

const { Layout } = DefaultTheme

const show = ref(true)


function ReturnToTop() {
    var djs = setInterval(function () {
        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (oTop > 0) {
            document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
        } else {
            clearInterval(djs);
            show.value = false
        }
    }, 10);
}

</script>

<template>
  <Layout>
    <template #aside-outline-after>
      <div class="return2top" v-if="show" @click="ReturnToTop">
        这是一个简陋的返回顶部
      </div>
    </template>
  </Layout>
</template>


<style scoped>
.return2top{
  position: absolute;
  bottom: 37px;
  right: 10px;
  cursor: pointer;
}
</style>