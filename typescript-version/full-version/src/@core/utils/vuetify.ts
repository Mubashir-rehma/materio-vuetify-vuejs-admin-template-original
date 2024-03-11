import { cookieRef } from '@layouts/stores/config'

export const resolveVuetifyTheme = (defaultTheme: 'light' | 'dark' | 'system' = 'light'): 'light' | 'dark' => {
  const cookieColorScheme = cookieRef<'light' | 'dark'>('color-scheme', usePreferredDark().value ? 'dark' : 'light')
  const storedTheme = cookieRef('theme', defaultTheme).value

  return storedTheme === 'system'
    ? cookieColorScheme.value === 'dark'
      ? 'dark'
      : 'light'
    : storedTheme as 'light' | 'dark'
}
