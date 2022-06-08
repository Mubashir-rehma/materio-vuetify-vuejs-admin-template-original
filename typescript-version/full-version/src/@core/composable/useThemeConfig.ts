import { themeConfig } from '@themeConfig'
import { useTheme } from 'vuetify'

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

  const syncVuetifyThemeWithIsDark = () => {
    const theme = useTheme()
    watch(isDark, val => {
      theme.name.value = val ? 'dark' : 'light'
    })
  }

  /*
    ℹ️ Set current theme's surface color in localStorage

    Why? Because when initial loader is shown (before vue is ready) we need to what's the current theme's surface color.
    We will use color stored in localStorage to set the initial loader's background color.

    With this we will be able to show correct background color for the initial loader even before vue identify the current theme.
  */
  const syncInitialLoaderTheme = () => {
    const theme = useTheme()
    watch(isDark, val => {
      // ℹ️ We are not using theme.current.colors.surface because watcher is independent and when this watcher is ran `theme` computed is not updated
      localStorage.setItem(`${themeConfig.app.title}-initial-loader-bg`, theme.themes.value[val ? 'dark' : 'light'].colors.surface)
    }, {
      immediate: true,
    })
  }

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
    syncVuetifyThemeWithIsDark,
    syncInitialLoaderTheme,
    skin,
  }
}
