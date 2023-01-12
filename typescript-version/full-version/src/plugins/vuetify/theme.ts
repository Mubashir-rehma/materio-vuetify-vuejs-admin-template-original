import type { VuetifyOptions } from 'vuetify'
import { resolveVuetifyTheme } from '@core/utils/vuetify'
import { themeConfig } from '@themeConfig'

export const staticPrimaryColor = '#a169ff'

const theme: VuetifyOptions['theme'] = {
  defaultTheme: resolveVuetifyTheme(),
  themes: {
    light: {
      dark: false,
      colors: {
        'primary': localStorage.getItem(`${themeConfig.app.title}-lightThemePrimaryColor`) || staticPrimaryColor,
        'secondary': '#677492',
        'on-secondary': '#fff',
        'success': '#40c057',
        'info': '#2f8be6',
        'warning': '#f77e17',
        'error': '#f55252',
        'background': '#f4f5fa',
        'on-background': '#5e5669',
        'on-surface': '#5e5669',
        'grey-50': '#FAFAFA',
        'grey-100': '#F5F5F5',
        'grey-200': '#EEEEEE',
        'grey-300': '#E0E0E0',
        'grey-400': '#BDBDBD',
        'grey-500': '#9E9E9E',
        'grey-600': '#757575',
        'grey-700': '#616161',
        'grey-800': '#424242',
        'grey-900': '#212121',
        'perfect-scrollbar-thumb': '#DBDADE',
      },

      variables: {
        'code-color': '#d400ff',

        // Shadows
        'shadow-key-umbra-opacity': 'rgba(var(--v-theme-on-surface), 0.08)',
        'shadow-key-penumbra-opacity': 'rgba(var(--v-theme-on-surface), 0.12)',
        'shadow-key-ambient-opacity': 'rgba(var(--v-theme-on-surface), 0.04)',
      },
    },
    dark: {
      dark: true,
      colors: {
        'primary': localStorage.getItem(`${themeConfig.app.title}-darkThemePrimaryColor`) || staticPrimaryColor,
        'secondary': '#677492',
        'on-secondary': '#fff',
        'success': '#40c057',
        'info': '#2f8be6',
        'warning': '#f77e17',
        'error': '#f55252',
        'background': '#28243d',
        'on-background': '#E8E8F1',
        'surface': '#312d4b',
        'on-surface': '#E8E8F1',
        'grey-50': '#2A2E42',
        'grey-100': '#2F3349',
        'grey-200': '#4A5072',
        'grey-300': '#5E6692',
        'grey-400': '#7983BB',
        'grey-500': '#8692D0',
        'grey-600': '#AAB3DE',
        'grey-700': '#B6BEE3',
        'grey-800': '#CFD3EC',
        'grey-900': '#E7E9F6',
        'perfect-scrollbar-thumb': '#4A5072',
      },
      variables: {
        'code-color': '#d400ff',

        // Shadows
        'shadow-key-umbra-opacity': 'rgba(20, 18, 33, 0.08)',
        'shadow-key-penumbra-opacity': 'rgba(20, 18, 33, 0.12)',
        'shadow-key-ambient-opacity': 'rgba(20, 18, 33, 0.04)',
      },
    },
  },
}

export default theme
