import { useTheme } from 'vuetify'
import { themeConfig } from '@themeConfig'

const { isAppRtl, theme, skin } = useThemeConfig()

const _syncAppRtl = () => {
  const localStorageLang = ref(localStorage.getItem(`${themeConfig.app.title}-language`))

  const { locale } = useI18n({ useScope: 'global' })

  document.documentElement.setAttribute('lang', locale.value as string)

  // set isAppRtl value on mounted based on current language
  if (themeConfig.app.i18n.langConfig && themeConfig.app.i18n.langConfig.length) {
    themeConfig.app.i18n.langConfig.forEach(lang => {
      if (lang.i18nLang === localStorageLang.value)
        isAppRtl.value = lang.isRTL
    })
  }
}

const _handleSkinChanges = () => {
  const { themes } = useTheme()

  // Create skin default color so that we can revert back to original (default skin) color when switch to default skin from bordered skin
  Object.values(themes.value).forEach(t => {
    t.colors['skin-default-background'] = t.colors.background
    t.colors['skin-default-surface'] = t.colors.surface
  })

  watch(
    skin,
    val => {
      Object.values(themes.value).forEach(t => {
        t.colors.background = t.colors[`skin-${val}-background`]
        t.colors.surface = t.colors[`skin-${val}-surface`]
      })
    },
    { immediate: true },
  )
}

const _syncVuetifyThemeWithTheme = () => {
  const vuetifyTheme = useTheme()

  watch([theme, isDarkPreferred], ([val, _]) => {
    vuetifyTheme.global.name.value = val === 'system'
      ? isDarkPreferred.value
        ? 'dark'
        : 'light'
      : val
  })
}

/*
    ℹ️ Set current theme's surface color in localStorage

    Why? Because when initial loader is shown (before vue is ready) we need to what's the current theme's surface color.
    We will use color stored in localStorage to set the initial loader's background color.

    With this we will be able to show correct background color for the initial loader even before vue identify the current theme.
  */
const _syncInitialLoaderTheme = () => {
  const vuetifyTheme = useTheme()

  watch(theme, () => {
    // ℹ️ We are not using theme.current.colors.surface because watcher is independent and when this watcher is ran `theme` computed is not updated
    localStorage.setItem(`${themeConfig.app.title}-initial-loader-bg`, vuetifyTheme.current.value.colors.surface)
    localStorage.setItem(`${themeConfig.app.title}-initial-loader-color`, vuetifyTheme.current.value.colors.primary)
  }, {
    immediate: true,
  })
}

const initCore = () => {
  _syncInitialLoaderTheme()
  _syncVuetifyThemeWithTheme()
  _handleSkinChanges()
  _syncAppRtl()
}

export default initCore
