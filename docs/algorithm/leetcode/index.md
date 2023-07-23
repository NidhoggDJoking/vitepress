---
outline: 'deep'
---

# Leetcode


---

::: tip 一个数组中判断是否存在c，如果没有就去除a和b，将剩余参数取出，如果有c就一起放入新的数组
这是一个在B站无意间发现的随手记录下，内容虽然简单却有其他感悟
:::


::: details 数据的结构
```js
let arr = [
    {
        a:111,
        b:222,
        c:333,
        d:444
    },
    {
        a:555,
        b:666,
        c:777,
        d:888
    },
    {
        a:999,
        b:123,
        d:135
    }
]
```
:::

- 例子一

```js
const newArr = arr.reduce((prev, cur) => {
    const { a, b, c, ...obj } = cur;
    return [...prev, c ? cur : obj];
},[])

```

- 例子二

```js

const newArr = arr.map(item => {
  if (item.hasOwnProperty('c')) return item
  const temp = { ...item }
  delete temp.a
  delete temp.b
  return temp
})

```

其中例一主要是用到了扩展运算符，却不知为何要使用`reduce`，而不是直接使用简单高效的`map`

```js
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x // 1
y // 2
z // { a: 3, b: 4 }
```

例二则是规避掉了当c为0点情况，但直接`delete`来删除对应属性即便是对象中没有要删除的属性`delete`也不会报错使用安全，却在代码的美观(艺术)上远没有扩展运算符来的优雅。<br>
不禁感慨 如果是在上班时间我会不会写出和上述例子一样风格的代码，为了追求了工作的高效喜欢直接了当，渐渐地少了一丝对代码创作的追求。

---


- ### js 提供了一个数组结构的 data，要求实现一个 query 方法，返回一个新的数组，query 方法内部有 过滤、排序、分组 等操作，并且支持链式调用，调用最终的 execute 方法返回结果


```js
class Query {
  constructor(data) {
    this.data = data;
    this.result = data.slice();
  }
  
  filter(callback) {
    this.result = this.result.filter(callback);
    return this; // 支持链式调用
  }
  
  sort(compareFn) {
    this.result = this.result.sort(compareFn);
    return this; // 支持链式调用
  }
  
  groupBy(key) {
    const groups = {};
    for (let item of this.result) {
      const groupKey = item[key];
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(item);
    }
    this.result = Object.values(groups);
    return this; // 支持链式调用
  }
  
  execute() {
    return this.result;
  }
}

// 示例调用
const data = [
  { name: '张三', age: 20, gender: '男' },
  { name: '李四', age: 25, gender: '女' },
  { name: '王五', age: 22, gender: '男' },
  { name: '赵六', age: 28, gender: '女' }
];

const result = new Query(data)
  .filter(item => item.age >= 22)
  .sort((a, b) => b.age - a.age)
  .groupBy('gender')
  .execute();

console.log(result);

```