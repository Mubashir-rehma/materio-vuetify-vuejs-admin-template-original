import themeConfig from '@themeConfig'

require('./overrides.scss')

export default {
  theme: {
    themes: {
      ...themeConfig.themes,
    },
    dark:
      localStorage.getItem('active-theme') === undefined
        ? themeConfig.app.isDark
        : localStorage.getItem('active-theme'),
  },
}
