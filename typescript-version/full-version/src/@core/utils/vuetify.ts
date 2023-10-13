import { cookieRef, namespaceConfig } from '@layouts/stores/config'
import { themeConfig } from '@themeConfig'

export const resolveVuetifyTheme = (): 'light' | 'dark' => {
  const cookieColorScheme = cookieRef<'light' | 'dark'>('color-scheme', usePreferredDark().value ? 'dark' : 'light')
  const storedTheme = useCookie(namespaceConfig('theme'), { default: () => themeConfig.app.theme }).value

  return storedTheme === 'system'
    ? cookieColorScheme.value
      ? 'dark'
      : 'light'
    : storedTheme as 'light' | 'dark'
}
