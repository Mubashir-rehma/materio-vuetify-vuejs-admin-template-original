import { themeConfig } from '@themeConfig'
import { useStorage } from '@vueuse/core'
import type { App } from 'vue'
import { createI18n } from 'vue-i18n'

const messages = Object.fromEntries(
  Object.entries(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    import.meta.glob<{ default: any }>('./locales/*.json', { eager: true }))
    .map(([key, value]) => [key.slice(10, -5), value.default]),
)

const i18n = createI18n({
  legacy: false,
  locale: useStorage(`${themeConfig.app.title}-language`, null).value || themeConfig.app.i18nLanguage,
  fallbackLocale: 'en',
  messages,
})

export default function (app: App) {
  app.use(i18n)
}
