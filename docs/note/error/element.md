---
outline: 'deep'
---

# Element UI

::: tip  记录开发过程中发现的element的问题
不含React，Angular模块。
只收录了少部分，其余的得到Github上看pr和issue
:::

## el-table

### `el-table-column` && `v-if`


vue + elementui项目中使用`el-table在el-table-column`上使用`v-if`的时候乱序和样式错乱的问题

在需要使用`v-if`渲染的`el-table-column`元素上加上一个不重复的`key`值即可解决问题

```html
<el-table-column v-if="status ===  1" :key="Math.random()"></el-table-column>
```


## el-input<Badge type="tip" text="2.10.1" />


### `show-password`

发生版本为`2.10.1`, 目前`2.15.13`已处理

```vue
<!-- 2.10.1 -->
<el-input ref='input'  placeholder="请输入密码" v-model="value" show-password></el-input>
```

`show-password` 在切换过程input的聚焦位置由置后变身置前

[codepen 问题复现](https://codepen.io/JokingLulu/pen/MWPpxQJ)



低版本外部处理:

```js
mounted () {
    this.$watch(
        () => {
            return this.$refs.input.passwordVisible
        },
        (val) => {
            this.$refs.input.blur();
            this.$refs.input.focus();
        }
    )
}
```

[codepen 在线查看代码](https://codepen.io/JokingLulu/pen/ZEqLROz)


组件内部处理：

```js
// packages/input/scr/input.vue
methods: {
    focus() {
        this.$nextTick(() => {
            this.getInput().focus();
        })
    }
}
```

