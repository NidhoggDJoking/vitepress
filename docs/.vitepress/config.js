// const anchor = require("markdown-it-anchor")
import nav from './configs/nav';
import sidebar from './configs/sidebar';
import socialLinks from './configs/socialLinks';
import { BASEURL, NAME, YEAR } from './configs/global';

export default {
  // lang: 'en-US', // 默认为：en-US，<html lang="en-US">页面 HTML 中的标签
  title: 'By NidhoggDJoking', // 网站的标题。这将显示在导航栏中。也用作所有页面标题的后缀，除非titleTemplate已定义
  // titleTemplate: '', // 设置false为禁用该功能。标题的后缀。
  // description: "我是站点的描述元标记", // HTML页面<meta>的描述
  lastUpdated: true, // git commit的最后更新时间
  head: [
    [
      'link',
      { rel: 'shortcut icon', href: `favicon.ico`, type: 'image/x-icon' },
    ], // 在HTML页面<head>里插入元素
  ],
  ignoreDeadLinks: true, // 默认值false,忽略死链接，不会因为死链接而导致构建失败
  // appearance: false, // 主题是否暗色，默认true
  base: `/${BASEURL}/`, // 默认值为'/',部署站点的基本 URL
  // outDir: "../public",   // 默认值为'./.vitepress/dist' 构建输出位置
  // 配置 Markdown 解析器
  markdown: {
    // 踩坑: 不看源码不知道 0.35 `material-palenight` 0.45 `material-theme-palenight`
    theme: 'material-theme-palenight',
    lineNumbers: true, // 代码块启用行号
    // 目录改成悬浮才显示文字
    // anchor: {
    //   permalink: anchor.permalink.headerLink()
    // },
    // 展示目录的层次
    // toc: { level: [1,2,3] },
    // 配置 Markdown-it 实例。
    // config: (md) => {
    //   md.use(require('markdown-it-anchor'))
    // }
  },
  themeConfig: {
    logo: '/Pikachu.svg', //显示在导航栏中的徽标文件，位于站点标题之前。接受路径字符串或对象以为亮/暗模式设置不同的徽标。
    siteTitle:'Bohemian Rhapsody', // 替换导航中的默认站点标题，就是logo旁边的标题（Bohemian Rhapsody，）
    outlineTitle: 'On this page', // 可用于自定义右侧边栏的标题（在大纲链接的顶部）
    lastUpdatedText: '最近更新时间：', // 默认：Last updated,在上次更新时间之前显示的前缀文本
    // 编辑链接
    editLink: {
      pattern: `https://gitee.com/${NAME}/${BASEURL}/edit/master/docs/:path`,
      text: '在 Gitee/Github 上编辑此页面',
    },
    // 可用于自定义出现在上一个和下一个链接上方的文本
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    // 页脚 仅当页面不包含侧边栏时才会显示页脚。
    footer: {
      message: '在 MIT 许可下发布',
      copyright: `Copyright (c) ${YEAR}-present ${NAME}`,
    },
    algolia: {
      appId: 'SO2MMF1HZC',
      apiKey: '62b2fa4b766a59f92958ba894d57a6d9',
      indexName: 'datasets',
      placeholder: '请输入关键词',
      buttonText: '搜索'
    },
    // returnToTopLabel: '火箭升空🚀',
    // 碳广告 显示碳广告的选项。需要网站月访问量到达10000次才能申请成功
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement'
    // },
    nav,
    sidebar,
    socialLinks,
  },
};
