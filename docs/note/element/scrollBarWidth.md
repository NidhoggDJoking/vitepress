# scrollBarWidth

参考`elementUI`获取滚动条宽度的方法

::: details
```js
import Vue from 'vue';

let scrollBarWidth;

export default function() {
  if (Vue.prototype.$isServer) return 0;
  if (scrollBarWidth !== undefined) return scrollBarWidth;

  const outer = document.createElement('div');
  outer.className = 'el-scrollbar__wrap';
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.appendChild(outer);

  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = 'scroll';

  const inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);

  const widthWithScroll = inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;

  return scrollBarWidth;
};

```
:::

其中`el-scrollbar__wrap`负责生成滚动条

```css
.el-scrollbar__wrap {
    overflow: scroll;
    height: 100%;
}
```

其结果就是滚动条的实际宽度即便改写滚动条样式

```css
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
```