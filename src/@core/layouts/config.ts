/* @unocss-include */
import type { Breakpoints } from '@vueuse/core'
import { breakpointsVuetify } from '@vueuse/core'

// TODO: Export this to def file and use it instead of string
export const enum NavbarTypes {
  Sticky = 'sticky',
  Static = 'static',
  Hidden = 'hidden'
}

// TODO: Export this from def file
// TODO: Try to optimize this object so whole object is not reactive
export interface Config {
  app: {
    title: string
    logo: string
    contentWidth: 'boxed' | 'fluid'
    contentLayoutNav: 'vertical' | 'horizontal'
    overlayNavFromBreakpoint: number
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

export const config = ref<Config>({
  app: {
    title: 'Sneat',
    logo: '/src/assets/logo.svg',

    // logo: () => h('img', { src: 'assets/colored-logo.png' }, null),
    contentWidth: 'boxed',
    contentLayoutNav: 'vertical',
    overlayNavFromBreakpoint: breakpointsVuetify.md,
  },
  navbar: {
    type: 'sticky',
  },
  footer: { type: 'static' },
  verticalNav: {
    isVerticalNavCollapsed: false,
    defaultNavItemIconClass: 'i-mdi-circle-outline',
  },
  horizontalNav: {
    type: 'sticky',
  },
  icons: {
    chevronDown: 'i-mdi-chevron-down',
    chevronRight: 'i-mdi-chevron-right',
    close: 'i-mdi-close',
    verticalNavPinned: 'i-mdi-record-circle-outline',
    verticalNavUnPinned: 'i-mdi-radiobox-blank',
    sectionTitlePlaceholder: 'i-mdi-minus',
  },
  breakpoints: breakpointsVuetify,
})
