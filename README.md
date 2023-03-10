<p align="center">
  <a href="https://github.com/NidhoggDJoking/vitepress" target="_blank">
    <img width="280" src="https://cdn.jsdelivr.net/gh/nidhoggdjoking/CDN@2.4/img/mmx2.png" alt="logo">
  </a>
</p>

<h1 align="center"><a href="https://vitepress.docschina.org/" target="_blank">VitePress</a></h1>

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
  ð¥ <a href="https://github.dev/NidhoggDJoking/vitepress" target="_blank">Edit on Vscode</a>
  &nbsp;
  â¡ï¸ <a href="https://stackblitz.com/edit/jvitepress" target="_blank">Edit on StackBlitz</a>
</p>


### [éååè½](https://gitee.com/help/articles/4336)

ç®åå·²ä½¿ç¨`Gitee`ææ¯æè®¾ç½®çä¸¤ç§éåï¼

- Pushï¼ç¨äºå° `Gitee` çä»åºèªå¨éåå° `GitHub` ã
- Pullï¼ç¨äºå° `GitHub` çä»åºéåå° `Gitee` ã

éååæ­¥çä»£ç æ¯ä¸è®¡å¥è¢«åæ­¥ä»åºçè´¡ç®åº¦

å½`Gitee`ä¸ååè´¹ä½¿ç¨éååæ­¥åè½å°éå`Github Actions`å®ç°ä»£ç æ¨é`Github`èªå¨åæ­¥å°`Gitee`éåä»åºï¼`/script/sync-gitee.yml`

tip: `Gitee Pages`æå¡é¨ç½²çè·¯å¾æ¯å¨å°åçï¼è`Github Pages`çæå°åä¸ä»åºåç§°ç¸å³åºåå¤§å°å


### æç»­éæ

GitHub ä½¿ç¨çæ¯[`GitHub Actions`](https://docs.github.com/zh/actions/quickstart)æç»­éææå¡

Gitee: [Gitee Go æ¯ Gitee å¨æ°æ¨åºçä¸æ¬¾ CI/CD å·¥å·](https://gitee.com/NidhoggDJoking/VitePress/gitee_go/welcome) æéåæ¬å°èµ°èæ¬çæ¹å¼

> Gitee Go ä¸ºå¢å¼æå¡ï¼è®¡è´¹æ¹å¼ä¸ºé¢ä»è´¹ï¼ææå»ºæ¶é¿è´­ä¹°ãä»è´¹ä¼ä¸å¥é¤èµè´¹ä¸åå« Gitee Go ç­å¢å¼æå¡ ð°

æ¨é`master`åæ¯åèªå¨é¨ç½²

```sh
name: Deploy
on:
  push:
    branches:
      - master
```

`Algolia` ç¬è«äºæ¯å¨äº3ç¹å¼å§

```sh
name: Algolia
on:
  schedule:
    - cron:  '0 3 * * 5'
```

`Algolia` åè´¹çå­å¨éå¶ä¸è½æ¯æ¬¡æ¨éé½ä½¿ç¨å¦å

Github Action Error: Crawling issue: nbHits 0 for `XXX`

> åå ï¼You have exceeded your Free app's 10,000 Record limit. You can delete records or indices, or upgrade at any time for increased capacity.

tip: `Schedule` å¨ GitHub æä½å·¥ä½æµè¿è¡çé«è´è½½æé´ï¼äºä»¶å¯è½ä¼å»¶è¿ãé«è´è½½æ¶é´åæ¬æ¯å°æ¶å¼å§ãä¸ºäºåå°å»¶è¿çå¯è½æ§ï¼è¯·å®ææ¨çå·¥ä½æµå¨ä¸åçæ¶é´è¿è¡ã

ä»å¶ä»ç¨æ·åé¦å»¶è¿çæ¶é´ä¸ºå ååéï¼æèè¶è¿ä¸ä¸ªå°æ¶ï¼çè³å¨æç§æç«¯æåµä¸ï¼å°ä¸ä¼æ§è¡ã

æä»¥ `Schedule` è®¾ç½®ç cron æ¶å»ï¼ä»ä»æ¯å·¥ä½æµè¿è¡è®¡åæéçæ¶å»ï¼èä¸æ¯åç¡®çè¿è¡æ¶å»ãèä¸ä¸è¿°æ¶é´åä¸ºUTCæ åæ¶é´ï¼ä¸æ¯åäº¬æ¶é´ã

å¦æéè¦æ¢ç®æåäº¬æ¶é´ï¼è¦å¨è¯¥cronçåºç¡ä¸å¢å å«å°æ¶å¾å°åäº¬æ¶é´ï¼ä¾å¦ ` 0 0 * * * ` è¡¨ç¤ºå¨æ¯å¤© 1:00 AM è§¦å å®éæ¯å¨åäº¬æ¶é´ç 9:00 AM æå¼å§ã




### [Edit on StackBlitz â¡ï¸](https://stackblitz.com/edit/jvitepress)

- `StackBlitz` ç´æ¥æä½ `GitHub` è§¦åä»åºéååè½åå°æä½åæ­¥è³`Gitee`


### The âOpen in StackBlitzâ button

One of the ways to make your code example stand out in your docs or your repository's readme file is to use our CTA (call-to-action) buttons.


[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github//NidhoggDJoking/VitePress)


### [é¡¹ç®å¨`StackBlitz`ä¸è¿è¡](https://developer.stackblitz.com/platform/webcontainers/browser-config)

è¦åè®¸ææ StackBlitz é¡¹ç®ä½¿ç¨ç¬¬ä¸æ¹ Cookieï¼è¯·è½¬å°æµè§å¨ç Cookie é¦éé¡¹ï¼å¹¶ä¸ºä»¥ä¸ URL æ¨¡å¼æ·»å ä¾å¤ï¼

```
https://[*.]stackblitz.io
https://[*.]local.webcontainer.io
https://[*.]local-credentialless.webcontainer.io
https://[*.]local-corp.webcontainer.io
```

<br>

### [Dependabot çæ¬æ´æ°èªå¨æ´æ°ä¾èµé¡¹](https://docs.github.com/zh/code-security/dependabot/dependabot-version-updates)

> Dependabot version updates å¯åè´¹ç¨äº GitHub.com ä¸çææå­å¨åºã

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
