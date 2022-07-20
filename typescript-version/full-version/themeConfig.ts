/* @unocss-include */
import { breakpointsVuetify } from '@vueuse/core'

// ❗ Logo SVG must be imported with ?raw suffix
import logo from '@/assets/logo.svg?raw'

import { defineThemeConfig } from '@core'
import { EnumSkins, RouteTransitions } from '@core/enums'
import { EnumAppContentLayoutNav, EnumContentWidth, EnumFooterType, EnumNavbarType } from '@layouts/enums'

export const { themeConfig, layoutConfig } = defineThemeConfig({
  app: {
    title: 'Materio',
    logo,
    contentWidth: EnumContentWidth.Boxed,
    contentLayoutNav: EnumAppContentLayoutNav.Vertical,
    overlayNavFromBreakpoint: breakpointsVuetify.md,
    enableI18n: true,
    theme: 'light',
    isRtl: false,
    skin: EnumSkins.Default,
    routeTransition: RouteTransitions.Fade,
  },
  navbar: {
    type: EnumNavbarType.Sticky,
    navbarBlur: true,
  },
  footer: { type: EnumFooterType.Static },
  verticalNav: {
    isVerticalNavCollapsed: false,
    defaultNavItemIconClass: 'i-mdi-circle-outline',
  },
  horizontalNav: {
    type: 'sticky',
    transition: 'fade-transition',
  },
  icons: {
    chevronDown: 'i-mdi-chevron-down',
    chevronRight: 'i-mdi-chevron-right',
    close: 'i-mdi-close',
    verticalNavPinned: 'i-mdi-record-circle-outline',
    verticalNavUnPinned: 'i-mdi-radiobox-blank',
    sectionTitlePlaceholder: 'i-mdi-minus',
  },
})
