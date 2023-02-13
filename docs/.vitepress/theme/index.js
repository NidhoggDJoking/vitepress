// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './global.less'
import './button.less'
// export default DefaultTheme

import Layout from './Layout.vue'


export default {
    ...DefaultTheme,
    Layout: Layout,
    enhanceApp(ctx) {
      // extend default theme custom behaviour.
      // 扩展默认主题自定义行为。
      DefaultTheme.enhanceApp(ctx)
  
      // register your custom global components
      // 注册自定义全局组件
      ctx.app.component(Layout /* ... */)
    }
  }