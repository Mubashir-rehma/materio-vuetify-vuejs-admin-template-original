// Styles
import '@core/vuetify.scss'
import '@mdi/font/css/materialdesignicons.css'
import { themeConfig } from '@themeConfig'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi'

// isDark utils
const localStorageIsDark = localStorage.getItem(`${themeConfig.app.title}-isDark`)
const getThemeNameFromIsDark = (isDark: boolean) => isDark ? 'dark' : 'light'

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
      density: 'comfortable',
      hideDetails: 'auto',
    },
    VRadioGroup: {
      // set v-radio-group default inline:true
      inline: true,
      density: 'comfortable',
      hideDetails: 'auto',
    },
    VRadio: {
      density: 'comfortable',
      hideDetails: 'auto',
    },
    VSelect: {
      transition: 'fade-transition',
      variant: 'outlined',
      density: 'comfortable',
      color: 'primary',
      hideDetails: 'auto',
    },
    VRangeSlider: {
      // set v-range-slider default color to primary
      color: 'primary',
      density: 'comfortable',
      hideDetails: 'auto',
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
      hideDetails: 'auto',
    },
    VTextField: {
      variant: 'outlined',
      density: 'comfortable',
      color: 'primary',
      hideDetails: 'auto',
    },
    VAutocomplete: {
      variant: 'outlined',
      density: 'comfortable',
      color: 'primary',
      hideDetails: 'auto',
    },
    VCombobox: {
      variant: 'outlined',
      density: 'comfortable',
      color: 'primary',
      hideDetails: 'auto',
    },
    VFileInput: {
      variant: 'outlined',
      density: 'comfortable',
      color: 'primary',
      hideDetails: 'auto',
    },
    VTextarea: {
      variant: 'outlined',
      density: 'comfortable',
      color: 'primary',
      hideDetails: 'auto',
    },
    VSwitch: {
      // set v-switch default color to primary
      color: 'primary',
      hideDetails: 'auto',
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
    defaultTheme: localStorageIsDark ? getThemeNameFromIsDark(JSON.parse(localStorageIsDark)) : getThemeNameFromIsDark(themeConfig.app.isDark.value),
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
          'on-background': '#0D0C22',
          'on-surface': '#0D0C22',
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
          'on-background': '#E8E8F1',
          'on-surface': '#E8E8F1',
        },
      },
    },
  },
})
