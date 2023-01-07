// const anchor = require("markdown-it-anchor")

export default {
    // lang: 'en-US', // 默认为：en-US，<html lang="en-US">页面 HTML 中的标签
    title: "我是站点的标题", // 网站的标题。这将显示在导航栏中。也用作所有页面标题的后缀，除非titleTemplate已定义
    // titleTemplate: 'lala', // 设置false为禁用该功能。标题的后缀。
    // description: "我是站点的描述元标记", // HTML页面<meta>的描述
    lastUpdated: true, // git commit的最后更新时间
    head: [
      [
        "link",
        { rel: "shortcut icon", href: "/VitePress/favicon.ico",type:"image/x-icon" }
      ] // 在HTML页面<head>里插入元素
    ],
    ignoreDeadLinks: true, // 默认值false,忽略死链接，不会因为死链接而导致构建失败
    // appearance: false, // 主题是否暗色，默认true
    base: "/VitePress/", // 默认值为'/',部署站点的基本 URL
    // outDir: "../public",   // 默认值为'./.vitepress/dist' 构建输出位置
    // 配置 Markdown 解析器
    markdown: {
      theme: "material-palenight",
      lineNumbers: true // 代码块启用行号
      // // 目录改成悬浮才显示文字
      // anchor: {
      //   permalink: anchor.permalink.headerLink()
      // },
      // // 展示目录的层次
      // toc: { level: [1,2,3] },
      // // // 配置 Markdown-it 实例。
      // config: (md) => {
      //   md.use(require('markdown-it-anchor'))
      // }
    },
    themeConfig: {
      logo: "/logo.svg", //显示在导航栏中的徽标文件，位于站点标题之前。接受路径字符串或对象以为亮/暗模式设置不同的徽标。
      siteTitle: "VitePress", // 替换导航中的默认站点标题，就是logo旁边的标题
      outlineTitle: "我是右侧大纲的标题", // 可用于自定义右侧边栏的标题（在大纲链接的顶部）
      lastUpdatedText: "最近更新时间：", // 默认：Last updated,在上次更新时间之前显示的前缀文本
      // 编辑链接
      editLink: {
        pattern: "https://github.com/git136975643/vitepress/edit/master/docs/:path",
        text: "在 GitHub 上编辑此页面"
      },
      // 社交链接 可以自定义icon
      socialLinks: [
        { icon: "github", link: "https://github.com/git136975643/vitepress" }
      ],
      // 可用于自定义出现在上一个和下一个链接上方的文本
      docFooter: {
        prev: "上一页",
        next: "下一页"
      },
      // 页脚 仅当页面不包含侧边栏时才会显示页脚。
      footer: {
        message: '在 MIT 许可下发布',
        copyright: '版权所有 © 2022-forever dlf'
      },
      // // 碳广告 显示碳广告的选项。
      // carbonAds: {
      //   code: 'your-carbon-code',
      //   placement: 'your-carbon-placement'
      // },
      // 导航菜单项的配置
      nav: [
        { text: "指南", link: "/guide/什么是 VitePress？" },
        {
          text: "配置",
          items: [
            {
              // 区域标题
              text: "常用配置",
              items: [{ text: "主要配置", link: "/config/介绍" }]
            }
          ]
        }
      ],
      // 多个侧边栏方式sidebar写成对象
      sidebar: {
        // 当用户访问时guide显示此侧边栏
        // 在 `guide` 目录下。
        "/guide/": [
          {
            text: "介绍",
            collapsible: true,
            items: [
              { text: "什么是 VitePress？", link: "/guide/什么是 VitePress？" },
              { text: "配置和部署", link: "/guide/配置和部署" }
            ]
          },
          {
            text: "写作",
            collapsible: true,
            items: [
              { text: "markdown扩展", link: "/guide/markdown扩展" },
              {
                text: "在 Markdown 中使用 Vue",
                link: "/guide/在 Markdown 中使用 Vue"
              },
              { text: "API 参考", link: "/guide/API 参考" },
            ]
          }
        ],
        // 当用户访问时config显示此侧边栏
        "/config/": [
          {
            text: "配置",
            collapsible: true,
            items: [{ text: "介绍", link: "/config/介绍" }]
          }
        ]
      }
    }
  }
  