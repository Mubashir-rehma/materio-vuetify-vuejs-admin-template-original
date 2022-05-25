// Styles
import { useThemeConfig } from '@core/composable/useThemeConfig'
import '@core/vuetify.scss'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi'
const { isDark } = useThemeConfig()

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
    VRadioGroup: {
      // set v-radio-group default inline:true
      inline: true,
    },
    VSelect: {
      transition: 'fade-transition',
      variant: 'outlined',
      density: 'compact',
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
    VProgressCircular: {
      // set v-progress-circular default color to primary
      color: 'primary',
    },
    VSlider: {
      // set v-slider default color to primary
      color: 'primary',
    },
    VTextField: {
      variant: 'outlined',
      density: 'compact',
      color: 'primary',
    },
    VAutocomplete: {
      variant: 'outlined',
      density: 'compact',
      color: 'primary',
    },
    VCombobox: {
      variant: 'outlined',
      density: 'compact',
      color: 'primary',
    },
    VFileInput: {
      variant: 'outlined',
      density: 'compact',
      color: 'primary',
    },
    VTextarea: {
      variant: 'outlined',
      density: 'compact',
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
  theme: {
    defaultTheme: isDark.value ? 'dark' : 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          'primary': '#a169ff',
          'secondary': '#677492',
          'on-secondary': '#fff',
          'success': '#40c057',
          'info': '#2f8be6',
          'warning': '#f77e17',
          'error': '#f55252',
        },
      },
      dark: {
        dark: true,
        colors: {
          'primary': '#a169ff',
          'secondary': '#677492',
          'on-secondary': '#fff',
          'success': '#40c057',
          'info': '#2f8be6',
          'warning': '#f77e17',
          'error': '#f55252',
        },
      },
    },
  },
})
