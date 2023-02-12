# JavaScript 工具方法

[[toc]]


<!-- ### 数组
* [`arrayMax`](#arraymax)
* [`arrayMin`](#arraymin)
* [`chunk`](#chunk)
* [`compact`](#compact)
* [`countOccurrences`](#countoccurrences)
* [`deepFlatten`](#deepflatten)
* [`difference`](#difference)
* [`distinctValuesOfArray`](#distinctvaluesofarray)
* [`dropElements`](#dropelements)
* [`everyNth`](#everynth)
* [`filterNonUnique`](#filternonunique)
* [`flatten`](#flatten)
* [`flattenDepth`](#flattendepth)
* [`groupBy`](#groupby)
* [`head`](#head)
* [`initial`](#initial)
* [`initializeArrayWithRange`](#initializearraywithrange)
* [`initializeArrayWithValues`](#initializearraywithvalues)
* [`intersection`](#intersection)
* [`last`](#last)
* [`mapObject`](#mapobject)
* [`nthElement`](#nthelement)
* [`pick`](#pick)
* [`pull`](#pull)
* [`remove`](#remove)
* [`sample`](#sample)
* [`shuffle`](#shuffle)
* [`similarity`](#similarity)
* [`symmetricDifference`](#symmetricdifference)
* [`tail`](#tail)
* [`take`](#take)
* [`takeRight`](#takeright)
* [`union`](#union)
* [`without`](#without)
* [`zip`](#zip)

### 浏览器
* [`bottomVisible`](#bottomvisible)
* [`currentURL`](#currenturl)
* [`elementIsVisibleInViewport`](#elementisvisibleinviewport)
* [`getScrollPosition`](#getscrollposition)
* [`getURLParameters`](#geturlparameters)
* [`redirect`](#redirect)
* [`scrollToTop`](#scrolltotop)

### 时间
* [`getDaysDiffBetweenDates`](#getdaysdiffbetweendates)
* [`JSONToDate`](#jsontodate)
* [`toEnglishDate`](#toenglishdate)

### 函数
* [`chainAsync`](#chainasync)
* [`compose`](#compose)
* [`curry`](#curry)
* [`functionName`](#functionname)
* [`pipe`](#pipe)
* [`promisify`](#promisify)
* [`runPromisesInSeries`](#runpromisesinseries)
* [`sleep`](#sleep)

### 数学
* [`arrayAverage`](#arrayaverage)
* [`arraySum`](#arraysum)
* [`collatz`](#collatz)
* [`digitize`](#digitize)
* [`distance`](#distance)
* [`factorial`](#factorial)
* [`fibonacci`](#fibonacci)
* [`gcd`](#gcd)
* [`hammingDistance`](#hammingdistance)
* [`isDivisible`](#isdivisible)
* [`isEven`](#iseven)
* [`lcm`](#lcm)
* [`median`](#median)
* [`palindrome`](#palindrome)
* [`percentile`](#percentile)
* [`powerset`](#powerset)
* [`randomIntegerInRange`](#randomintegerinrange)
* [`randomNumberInRange`](#randomnumberinrange)
* [`round`](#round)
* [`standardDeviation`](#standarddeviation)

### 媒体
* [`speechSynthesis`](#speechsynthesis)

### 节点
* [`JSONToFile`](#jsontofile)
* [`readFileLines`](#readfilelines)

### 对象
* [`cleanObj`](#cleanobj)
* [`objectFromPairs`](#objectfrompairs)
* [`objectToPairs`](#objecttopairs)
* [`shallowClone`](#shallowclone)
* [`truthCheckCollection`](#truthcheckcollection)

### 字符串
* [`anagrams`](#anagrams)
* [`capitalize`](#capitalize)
* [`capitalizeEveryWord`](#capitalizeeveryword)
* [`escapeRegExp`](#escaperegexp)
* [`fromCamelCase`](#fromcamelcase)
* [`reverseString`](#reversestring)
* [`sortCharactersInString`](#sortcharactersinstring)
* [`toCamelCase`](#tocamelcase)
* [`truncateString`](#truncatestring)

### 工具
* [`coalesce`](#coalesce)
* [`coalesceFactory`](#coalescefactory)
* [`extendHex`](#extendhex)
* [`getType`](#gettype)
* [`hexToRGB`](#hextorgb)
* [`isArray`](#isarray)
* [`isBoolean`](#isboolean)
* [`isFunction`](#isfunction)
* [`isNumber`](#isnumber)
* [`isString`](#isstring)
* [`isSymbol`](#issymbol)
* [`RGBToHex`](#rgbtohex)
* [`timeTaken`](#timetaken)
* [`toOrdinalSuffix`](#toordinalsuffix)
* [`UUIDGenerator`](#uuidgenerator)
* [`validateEmail`](#validateemail)
* [`validateNumber`](#validatenumber) -->

## 数组


### arrayMax

返回数组中的最大值。

将`Math.max()`与扩展运算符 (`...`) 结合使用以获取数组中的最大值。

```js
const arrayMax = arr => Math.max(...arr);
// arrayMax([10, 1, 5]) -> 10
```


### arrayMin

返回数组中的最小值。

将`Math.min()`与扩展运算符 (`...`) 结合使用以获取数组中的最小值。

```js
const arrayMin = arr => Math.min(...arr);
// arrayMin([10, 1, 5]) -> 1
```


### chunk

将数组块划分为指定大小的较小数组。

使用`Array.from()`创建新的数组, 这符合将生成的区块数。使用`Array.slice()`将新数组的每个元素映射到`size`长度的区块。如果原始数组不能均匀拆分, 则最终的块将包含剩余的元素。

```js
const chunk = (arr, size) =>
Array.from({length: Math.ceil(arr.length / size)}, (v, i) => arr.slice(i * size, i * size + size));
// chunk([1,2,3,4,5], 2) -> [[1,2],[3,4],[5]]
```


### compact

从数组中移除 falsey 值。

使用`Array.filter()`筛选出 falsey 值 (`false`、`null`、`0`、`""`、`undefined`和`NaN`).

```js
const compact = (arr) => arr.filter(Boolean);
// compact([0, 1, false, 2, '', 3, 'a', 'e'*23, NaN, 's', 34]) -> [ 1, 2, 3, 'a', 's', 34 ]
```


### countOccurrences

计算数组中值的出现次数。

使用`Array.reduce()`在每次遇到数组中的特定值时递增计数器。

```js
const countOccurrences = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
// countOccurrences([1,1,2,1,2,3], 1) -> 3
```


### deepFlatten

深拼合数组。

使用递归。使用`Array.concat()`与空数组 (`[]`) 和跨页运算符 (`...`) 来拼合数组。递归拼合作为数组的每个元素。

```js
const deepFlatten = arr => [].concat(...arr.map(v => Array.isArray(v) ? deepFlatten(v) : v));
// deepFlatten([1,[2],[[3],4],5]) -> [1,2,3,4,5]
```


### difference

返回两个数组之间的差异。

从`b`创建`Set`, 然后使用`Array.filter()` on 只保留`a` `b`中不包含的值.

```js
const difference = (a, b) => { const s = new Set(b); return a.filter(x => !s.has(x)); };
// difference([1,2,3], [1,2,4]) -> [3]
```


### distinctValuesOfArray

返回数组的所有不同值。

使用 ES6 `Set`和`...rest`运算符放弃所有重复的值。

```js
const distinctValuesOfArray = arr => [...new Set(arr)];
// distinctValuesOfArray([1,2,2,3,4,4,5]) -> [1,2,3,4,5]
```


### dropElements

移除数组中的元素, 直到传递的函数返回`true`。返回数组中的其余元素。
在数组中循环, 使用`Array.shift()`将数组的第一个元素除去, 直到函数的返回值为`true`。返回其余元素。

```js
const dropElements = (arr, func) => {
while (arr.length > 0 && !func(arr[0])) arr.shift();
return arr;
};
// dropElements([1, 2, 3, 4], n => n >= 3) -> [3,4]
```


### everyNth

返回数组中的每个第 n 个元素。

使用`Array.filter()`创建一个包含给定数组的每个第 n 个元素的新数组。

```js
const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === 0);
// everyNth([1,2,3,4,5,6], 2) -> [ 1, 3, 5 ]
```


### filterNonUnique

筛选出数组中的非唯一值。

对于只包含唯一值的数组, 请使用`Array.filter()`。

```js
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
// filterNonUnique([1,2,2,3,4,4,5]) -> [1,3,5]
```


### flatten

拼合数组。

使用`Array.reduce()`获取数组中的所有元素和`concat()`以拼合它们。

```js
const flatten = arr => arr.reduce((a, v) => a.concat(v), []);
// flatten([1,[2],3,4]) -> [1,2,3,4]
```


### flattenDepth

将数组向上拼合到指定深度。

使用递归, 递减`depth`, 每层深度为1。使用`Array.reduce()`和`Array.concat()`来合并元素或数组。基本情况下, 对于等于`1`的`depth`停止递归。省略第二个元素,`depth`仅拼合到`1`的深度 (单个拼合)。

```js
const flattenDepth = (arr, depth = 1) =>
depth != 1 ? arr.reduce((a, v) => a.concat(Array.isArray(v) ? flattenDepth(v, depth - 1) : v), [])
: arr.reduce((a, v) => a.concat(v), []);
// flattenDepth([1,[2],[[[3],4],5]], 2) -> [1,2,[3],4,5]
```


### groupby

根据给定函数对数组元素进行分组。

使用`Array.map()`将数组的值映射到函数或属性名。使用`Array.reduce()`创建一个对象, 其中的键是从映射的结果生成的。

```js
const groupBy = (arr, func) =>
arr.map(typeof func === 'function' ? func : val => val[func])
.reduce((acc, val, i) => { acc[val] = (acc[val] || []).concat(arr[i]); return acc; }, {});
// groupBy([6.1, 4.2, 6.3], Math.floor) -> {4: [4.2], 6: [6.1, 6.3]}
// groupBy(['one', 'two', 'three'], 'length') -> {3: ['one', 'two'], 5: ['three']}
```


### head

返回列表的头。

使用`arr[0]`可返回传递的数组的第一个元素。

```js
const head = arr => arr[0];
// head([1,2,3]) -> 1
```


### initial

返回除最后一个数组之外的所有元素。

使用 "`arr.slice(0,-1)`" 返回数组的最后一个元素。

```js
const initial = arr => arr.slice(0, -1);
// initial([1,2,3]) -> [1,2]
```


### initializeArrayWithRange

初始化包含指定范围内的数字的数组。

使用`Array(end-start)`创建所需长度的数组`Array.map()`以填充区域中所需的值。可以省略`start`以使用默认值`0`.

```js
const initializeArrayWithRange = (end, start = 0) =>
Array.from({ length: end - start }).map((v, i) => i + start);
// initializeArrayWithRange(5) -> [0,1,2,3,4]
```


### initializeArrayWithValues

初始化并填充具有指定值的数组。

使用`Array(n)`创建所需长度的数组,`fill(v)`以填充所需的值。可以省略`value`以使用默认值`0`.

```js
const initializeArrayWithValues = (n, value = 0) => Array(n).fill(value);
// initializeArrayWithValues(5, 2) -> [2,2,2,2,2]
```


### intersection

返回两个数组中存在的元素的列表。

从`b`创建`Set`, 然后使用`Array.filter()`on `a`只保留`b`中包含的值.

```js
const intersection = (a, b) => { const s = new Set(b); return a.filter(x => s.has(x)); };
// intersection([1,2,3], [4,3,2]) -> [2,3]
```


### last

返回数组中的最后一个元素。

使用`arr.length - 1`可计算给定数组的最后一个元素的索引并返回它。

```js
const last = arr => arr[arr.length - 1];
// last([1,2,3]) -> 3
```


### mapObject

使用函数将数组的值映射到对象, 其中键值对由原始值作为键和映射值组成。

使用匿名内部函数范围来声明未定义的内存空间, 使用闭包来存储返回值。使用新的`Array`可将该数组与函数的映射放在其数据集上, 而逗号运算符返回第二个步骤, 而不需要从一个上下文移动到另一个环境 (由于关闭和操作顺序)。

```js
const mapObject = (arr, fn) => 
(a => (a = [arr, arr.map(fn)], a[0].reduce( (acc,val,ind) => (acc[val] = a[1][ind], acc), {}) )) ( );
/*
const squareIt = arr => mapObject(arr, a => a*a)
squareIt([1,2,3]) // { 1: 1, 2: 4, 3: 9 }
*/
```


### nthElement

返回数组的第 n 个元素。

使用`Array.slice()`可获取包含第 n 个元素的数组。如果索引超出界限, 则返回`[]`。省略第二个参数`n`, 以获取数组的第一个元素。

```js
const nthElement = (arr, n=0) => (n>0? arr.slice(n,n+1) : arr.slice(n))[0];
// nthElement(['a','b','c'],1) -> 'b'
// nthElement(['a','b','b'],-3) -> 'a'
```


### pick

从对象中选取对应于给定键的键值对。

使用`Array.reduce()`将筛选/选取的密钥转换回具有相应键值对的对象 (如果在 obj 中存在该键)。

```js
const pick = (obj, arr) =>
arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});
// pick({ 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c']) -> { 'a': 1, 'c': 3 }
```


### pull

对原始数组进行变异, 以筛选出指定的值。

使用`Array.filter()`和`Array.includes()`来拉出不需要的值。使用`Array.length = 0`可将传入的数组中的长度重置为零, 并将其设置为`Array.push()`, 以便仅使用所提取的值填充它。

```js
const pull = (arr, ...args) => {
let pulled = arr.filter((v, i) => !args.includes(v));
arr.length = 0; pulled.forEach(v => arr.push(v));
};
// let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
// pull(myArray, 'a', 'c');
// console.log(myArray) -> [ 'b', 'b' ]
```


### remove

从数组中移除给定函数返回`false`的元素.
使用`Array.filter()`查找返回 truthy 值的数组元素和`Array.reduce()`以使用`Array.splice()`删除元素。使用三参数 (`func` `value, index, array`调用函数).

```js
const remove = (arr, func) =>
Array.isArray(arr) ? arr.filter(func).reduce((acc, val) => {
arr.splice(arr.indexOf(val), 1); return acc.concat(val);
}, [])
: [];
// remove([1, 2, 3, 4], n => n % 2 == 0) -> [2, 4]
```


### sample

返回数组中的随机元素。

使用`Math.random()`生成一个随机数, 将它与`length`相乘, 并使用数学将其舍入到最接近的整数`Math.floor()`。此方法也适用于字符串。

```js
const sample = arr => arr[Math.floor(Math.random() * arr.length)];
// sample([3, 7, 9, 11]) -> 9
```


### shuffle

随机数组值的顺序。

使用`Array.sort()`可在比较器中使用`Math.random()`重新排序元素。

```js
const shuffle = arr => arr.sort(() => Math.random() - 0.5);
// shuffle([1,2,3]) -> [2,3,1]
```


### similarity

返回两个数组中都显示的元素的数组。

使用`filter()`可删除不属于`values`的值, 使用`includes()`确定.

```js
const similarity = (arr, values) => arr.filter(v => values.includes(v));
// similarity([1,2,3], [1,2,4]) -> [1,2]
```


### symmetricDifference

返回两个数组之间的对称差。

从每个数组创建一个`Set`, 然后对它们中的每一个都使用`Array.filter()`, 以便只保留其他值中不包含的数值。

```js
const symmetricDifference = (a, b) => {
const sA = new Set(a), sB = new Set(b);
return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
}
// symmetricDifference([1,2,3], [1,2,4]) -> [3,4]
```


### tail

返回数组中的所有元素, 除第一个。

如果数组的`length`大于`1`, 则返回`arr.slice(1)`, 否则返回整个数组。

```js
const tail = arr => arr.length > 1 ? arr.slice(1) : arr;
// tail([1,2,3]) -> [2,3]
// tail([1]) -> [1]
```


### take

返回一个数组, 其中 n 个元素从开始处移除。

使用`Array.slice()`创建数组的切片, 其中包含从开始处取出的`n`元素。

```js
const take = (arr, n = 1) => arr.slice(0, n);
// take([1, 2, 3], 5) -> [1, 2, 3]
// take([1, 2, 3], 0) -> []
```


### takeRight

返回一个数组, 其中 n 个元素从末尾移除。

使用`Array.slice()`创建数组的切片, 其中包含从末尾取出的`n`元素。

```js
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);
// takeRight([1, 2, 3], 2) -> [ 2, 3 ]
// takeRight([1, 2, 3]) -> [3]
```


### union

返回在两个数组中的任意一个中存在的每个元素。

创建一个`Set`, 其中包含`a`和`b`的所有值, 并将其转换为数组。

```js
const union = (a, b) => Array.from(new Set([...a, ...b]));
// union([1,2,3], [4,3,2]) -> [1,2,3,4]
```


### without

筛选出数组中具有指定值之一的元素。

使用`Array.filter()`创建不包括的数组 (使用`!Array.includes()`) 所有给定值。

```js
const without = (arr, ...args) => arr.filter(v => !args.includes(v));
// without([2, 1, 2, 3], 1, 2) -> [3]
```


### zip

创建基于原始数组中的位置分组的元素数组。

使用`Math.max.apply()`获取参数中最长的数组。创建一个以该长度为返回值的数组, 并使用 map 函数创建一个分组元素的数组`Array.from()`如果参数数组的长度不同, 则在未找到任何值的情况下使用`undefined`。

```js
const zip = (...arrays) => {
  const maxLength = Math.max(...arrays.map(x => x.length));
  return Array.from({length: maxLength}).map((_, i) => {
  return Array.from({length: arrays.length}, (_, k) => arrays[k][i]);
  })
}
//zip(['a', 'b'], [1, 2], [true, false]); -> [['a', 1, true], ['b', 2, false]]
//zip(['a'], [1, 2], [true, false]); -> [['a', 1, true], [undefined, 2, false]]
```

### 扁平化数组

```js
/**
* @description  扁平化数组
* @param arr {array} 需要扁平化的数组
* @param deep {number}  展开数组的层次
* @returns {array} 经过扁平化的数组
*/

export function flatten(arr, deep = Infinity) {
    return deep && Array.isArray(arr) ? [].concat(...arr.map(e => flatten(e, deep - 1))) : arr
}
```

## 浏览器


### bottomVisible

如果页的底部可见, 则返回`true`, 否则为`false`。

使用`scrollY`、`scrollHeight`和`clientHeight`来确定页面底部是否可见。

```js
const bottomVisible = () =>
document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight || document.documentElement.clientHeight;
// bottomVisible() -> true
```


### currentURL

返回当前 URL。

使用`window.location.href`获取当前 URL。

```js
const currentURL = () => window.location.href;
// currentUrl() -> 'https://google.com'
```


### elementIsVisibleInViewport

如果指定的元素在视区中可见, 则返回`true`, 否则为`false`。

使用`Element.getBoundingClientRect()`和`window.inner(Width|Height)`值以确定给定元素在视区中是否可见。省略第二个参数以确定该元素是否完全可见, 或指定`true`以确定它是否部分可见。

```js
const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
const { top, left, bottom, right } = el.getBoundingClientRect();
return partiallyVisible
? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
: top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};
// e.g. 100x100 viewport and a 10x10px element at position {top: -1, left: 0, bottom: 9, right: 10}
// elementIsVisibleInViewport(el) -> false (not fully visible)
// elementIsVisibleInViewport(el, true) -> true (partially visible)
```


### getScrollPosition

返回当前页的滚动位置。

如果已定义, 则使用`pageXOffset`和`pageYOffset`, 否则`scrollLeft`和`scrollTop`。可以省略`el`以使用`window`的默认值.

```js
const getScrollPosition = (el = window) =>
({x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,
y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop});
// getScrollPosition() -> {x: 0, y: 200}
```


### getURLParameters

返回一个包含当前 URL 参数的对象。

使用`match()`与适当的正则表达式来获取所有键值对,`Array.reduce()`可将它们映射并合并到单个对象中。将`location.search`作为要应用于当前`url`的参数传递.

```js
const getURLParameters = url =>
url.match(/([^?=&]+)(=([^&]*))/g).reduce(
(a, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {}
);
// getURLParameters('http://url.com/page?name=Adam&surname=Smith') -> {name: 'Adam', surname: 'Smith'}
```


### redirect

重定向到指定的 URL。

使用`window.location.href`或`window.location.replace()`重定向到`url`。传递第二个参数以模拟链接单击 (`true`-默认值) 或 HTTP 重定向 (`false`).

```js
const redirect = (url, asLink = true) =>
asLink ? window.location.href = url : window.location.replace(url);
// redirect('https://google.com')
```


### scrollToTop

平滑滚动到页面顶部。

使用`document.documentElement.scrollTop`或`document.body.scrollTop`从顶部获取距离。从顶部的距离的一小部分滚动。使用`window.requestAnimationFrame()`对滚动进行动画处理。

```js
const scrollToTop = () => {
const c = document.documentElement.scrollTop || document.body.scrollTop;
if (c > 0) {
window.requestAnimationFrame(scrollToTop);
window.scrollTo(0, c - c / 8);
}
};
// scrollToTop()
```

## 日期


### getDaysDiffBetweenDates

返回两个日期之间的差异 (以天为值)。

计算`Date`对象之间的差异 (以天为)。

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) => (dateFinal - dateInitial) / (1000 * 3600 * 24);
// getDaysDiffBetweenDates(new Date("2017-12-13"), new Date("2017-12-22")) -> 9
```


### JSONToDate

将 JSON 对象转换为日期。

使用`Date()`, 将 JSON 格式的日期转换为可读格式 (`dd/mm/yyyy`日)).

```js
const JSONToDate = arr => {
const dt = new Date(parseInt(arr.toString().substr(6)));
return `${ dt.getDate() }/${ dt.getMonth() + 1 }/${ dt.getFullYear() }`
};
// JSONToDate(/Date(1489525200000)/) -> "14/3/2017"
```


### toEnglishDate

将日期从美国格式转换为英文格式。

使用`Date.toISOString()`、`split('T')`和`replace()`将日期从美式格式转换为英文格式。如果传递的时间不能转换为日期, 则抛出错误。

```js
const toEnglishDate  = (time) =>
{try{return new Date(time).toISOString().split('T')[0].replace(/-/g, '/')}catch(e){return}};
// toEnglishDate('09/21/2010') -> '21/09/2010'
```

## 功能


### chainAsync

链异步函数。

循环遍历包含异步事件的函数数组, 当每个异步事件完成时调用`next`。

```js
const chainAsync = fns => { let curr = 0; const next = () => fns[curr++](next); next(); };
/*
chainAsync([
  next => { console.log('0 seconds'); setTimeout(next, 1000); },
  next => { console.log('1 second');  setTimeout(next, 1000); },
  next => { console.log('2 seconds'); }
])
*/
```


### compose

执行从右向左的函数组合。

使用`Array.reduce()`执行从右向左的函数组合。最后一个 (最右边) 的函数可以接受一个或多个参数;其余的函数必须是一元的。

```js
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
/*
const add5 = x => x + 5
const multiply = (x, y) => x * y
const multiplyAndAdd5 = compose(add5, multiply)
multiplyAndAdd5(5, 2) -> 15
*/
```


### curry

Curries a function.

使用递归。如果提供的参数 (变量) 的数量足够, 请调用传递的函数`args` `f`。否则, 返回需要其余参数的扩充函数`f`。如果你想咖喱一个函数, 接受可变数目的参数 (如`Math.min()`), 可以选择将参数的个数传递到第二个参数`arity`(可变函数).

```js
const curry = (fn, arity = fn.length, ...args) =>
arity <= args.length
? fn(...args)
: curry.bind(null, fn, arity, ...args);
// curry(Math.pow)(2)(10) -> 1024
// curry(Math.min, 3)(10)(50)(2) -> 2
```


### functionName

记录函数的名称。

使用`console.debug()`和传递的方法的`name`属性将方法的名称记录到控制台的`debug`通道中。

```js
const functionName = fn => (console.debug(fn.name), fn);
// functionName(Math.max) -> max (logged in debug channel of console)
```


### pipe

执行从左向右的函数组合。

使用`Array.reduce()`与扩展运算符 (`...`) 执行从左向右的函数组合。第一个 (最左边的) 函数可以接受一个或多个参数;其余的函数必须是一元的。

```js
const pipeFunctions = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));
/*
const add5 = x => x + 5
const multiply = (x, y) => x * y
const multiplyAndAdd5 = pipeFunctions(multiply, add5)
multiplyAndAdd5(5, 2) -> 15
*/
```


### promisify

转换异步函数以返回一个承诺。

使用讨好返回一个返回调用原始函数的`Promise`的函数。使用`...rest`运算符传入所有参数。
*在节点 8 + 中, 可以使用 `util.promisify`*

```js
const promisify = func =>
(...args) =>
new Promise((resolve, reject) =>
func(...args, (err, result) =>
err ? reject(err) : resolve(result))
);
// const delay = promisify((d, cb) => setTimeout(cb, d))
// delay(2000).then(() => console.log('Hi!')) -> Promise resolves after 2s
```


### runPromisesInSeries

运行一系列的承诺系列。

使用`Array.reduce()`创建一个承诺链, 每个承诺在解决时返回下一个承诺。

```js
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
// const delay = (d) => new Promise(r => setTimeout(r, d))
// runPromisesInSeries([() => delay(1000), () => delay(2000)]) -> executes each promise sequentially, taking a total of 3 seconds to complete
```


### sleep

延迟异步函数的执行。

延迟执行`async`函数的一部分, 将其放入休眠状态, 返回`Promise`.

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
/*
async function sleepyWork() {
  console.log('I\'m going to sleep for 1 second.');
  await sleep(1000);
  console.log('I woke up after 1 second.');
}
*/
```

## 数学


### arrayAverage

返回数字数组的平均值。

使用`Array.reduce()`将每个值添加到累加器中, 并以`0`的值初始化, 除以数组的`length`。

```js
const arrayAverage = arr => arr.reduce((acc, val) => acc + val, 0) / arr.length;
// arrayAverage([1,2,3]) -> 2
```


### arraySum

返回一个数字数组的总和。

使用`Array.reduce()`将每个值添加到累加器中, 并以`0`值初始化.

```js
const arraySum = arr => arr.reduce((acc, val) => acc + val, 0);
// arraySum([1,2,3,4]) -> 10
```


### collatz

应用 Collatz 算法。

如果`n`是偶数, 则返回`n/2`。否则返回`3n+1`.

```js
const collatz = n => (n % 2 == 0) ? (n / 2) : (3 * n + 1);
// collatz(8) --> 4
// collatz(5) --> 16
```


### collatz

将数字转换为数字数组。

将数字转换为字符串, 在 ES6 (`[...string]`) 中使用扩展运算符生成数组。使用`Array.map()`和`parseInt()`将每个值转换为整数。

```js
const digitize = n => [...''+n].map(i => parseInt(i));
// digitize(2334) -> [2, 3, 3, 4]
```


### digitize

返回两点之间的距离。

使用`Math.hypot()`计算两个点之间的欧氏距离。

```js
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);
// distance(1,1, 2,3) -> 2.23606797749979
```


### distance

计算数字的阶乘。

使用递归。如果`n`小于或等于`1`, 则返回`1`。否则, 返回`n`的乘积和`n - 1`的阶乘。如果`n`为负数, 则引发异常。

```js
const factorial = n =>
n < 0 ? (() => { throw new TypeError('Negative numbers are not allowed!') })()
: n <= 1 ? 1 : n * factorial(n - 1);
// factorial(6) -> 720
```


### fibonacci

生成一个数组, 包含斐波那契数列, 直到第 n 个项。

创建一个指定长度的空数组, 初始化前两个值 (`0`和`1`)。使用`Array.reduce()`可将值添加到数组中, 方法是使用前两个值的总和, 但前两个数值除外。

```js
const fibonacci = n =>
Array(n).fill(0).reduce((acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i), []);
// fibonacci(5) -> [0,1,1,2,3]
```


### gcd

计算两个数字之间最大的公共除数。

使用递归。基本情况是当`y`等于`0`时。在这种情况下, 返回`x`。否则, 返回`y`的 GCD 和除法的其余部分`x/y`.

```js
const gcd = (x, y) => !y ? x : gcd(y, x % y);
// gcd (8, 36) -> 4
```


### hammingDistance

计算两个值之间的汉明距离。

使用 XOR 运算符 (`^`) 可查找两个数字之间的位差, 使用`toString(2)`转换为二进制字符串。使用`match(/1/g)`计算并返回字符串中`1`的数目。.

```js
const hammingDistance = (num1, num2) =>
((num1 ^ num2).toString(2).match(/1/g) || '').length;
// hammingDistance(2,3) -> 1
```


### isDivisible

检查第一个数值参数是否可被另一个数字变量整除。

使用模数运算符 (`%`) 检查余数是否等于`0`.

```js
const isDivisible = (dividend, divisor) => dividend % divisor === 0;
// isDivisible(6,3) -> true
```


### iseven

如果给定的数字为偶数, 则返回`true`, 否则为`false`。

检查一个数字是奇数还是使用模数 (`%`) 运算符。如果数字为偶数, 则返回`true`, 如果数字为奇数, 则为`false`。

```js
const isEven = num => num % 2 === 0;
// isEven(3) -> false
```


### lcm

返回两个数字中最不常见的倍数。

使用最大的公共除数 (GCD) 公式和`Math.abs()`来确定最不常见的倍数。GCD 公式使用递归。

```js
const lcm = (x,y) => {
const gcd = (x, y) => !y ? x : gcd(y, x % y);
return Math.abs(x*y)/(gcd(x,y));
};
// lcm(12,7) -> 84
```


### median

返回数字数组的中间值。

找到数组的中间, 使用`Array.sort()`来对值进行排序。如果`length`为奇数, 则返回中点的数字, 否则为两个中间数的平均值。

```js
const median = arr => {
const mid = Math.floor(arr.length / 2), nums = arr.sort((a, b) => a - b);
return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
// median([5,6,50,1,-5]) -> 5
// median([0,10,-2,7]) -> 3.5
```


### palindrome

如果给定字符串为回文, 则返回`true`, 否则为`false`。

转换字符串`toLowerCase()`并使用`replace()`从其中删除非字母数字字符。然后,`split('')`到各个字符,`reverse()`,`join('')`, 并将其与原始的、不可逆转的字符串进行比较, 然后将其转换为`tolowerCase()`.

```js
const palindrome = str => {
const s = str.toLowerCase().replace(/[\W_]/g,'');
return s === s.split('').reverse().join('');
}
// palindrome('taco cat') -> true
```


### percentile

使用百分比公式计算给定数组中有多少个数小于或等于给定值。

使用`Array.reduce()`计算值的下面有多少, 有多少个数是相同的值, 并应用百分比公式。

```js
const percentile = (arr, val) =>
100 * arr.reduce((acc,v) => acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0), 0) / arr.length;
// percentile([1,2,3,4,5,6,7,8,9,10], 6) -> 55
```


### powerset

返回给定数字数组的 powerset。

使用`Array.reduce()`与`Array.map()`组合, 以循环访问元素并将其合并到包含所有组合的数组中。

```js
const powerset = arr =>
arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);
// powerset([1,2]) -> [[], [1], [2], [2,1]]
```


### randomIntegerInRange

返回指定范围内的随机整数。

使用`Math.random()`生成一个随机数并将其映射到所需的范围, 使用`Math.floor()`使其成为整数。

```js
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// randomIntegerInRange(0, 5) -> 2
```


### randomNumberInRange

返回指定范围内的随机数。

使用`Math.random()`生成随机值, 并使用乘法将其映射到所需的范围。

```js
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;
// randomNumberInRange(2,10) -> 6.0211363285087005
```


### round

将数字四舍五入到指定的位数。

使用`Math.round()`和模板文本将数字舍入到指定的位数。省略第二个参数,`decimals`舍入为整数。

```js
const round = (n, decimals=0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
// round(1.005, 2) -> 1.01
```


### standardDeviation

返回数字数组的标准偏差。

使用`Array.reduce()`计算值的平均值、方差和方差的总和, 值的方差, 然后确定标准偏差。可以省略第二个参数以获取样本标准偏差, 或将其设置为`true`以获取总体标准偏差。

```js
const standardDeviation = (arr, usePopulation = false) => {
const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
return Math.sqrt(
arr.reduce((acc, val) => acc.concat(Math.pow(val - mean, 2)), [])
.reduce((acc, val) => acc + val, 0) / (arr.length - (usePopulation ? 0 : 1))
);
};
// standardDeviation([10,2,38,23,38,23,21]) -> 13.284434142114991 (sample)
// standardDeviation([10,2,38,23,38,23,21], true) -> 12.29899614287479 (population)
```

### 获取随机码

```js
/**
 * 获取随机码
 * @returns {string}
 */
export function getRandomId(num) {
    var s = [];
    var n = num || 6
    var hexDigits = "0123456789abcdefhijklmnopqrstuvwxyz";
    for (var i = 0; i < n; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    var uuid = s.join("");
    return uuid;
}
```

## 媒体


### speechSynthesis

执行语音合成 (实验)。

使用`SpeechSynthesisUtterance.voice`和`window.speechSynthesis.getVoices()`将邮件转换为语音。使用`window.speechSynthesis.speak()`播放该消息。了解有关Web 语音 API 的 SpeechSynthesisUtterance 接口的详细信息.

```js
const speechSynthesis = message => {
const msg = new SpeechSynthesisUtterance(message);
msg.voice = window.speechSynthesis.getVoices()[0];
window.speechSynthesis.speak(msg);
};
// speechSynthesis('吃葡萄吐葡萄皮，不吃葡萄倒吐葡萄皮') -> plays the message
```

## 节点


### JSONToFile

将 JSON 对象写入文件。

使用`fs.writeFile()`、模板文本和`JSON.stringify()`将`json`对象写入`.json`文件。

```js
const fs = require('fs');
const JSONToFile = (obj, filename) => fs.writeFile(`${filename}.json`, JSON.stringify(obj, null, 2))
// JSONToFile({test: "is passed"}, 'testJsonFile') -> writes the object to 'testJsonFile.json'
```


### readFileLines

返回指定文件中的行的数组。

在`fs`节点包中使用`readFileSync`函数可以从文件创建`Buffer`。使用`toString(encoding)`函数将缓冲区转换为字符串。通过`split`ing 文件内容行从文件内容创建数组 (每个`\n`).

```js
const fs = require('fs');
const readFileLines = filename => fs.readFileSync(filename).toString('UTF8').split('\n');
/*
contents of test.txt :
  line1
  line2
  line3
  ___________________________
let arr = readFileLines('test.txt')
console.log(arr) // -> ['line1', 'line2', 'line3']
*/
```

## 对象


### cleanObj

移除从 JSON 对象指定的属性之外的任何特性。

使用`Object.keys()`方法可以遍历给定的 json 对象并删除在给定数组中不是`include`d 的键。另外, 如果给它一个特殊的键 (`childIndicator`), 它将在里面深入搜索, 并将函数应用于内部对象。

```js
const cleanObj = (obj, keysToKeep = [], childIndicator) => {
Object.keys(obj).forEach(key => {
if (key === childIndicator) {
cleanObj(obj[key], keysToKeep, childIndicator);
} else if (!keysToKeep.includes(key)) {
delete obj[key];
}
})
}
/*
  const testObj = {a: 1, b: 2, children: {a: 1, b: 2}}
  cleanObj(testObj, ["a"],"children")
  console.log(testObj)// { a: 1, children : { a: 1}}
*/
```


### objectFromPairs

从给定的键值对创建对象。

使用`Array.reduce()`创建和组合键值对。

```js
const objectFromPairs = arr => arr.reduce((a, v) => (a[v[0]] = v[1], a), {});
// objectFromPairs([['a',1],['b',2]]) -> {a: 1, b: 2}
```


### objectToPairs

从对象创建键值对数组的数组。

使用`Object.keys()`和`Array.map()`循环访问对象的键并生成具有键值对的数组。

```js
const objectToPairs = obj => Object.keys(obj).map(k => [k, obj[k]]);
// objectToPairs({a: 1, b: 2}) -> [['a',1],['b',2]])
```


### shallowClone

创建对象的浅表克隆。

使用`Object.assign()`和一个空对象 (`{}`) 创建原始的浅克隆。

```js
const shallowClone = obj => Object.assign({}, obj);
/*
const a = { x: true, y: 1 };
const b = shallowClone(a);
a === b -> false
*/
```


### truthCheckCollection

检查谓词 (第二个参数) 是否 truthy 集合的所有元素 (第一个参数)。

使用`Array.every()`检查每个传递的对象是否具有指定的属性, 以及是否返回 truthy 值。

```js
truthCheckCollection = (collection, pre) => (collection.every(obj => obj[pre]));
// truthCheckCollection([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}], "sex") -> true
```

## 字符串


### anagrams

生成字符串的所有字谜 (包含重复项)。

使用递归。对于给定字符串中的每个字母, 为其其余字母创建所有部分字谜。使用`Array.map()`将字母与每个部分变位词组合在一起, 然后将`Array.reduce()`组合在一个数组中的所有字谜。基本情况为字符串`length`等于`2`或`1`.

```js
const anagrams = str => {
if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
return str.split('').reduce((acc, letter, i) =>
acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []);
};
// anagrams('abc') -> ['abc','acb','bac','bca','cab','cba']
```


### Capitalize

将字符串的第一个字母大写。

使用 destructuring 和`toUpperCase()`可将第一个字母、`...rest`用于获取第一个字母之后的字符数组, 然后是`Array.join('')`以使其成为字符串。省略`lowerRest`参数以保持字符串的其余部分不变, 或将其设置为`true`以转换为小写。

```js
const capitalize = ([first,...rest], lowerRest = false) =>
first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));
// capitalize('myName') -> 'MyName'
// capitalize('myName', true) -> 'Myname'
```


### capitalizeEveryWord

将字符串中每个单词的首字母大写。

使用`replace()`匹配每个单词和`toUpperCase()`的第一个字符以将其大写。

```js
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
// capitalizeEveryWord('hello world!') -> 'Hello World!'
```


### escapeRegExp

转义要在正则表达式中使用的字符串。

使用`replace()`可转义特殊字符。

```js
const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// escapeRegExp('(test)') -> \\(test\\)
```


### fromCamelCase

从匹配转换字符串。

使用`replace()`可删除下划线、连字符和空格, 并将单词转换为匹配。省略第二个参数以使用默认分隔符`_`.

```js
const fromCamelCase = (str, separator = '_') =>
str.replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
.replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2').toLowerCase();
// fromCamelCase('someDatabaseFieldName', ' ') -> 'some database field name'
// fromCamelCase('someLabelThatNeedsToBeCamelized', '-') -> 'some-label-that-needs-to-be-camelized'
// fromCamelCase('someJavascriptProperty', '_') -> 'some_javascript_property'
```


### reverseString

反转字符串。

使用数组 destructuring 和`Array.reverse()`可反转字符串中字符的顺序。使用`join('')`组合字符以获取字符串.

```js
const reverseString = str => [...str].reverse().join('');
// reverseString('foobar') -> 'raboof'
```


### sortCharactersInString

按字母顺序对字符串中的字符进行排序。

使用`split('')`、`Array.sort()`利用`localeCompare()`重新组合使用`join('')`.

```js
const sortCharactersInString = str =>
str.split('').sort((a, b) => a.localeCompare(b)).join('');
// sortCharactersInString('cabbage') -> 'aabbceg'
```


### toCamelCase

将字符串转换为匹配。

使用`replace()`可删除下划线、连字符和空格, 并将单词转换为匹配。

```js
const toCamelCase = str =>
str.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2, offset) =>  p2 ? p2.toUpperCase() : p1.toLowerCase());
// toCamelCase("some_database_field_name") -> 'someDatabaseFieldName'
// toCamelCase("Some label that needs to be camelized") -> 'someLabelThatNeedsToBeCamelized'
// toCamelCase("some-javascript-property") -> 'someJavascriptProperty'
// toCamelCase("some-mixed_string with spaces_underscores-and-hyphens") -> 'someMixedStringWithSpacesUnderscoresAndHyphens'
```


### truncateString

将字符串截断为指定长度。

确定字符串的`length`是否大于`num`。将截断的字符串返回到所需的长度, 并将`...`追加到末尾或原始字符串。

```js
const truncateString = (str, num) =>
str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;
// truncateString('boomerang', 7) -> 'boom...'
```

## 实用


### coalesce

返回第一个非空/未定义参数。

使用`Array.find()`返回第一个非`null`/`undefined`的参数。

```js
const coalesce = (...args) => args.find(_ => ![undefined, null].includes(_))
// coalesce(null,undefined,"",NaN, "Waldo") -> ""
```


### coalesceFactory

返回自定义的联合函数, 返回从提供的参数验证函数返回`true`的第一个参数。

使用`Array.find()`返回从提供的参数验证函数返回`true`的第一个参数。

```js
const coalesceFactory = valid => (...args) => args.find(valid);
// const customCoalesce = coalesceFactory(_ => ![null, undefined, "", NaN].includes(_))
// customCoalesce(undefined, null, NaN, "", "Waldo") //-> "Waldo"
```


### extendHex

将3位色码扩展为6位色码。

使用`Array.map()`、`split()`和`Array.join()`来加入映射数组, 将3位的 RGB notated 十六进制 color-code 转换为6位数字形式。`Array.slice()`用于从字符串启动中删除`#`, 因为它添加了一次。

```js
const extendHex = shortHex =>
'#' + shortHex.slice(shortHex.startsWith('#') ? 1 : 0).split('').map(x => x+x).join('')
// extendHex('#03f') -> '#0033ff'
// extendHex('05a') -> '#0055aa'
```


### gettype

返回值的本机类型。

如果值未定义或为 null, 则返回小写的构造函数名称、"未定义" 或 "null"

```js
const getType = v =>
v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
// getType(new Set([1,2,3])) -> "set"
```


### hexToRGB

将 colorcode 转换为`rgb()`字符串。

使用按位右运算符和掩码位与`&`(and) 运算符将十六进制颜色代码 (前缀为`#`) 转换为具有 RGB 值的字符串。如果它是一个3位数的 colorcode, 那么用 extendHex () 函数 (ref.`extendHex`代码段) 扩展的6位 colorcode 进行相同的处理

```js
const hexToRgb = hex => {
const extendHex = shortHex =>
'#' + shortHex.slice(shortHex.startsWith('#') ? 1 : 0).split('').map(x => x+x).join('');
const extendedHex = hex.slice(hex.startsWith('#') ? 1 : 0).length === 3 ? extendHex(hex) : hex;
return `rgb(${parseInt(extendedHex.slice(1), 16) >> 16}, ${(parseInt(extendedHex.slice(1), 16) & 0x00ff00) >> 8}, ${parseInt(extendedHex.slice(1), 16) & 0x0000ff})`;
}
// hexToRgb('#27ae60') -> 'rgb(39, 174, 96)'
// hexToRgb('#acd') -> 'rgb(170, 204, 221)'
```


### isArray

检查给定参数是否为数组。

使用`Array.isArray()`检查某个值是否属于数组。

```js
const isArray = val => !!val && Array.isArray(val);
// isArray(null) -> false
// isArray([1]) -> true
```


### isBoolean

检查给定的参数是否为本机布尔元素。

使用`typeof`检查某个值是否被归类为布尔基元。

```js
const isBoolean = val => typeof val === 'boolean';
// isBoolean(null) -> false
// isBoolean(false) -> true
```


### isFunction

检查给定参数是否为函数。

使用`typeof`检查某个值是否被归类为函数基元。

```js
const isFunction = val => val && typeof val === 'function';
// isFunction('x') -> false
// isFunction(x => x) -> true
```


### isNumber

检查给定参数是否为数字。

使用`typeof`检查某个值是否归类为数字基元。

```js
const isNumber = val => typeof val === 'number';
// isNumber('1') -> false
// isNumber(1) -> true
```


### isString

检查给定参数是否为字符串。

使用`typeof`检查某个值是否属于字符串基元。

```js
const isString = val => typeof val === 'string';
// isString(10) -> false
// isString('10') -> true
```


### isSymbol

检查给定参数是否为符号。

使用`typeof`检查某个值是否被归类为符号基元。

```js
const isSymbol = val => typeof val === 'symbol';
// isSymbol('x') -> false
// isSymbol(Symbol('x')) -> true
```


### RGBToHex

将 RGB 组件的值转换为 colorcode。

使用按位左移位运算符 (`<<`) 和`toString(16)`将给定的 RGB 参数转换为十六进制字符串, 然后`padStart(6,'0')`以获取6位十六进制值。

```js
const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
// RGBToHex(255, 165, 1) -> 'ffa501'
```


### timeTaken

测量执行函数所用的时间。

使用`console.time()`和`console.timeEnd()`来测量开始和结束时间之间的差异, 以确定回调执行所用的时间。

```js
const timeTaken = callback => {
console.time('timeTaken');  const r = callback();
console.timeEnd('timeTaken');  return r;
};
// timeTaken(() => Math.pow(2, 10)) -> 1024
// (logged): timeTaken: 0.02099609375ms
```


### toOrdinalSuffix

将序号后缀添加到数字。

使用模数运算符 (`%`) 查找单个和十位数字的值。查找匹配的序号模式数字。如果在青少年模式中发现数字, 请使用青少年序号。

```js
const toOrdinalSuffix = num => {
const int = parseInt(num), digits = [(int % 10), (int % 100)],
ordinals = ['st', 'nd', 'rd', 'th'], oPattern = [1, 2, 3, 4],
tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
return oPattern.includes(digits[0]) && !tPattern.includes(digits[1]) ? int + ordinals[digits[0] - 1] : int + ordinals[3];
};
// toOrdinalSuffix("123") -> "123rd"
```


### UUIDGenerator

生成 UUID。

使用`crypto`API 生成 UUID, 符合RFC4122版本4。

```js
const UUIDGenerator = () =>
([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
);
// UUIDGenerator() -> '7982fcfe-5721-4632-bede-6000885be57d'
```


### validateEmail

如果给定的字符串是有效的电子邮件, 则返回`true`, 否则为`false`。

使用正则表达式检查电子邮件是否有效。如果电子邮件有效, 则返回 true, 如果没有, 则返回`false`。

```js
const validateEmail = str =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(str);
// validateEmail(mymail@gmail.com) -> true
```


### validateNumber

如果给定值为数字, 则返回`true`, 否则为`false`。

将`!isNaN`与`parseFloat()`结合使用, 以检查参数是否为数字。使用`isFinite()`检查数字是否是有限的。使用`Number()`检查强制是否保持。

```js
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;
// validateNumber('10') -> true
```

### 防抖

```js
export const debounce = (func, wait = 50) => {
    let timeout
    return function() {
    const context = this
    const args = arguments
    if (timeout) clearTimeout(timeout)
       timeout = setTimeout(() => {
      func.apply(context, args)
    }, wait)
  }
}
```

### 节流

```js
/**
* @description  节流: 无论调用多少次,最快只能是设定的时间触发一次
* @export
* @param {Function} func 需要节流的方法
* @param {Number} wait 设定时间
* @returns {Function} 包装的方法
*/

export const throttle = (func, wait = 50) => {
    let last = 0
    return function() {
    const now = +new Date()
    if (now - last > wait) {
      last = now
      return func.apply(this, Array.from(arguments))
    } else {
      return false
    }
  }
}
```


[30 seconds of code](https://www.30secondsofcode.org/)

[30 seconds of code in github](https://github.com/30-seconds/30-seconds-of-code)