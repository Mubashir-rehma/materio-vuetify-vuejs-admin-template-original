/* @unocss-include */
import type { Config } from '@layouts/types'
import { breakpointsVuetify } from '@vueuse/core'

// TODO: Try to optimize this object so whole object is not reactive
export const config = ref<Config>({
  app: {
    title: 'Sneat',
    logo: '/src/assets/logo.svg',

    // logo: () => h('img', { src: 'assets/colored-logo.png' }, null),
    contentWidth: 'boxed',
    contentLayoutNav: 'horizontal',
    overlayNavFromBreakpoint: breakpointsVuetify.md,
    enableI18n: true,
    isRtl: false,
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
