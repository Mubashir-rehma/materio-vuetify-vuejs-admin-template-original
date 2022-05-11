/* @unocss-include */
import { EnumAppContentLayoutNav, EnumContentWidth, EnumFooterType, EnumNavbarType } from '@layouts/enums'
import type { Config } from '@layouts/types'
import { breakpointsVuetify } from '@vueuse/core'

// TODO: Try to optimize this object so whole object is not reactive
export const config: Config = {
  app: {
    title: 'Title',
    logo: '/src/assets/logo.svg',

    // logo: () => h('img', { src: 'assets/colored-logo.png' }, null),
    contentWidth: ref(EnumContentWidth.Boxed),
    contentLayoutNav: ref(EnumAppContentLayoutNav.Vertical),
    overlayNavFromBreakpoint: breakpointsVuetify.md,
    enableI18n: true,
    isRtl: ref(false),
  },
  navbar: {
    type: ref(EnumNavbarType.Sticky),
    navbarBlur: ref(true),
  },
  footer: { type: ref(EnumFooterType.Static) },
  verticalNav: {
    isVerticalNavCollapsed: ref(false),
    defaultNavItemIconClass: 'i-mdi-circle-outline',
  },
  horizontalNav: {
    type: ref('sticky'),
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
}
