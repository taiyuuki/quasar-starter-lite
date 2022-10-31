import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import markdown from 'vite-plugin-vue-markdown'
import shiki from 'markdown-it-shiki'
import linkattributes from 'markdown-it-link-attributes'

import type { PluginOption } from 'vite'

export default defineConfig({
  test: { environment: 'jsdom' },
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }) as PluginOption,
    markdown({
      markdownItSetup(md) {
        md.use(shiki, {
          theme: {
            light: 'light-plus',
            dark: 'dark-plus',
          },
        })
        md.use(linkattributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
      },
    }),
  ],

})