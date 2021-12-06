import type { RouteLocationRaw } from 'vue-router'

// 👉 Vertical nav section title
export interface NavSectionTitle {
  heading: string
}

// 👉 Vertical nav link
declare type ATagTargetAttrValues = '_blank'|'_self'|'_parent'|'_top'|'framename'
declare type ATagRelAttrValues = 'alternate'|'author'|'bookmark'|'external'|'help'|'license'|'next'|'nofollow'|'noopener'|'noreferrer'|'prev'|'search'|'tag'

export interface NavLinkProps {
  to?: RouteLocationRaw | string
  href?: string
  target?: ATagTargetAttrValues
  rel?: ATagRelAttrValues
}

export interface NavLink extends NavLinkProps {
  title: string
  icon?: string
  badgeContent?: string
  badgeClass?: string
}

// 👉 Vertical nav group
export interface NavGroup {
  title: string
  icon?: string
  badgeContent?: string
  badgeClass?: string
  children: (NavLink|NavGroup)[]
}

export declare type VerticalNavItems = (NavLink|NavGroup|NavSectionTitle)[]
export declare type HorizontalNavItems = (NavLink|NavGroup)[]
