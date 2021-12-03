import { createPinia } from 'pinia'
import { setupLayouts } from 'virtual:generated-layouts'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import App from './App.vue'

console.log('routes :>> ', routes)
console.log('setupLayouts :>> ', setupLayouts(routes))

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
