---
outline: 'deep'
---

# Vite 踩坑记


### `vite` 项目引入静态资源报错：`ReferenceError: require is not defined`

本以为会和`vue-cli`一样直接使用 `require`命令进行静态文件的引用谁知触发`ReferenceError: require is not defined`

引入一个静态资源会返回解析后的公共路径：

```js
import imgUrl from './img.png'
document.getElementById('hero-img').src = imgUrl
```

例如，`imgUrl` 在开发时会是 `/img.png` 在生产构建后会是 `/assets/img.2d8efhg.png`

[Vite 静态资源处理官方文档](https://vitejs.cn/guide/assets.html#explicit-url-imports)


### 显式 URL 引入

未被包含在内部列表或 `assetsInclude` 中的资源，可以使用 `?url` 后缀显式导入为一个 `URL`

```js
import URL from '../../../public/nameoflove.m4a?url'
```


:::warning 踩坑：
` Vite ` 表示 `public` 中的资源不应该被 JavaScript 文件引用，否则触发如下报警提示
:::

```sh
Assets in public cannot be imported from JavaScript.
Instead of /public/nameoflove.m4a?url, put the file in the src directory,
and use /src/nameoflove.m4a?url instead
```

引入 `public` 中的资源永远应该使用根绝对路径 —— 举个例子，`public/icon.png` 应该在源码中被引用为 `/icon.png`。如下组件：

```vue
<template>
  <Layout>
    <template #aside-outline-after>
      <Transition>
        <div class="return2top" v-if="show" @click="ReturnToTop">
          <img src="/up.svg" alt="" />
        </div>
      </Transition>
    </template>
  </Layout>
</template>

```

## `new URL(url, import.meta.url)`

[`import.meta.url`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta) 是一个 ESM 的原生功能，会暴露当前模块的 URL。将它与原生的 [`URL 构造器`](https://developer.mozilla.org/en-US/docs/Web/API/URL) 组合使用，在一个 `JavaScript` 模块中，通过相对路径我们就能得到一个被完整解析的静态资源 URL：

```js
const imgUrl = new URL('./img.png', import.meta.url).href

document.getElementById('hero-img').src = imgUrl
```

这在现代浏览器中能够原生使用 - 实际上，Vite 并不需要在开发阶段处理这些代码！

这个模式同样还可以通过字符串模板支持动态 URL：


```js
function getImageUrl(name) {
  return new URL(`./dir/${name}.png`, import.meta.url).href
}
```

在生产构建时，`Vite` 才会进行必要的转换保证 `URL` 在打包和资源哈希后仍指向正确的地址。

::: warning 注意：无法在 SSR 中使用

如果你正在以服务端渲染模式使用 `Vite` 则此模式不支持，因为 `import.meta.url` 在浏览器和 `Node.js` 中有不同的语义。服务端的产物也无法预先确定客户端主机 URL。
:::