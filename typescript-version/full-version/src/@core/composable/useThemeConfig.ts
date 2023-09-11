import { useStorage } from '@vueuse/core'
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
      useStorage<typeof themeConfig.app.theme.value>(`${themeConfig.app.title}-theme`, null).value = value.toString()

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
      useStorage<typeof themeConfig.verticalNav.isVerticalNavSemiDark.value>(`${themeConfig.app.title}-isVerticalNavSemiDark`, null).value = value
    },
  })

  const skin = computed({
    get() {
      return themeConfig.app.skin.value
    },
    set(value: typeof themeConfig.app.skin.value) {
      themeConfig.app.skin.value = value
      useStorage<typeof themeConfig.app.skin.value>(`${themeConfig.app.title}-skin`, null).value = value
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

  return {
    theme,
    isVerticalNavSemiDark,
    skin,

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
