# JavaScript 正则表达式

```html
<el-input
    v-model="limit"
    @input="limit = limit.replace(/^(0+)|[^\d]+/g, '')"
    >
</el-input>
```

```js
/**
 * 10000 => "10,000"
 * @param {number} num
 */
export function toThousandFilter(num) {
    return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}
```


```js
/**
 * Number formatting
 * like 10000 => 10k
 * @param {number} num
 * @param {number} digits
 */

export function numberFormatter(num, digits) {
    const si = [
        { value: 1E18, symbol: 'E' },
        { value: 1E15, symbol: 'P' },
        { value: 1E12, symbol: 'T' },
        { value: 1E9, symbol: 'G' },
        { value: 1E6, symbol: 'M' },
        { value: 1E3, symbol: 'k' }
    ]
    for (let i = 0; i < si.length; i++) {
        if (num >= si[i].value) {
            return (num / si[i].value).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
        }
    }
    return num.toString()
}
```

```js
/**
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL(url) {
    const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
      return reg.test(url)
}
```

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

```js
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
```