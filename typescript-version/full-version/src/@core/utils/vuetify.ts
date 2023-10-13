import { namespaceConfig } from '@layouts/stores/config'
import { themeConfig } from '@themeConfig'

export const resolveVuetifyTheme = (): 'light' | 'dark' => {
  const isDarkPreferred = usePreferredDark()
  const storedTheme = useCookie(namespaceConfig('theme'), { default: () => themeConfig.app.theme }).value

  return storedTheme === 'system'
    ? isDarkPreferred.value
      ? 'dark'
      : 'light'
    : storedTheme as 'light' | 'dark'
}
