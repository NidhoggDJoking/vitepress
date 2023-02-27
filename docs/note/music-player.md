
# 音乐播放器实现


<musicPlayer/>

## 标签型


- ### 创建播放器：

```js
function openMusic() {
    var music = document.createElement('audio');
    music.src = "assets/music/EGOIST.wav";
    music.autoplay = 'autoplay';
    music.id = 'music';
    document.getElementsByTagName('body')[0].appendChild(music);
    document.getElementById("music").volume = 0.2;
    var audio = document.getElementById('music');
    // 回车暂停或播放
    $(document).keydown(function (event) {
        if (event.keyCode == 13) {
            if (audio.paused) {
                audio.play();
                close();
            } else {
                audio.pause();
                close();
            }
        }
    });
    star();
    audio.pause();
}
```

:::tip
除了`audio`也能用到标签`<embed>`,`<object>`,`<a>`
:::

### `HTMLMediaElement.volume` 属性可设置媒体播放时的音量。

```js
function Tj(volume = 0.5) {
    document.getElementById("music").volume = volume;
}
```

- ### 歌词处理：

```js
function star() {
    var my_audio = document.getElementById("music");
    var songContent = '[00:10.60]EGOIST - エウテルペ\n [00:10.60]词：ryo\n [00:15.60]曲：ryo\n [00:22.87]咲いた野の花よ\n [00:30.88]ああ どうか教えておくれ\n [00:38.07]人は何故 傷つけあって\n [00:46.07]争うのでしょう\n [00:54.87]凛と咲く花よ\n [01:02.72]そこから何が見える\n [01:10.08]人は何故 許しあうこと\n [01:17.98]できないのでしょう\n [01:30.17]雨が過ぎて夏は\n [01:34.77]青を移した\n [01:38.82]一つになって\n [01:46.72]小さく揺れた\n [01:50.76]私の前で\n [01:54.81]何も言わずに\n [02:18.78]枯れていく友に\n [02:26.86]お前は何を思う\n [02:34.02]言葉を持たぬその葉で\n [02:40.06]なんと愛を伝える\n [02:54.10]夏の陽は陰って\n [02:58.71]風が靡いた\n [03:02.81]二つ重なって\n [03:10.68]生きた証を\n [03:14.78]私は唄おう\n [03:18.76]名もなき者のため\n';
    var lyric = parseLyric(songContent);
    lyricContainer = document.getElementById('subtitles');
    my_audio.ontimeupdate = function () {
        for (var i = 0, l = lyric.length; i < l; i++) {
            if (this.currentTime > lyric[i][0]) {
                $("#subtitles").html(lyric[i][1]);
            };
        };
    };
}
```




- ### 歌词解析：

```js
function parseLyric(text) {
    //将文本分隔成一行一行，存入数组
    var lines = text.split('\n'),
        //用于匹配时间的正则表达式，匹配的结果类似[xx:xx.xx]
        pattern = /\[\d{2}:\d{2}.\d{2}\]/g,
        //保存最终结果的数组
        result = [];
    //去掉不含时间的行
    while (!pattern.test(lines[0])) {
        lines = lines.slice(1);
    };
    //上面用'\n'生成生成数组时，结果中最后一个为空元素，这里将去掉
    lines[lines.length - 1].length === 0 && lines.pop();
    lines.forEach(function (v /*数组元素值*/, i /*元素索引*/, a /*数组本身*/) {
        //提取出时间[xx:xx.xx]
        var time = v.match(pattern),
            //提取歌词
            value = v.replace(pattern, '');
        //因为一行里面可能有多个时间，所以time有可能是[xx:xx.xx][xx:xx.xx][xx:xx.xx]的形式，需要进一步分隔
        time.forEach(function (v1, i1, a1) {
            //去掉时间里的中括号得到xx:xx.xx
            var t = v1.slice(1, -1).split(':');
            //将结果压入最终数组
            result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
        });
    });
    //最后将结果数组中的元素按时间大小排序，以便保存之后正常显示歌词
    result.sort(function (a, b) {
        return a[0] - b[0];
    });
    return result;
}
```

<!-- #### [nidhoggdjoking.github.io](https://nidhoggdjoking.github.io/) -->


## 方法型：