import type { UserConfig } from '@layouts/types'
import type { Ref } from 'vue'

export interface UserThemeConfig {
  app: {
    title: UserConfig['app']['title']
    logo: UserConfig['app']['logo']
    contentWidth: UserConfig['app']['contentWidth']
    contentLayoutNav: UserConfig['app']['contentLayoutNav']
    overlayNavFromBreakpoint: UserConfig['app']['overlayNavFromBreakpoint']
    enableI18n: UserConfig['app']['enableI18n']
    isRtl: UserConfig['app']['isRtl']
  }
  navbar: {
    type: UserConfig['navbar']['type']
  }
  footer: {
    type: UserConfig['footer']['type']
  }
  verticalNav: {
    isVerticalNavCollapsed: UserConfig['verticalNav']['isVerticalNavCollapsed']
    defaultNavItemIconClass: UserConfig['verticalNav']['defaultNavItemIconClass']
  }
  horizontalNav: {
    type: UserConfig['horizontalNav']['type']
  }
  icons: {
    chevronDown: UserConfig['icons']['chevronDown']
    chevronRight: UserConfig['icons']['chevronRight']
    close: UserConfig['icons']['close']
    verticalNavPinned: UserConfig['icons']['verticalNavPinned']
    verticalNavUnPinned: UserConfig['icons']['verticalNavUnPinned']
    sectionTitlePlaceholder: UserConfig['icons']['sectionTitlePlaceholder']
  }

  // TODO: Check do we need this breakpoints config
  breakpoints: UserConfig['breakpoints']
}

/*
  TODO: use MergeDeep for DRY
   Waiting for https://github.com/sindresorhus/type-fest/issues/150
*/
export interface ThemeConfig {
  app: {
    title: UserThemeConfig['app']['title']
    logo: UserThemeConfig['app']['logo']
    contentWidth: Ref<UserThemeConfig['app']['contentWidth']>
    contentLayoutNav: Ref<UserThemeConfig['app']['contentLayoutNav']>
    overlayNavFromBreakpoint: UserThemeConfig['app']['overlayNavFromBreakpoint']
    enableI18n: UserThemeConfig['app']['enableI18n']
    isRtl: Ref<UserThemeConfig['app']['isRtl']>
  }
  navbar: {
    type: Ref<UserThemeConfig['navbar']['type']>
  }
  footer: {
    type: Ref<UserThemeConfig['footer']['type']>
  }
  verticalNav: {
    isVerticalNavCollapsed: Ref<UserThemeConfig['verticalNav']['isVerticalNavCollapsed']>
    defaultNavItemIconClass: UserThemeConfig['verticalNav']['defaultNavItemIconClass']
  }
  horizontalNav: {
    type: Ref<UserThemeConfig['horizontalNav']['type']>
  }
  icons: {
    chevronDown: UserThemeConfig['icons']['chevronDown']
    chevronRight: UserThemeConfig['icons']['chevronRight']
    close: UserThemeConfig['icons']['close']
    verticalNavPinned: UserThemeConfig['icons']['verticalNavPinned']
    verticalNavUnPinned: UserThemeConfig['icons']['verticalNavUnPinned']
    sectionTitlePlaceholder: UserThemeConfig['icons']['sectionTitlePlaceholder']
  }
  breakpoints: UserThemeConfig['breakpoints']
}
