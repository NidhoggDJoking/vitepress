# `Object.groupBy()`

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

···
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
···



# `Map.groupBy()`

[MDN Map.groupBy()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/groupBy)

