import type { App } from 'vue'
import { useI18n } from 'vue-i18n'
import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import defaults from './defaults'
import { icons } from './icons'
import theme from './theme'
import { i18n } from '@/plugins/i18n/index'

// Styles
import '@core/scss/template/libs/vuetify/index.scss'
import 'vuetify/styles'

const vuetify = createVuetify({
  aliases: {
    IconBtn: VBtn,
  },
  defaults,
  icons,
  theme,
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }),
  },
})

export default function (app: App) {
  app.use(vuetify)
}
