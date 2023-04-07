//* 项目README.md 同步至 docs/note/vitepress.md
//? npm run sync:vitepress

'use strict';

const fs = require('fs');
const path = require('path');

let README_File = fs.readFileSync(
    path.resolve(__dirname, '../README.md'),
    'utf8'
);

let mergeStr = `---
outline: 'deep'
---

${README_File}
`

fs.writeFile(
    path.resolve(__dirname, '../docs/note/vitepress.md'), 
    mergeStr,
    () => {}
);