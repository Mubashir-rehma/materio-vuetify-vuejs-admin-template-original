import themeConfig from '@themeConfig'

require('./overrides.scss')

export default {
  theme: {
    themes: {
      ...themeConfig.themes,
    },
    dark: { dark: localStorage.getItem('active-theme') || themeConfig.app.isDark },
  },
}
