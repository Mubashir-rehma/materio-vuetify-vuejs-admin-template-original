/* @unocss-include */
import { defineThemeConfig } from '@core'
import { EnumSkins } from '@core/enums'
import { EnumAppContentLayoutNav, EnumContentWidth, EnumFooterType, EnumNavbarType } from '@layouts/enums'
import { breakpointsVuetify } from '@vueuse/core'

export const { themeConfig, layoutConfig } = defineThemeConfig({
  app: {
    title: 'Sneat',
    logo: '/src/assets/logo.svg',

    // logo: () => h('img', { src: 'assets/colored-logo.png' }, null),
    contentWidth: EnumContentWidth.Boxed,
    contentLayoutNav: EnumAppContentLayoutNav.Vertical,
    overlayNavFromBreakpoint: breakpointsVuetify.md,
    enableI18n: true,
    isDark: false,
    isRtl: false,
    skin: EnumSkins.Default,
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
