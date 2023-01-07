# API

## useData
返回特定于页面的数据

## useRoute
返回当前路由对象

## useRouter
返回 VitePress 路由器实例，以便您可以以编程方式导航到另一个页面。

## withBase
类型：(path: string) => string
将配置附加base到给定的 URL 路径。另请参阅基本 URL

## `<Content />`
该`<Content />`组件显示呈现的markdown内容。在创建自己的主题时很有用。

## `<ClientOnly />`
该`<ClientOnly />`组件仅在客户端呈现其插槽。

由于 VitePress 应用程序在生成静态构建时在 Node.js 中进行服务器渲染，因此任何 Vue 使用都必须符合通用代码要求。简而言之，确保只在 beforeMount 或mounted 钩子中访问浏览器/DOM API。

如果您正在使用或演示对 SSR 不友好的组件（例如，包含自定义指令），您可以将它们包装在ClientOnly组件内。

## `<OutboundLink />`