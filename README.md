<p align="center">
  <a href="https://github.com/NidhoggDJoking/vitepress" target="_blank">
    <img width="280" src="https://cdn.jsdelivr.net/gh/nidhoggdjoking/CDN@2.4/img/mmx2.png" alt="logo">
  </a>
</p>

<h1 align="center"><a href="https://vitepress.docschina.org/" target="_blank">JK_VitePress</a></h1>

<p align="center" class="middle">
  <a href="https://vitejs.cn/" target="_blank">
      <img src="https://img.shields.io/badge/VitePress-v1.0.0_alpha.45-646CFF?logo=Vite">
  </a>
  <a href="https://cn.vuejs.org/" target="_blank">
      <img src="https://img.shields.io/badge/Vue-v3.2.37-success?logo=Vue.js">
  </a>
  <a href="https://developer.stackblitz.com/" target="_blank">
      <img src="https://img.shields.io/badge/Stackblitz-dev_tool-1374ef?logo=StackBlitz" >
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
</p>


<p align="center">
  🔥 <a href="https://github.dev/NidhoggDJoking/vitepress" target="_blank">Edit on Vscode</a>
  &nbsp;
  ⚡️ <a href="https://stackblitz.com/edit/jvitepress" target="_blank">Edit on StackBlitz</a>
</p>


### [镜像功能](https://gitee.com/help/articles/4336)

目前已使用`Gitee`所支持设置的两种镜像：

- Push：用于将 `Gitee` 的仓库自动镜像到 `GitHub` 。
- Pull：用于将 `GitHub` 的仓库镜像到 `Gitee` 。

镜像同步的代码是不计入被同步仓库的贡献度

当`Gitee`不再免费使用镜像同步功能将采取`Github Actions`实现代码推送`Github`自动同步到`Gitee`镜像仓库！`/script/sync-gitee.yml`

tip: `Gitee Pages`服务部署的路径是全小写的，而`Github Pages`生成地址与仓库名称相关区分大小写


### 持续集成

GitHub 使用的是[`GitHub Actions`](https://docs.github.com/zh/actions/quickstart)持续集成服务

Gitee: [Gitee Go 是 Gitee 全新推出的一款 CI/CD 工具](https://gitee.com/NidhoggDJoking/VitePress/gitee_go/welcome) 我采取本地走脚本的方式

> Gitee Go 为增值服务，计费方式为预付费，按构建时长购买。付费企业套餐资费不包含 Gitee Go 等增值服务 😰

推送`master`分支后自动部署

```sh
name: Deploy
on:
  push:
    branches:
      - master
```

`Algolia` 爬虫于每周五3点开始

```sh
name: Algolia
on:
  schedule:
    - cron:  '0 3 * * 5'
```

`Algolia` 免费版存在限制不能每次推送都使用否则

Github Action Error: Crawling issue: nbHits 0 for `XXX`

> 原因：You have exceeded your Free app's 10,000 Record limit. You can delete records or indices, or upgrade at any time for increased capacity.

tip: `Schedule` 在 GitHub 操作工作流运行的高负载期间，事件可能会延迟。高负载时间包括每小时开始。为了减少延迟的可能性，请安排您的工作流在不同的时间运行。

从其他用户反馈延迟的时间为几十分钟，或者超过一个小时，甚至在某种极端情况下，将不会执行。

所以 `Schedule` 设置的 cron 时刻，仅仅是工作流进行计划排队的时刻，而不是准确的运行时刻。而且上述时间均为UTC标准时间，不是北京时间。

如果需要换算成北京时间，要在该cron的基础上增加八小时得到北京时间，例如 ` 0 0 * * * ` 表示在每天 1:00 AM 触发 实际是在北京时间的 9:00 AM 才开始。




### [Edit on StackBlitz ⚡️](https://stackblitz.com/edit/jvitepress)

- `StackBlitz` 直接操作 `GitHub` 触发仓库镜像功能再将操作同步至`Gitee`


### The “Open in StackBlitz” button

One of the ways to make your code example stand out in your docs or your repository's readme file is to use our CTA (call-to-action) buttons.


[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github//NidhoggDJoking/VitePress)


### [项目在`StackBlitz`上运行](https://developer.stackblitz.com/platform/webcontainers/browser-config)

要允许所有 StackBlitz 项目使用第三方 Cookie，请转到浏览器的 Cookie 首选项，并为以下 URL 模式添加例外：

```
https://[*.]stackblitz.io
https://[*.]local.webcontainer.io
https://[*.]local-credentialless.webcontainer.io
https://[*.]local-corp.webcontainer.io
```

<br>

### [Dependabot 版本更新自动更新依赖项](https://docs.github.com/zh/code-security/dependabot/dependabot-version-updates)

> Dependabot version updates 可免费用于 GitHub.com 上的所有存储库。

```yml
version: 2
updates:
  - package-ecosystem: "npm" # See documentation for possible values
    directory: "/" # Location of package manifests
    schedule:
      interval: "monthly"
    commit-message:
      # Prefix all commit messages with "npm"
      prefix: "npm level up"
```
