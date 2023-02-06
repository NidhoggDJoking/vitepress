# JavaScript 正则表达式

```html
<el-input
    v-model="limit"
    @input="limit = limit.replace(/^(0+)|[^\d]+/g, '')"
    >
</el-input>
```