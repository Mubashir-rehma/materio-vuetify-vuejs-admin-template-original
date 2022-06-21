import type { Breakpoints } from '@vueuse/core'
import type { Component, Ref } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import type { EnumAppContentLayoutNav, EnumContentWidth, EnumFooterType, EnumNavbarType } from './enums'

// TODO: Check below listed properties should be here or in core
export interface UserConfig {
  app: {
    title: string
    logo: string
    contentWidth: EnumContentWidth
    contentLayoutNav: EnumAppContentLayoutNav
    overlayNavFromBreakpoint: number
    enableI18n: boolean
    isRtl: boolean
    routeTransition: string
  }
  navbar: {
    type: EnumNavbarType
    navbarBlur: boolean
  }
  footer: {
    type: EnumFooterType
  }
  verticalNav: {
    isVerticalNavCollapsed: boolean
    defaultNavItemIconClass: string
  }
  horizontalNav: {
    type: 'sticky' | 'static' | 'hidden'
    transition?: string | Component
  }
  icons: {
    chevronDown: string
    chevronRight: string
    close: string
    verticalNavPinned: string
    verticalNavUnPinned: string
    sectionTitlePlaceholder: string
  }

  // TODO: Check do we need this breakpoints config
  breakpoints: Breakpoints
}

/*
  TODO: use MergeDeep for DRY
   Waiting for https://github.com/sindresorhus/type-fest/issues/150
*/
export interface Config {
  app: {
    title: UserConfig['app']['title']
    logo: UserConfig['app']['logo']
    contentWidth: Ref<UserConfig['app']['contentWidth']>
    contentLayoutNav: Ref<UserConfig['app']['contentLayoutNav']>
    overlayNavFromBreakpoint: UserConfig['app']['overlayNavFromBreakpoint']
    enableI18n: UserConfig['app']['enableI18n']
    isRtl: Ref<UserConfig['app']['isRtl']>
    routeTransition: ref<UserConfig['app']['routeTransition']>
  }
  navbar: {
    type: Ref<UserConfig['navbar']['type']>
    navbarBlur: Ref<UserConfig['navbar']['navbarBlur']>
  }
  footer: {
    type: Ref<UserConfig['footer']['type']>
  }
  verticalNav: {
    isVerticalNavCollapsed: Ref<UserConfig['verticalNav']['isVerticalNavCollapsed']>
    defaultNavItemIconClass: UserConfig['verticalNav']['defaultNavItemIconClass']
  }
  horizontalNav: {
    type: Ref<UserConfig['horizontalNav']['type']>
    transition?: UserConfig['horizontalNav']['transition']
  }
  icons: {
    chevronDown: UserConfig['icons']['chevronDown']
    chevronRight: UserConfig['icons']['chevronRight']
    close: UserConfig['icons']['close']
    verticalNavPinned: UserConfig['icons']['verticalNavPinned']
    verticalNavUnPinned: UserConfig['icons']['verticalNavUnPinned']
    sectionTitlePlaceholder: UserConfig['icons']['sectionTitlePlaceholder']
  }
  breakpoints: UserConfig['breakpoints']
}

// TODO: Find a way to get action & subject from user types instead of writing string
interface AclProperties {
  action: string
  subject: string
}

// 👉 Vertical nav section title
export interface NavSectionTitle extends Partial<AclProperties> {
  heading: string
}

// 👉 Vertical nav link
declare type ATagTargetAttrValues = '_blank' | '_self' | '_parent' | '_top' | 'framename'
declare type ATagRelAttrValues =
  | 'alternate'
  | 'author'
  | 'bookmark'
  | 'external'
  | 'help'
  | 'license'
  | 'next'
  | 'nofollow'
  | 'noopener'
  | 'noreferrer'
  | 'prev'
  | 'search'
  | 'tag'

export interface NavLinkProps {
  to?: RouteLocationRaw | string | null
  href?: string
  target?: ATagTargetAttrValues
  rel?: ATagRelAttrValues
}

export interface NavLink extends NavLinkProps, Partial<AclProperties> {
  title: string
  icon?: string
  badgeContent?: string
  badgeClass?: string
  disable?: boolean
}

// 👉 Vertical nav group
export interface NavGroup extends Partial<AclProperties> {
  title: string
  icon?: string
  badgeContent?: string
  badgeClass?: string
  children: (NavLink | NavGroup)[]
  disable?: boolean
}

export declare type VerticalNavItems = (NavLink | NavGroup | NavSectionTitle)[]
export declare type HorizontalNavItems = (NavLink | NavGroup)[]

// 👉 Components ========================

interface I18nLanguage {
  label: string
  flagpackClass: string
  i18nLang: string
}

// avatar | text | icon
// Thanks: https://stackoverflow.com/a/60617060/10796681
type Notification = {
  title: str
  subtitle: str
  time: str
  color?: str
} & (
  | { img: str; text?: never; icon?: never }
  | { img?: never; text: str; icon?: never }
  | { img?: never; text?: never; icon: str }
)

interface ThemeSwitcherTheme {
  name: string
  icon: string
}
