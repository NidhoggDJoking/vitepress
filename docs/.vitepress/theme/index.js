// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import layout from './components/layout.vue'
import error from './components/404.vue'
import { useComponents } from './components/useComponents'
import './style/global.less'
import './style/button.less'
import './style/element.less'


// export default DefaultTheme

export default {
    ...DefaultTheme,
    Layout: layout,
    NotFound: error,
    enhanceApp(ctx) {
      // extend default theme custom behaviour.
      // 扩展默认主题自定义行为。
      DefaultTheme.enhanceApp(ctx)
      useComponents(ctx.app)
      // register your custom global components
      // 注册自定义全局组件
      // ctx.app.component(/* ... */)
    }
  }