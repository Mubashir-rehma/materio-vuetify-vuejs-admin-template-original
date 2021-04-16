import { getVuetify } from '@core/utils'
import { computed } from '@vue/composition-api'

export default () => {
  const rootThemeClasses = computed(() => {
    const $vuetify = getVuetify()

    return {
      'theme--dark': $vuetify.isDark,
      'theme--light': !$vuetify.isDark,
    }
  })

  return {
    rootThemeClasses,
  }
}
