
# 配置

## 主题配置
默认情况下，defineConfig助手利用默认主题的主题配置类型：

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',

  // Theme related configurations.
  themeConfig: {
    logo: '/logo.svg',
    nav: [...],
    sidebar: { ... }
  }
})
```

## 输出目录
类型：string
默认：./.vitepress/dist
站点的构建输出位置，相对于项目根目录（docs如果您正在运行，则为文件夹vitepress build docs）。

```ts
export default {
  outDir: '../public'
}
```