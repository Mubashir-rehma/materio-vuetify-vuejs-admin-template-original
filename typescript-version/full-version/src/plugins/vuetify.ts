// Styles
import '@core/vuetify.scss'
import '@mdi/font/css/materialdesignicons.css'

// Vuetify
import type { ThemeDefinition } from 'vuetify'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi'

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    'background': '#FFFFFF',
    'surface': '#FFFFFF',
    'primary': '#000',
    'primary-darken-1': '#3700B3',
    'secondary': '#03DAC6',
    'secondary-darken-1': '#018786',
    'error': '#B00020',
    'info': '#2196F3',
    'success': '#4CAF50',
    'warning': '#FB8C00',
  },
}

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
    VTooltip: {
      // set v-tooltip default anchor to top
      anchor: 'top',
    },
    VCheckbox: {
      // set v-checkbox default color to primary
      color: 'primary',
    },
    VRangeSlider: {
      // set v-range-slider default color to primary
      color: 'primary',
    },
    VRating: {
      // set v-rating default color to primary
      color: 'warning',
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    },
  },
})
