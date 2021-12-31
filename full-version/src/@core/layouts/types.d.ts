import type { Breakpoints } from '@vueuse/core'
import type { Ref } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export interface UserConfig {
  app: {
    title: string
    logo: string
    contentWidth: 'boxed' | 'fluid'
    contentLayoutNav: 'vertical' | 'horizontal'
    overlayNavFromBreakpoint: number
    enableI18n: boolean
    isRtl: boolean
  }
  navbar: {
    type: 'sticky' | 'static' | 'hidden'
  }
  footer: {
    type: 'sticky' | 'static' | 'hidden'
  }
  verticalNav: {
    isVerticalNavCollapsed: boolean
    defaultNavItemIconClass: string
  }
  horizontalNav: {
    type: 'sticky' | 'static' | 'hidden'
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
  }
  navbar: {
    type: Ref<UserConfig['navbar']['type']>
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
declare type ATagTargetAttrValues = '_blank'|'_self'|'_parent'|'_top'|'framename'
declare type ATagRelAttrValues = 'alternate'|'author'|'bookmark'|'external'|'help'|'license'|'next'|'nofollow'|'noopener'|'noreferrer'|'prev'|'search'|'tag'

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
  children: (NavLink|NavGroup)[]
  disable?: boolean
}

export declare type VerticalNavItems = (NavLink|NavGroup|NavSectionTitle)[]
export declare type HorizontalNavItems = (NavLink|NavGroup)[]
