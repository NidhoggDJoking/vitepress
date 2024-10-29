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

# Array Grouping

### `Object.groupBy()`

[MDN Object.groupBy()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/groupBy)

```js

const testData = [
  { name: '中国', type: 'country' },
  { name: '湖南', type: 'city' },
  { name: '日本', type: 'country' },
  { name: '东京', type: 'city' },
  { name: '美国', type: 'country' },
  { name: '慕尼黑', type: 'city' },
]

const result = Object.groupBy(testData , ({ type }) => type)

```

得到 result 结果

```js
{
    "country": [
        {
            "name": "中国",
            "type": "country"
        },
        {
            "name": "日本",
            "type": "country"
        },
        {
            "name": "美国",
            "type": "country"
        }
    ],
    "city": [
        {
            "name": "湖南",
            "type": "city"
        },
        {
            "name": "东京",
            "type": "city"
        },
        {
            "name": "慕尼黑",
            "type": "city"
        }
    ]
}
```

这不比 `filter` 来分批归类强

这个和 `lodash` 里的  `_.groupBy()` 差不多


### `Map.groupBy()`

[MDN Map.groupBy()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/groupBy)


```js
const result = Map.groupBy(testData , ({ type }) => type)
```

得到 result 结果


```js
new Map([
    [
        "country",
        [
            {
                "name": "中国",
                "type": "country"
            },
            {
                "name": "日本",
                "type": "country"
            },
            {
                "name": "美国",
                "type": "country"
            }
        ]
    ],
    [
        "city",
        [
            {
                "name": "湖南",
                "type": "city"
            },
            {
                "name": "东京",
                "type": "city"
            },
            {
                "name": "慕尼黑",
                "type": "city"
            }
        ]
    ]
])
```

> 兼容 也就 Safi 不行 G 