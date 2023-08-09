import { useStorage } from '@vueuse/core'
import type { ValueOf } from 'type-fest'
import type { ThemeConfig, UserThemeConfig } from './types'
import type { UserConfig as LayoutConfig } from '@layouts/types'
import type { RouteTransitions, Skins } from '@core/enums'

export const defineThemeConfig = (
  userConfig: UserThemeConfig,
): { themeConfig: ThemeConfig; layoutConfig: LayoutConfig } => {
  return {
    themeConfig: {
      app: {
        title: userConfig.app.title,
        logo: userConfig.app.logo,
        contentWidth: ref(userConfig.app.contentWidth),
        contentLayoutNav: ref(userConfig.app.contentLayoutNav),
        overlayNavFromBreakpoint: userConfig.app.overlayNavFromBreakpoint,
        i18n: {
          enable: userConfig.app.i18n.enable,
          defaultLocale: userConfig.app.i18n.defaultLocale,
          langConfig: userConfig.app.i18n.langConfig,
        },
        theme: useStorage(`${userConfig.app.title}-theme`, userConfig.app.theme),
        skin: useStorage<ValueOf<typeof Skins>>(`${userConfig.app.title}-skin`, userConfig.app.skin),
        routeTransition: useStorage<ValueOf<typeof RouteTransitions>>(`${userConfig.app.title}-transition`, userConfig.app.routeTransition),
        iconRenderer: userConfig.app.iconRenderer,
      },
      navbar: {
        type: ref(userConfig.navbar.type),
        navbarBlur: ref(userConfig.navbar.navbarBlur),
      },
      footer: { type: ref(userConfig.footer.type) },
      verticalNav: {
        isVerticalNavCollapsed: ref(userConfig.verticalNav.isVerticalNavCollapsed),
        defaultNavItemIconProps: userConfig.verticalNav.defaultNavItemIconProps,
        isVerticalNavSemiDark: useStorage(`${userConfig.app.title}-isVerticalNavSemiDark`, userConfig.verticalNav.isVerticalNavSemiDark),
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
        i18n: {
          enable: userConfig.app.i18n.enable,
          defaultLocale: userConfig.app.i18n.defaultLocale,
        },
        iconRenderer: userConfig.app.iconRenderer,
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
        defaultNavItemIconProps: userConfig.verticalNav.defaultNavItemIconProps,
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
