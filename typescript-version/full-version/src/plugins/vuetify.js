// Styles
import '@core/vuetify.scss'
import '@mdi/font/css/materialdesignicons.css'
// Vuetify
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi'


export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})
