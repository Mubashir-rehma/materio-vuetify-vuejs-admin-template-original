import { useI18n } from 'vue-i18n'
import { createVuetify } from 'vuetify'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import defaults from './defaults'
import { icons } from './icons'
import theme from './theme'
import i18n from '@/plugins/i18n'

// Styles
import '@core/vuetify.scss'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  defaults,
  icons,
  theme,
  locale: createVueI18nAdapter({ i18n, useI18n }),
})
