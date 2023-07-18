import { useStorage } from '@vueuse/core'
import { themeConfig } from '@themeConfig'

export const resolveVuetifyTheme = () => {
  const storedTheme = useStorage(`${themeConfig.app.title}-theme`, themeConfig.app.theme.value).value

  return storedTheme === 'system'
    ? isDarkPreferred.value
      ? 'dark'
      : 'light'
    : storedTheme
}
