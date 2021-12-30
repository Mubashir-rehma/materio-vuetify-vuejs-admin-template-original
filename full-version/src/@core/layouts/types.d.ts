import type { Breakpoints } from '@vueuse/core'
import type { Ref } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export interface Config {
  app: {
    title: string
    logo: string
    contentWidth: Ref<'boxed' | 'fluid'>
    contentLayoutNav: Ref<'vertical' | 'horizontal'>
    overlayNavFromBreakpoint: number
    enableI18n: boolean
    isRtl: Ref<boolean>
  }
  navbar: {
    type: Ref<'sticky' | 'static' | 'hidden'>
  }
  footer: {
    type: Ref<'sticky' | 'static' | 'hidden'>
  }
  verticalNav: {
    isVerticalNavCollapsed: Ref<boolean>
    defaultNavItemIconClass: string
  }
  horizontalNav: {
    type: Ref<'sticky' | 'static' | 'hidden'>
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
