// 导航菜单项的配置
export default [
    { text: '📝 Note', link: '/note/vitepress', activeMatch: '/note/' },
    {
        text: '🌈 VitePress', items: [
            { text: '📌 Guide', link: '/guide/what-is-vitepress', activeMatch: '/guide/' },
            { text: '🚀 Configs', link: '/config/introduction', activeMatch: '/config/' }
        ]
    },
    {
        text: 'More', items: [
            { text: '🏄 Tools', link: '/tools/emoji-list', activeMatch: '/tools/' },
            { text: '🏆 Algorithm', link: '/algorithm/leetcode/index', activeMatch: '/algorithm/' }
        ]
    },
]