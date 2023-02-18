// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import layout from './components/layout.vue'
import error from './components/404.vue'
import './style/global.less'
import './style/button.less'



// export default DefaultTheme

export default {
    ...DefaultTheme,
    Layout: layout,
    NotFound: error,
    enhanceApp(ctx) {
      // extend default theme custom behaviour.
      // 扩展默认主题自定义行为。
      DefaultTheme.enhanceApp(ctx)
      // register your custom global components
      // 注册自定义全局组件
      // ctx.app.component(Layout /* ... */)
    }
  }