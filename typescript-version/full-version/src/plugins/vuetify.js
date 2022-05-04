// Styles
import '@core/vuetify.scss'
import '@mdi/font/css/materialdesignicons.css'

// Vuetify
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi'

export default createVuetify({
  defaults: {
    VMenu: {
      // set v-menu default transition to fade-transition
      transition: 'fade-transition',
    },
    VBadge: {
      // set v-badge default color to primary
      color: 'primary',
    },
    VBtn: {
      // set v-btn default color to primary
      color: 'primary',
    },
    VTabs: {
      // set v-tabs default color to primary
      color: 'primary',
    },
    VCheckbox: {
      // set v-checkbox default color to primary
      color: 'primary',
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})
