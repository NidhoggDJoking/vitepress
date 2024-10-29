# mdn web docs


## 「完全なるの黄金回旋エネルギー」



## Element.requestFullscreen()

[`Element.requestFullscreen()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/requestFullscreen) 方法用于发出异步请求使元素进入全屏模式。

```js
function domFullscreen(select){
  document.querySelector(select).requestFullscreen()
}
```

监听方法

```js
addEventListener("fullscreenchange", (event) => {});

onfullscreenchange = (event) => {};

```