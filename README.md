<h1 align="center">Quasar Starter lite</h1>

<p align="center">一己之见的 Quasar + Vite 初始模板.</p>

受[Vitesse](https://github.com/antfu/vitesse)启发，我创建了一个基于Quasar-CLI(Vite)的初始模板[Quasar Start](https://github.com/taiyuuki/quasar-start)，Quasar Starter lite则是精简了部分功能的初始模板。

### 功能

- 💳[Quasar CLI](https://quasar.dev) 脚手架

- ⚡️[Quasar](https://quasar.dev), [Vue 3](https://vuejs.org), [Vite 3](https://github.com/vitejs/vite) 
  
  - 🍭 [\<script setup\>](https://vuejs.org/api/sfc-script-setup.html)  setup语法糖
  - 🎲[Reactivity Transform](https://vuejs.org/guide/extras/reactivity-transform.html)  响应式语法糖
  - 🔧[TypeScript](https://www.typescriptlang.org)  类型检测
  - 💻[SSR](https://quasar.dev/quasar-cli-vite/developing-ssr/introduction)  服务端渲染
  - 📱 [PWA](https://quasar.dev/quasar-cli-vite/developing-pwa/introduction#what-is-required) 渐进式APP


- 📂自动生成路由，基于 [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages#vite-plugin-pages)

- 📁自动生成页面，基于 [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts#vite-plugin-vue-layouts)

- 🔨自动导入组件，基于 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components#unplugin-vue-components)

- 🪓自动导入Vue API，基于 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import#unplugin-auto-import)

- 🍍状态管理，基于 [Pinia](https://pinia.esm.dev/)

	- 💾使用 [pinia-plugin-persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/) 数据持久化，完整支持SSR。

- 🎨[UnoCSS](https://github.com/antfu/unocss) - 按需生成CSS原子类

- 🧰[VueUse](https://github.com/antfu/vueuse) - Vue 函数库

- 🧲[Vitest](https://github.com/vitest-dev/vitest) - 测试

## 开始使用

### 克隆至本地

推荐使用 [degit](https://github.com/Rich-Harris/degit)

```bash
npx degit taiyuuki/quasar-starter-lite my-quasar-app
```

## Scripts

- `pnpm dev` - PWA模式运行
- `pnpm build` - PWA模式打包
- `pnpm dev:srr` - SSR模式运行（含PWA）
- `pnpm build:ssr` - SSR模式打包（含PWA）
- `pnpm test` - 运行Vitest测试

### 配置

参考quasar官方文档： [Configuring quasar.config.js](https://quasar.dev/quasar-cli-vite/quasar-config-js).