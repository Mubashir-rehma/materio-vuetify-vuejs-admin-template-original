import { createVuetify } from 'vuetify'
import defaults from './defaults'
import { icons } from './icons'
import theme from './theme'

// Styles
import '@core/vuetify.scss'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  defaults,
  icons,
  theme,
})
