import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
} from 'unocss'
import { presetTaiyuuki } from './uno.taiyuuki.js'

export default defineConfig({
  presets: [
    presetAttributify({}),
    presetUno(),
    presetIcons(),
    presetTaiyuuki(),
  ],
  variants: [],
})