## github

`Error in the HTTP2 framing layer`


`HTTP/2 stream 1 was not closed cleanly before end of the underlying stream`


```bash
git config --global http.proxy

git config --global --unset http.proxy

git config --global https.version HTTP/1.1


git config --global -l
```

```
Failed to connect to github.com port 443 after 75002 ms: Couldn't connect to server

(!1 + [])[+!![] + !![] + !![]] + ({}+[])[+!![] + +!![]]
sb
```



```bash
git error - warning: templates not found /usr/local/git/share/git-core/templates

在 Mac 上用 SourceTree 克隆 svn 的时候, 出现了 warning: templates not found /usr/local/git/share/git-core/templates 警告,导致克隆失败. 怎么办呢.

在终端输入 

sudo mkdir /usr/local/git

sudo mkdir /usr/local/git/share

sudo mkdir /usr/local/git/share/git-core

sudo mkdir /usr/local/git/share/git-core/templates

sudo chmod -R 755 /usr/local/git/share/git-core/templates

前四条创建目录,最后一条给修改目录添加权限.



remote: Support for password authentication was removed on August 13, 2021.



git remote set-url origin https://<token>@github.com/<name>/仓库名
```


## NVM

NVM  淘宝源 替换

nvm 包最外层节点
settings.txt

```
node_mirror: https://npmmirror.com/mirrors/node/
npm_mirror: https://npmmirror.com/mirrors/npm/
```


处理git 文件名大小写问题

```
git config core.ignorecase false # 将repo设置为大小写敏感
git config --list # 查看repo配置是否生效
```