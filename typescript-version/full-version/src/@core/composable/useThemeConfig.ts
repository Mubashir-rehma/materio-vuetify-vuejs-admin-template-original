import { useLayouts } from '@layouts'
import { themeConfig } from '@themeConfig'

export const isDarkPreferred = usePreferredDark()

export const useThemeConfig = () => {
  const theme = computed({
    get() {
      return themeConfig.app.theme.value
    },
    set(value: typeof themeConfig.app.theme.value) {
      themeConfig.app.theme.value = value
      localStorage.setItem(`${themeConfig.app.title}-theme`, value.toString())

      // ℹ️ We will not reset semi dark value when turning off dark mode because some user think it as bug
      // if (value !== 'light')
      //   // eslint-disable-next-line @typescript-eslint/no-use-before-define
      //   isVerticalNavSemiDark.value = false
    },
  })

  const isVerticalNavSemiDark = computed({
    get() {
      return themeConfig.verticalNav.isVerticalNavSemiDark.value
    },
    set(value: typeof themeConfig.verticalNav.isVerticalNavSemiDark.value) {
      themeConfig.verticalNav.isVerticalNavSemiDark.value = value
      localStorage.setItem(`${themeConfig.app.title}-isVerticalNavSemiDark`, value.toString())
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
    switchToVerticalNavOnLtOverlayNavBreakpoint,
  } = useLayouts()

  const appLocale = computed({
    get() {
      return themeConfig.app.i18n.defaultLocale
    },
    set(value: typeof themeConfig.app.i18n.defaultLocale) {
      themeConfig.app.i18n.defaultLocale = value
      localStorage.setItem(`${themeConfig.app.title}-language`, value)
    },
  })

  return {
    theme,
    isVerticalNavSemiDark,
    skin,
    appRouteTransition,
    appLocale,

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
    switchToVerticalNavOnLtOverlayNavBreakpoint,

    // syncRtlWithRtlLang,
  }
}
