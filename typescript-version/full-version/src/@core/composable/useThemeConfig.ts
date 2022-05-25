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

  const skin = computed({
    get() {
      return themeConfig.app.skin.value
    },
    set(value: typeof themeConfig.app.skin.value) {
      themeConfig.app.skin.value = value
      localStorage.setItem(`${themeConfig.app.title}-skin`, value)
    },
  })

  return {
    isDark,
    skin,
  }
}
