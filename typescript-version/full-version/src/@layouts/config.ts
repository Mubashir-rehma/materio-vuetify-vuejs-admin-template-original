import { breakpointsVuetify } from '@vueuse/core'
import { EnumAppContentLayoutNav, EnumContentWidth, EnumFooterType, EnumNavbarType } from '@layouts/enums'
import type { Config } from '@layouts/types'

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
    defaultNavItemIconProps: { icon: 'mdi-circle-outline' },
  },
  horizontalNav: {
    type: ref('sticky'),
  },
  icons: {
    chevronDown: { icon: 'mdi-chevron-down' },
    chevronRight: { icon: 'mdi-chevron-right' },
    close: { icon: 'mdi-close' },
    verticalNavPinned: { icon: 'mdi-record-circle-outline' },
    verticalNavUnPinned: { icon: 'mdi-radiobox-blank' },
    sectionTitlePlaceholder: { icon: 'mdi-minus' },
  },
}
