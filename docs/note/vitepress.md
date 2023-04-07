# README

###  项目`README.md` 同步至 `docs/note/vitepress.md`

```js
'use strict';

const fs = require('fs');
const path = require('path');

var README_File = fs.readFileSync(
    path.resolve(__dirname, '../README.md'),
    'utf8'
);

fs.writeFile(
    path.resolve(__dirname, '../docs/note/vitepress.md'), 
    README_File,
    () => {}
);
```

::: tip
最新更新时间是读取的`git`上的数据，
实际部署的页面内容是通过以上脚本同步成`README.md`内容
会出现文章内容发生变化可更新时间没变，这个是正常现象
:::