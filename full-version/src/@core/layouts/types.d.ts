import type { RouteLocationRaw } from 'vue-router'

// 👉 Vertical nav section title
export interface NavSectionTitle extends Partial<AclProperties> {
  heading: string
}

// 👉 Vertical nav link
declare type ATagTargetAttrValues = '_blank'|'_self'|'_parent'|'_top'|'framename'
declare type ATagRelAttrValues = 'alternate'|'author'|'bookmark'|'external'|'help'|'license'|'next'|'nofollow'|'noopener'|'noreferrer'|'prev'|'search'|'tag'

// TODO: Find a way to get action & subject from user types instead of writing string
interface AclProperties {
  action: string
  subject: string
}

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
