
# markdown扩展💨

[toc]

## 表格
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | 右对齐 | $1600 |
| col 2 is      | 居中      |   $12 |
| zebra stripes | 整洁      |    $1 |


## :tada:表情符号 :100:

## 默认标题
::: info
info
这是一个信息框。
:::
::: tip
tip
这是一个提示。
:::
::: warning
warning
这是一个危险的警告。
:::
::: danger
danger
这是一个危险的警告。
:::
::: details
details
这是一个细节块。
:::

## 自定义标题

::: danger 停止
在容器的“类型”后面附加文本来设置自定义标题: danger 停止

危险区域，请勿继续
:::
::: details 点我查看代码

```js
// details 点我查看代码
console.log("Hello, VitePress!")
```

:::

## 代码块中的语法高亮

- 我是 HTML

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
</ul>
```

## 代码块中的行高亮

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```
## 导入代码片段
导入项目中getting-started文件里的代码
>@对应于源根。默认情况下，它是 VitePress 项目根目录，除非srcDir已配置

<<< @/getting-started.md{4,5}

## 文件包含
<!-- @include: ../getting-started.md -->