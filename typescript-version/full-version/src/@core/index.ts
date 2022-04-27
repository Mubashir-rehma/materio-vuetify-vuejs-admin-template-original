import type { UserConfig as LayoutConfig } from '@layouts/types'
import type { ThemeConfig, UserThemeConfig } from './types'

export const defineThemeConfig = (
  userConfig: UserThemeConfig,
): { themeConfig: ThemeConfig; layoutConfig: LayoutConfig } => {
  // TODO: Improve config assignment
  return {
    themeConfig: {
      app: {
        title: userConfig.app.title,
        logo: userConfig.app.logo,
        contentWidth: ref(userConfig.app.contentWidth),
        contentLayoutNav: ref(userConfig.app.contentLayoutNav),
        overlayNavFromBreakpoint: userConfig.app.overlayNavFromBreakpoint,
        enableI18n: userConfig.app.enableI18n,
        isDark: ref(userConfig.app.isDark),
        isRtl: ref(userConfig.app.isRtl),
      },
      navbar: { type: ref(userConfig.navbar.type) },
      footer: { type: ref(userConfig.footer.type) },
      verticalNav: {
        isVerticalNavCollapsed: ref(userConfig.verticalNav.isVerticalNavCollapsed),
        defaultNavItemIconClass: userConfig.verticalNav.defaultNavItemIconClass,
      },
      horizontalNav: {
        type: ref(userConfig.horizontalNav.type),
      },
      icons: {
        chevronDown: userConfig.icons.chevronDown,
        chevronRight: userConfig.icons.chevronRight,
        close: userConfig.icons.close,
        verticalNavPinned: userConfig.icons.verticalNavPinned,
        verticalNavUnPinned: userConfig.icons.verticalNavUnPinned,
        sectionTitlePlaceholder: userConfig.icons.sectionTitlePlaceholder,
      },
      breakpoints: userConfig.breakpoints,
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
      },
      navbar: {
        type: userConfig.navbar.type,
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
      },
      icons: {
        chevronDown: userConfig.icons.chevronDown,
        chevronRight: userConfig.icons.chevronRight,
        close: userConfig.icons.close,
        verticalNavPinned: userConfig.icons.verticalNavPinned,
        verticalNavUnPinned: userConfig.icons.verticalNavUnPinned,
        sectionTitlePlaceholder: userConfig.icons.sectionTitlePlaceholder,
      },
      breakpoints: userConfig.breakpoints,
    },
  }
}

export { useThemeConfig } from './composable/useThemeConfig'
