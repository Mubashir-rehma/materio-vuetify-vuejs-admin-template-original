import { createVuetify } from 'vuetify'
import defaults from './defaults'
import { icons } from './icons'
import theme from './theme'

// Styles
import '@core/scss/vuetify/index.scss'

export default createVuetify({
  defaults,
  icons,
  theme,
})
