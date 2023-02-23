<template>
   <NotFound/>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'
import { BASEURL } from '../../../.vitepress/configs/global'
const { NotFound } = DefaultTheme

onMounted(() => {
   if (window.Notification) {
      var popNotice = function () {
         if (Notification.permission == "granted") {
            var notification = new Notification("404 PAGE NOT FOUND ！", {
               body: '没有找到你想要的页面！请点击此处返回首页',
               icon: '/Pikachu.svg'
            });

            notification.onclick = function () {
               window.location.replace(`${ window.location.origin }/${BASEURL}/`)
               notification.close();
            };
         }
      };
      if (Notification.permission == "granted") {
         popNotice();
      } else if (Notification.permission != "denied") {
         Notification.requestPermission(function (permission) {
            popNotice();
         });
      }
   } else {
      alert('浏览器不支持Notification');
   }
})

</script>