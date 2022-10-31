import { store } from 'quasar/wrappers'
import { createPinia } from 'pinia'
import {
  createQuasarCookiesPersistedState as cretaeCookiePersisted,
  createQuasarWebStoragePersistedState as createLSPersisted,
} from 'pinia-plugin-persistedstate/quasar'

import { Cookies, LocalStorage } from 'quasar'

export default store(({ ssrContext }) => {
  const pinia = createPinia()
  const cookies = process.env.SERVER ? Cookies.parseSSR(ssrContext) : Cookies
  pinia.use(
    cretaeCookiePersisted(cookies, {
      cookiesOptions: {
        expires: 15,
        sameSite: 'Strict',
      },
    })
  )
  pinia.use(createLSPersisted(LocalStorage))
  return pinia
})