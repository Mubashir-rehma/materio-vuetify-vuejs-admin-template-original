import { createPinia } from 'pinia'
import type { App } from 'vue'

const store = createPinia()

export default function (app: App) {
  app.use(store)
}
