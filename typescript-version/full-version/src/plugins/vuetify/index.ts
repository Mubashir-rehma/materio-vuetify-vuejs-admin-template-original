import type { App } from 'vue'

import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'
import defaults from './defaults'
import { icons } from './icons'
import theme from './theme'

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
})

export default function (app: App) {
  app.use(vuetify)
}
