[toc]

## 在 Markdown 中使用 Vue指令v-for
::: v-pre
`<p v-for="i in 3">{{ i }}</p>`
:::
<p v-for="i in 3">{{ i }}</p>


## 在块中将数据公开到页面
```js
<script setup>
import { useData } from 'vitepress'
const { page } = useData()
</script>
<pre>{{ page }}</pre>
```

## 输出原始代码
::: v-pre
`{{ This will be displayed as-is }}`
:::

## 在 Markdown 中导入组件

<script setup>
import ComponentInHeader from '../components/ComponentInHeader.vue'
</script>

<p>
  <ComponentInHeader />
</p>


## 内联style写样式

<p style="color:orange">
我是内联style写的样式
</p>