# JavaScript 正则表达式

## 纯数字

```html
<el-input
    v-model="limit"
    @input="limit = limit.replace(/^(0+)|[^\d]+/g, '')"
    >
</el-input>
```

## 千位符

```js
/**
 * 10000 => "10,000"
 * @param {number} num
 */
export function toThousandFilter(num) {
    return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}
```

## 存储单位

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

## 网站格式

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

## 可用地址

```js
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
```

## 邮箱格式

```js
export function email(rule, value, callback) {
    value = value.trim()
    if (!value) {
        callback()
    } else {
        if(!/^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$/.test(value)) {
            callback(new Error(`邮箱格式不正确`))
        }else{
            callback()
        }
    }
}
```

## 密码格式

```js
export function password (rule, value, callback) {
    if (!/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*((?=[\x21-\x7e]+)[^A-Za-z0-9]){1,}).{1,}$/.test(value)){
        callback(new Error('必须包含大小写字母+数字+特殊字符'))
    } else if (value.length < 8 || value.length > 20){
        callback(`长度在${ 8 }到${ 20 }个字符`)
    }else {
        callback()
    }
}
```

### 必须包含数字加字母 不能包含特殊符号

```js
var reg = new RegExp(/^[0-9A-Za-z]+$/);
reg.test(str)
```

### 必须包含数字加字母 可包含特殊符号

```js
var reg = new RegExp(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/);
reg.test(str)
```



<!-- 
```js
var reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);
reg.test(str)
``` -->