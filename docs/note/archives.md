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


```js
// 中英文转换生成基本够用版v1.0.1-bate
"use strict";

const fs = require("fs");
const path = require("path");

var OBJ_File = fs.readFileSync(path.resolve(__dirname, "./copy.txt"), "utf8");

let arr = OBJ_File.split("\r\n");

let accept_zh = {};

let accept_en = {};

let reg = /\s+|\.|\"/g;

let rvt = /^\s|\s+$/g;

arr.forEach((v, i) => {
  let separate = v.split("|");
  if (separate.length > 1) {
    let key = separate[separate.length - 1].toString();
    accept_zh[key.replace(reg, "")] = separate[0].toString().replace(rvt, "");
    accept_en[key.replace(reg, "")] = separate[1].toString().replace(rvt, "");
    console.log(`${i}:${key.replace(reg, "")} => zh:${separate[0].toString()}  en:${separate[1].toString()}`)
  }
});

fs.writeFile(
  path.resolve(__dirname, "zh2.json"),
    JSON.stringify(accept_zh),
  () => {}
);

fs.writeFile(
  path.resolve(__dirname, "en2.json"),
    JSON.stringify(accept_en),
  () => {}
);

// ============ text ============
// let xt = 'ZH"J D.HJ HD.D'
// let reg_test = /\s+|\.|\"/g;
// console.log(xt.replace(reg_test, ""));
// =============================
```

```
let lyrics = "[id:$00000000]\r\n[ar:Cinema Staff]\r\n[ti:Name of Love]\r\n[by:]\r\n[hash:71d4ce5d4ee6a03b51e292e720d82a97]\r\n[al:]\r\n[sign:]\r\n[qq:]\r\n[total:266652]\r\n[offset:0]\r\n[00:11.83]さよなら世界\r\n[00:15.82]並ぶ影伸びて交わらない\r\n[00:25.61]願い光まだ知らない景色\r\n[00:32.84]探していたんだ\r\n[00:38.18]ただひとつ約束交わそう\r\n[00:44.09]僕らだけの名前を呼びあって\r\n[00:50.71]僕らだけの喜び分かち合った\r\n[00:57.18]僕らだけの言葉で確かめて\r\n[01:03.79]僕らだけの痛みを抱きしめた\r\n[01:11.18]この世界のどこか\r\n[01:14.31]未来で会えるなら\r\n[01:17.44]忘れないでいて\r\n[01:20.78]僕のこと本当のこと\r\n[01:29.72]おやすみ世界\r\n[01:33.61]僕ら以外誰も知らなくていい\r\n[01:43.67]時よ止まれ\r\n[01:46.57]冷たくなった手を握り返した\r\n[01:56.20]終わらない夢青い影\r\n[02:02.07]晴れた日には小さな旅をして\r\n[02:08.49]雨の日には傘の中寄り添った\r\n[02:15.11]こぼれ落ちた泪は掬えばいい\r\n[02:21.42]傷だらけのままで歩いていく\r\n[02:28.99]胸の中にある僕らの誓いよ\r\n[02:35.47]色褪せぬように\r\n[02:38.36]風の声この地図の向こう\r\n[03:07.25]僕らだけの名前を呼びあって\r\n[03:13.54]僕らだけの喜び分かち合った\r\n[03:20.00]僕らだけの言葉で確かめて\r\n[03:26.37]僕らだけの痛みを抱きしめた\r\n[03:32.39]始まりの鐘\r\n[03:35.53]僕らを朝がもう迎えに来る\r\n[03:40.75]In the truth name of love\r\n[03:43.63]怖くない行ける\r\n[03:46.71]この世界のどこか\r\n[03:49.79]未来で会えるなら\r\n[03:53.46]少しだって忘れないでいて\r\n[03:59.68]胸の中の未来\r\n[04:02.81]僕らだけの誓い\r\n[04:06.19]忘れないでいて\r\n[04:09.47]僕のこと本当のこと\r\n"

```

kugou

```
https://wwwapi.kugou.com/yy/index.php?r=play/getdata&callback
```

```
{
  play_backup_url:'',
  play_url:'',
  lyrics:''
}
```


QQ

```
https://dl.stream.qqmusic.qq.com/
```
