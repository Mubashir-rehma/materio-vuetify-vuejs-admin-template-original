/* @unocss-include */
import { breakpointsVuetify } from '@vueuse/core'

// ❗ Logo SVG must be imported with ?raw suffix
import { Icon } from '@iconify/vue'
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
    iconRenderer: Icon,
  },
  navbar: {
    type: EnumNavbarType.Sticky,
    navbarBlur: true,
  },
  footer: { type: EnumFooterType.Static },
  verticalNav: {
    isVerticalNavCollapsed: false,
    defaultNavItemIconProps: { icon: 'mdi-circle-outline' },
    isVerticalNavSemiDark: false,
  },
  horizontalNav: {
    type: 'sticky',
    transition: 'slide-y-reverse-transition',
  },
  icons: {
    chevronDown: { icon: 'mdi-chevron-down' },
    chevronRight: { icon: 'mdi-chevron-right' },
    close: { icon: 'mdi-close' },
    verticalNavPinned: { icon: 'mdi-record-circle-outline' },
    verticalNavUnPinned: { icon: 'mdi-radiobox-blank' },
    sectionTitlePlaceholder: { icon: 'mdi-minus' },
  },
})
