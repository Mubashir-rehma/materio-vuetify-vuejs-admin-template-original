import { breakpointsVuetify } from '@vueuse/core'

// @ts-expect-error There won't be declaration file for it
import { VIcon } from 'vuetify/lib/components/VIcon/VIcon'

// ❗ Logo SVG must be imported with ?raw suffix
import logo from '@/assets/logo.svg?raw'

import { defineThemeConfig } from '@core'
import { EnumSkins, RouteTransitions } from '@core/enums'
import { EnumAppContentLayoutNav, EnumContentWidth, EnumFooterType, EnumNavbarType } from '@layouts/enums'

export const { themeConfig, layoutConfig } = defineThemeConfig({
  app: {
    title: 'Materio',
    logo: h('div', { innerHTML: logo, class: 'text-primary', style: 'line-height:0' }),
    contentWidth: EnumContentWidth.Boxed,
    contentLayoutNav: EnumAppContentLayoutNav.Vertical,
    overlayNavFromBreakpoint: breakpointsVuetify.md,
    enableI18n: true,
    theme: 'light',
    isRtl: false,
    skin: EnumSkins.Default,
    routeTransition: RouteTransitions.Fade,
    iconRenderer: VIcon,
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
    verticalNavPinned: { icon: 'mdi-radiobox-marked' },
    verticalNavUnPinned: { icon: 'mdi-radiobox-blank' },
    sectionTitlePlaceholder: { icon: 'mdi-minus' },
  },
})
