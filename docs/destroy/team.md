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



> 兼容还算可以