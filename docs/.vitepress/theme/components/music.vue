<template>
    <div class="music-player"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import $ from 'jquery'

onMounted(() => {
    openMusic('/nameoflove.m4a')
})

// 创建播放器
function openMusic(url, id = 'music', volume = '0.2') {
    var music = document.createElement('audio');
    music.src = url
    music.autoplay = 'autoplay';
    music.id = id;
    document.getElementsByTagName('body')[0].appendChild(music);
    document.getElementById("music").volume = volume;
    var audio = document.getElementById(id);
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

function star() {
    var my_audio = document.getElementById("music");
    var songContent = '[00:01.00]Name of Love\n[00:11.83]さよなら世界\n[00:15.82]並ぶ影伸びて交わらない\n[00:25.61]願い光まだ知らない景色\n[00:32.84]探していたんだ\n[00:38.18]ただひとつ約束交わそう\n[00:44.09]僕らだけの名前を呼びあって\n[00:50.71]僕らだけの喜び分かち合った\n[00:57.18]僕らだけの言葉で確かめて\n[01:03.79]僕らだけの痛みを抱きしめた\n[01:11.18]この世界のどこか\n[01:14.31]未来で会えるなら\n[01:17.44]忘れないでいて\n[01:20.78]僕のこと本当のこと\n[01:29.72]おやすみ世界\n[01:33.61]僕ら以外誰も知らなくていい\n[01:43.67]時よ止まれ\n[01:46.57]冷たくなった手を握り返した\n[01:56.20]終わらない夢青い影\n[02:02.07]晴れた日には小さな旅をして\n[02:08.49]雨の日には傘の中寄り添った\n[02:15.11]こぼれ落ちた泪は掬えばいい\n[02:21.42]傷だらけのままで歩いていく\n[02:28.99]胸の中にある僕らの誓いよ\n[02:35.47]色褪せぬように\n[02:38.36]風の声この地図の向こう\n[03:07.25]僕らだけの名前を呼びあって\n[03:13.54]僕らだけの喜び分かち合った\n[03:20.00]僕らだけの言葉で確かめて\n[03:26.37]僕らだけの痛みを抱きしめた\n[03:32.39]始まりの鐘\n[03:35.53]僕らを朝がもう迎えに来る\n[03:40.75]In the truth name of love\n[03:43.63]怖くない行ける\n[03:46.71]この世界のどこか\n[03:49.79]未来で会えるなら\n[03:53.46]少しだって忘れないでいて\n[03:59.68]胸の中の未来\n[04:02.81]僕らだけの誓い\n[04:06.19]忘れないでいて\n[04:09.47]僕のこと本当のこと\n';
    var lyric = parseLyric(songContent);
    // console.log(lyric)
    my_audio.ontimeupdate = function () {
        for (var i = 0, l = lyric.length; i < l; i++) {
            // console.log(this.currentTime, lyric[i])
            if (this.currentTime > lyric[i][0]) {
                $(".music-player").html(lyric[i][1]);
            };
        };
    };
}

// 歌词解析
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
    // console.log(result)
    return result;
}

</script>

<style scoped>
.music-player {
    font-weight: 600;
    font-size: 20px;
}
</style>