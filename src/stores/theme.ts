import { defineStore } from 'pinia'
import { Dark } from 'quasar'
export const useTheme = defineStore('theme', {
  state: () => ({ dark: false }),
  actions: {
    setTheme() {
      Dark.set(this.dark)
    },
  },
  persist: true,
})