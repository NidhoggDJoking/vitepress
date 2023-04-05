---
outline: 'deep'
---

# 八股文

---

::: details 有空写点
<ruby>
    <span>想</span>
    <rp>(</rp>
    <rt> jiu </rt>
    <rp>)</rp>
</ruby>
<ruby>
    <span>到</span>
    <rp>(</rp>
    <rt> shi </rt>
    <rp>)</rp>
</ruby>
<ruby>
    <span>啥</span>
    <rp>(</rp>
    <rt> bu </rt>
    <rp>)</rp>
</ruby>
<ruby>
    <span>写</span>
    <rp>(</rp>
    <rt> xiang </rt>
    <rp>)</rp>
</ruby>
<ruby>
    <span>啥</span>
    <rp>(</rp>
    <rt> xie </rt>
    <rp>)</rp>
</ruby>

:::

### `null` 和 `undefined`

首先 `null` 和 `undefined` 都表示空，但是存在差异

`null`的含义是空对象，一般用于赋值给那些可能会返回对象的变量作为初始化。

`undefined` 代表的含义是未定义，一般变量声明了，但是没有赋值的时候会返回`undefined`。

```js
typeof null
'object'

typeof undefined
'undefined'
```

---


### `Label`标签的作用

`label` 标签是用来定义表单控件的关系，当用户选择`label`标签时，浏览器会自动将聚焦点转到和la标签相关的表单控件上，

关联方式：

1. 可以通过`label`标签的`for`属性来指定表单的控件`id`
2. 把表单控件作为`label`标签的子元素


<style>
    ruby > span{
        margin: 0 3px;
        font-size: 18px;
    }
</style>