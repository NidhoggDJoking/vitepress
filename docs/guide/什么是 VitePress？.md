# 什么是 VitePress？

## 什么是 VitePress？
VitePress 是VuePress的小兄弟，建立在Vite之上。基于 Vue 的静态站点生成器。

>VitePress 目前处于alpha状态。它已经适合开箱即用的文档使用，但配置和主题 API 可能仍会在次要版本之间发生变化。

## 下载安装依赖包
yarn add --dev vitepress vue


## 使用
在项目根目录创建docs文件夹，在此文件下创建markdown文件（即页面）

## 配置scripts
```
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  },
  ...
}
在本地服务器中提供文档站点。
```
## yarn docs:dev 启动项目

  ## 我们的团队
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: '尤雨溪',
    title: '创作者',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  // ...
]
</script>


向我们出色的团队问好。

<VPTeamMembers size="medium" :members="members" />
