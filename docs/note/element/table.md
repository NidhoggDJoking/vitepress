# `el-table`


vue + elementui项目中使用`el-table在el-table-column`上使用`v-if`的时候乱序和样式错乱的问题

在需要使用`v-if`渲染的`el-table-column`元素上加上一个不重复的`key`值即可解决问题

```html
<el-table-column v-if="status ===  1" :key="Math.random()"></el-table-column>
```