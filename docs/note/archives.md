# Archives


## JavaScript


[阮一峰](https://www.ruanyifeng.com/blog/archives.html)

## CSS


[张鑫旭](https://www.zhangxinxu.com/wordpress/)


```js
// 中英文转换生成基本够用版v1.0-bate
"use strict";

const fs = require("fs");
const path = require("path");

var OBJ_File = fs.readFileSync(path.resolve(__dirname, "./obj.txt"), "utf8");

let arr = OBJ_File.split("\r\n");

let accept_zh = {};

let accept_en = {};

let reg = /\s+|\.|\"/g;

arr.forEach((v, i) => {
  let separate = v.split(",");
  if (separate.length > 1) {
    let key = separate[separate.length - 1].toString();
    accept_zh[key.replace(reg, "")] = separate[0].toString();
    accept_en[key.replace(reg, "")] = v.slice(v.indexOf(",") + 1).toString();
    console.log(i,':',key.replace(reg, ""))
  }
});

fs.writeFile(
  path.resolve(__dirname, "zh.json"),
    JSON.stringify(accept_zh),
  () => {}
);

fs.writeFile(
  path.resolve(__dirname, "en.json"),
    JSON.stringify(accept_en),
  () => {}
);

// ============ text ============
// let xt = 'ZH"J D.HJ HD.D'
// let reg_test = /\s+|\.|\"/g;
// console.log(xt.replace(reg_test, ""));
// =============================
```