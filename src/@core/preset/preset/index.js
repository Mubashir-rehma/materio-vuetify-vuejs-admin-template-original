import themeConfig from '@themeConfig'

require('./overrides.scss')

export default {
  theme: {
    themes: {
      ...themeConfig.themes,
    },
    dark: localStorage.getItem('active-theme') === null ? themeConfig.app.isDark : localStorage.getItem('active-theme'),
  },
}
