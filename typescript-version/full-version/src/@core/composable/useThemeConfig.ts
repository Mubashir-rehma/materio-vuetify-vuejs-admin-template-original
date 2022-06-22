import { useTheme } from 'vuetify'
import { useLayouts } from '@layouts'
import { themeConfig } from '@themeConfig'

export const useThemeConfig = () => {
  const theme = computed({
    get() {
      return themeConfig.app.theme.value
    },
    set(value: typeof themeConfig.app.theme.value) {
      themeConfig.app.theme.value = value
      localStorage.setItem(`${themeConfig.app.title}-theme`, value.toString())
    },
  })

  const syncVuetifyThemeWithTheme = () => {
    const vuetifyTheme = useTheme()
    watch(theme, val => { vuetifyTheme.name.value = val })
  }

  /*
    ℹ️ Set current theme's surface color in localStorage

    Why? Because when initial loader is shown (before vue is ready) we need to what's the current theme's surface color.
    We will use color stored in localStorage to set the initial loader's background color.

    With this we will be able to show correct background color for the initial loader even before vue identify the current theme.
  */
  const syncInitialLoaderTheme = () => {
    const vuetifyTheme = useTheme()
    watch(theme, val => {
      // ℹ️ We are not using theme.current.colors.surface because watcher is independent and when this watcher is ran `theme` computed is not updated
      localStorage.setItem(`${themeConfig.app.title}-initial-loader-bg`, vuetifyTheme.themes.value[val].colors.surface)
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

  const appRouteTransition = computed({
    get() {
      return themeConfig.app.routeTransition.value
    },
    set(value: typeof themeConfig.app.routeTransition.value) {
      themeConfig.app.routeTransition.value = value
      localStorage.setItem(`${themeConfig.app.title}-transition`, value)
    },
  })

  // `@layouts` exports
  const {
    navbarType,
    isNavbarBlurEnabled,
    footerType,
    isVerticalNavCollapsed,
    appContentWidth,
    appContentLayoutNav,
    horizontalNavType,
    isLessThanOverlayNavBreakpoint,
    isAppRtl,
  } = useLayouts()

  return {
    theme,
    syncVuetifyThemeWithTheme,
    syncInitialLoaderTheme,
    skin,
    appRouteTransition,

    // @layouts exports
    navbarType,
    isNavbarBlurEnabled,
    footerType,
    isVerticalNavCollapsed,
    appContentWidth,
    appContentLayoutNav,
    horizontalNavType,
    isLessThanOverlayNavBreakpoint,
    isAppRtl,
  }
}
