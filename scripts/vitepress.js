// 项目README.md 同步至 docs/note/vitepress.md

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