import { themeConfig } from '@themeConfig'

export const useThemeConfig = () => {
  const isDark = computed({
    get() {
      return themeConfig.app.isDark.value
    },
    set(value: typeof themeConfig.app.isDark.value) {
      themeConfig.app.isDark.value = value
      localStorage.setItem(`${themeConfig.app.title}-isDark`, value.toString())
    },
  })

  return {
    isDark,
  }
}
