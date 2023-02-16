---
outline: 'deep'
---

# NodeJS

## 前端工程化

[项目地址](https://gitee.com/NidhoggDJoking/element-build-case)

`build/bin/iconInit.js`

```js
'use strict';
var postcss = require('postcss');
var fs = require('fs');
var path = require('path');
var fontFile = fs.readFileSync(
    path.resolve(__dirname, '../../packages/theme-chalk/src/icon.scss'),
    'utf8'
);
var nodes = postcss.parse(fontFile).nodes;
var classList = [];

nodes.forEach((node) => {
  var selector = node.selector || '';
  var reg = new RegExp(/\.el-icon-([^:]+):before/);
  var arr = selector.match(reg);

  if (arr && arr[1]) {
    classList.push(arr[1]);
  }
});

classList.reverse(); // 希望按 css 文件顺序倒序排列

fs.writeFile(
    path.resolve(__dirname, '../../examples/icon.json'), 
    JSON.stringify(classList),
    () => {}
);
```

对应文档：
[`require('postcss')`](https://postcss.org/api/)-
[`require('fs')`](http://nodejs.cn/api/fs.html)-
[`require('path')`](http://nodejs.cn/api/path.html)

`path.resolve()` 方法将路径或路径片段的序列解析为绝对路径。

#### 关键字:

- `__dirname`  :  当前文件夹的绝对路径
- `__filename` :  当前文件的绝对路径

如果没有传入 path 片段，则 path.resolve() 将返回当前工作目录的绝对路径。


```js
path.resolve('/foo/bar', './baz');
// 返回: '/foo/bar/baz'

path.resolve('/foo/bar', '/tmp/file/');
// 返回: '/tmp/file'

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// 如果当前工作目录是 /home/myself/node，
// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'
```

如果任何参数不是字符串，则抛出 `TypeError`

`fs.writeFileSync(file, data[, options])`

当 `file` 是文件名时，将数据异步地写入文件，如果文件已存在则替换该文件。 `data` 可以是字符串或缓冲区。

例如:

`packages/theme-chalk/src/icon.scss`

```css
.el-icon-ice-cream-round:before {
  content: "\e6a0";
}

.el-icon-ice-cream-square:before {
  content: "\e6a3";
}

.el-icon-lollipop:before {
  content: "\e6a4";
}
```
`node build/bin/iconInit.js` 将会转成

`examples/icon.json`

```json
['lollipop','ice-cream-square','ice-cream-round']
```

### 获取同级目录名为`route.json`文件

### `require`:

- 入参 `<string>` 模块名称或路径
- 返回: `<any>` 导出的模块内容

```js
const route = require('./route.json')
console.log(route);
```

### 在同级目录下创建一个`test.json`文件

```js
var path = require('path');
var fs = require('fs');
let arr = ['aa','bb','cc']
fs.writeFileSync(path.resolve(__dirname, 'test.json'), JSON.stringify(arr))
```

### 获取同级目录名为`route.json`文件内容

```js
var path = require('path');
var fs = require('fs');
var file = fs.readFileSync(path.resolve(__dirname, './route.json'), 'utf8');
console.log(file);
```

### `basename`:

`path.basename()` 方法返回 path 的最后一部分，类似于 Unix `basename` 命令。 尾随 目录分隔符 被忽略。

```js
path.basename('/foo/bar/baz/asdf/quux.html');
// 返回: 'quux.html'

path.basename('/foo/bar/baz/asdf/quux.html', '.html');
// 返回: 'quux'
```

`path.join()` 方法使用特定于平台的分隔符作为定界符将所有给定的 `path` 片段连接在一起，然后规范化生成的路径。


```js
var path = require('path')
console.log(path.join('/foo', 'bar', 'baz/asdf', 'sd'));
// 返回: /foo/bar/baz/asdf/sd

path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// 返回: '/foo/bar/baz/asdf'
```

`..` 相当于返回上层


```js
const fs = require('fs')
const packageJSON = require('./package.json')
const { name: projectName } = packageJSON
fs.readFile('./public/index.html', 'utf-8', (err, data) => {
  if (!err && data) {
    const newHtml = data.replace('<title>project_name', projectName)
    fs.writeFile('./public/index.html', newHtml, () => {})
  }
})
```

### 重写一个文件，如果文件不存在则新增

```js
const fileSave = require("file-save");
const path = require("path");
fileSave(path.resolve(__dirname, "./writeIn.js"))
  .write(`var a = 1;`, "utf8")
  .write("\n", "utf8")
  .write(`let b = 2;`, () => {
    console.log("写入回调");
  })
  .end("\n")
  .finish(() => {
    console.log("写入完成");
  });
```


### 读取目录的内容

```js
  const fs = require("fs");
  const path = require("path");
  var menu = fs.readdirSync(path.resolve(__dirname, '../note'))
  console.log(menu);
```

### `dirname`

`path.dirname()` 方法返回 `path` 的目录名

```js
path.dirname('/foo/bar/baz/asdf/quux');
// 返回: '/foo/bar/baz/asdf'
```
如果 `path` 不是字符串，则抛出 `TypeError`

### cross-env

跨平台设置和使用环境变量的脚本

```sh
npm install --save-dev cross-env
```

```json
{
  "scripts": {
    "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
  }
}
```


```js
const isProd = process.env.NODE_ENV === 'production';
```


## VitePress 最后更新时间实现

- ### [plugin-last-updated in github](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/plugin-last-updated/index.js)

- ### [plugin-last-updated in VuePress](https://vuepress.vuejs.org/zh/plugin/official/plugin-last-updated.html)

```js
const path = require('path')
const spawn = require('cross-spawn')

/**
 * @type {import('@vuepress/types').Plugin}
 */
module.exports = (options = {}, context) => ({
  extendPageData ($page) {
    const { transformer, dateOptions } = options
    const timestamp = getGitLastUpdatedTimeStamp($page._filePath)
    const $lang = $page._computed.$lang
    if (timestamp) {
      const lastUpdated = typeof transformer === 'function'
        ? transformer(timestamp, $lang)
        : defaultTransformer(timestamp, $lang, dateOptions)
      $page.lastUpdated = lastUpdated
      $page.lastUpdatedTimestamp = timestamp
    }
  }
})
```

`extendPageData`

- 类型: `Function`
- 默认值: `undefined`

一个函数，用于拓展或者修改 `[$page](https://vuepress.vuejs.org/zh/guide/global-computed.html#page)` 对象。这个函数将会在编译期为每个页面执行一次。

```js
module.exports = {
  extendPageData ($page) {
    const {
      _filePath,           // 源文件的绝对路径
      _computed,           // 在构建期访问全局的计算属性，如：_computed.$localePath.
      _content,            // 源文件的原始内容字符串
      _strippedContent,    // 源文件剔除掉 frontmatter 的内容字符串
      key,                 // 页面唯一的 hash key
      frontmatter,         // 页面的 frontmatter 对象
      regularPath,         // 当前页面遵循文件层次结构的默认链接
      path,                // 当前页面的实际链接（在 permalink 不存在时，使用 regularPath ）
    } = $page

    // 1. Add extra fields.
    $page.xxx = 'xxx'

    // 2. Change frontmatter.
    frontmatter.sidebar = 'auto'
  }
}
```

::: warning 注意
那些以 `_` 开头的字段意味着你只能在编译期访问。
:::

例子：

```js
module.exports = {
  extendPageData ($page) {
    $page.size = ($page._content.length / 1024).toFixed(2) + 'kb'
  }
}
```

然后你可以在任意的 Vue 中通过 `this.$page.size` 来访问这个变量


`transformer`

类型: `(timestamp: number, lang: string) => string`
默认值: `undefined`

默认情况下，本插件为每个页面生成一个 13 位的时间戳，你可以传入一个 `transformer` 将其转换为你想要的任何格式。

```js
const moment = require('moment');

module.exports = {
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromNow()
        }
      }
    ]
  ]
}
```

::: tip 提示
如果你在多语言模式下运行，你还可以使用第二个参数 `lang` 为不同语言生成时间字符串。
:::


`dateOptions`

- 类型: `object`
- 默认值: `undefined`

你也可以传入一个对象作为选项，以自定义时间戳的输出格式。详细信息请参阅`Date.prototype.toLocaleString()`的选项参数。

```js
module.exports = {
  plugins: [
    [
      '@vuepress/last-updated',
      {
        dateOptions:{
          hour12: false
        }
      }
    ]
  ]
}
```



```js
const path = require('path')
const spawn = require('cross-spawn')

function getGitLastUpdatedTimeStamp (filePath) {
   try {
    lastUpdated = parseInt(spawn.sync(
        'git',
        ['log', '-1', '--format=%at', path.basename(filePath)],
        { cwd: path.dirname(filePath) }
      ).stdout.toString('utf-8')) * 1000
      } catch (e) { /* do not handle for now */ }
  return lastUpdated
}
```

很明显此功能需要基于git的项目才能生效，通过git命令获取对应文件最后一次（'-1'次）的提交时间戳

```js
function defaultTransformer (timestamp, lang, dateOptions) {
  return new Date(timestamp).toLocaleString(lang, dateOptions)
}
```

`defaultTransformer` 方法进行时间戳转成对应格式的时间

`Date.prototype.toLocaleString()`

方法返回该日期对象的字符串，该字符串格式因不同语言而不同。在支持 `[Intl.DateTimeFormat API](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)` 的实现中

语法：

```js
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)

locales // 可选: 表示缩写语言代码（BCP 47 language tag）的字符串
options // 可选: 一个调整输出格式的对象。对应于 Intl.DateTimeFormat() 构造函数的 options 参数
```

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 请求参数包含星期，且该参数的值为长整型
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(date.toLocaleString("de-DE", options));
// "Donnerstag, 20. Dezember 2012"

// 应用程序可能想要使用 UTC 时间，并使其可见
options.timeZone = "UTC";
options.timeZoneName = "short";

console.log(date.toLocaleString("en-US", options));
// "Thursday, December 20, 2012, GMT"

// 有时，区域设置为美国的情况下，也需要使用 24 小时制
console.log(date.toLocaleString("en-US", { hour12: false }));
// "12/19/2012, 19:00:00"

```

::: info Intl
Intl 对象是 ECMAScript 国际化 API 的一个命名空间，它提供了精确的字符串对比（Collator ），数字格式化（NumberFormat），日期和时间格式化（DateTimeFormat）。
:::

```js
const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// British English uses day-month-year order and 24-hour time without AM/PM
console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' }));
// Expected output: "20/12/2012, 03:00:00"

// Korean uses year-month-day order and 12-hour time with AM/PM
console.log(event.toLocaleString('ko-KR', { timeZone: 'UTC' }));
// Expected output: "2012. 12. 20. 오전 3:00:00"

```

## [BCP 47 language tag list](https://www.techonthenet.com/js/language_tags.php)