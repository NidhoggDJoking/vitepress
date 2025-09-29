# NVM 命令


### 安装最新版本 Node
nvm install node # "node" is an alias for the latest version 
### 安装指定版本 Node
nvm install 6.14.4 # or 10.10.0, 8.9.1, etc
### 安装最新LTS(Long-term Support)版本Node
nvm install --lts

### 查看远程 Node 所有版本
nvm ls-remote 
### 查看远程 Node 所有 LTS 版本
nvm ls-remote --lts 
### 查看本地 Node 版本
nvm ls 
### 查看当前使用 Node 版本
nvm current 
### 查看 node 安装位置
nvm which 14 

### 当前 shell 下使用某个 Node 版本
nvm use <node的版本>
### 指定全局默认版本
nvm alias default <node版本号> 

nvm uninstall <node 版本号/别名>