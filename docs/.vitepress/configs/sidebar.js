// 多个侧边栏方式sidebar写成对象
export default {
  "/guide/": sidebarGuide(),
  "/config/": sidebarConfig(),
  "/note/": sidebarNote(),
  "/tools": sidebarTools(),
};

function sidebarGuide() {
  return [
    {
      text: "Introduction",
      collapsible: true,
      items: [
        { text: "What is VitePress?", link: "/guide/what-is-vitepress" },
        { text: "Getting Started", link: "/guide/getting-started" },
        { text: "Configuration", link: "/guide/configuration" },
        { text: "Deploying", link: "/guide/deploying" },
      ],
    },
    {
      text: "✒️ Writing",
      collapsible: true,
      items: [
        { text: "Markdown", link: "/guide/markdown" },
        { text: "Asset Handling", link: "/guide/asset-handling" },
        { text: "Frontmatter", link: "/guide/frontmatter" },
        { text: "Using Vue in Markdown", link: "/guide/using-vue" },
        { text: "API Reference", link: "/guide/api" },
      ],
    },
    {
      text: "🎨 Theme",
      collapsible: true,
      items: [
        { text: "Introduction", link: "/guide/theme-introduction" },
        { text: "Nav", link: "/guide/theme-nav" },
        { text: "Sidebar", link: "/guide/theme-sidebar" },
        { text: "Prev Next Link", link: "/guide/theme-prev-next-link" },
        { text: "Edit Link", link: "/guide/theme-edit-link" },
        { text: "Last Updated", link: "/guide/theme-last-updated" },
        { text: "Layout", link: "/guide/theme-layout" },
        { text: "Home Page", link: "/guide/theme-home-page" },
        { text: "Team Page", link: "/guide/theme-team-page" },
        { text: "Badge", link: "/guide/theme-badge" },
        { text: "Footer", link: "/guide/theme-footer" },
        { text: "Search", link: "/guide/theme-search" },
        { text: "Carbon Ads", link: "/guide/theme-carbon-ads" },
      ],
    },
    {
      text: "Migrations",
      collapsible: true,
      items: [
        {
          text: "Migration from VuePress",
          link: "/guide/migration-from-vuepress",
        },
        {
          text: "Migration from VitePress 0.x",
          link: "/guide/migration-from-vitepress-0",
        },
      ],
    },
  ];
}

function sidebarConfig() {
  return [
    {
      text: "Config",
      items: [
        { text: "Introduction", link: "/config/introduction" },
        { text: "App Configs", link: "/config/app-configs" },
        { text: "Theme Configs", link: "/config/theme-configs" },
        { text: "Frontmatter Configs", link: "/config/frontmatter-configs" },
      ],
    },
  ];
}
function sidebarNote() {
  return [
    {
      text: "Note",
      collapsible: true,
      items: [
        { text: "VitePress", link: "/note/note" },
        { text: "POSIX cron", link: "/note/posix-cron" },
        { text: "Shell", link: "/note/shell" },
      ],
    },
    {
      text: "Questions",
      collapsible: true,
      items: [
        { text: "Error", link: "/note/error" },
      ],
    },
    {
      text: "Article",
      collapsible: true,
      items: [
        { text: "💯 JavaScript Questions", link: "/note/javascript-questions" },
      ],
    },
    {
      text: "介绍",
      collapsible: true,
      items: [
        { text: "什么是 VitePress？", link: "/note/vitepress" },
      ],
    },
  ];
}

function sidebarTools() {
  return [
    {
      text: "Tools",
      items: [
        { text: "Emoji List", link: "/tools/emoji-list" },
        { text: "Javascript Function", link: "/tools/javascript-function" },
        { text: "Javascript Regular", link: "/tools/javascript-regular" },
        { text: "SHIJI", link: "/tools/shiji" },
      ]
    }
  ];
}