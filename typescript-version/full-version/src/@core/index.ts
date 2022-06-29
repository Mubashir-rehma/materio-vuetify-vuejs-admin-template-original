import type { ThemeConfig, UserThemeConfig } from './types'
import { EnumSkins, RouteTransitions } from '@core/enums'
import type { UserConfig as LayoutConfig } from '@layouts/types'

export const defineThemeConfig = (
  userConfig: UserThemeConfig,
): { themeConfig: ThemeConfig; layoutConfig: LayoutConfig } => {
  const localStorageTheme = localStorage.getItem(`${userConfig.app.title}-theme`)
  const localStorageSkin = (() => {
    const storageValue = localStorage.getItem(`${userConfig.app.title}-skin`)

    return Object.values(EnumSkins).find(v => v === storageValue)
  })()
  const localStorageTransition = (() => {
    const storageValue = localStorage.getItem(`${userConfig.app.title}-transition`)

    return Object.values(RouteTransitions).find(v => v === storageValue)
  })()

  return {
    themeConfig: {
      app: {
        title: userConfig.app.title,
        logo: userConfig.app.logo,
        contentWidth: ref(userConfig.app.contentWidth),
        contentLayoutNav: ref(userConfig.app.contentLayoutNav),
        overlayNavFromBreakpoint: userConfig.app.overlayNavFromBreakpoint,
        enableI18n: userConfig.app.enableI18n,
        theme: ref(localStorageTheme || userConfig.app.theme),
        isRtl: ref(userConfig.app.isRtl),
        skin: ref(localStorageSkin || userConfig.app.skin),
        routeTransition: ref(localStorageTransition || userConfig.app.routeTransition),
      },
      navbar: {
        type: ref(userConfig.navbar.type),
        navbarBlur: ref(userConfig.navbar.navbarBlur),
      },
      footer: { type: ref(userConfig.footer.type) },
      verticalNav: {
        isVerticalNavCollapsed: ref(userConfig.verticalNav.isVerticalNavCollapsed),
        defaultNavItemIconClass: userConfig.verticalNav.defaultNavItemIconClass,
      },
      horizontalNav: {
        type: ref(userConfig.horizontalNav.type),
        transition: userConfig.horizontalNav.transition,
      },
      icons: {
        chevronDown: userConfig.icons.chevronDown,
        chevronRight: userConfig.icons.chevronRight,
        close: userConfig.icons.close,
        verticalNavPinned: userConfig.icons.verticalNavPinned,
        verticalNavUnPinned: userConfig.icons.verticalNavUnPinned,
        sectionTitlePlaceholder: userConfig.icons.sectionTitlePlaceholder,
      },
    },
    layoutConfig: {
      app: {
        title: userConfig.app.title,
        logo: userConfig.app.logo,
        contentWidth: userConfig.app.contentWidth,
        contentLayoutNav: userConfig.app.contentLayoutNav,
        overlayNavFromBreakpoint: userConfig.app.overlayNavFromBreakpoint,
        enableI18n: userConfig.app.enableI18n,
        isRtl: userConfig.app.isRtl,
        routeTransition: userConfig.app.routeTransition,
      },
      navbar: {
        type: userConfig.navbar.type,
        navbarBlur: userConfig.navbar.navbarBlur,
      },
      footer: {
        type: userConfig.footer.type,
      },
      verticalNav: {
        isVerticalNavCollapsed: userConfig.verticalNav.isVerticalNavCollapsed,
        defaultNavItemIconClass: userConfig.verticalNav.defaultNavItemIconClass,
      },
      horizontalNav: {
        type: userConfig.horizontalNav.type,
        transition: userConfig.horizontalNav.transition,
      },
      icons: {
        chevronDown: userConfig.icons.chevronDown,
        chevronRight: userConfig.icons.chevronRight,
        close: userConfig.icons.close,
        verticalNavPinned: userConfig.icons.verticalNavPinned,
        verticalNavUnPinned: userConfig.icons.verticalNavUnPinned,
        sectionTitlePlaceholder: userConfig.icons.sectionTitlePlaceholder,
      },
    },
  }
}

export { useThemeConfig } from './composable/useThemeConfig'

