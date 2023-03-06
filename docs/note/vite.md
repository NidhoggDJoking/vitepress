# Vite 拓展

- ## [Unocss](https://www.npmjs.com/package/unocss) （原子化css）

```sh
npm i unocss
```

### 首先说明下使用原子化css所带来的的好处

- 降低命名负担
可以减少/不再为思考class命名而烦恼

- 减少嵌套命名（冗长的类）
不用遵循BEM的嵌套命名方式

- 便捷的响应式、暗黑模式、悬停/聚焦等状态（use Atomic CSS engine）
相比`:class="{'color-bule':dark}"` 这种Vue的响应式 `class="dark:color-bule"`书写更加便捷

- 复用性强
复用性强减少重复代码，有效降低项目大小和打包体积
当然对于复用性我的理解永远是复用性越强维护成本越高

### 缺点

- 学习成本中的记忆负担
不同团队/项目的命名标准和使用的样式肯定是存在差异的所以对学习记忆产生了负担

- 维护成本
`css` 的细化拆分造成每一处样式的影响范围可以覆盖全局，造成维护的内容体量大维护需要更加细致

[UnoCSS自带样式类查找](https://uno.antfu.me/)

- ## [`unplugin-vue-components`](https://www.npmjs.com/package/unplugin-vue-components)

`unplugin-vue-components` 是由 Vue官方人员开发的一款自动引入插件，可以省去比如 UI 库的大量 import 语句。

```sh
npm i unplugin-vue-components
```

### 常用配置：

```js
// vite.config.ts
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    Components({ 
        deep: true, // 搜索子目录
        include: [/\.vue$/, /\.vue\?vue/], // 包含过滤
        exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/], // 排除过滤
        extensions: ['vue'], // 组件的有效文件扩展名。
        dirs: ['src/components'], // 配置需要默认导入的自定义组件文件夹，该文件夹下的所有组件都会自动 import
     }),
  ],
})
```

### 全部配置的默认值如下所示:

```js
Components({
  // relative paths to the directory to search for components.
  dirs: ['src/components'],

  // valid file extensions for components.
  extensions: ['vue'],
  // search for subdirectories
  deep: true,
  // resolvers for custom components
  resolvers: [],

  // generate `components.d.ts` global declarations,
  // also accepts a path for custom filename
  // default: `true` if package typescript is installed
  dts: false,

  // Allow subdirectories as namespace prefix for components.
  directoryAsNamespace: false,

  // Collapse same prefixes (camel-sensitive) of folders and components
  // to prevent duplication inside namespaced component name.
  // works when `directoryAsNamespace: true`
  collapseSamePrefixes: false,
  // Subdirectory paths for ignoring namespace prefixes.
  // works when `directoryAsNamespace: true`
  globalNamespaces: [],

  // auto import for directives
  // default: `true` for Vue 3, `false` for Vue 2
  // Babel is needed to do the transformation for Vue 2, it's disabled by default for performance concerns.
  // To install Babel, run: `npm install -D @babel/parser`
  directives: true,

  // Transform path before resolving
  importPathTransform: v => v,

  // Allow for components to override other components with the same name
  allowOverrides: false,

  // filters for transforming targets
  include: [/\.vue$/, /\.vue\?vue/],
  exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],

  // Vue version of project. It will detect automatically if not specified.
  // Acceptable value: 2 | 2.7 | 3
  version: 2.7
})
```