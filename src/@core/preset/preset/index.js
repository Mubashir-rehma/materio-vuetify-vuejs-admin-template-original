import themeConfig from '@themeConfig'

require('./overrides.scss')

export default {
  theme: {
    themes: {
      ...themeConfig.themes,
    },
  },
}
