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