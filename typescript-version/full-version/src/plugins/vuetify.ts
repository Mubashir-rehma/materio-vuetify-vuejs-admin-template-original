// Styles
import '@core/vuetify.scss'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi'
import { themeConfig } from '@themeConfig'

export default createVuetify({
  defaults: {
    VBadge: {
      // set v-badge default color to primary
      color: 'primary',
    },
    VBtn: {
      // set v-btn default color to primary
      color: 'primary',
    },
    VPagination: {
      color: 'primary',
      density: 'comfortable',
    },
    VTabs: {
      // set v-tabs default color to primary
      color: 'primary',
    },
    VTooltip: {
      // set v-tooltip default location to top
      location: 'top',
    },
    VList: {
      VListItem: {
        activeColor: 'primary',
      },
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
      VSelectionControl: { color: 'primary' },
    },
    VSelect: {
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
    VDialog: {
      maxWidth: '600',
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
    defaultTheme: localStorage.getItem(`${themeConfig.app.title}-theme`) || themeConfig.app.theme.value,
    themes: {
      light: {
        dark: false,
        colors: {
          'primary': localStorage.getItem(`${themeConfig.app.title}-lightThemePrimaryColor`) || '#a169ff',
          'secondary': '#677492',
          'on-secondary': '#fff',
          'success': '#40c057',
          'info': '#2f8be6',
          'warning': '#f77e17',
          'error': '#f55252',
          'on-background': '#5e5669',
          'on-surface': '#5e5669',
        },
      },
      dark: {
        dark: true,
        colors: {
          'primary': localStorage.getItem(`${themeConfig.app.title}-darkThemePrimaryColor`) || '#a169ff',
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

  // locale: {
  //   rtl: {
  //     en: true,
  //   },
  // },
})
