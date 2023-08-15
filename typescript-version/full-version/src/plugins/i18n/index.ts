import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import { themeConfig } from '@themeConfig'

const messages = Object.fromEntries(
  Object.entries(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    import.meta.glob<{ default: any }>('./locales/*.json', { eager: true }))
    .map(([key, value]) => [key.slice(10, -5), value.default]),
)

export const i18n = createI18n({
  legacy: false,
  locale: useCookie(`${themeConfig.app.title}-language`).value || themeConfig.app.i18n.defaultLocale,
  fallbackLocale: 'en',
  messages,
})

export default function (app: App) {
  app.use(i18n)
}
