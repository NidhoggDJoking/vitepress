# NodeJS

### 获取同级目录名为`route.json`文件

`require`

入参 <string> 模块名称或路径
返回: <any> 导出的模块内容

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

### basename

`path.basename()` 方法返回 path 的最后一部分，类似于 Unix `basename` 命令。 尾随 目录分隔符 被忽略。

```js
path.basename('/foo/bar/baz/asdf/quux.html');
// 返回: 'quux.html'

path.basename('/foo/bar/baz/asdf/quux.html', '.html');
// 返回: 'quux'
```


