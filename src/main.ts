/* eslint-disable import/order */
// Axios Mock Adapter
import '@/@fake-db/db'

// 👉 Styles
import '@/styles/master/index.scss'

// 👉 Plugin: I18n
import i18n from '@/plugins/i18n'

// 👉 Plugin: Layout
import layoutsPlugin from '@/plugins/layouts'

// 👉 Router
import router from '@/router'

// 👉 Plugin: CASL/ACL
import { abilitiesPlugin } from '@casl/vue'
import ability from '@/plugins/casl/ability'

// 👉 Store
import { createPinia } from 'pinia'

// 👉 UnoCSS
import 'uno.css'

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(layoutsPlugin)
app.use(i18n)

// Extract acl to another file like vitesse
app.use(abilitiesPlugin, ability, {
  useGlobalProperties: true,
})
app.mount('#app')
