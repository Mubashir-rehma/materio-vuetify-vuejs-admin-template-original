import { breakpointsVuetify } from '@vueuse/core'
import { VIcon } from 'vuetify/components/VIcon'
import { defineThemeConfig } from '@core'
import { Skins } from '@core/enums'

// ❗ Logo SVG must be imported with ?raw suffix
import logo from '@images/logo.svg?raw'
import { AppContentLayoutNav, ContentWidth, FooterType, NavbarType } from '@layouts/enums'

export const { themeConfig, layoutConfig } = defineThemeConfig({
  app: {
    title: 'materio',

    // ❗ if you have SVG logo and want it to adapt according to theme color, you have to apply color as `color: rgb(var(--v-global-theme-primary))`
    logo: h('div', { innerHTML: logo, style: 'line-height:0; color: rgb(var(--v-global-theme-primary))' }),
    contentWidth: ContentWidth.Boxed,
    contentLayoutNav: AppContentLayoutNav.Vertical,
    overlayNavFromBreakpoint: breakpointsVuetify.md + 16, // 16 for scrollbar. Docs: https://next.vuetifyjs.com/en/features/display-and-platform/
    i18n: {
      enable: false,
      defaultLocale: 'en',
      langConfig: [
        {
          label: 'English',
          i18nLang: 'en',
          isRTL: false,
        },
        {
          label: 'French',
          i18nLang: 'fr',
          isRTL: false,
        },
        {
          label: 'Arabic',
          i18nLang: 'ar',
          isRTL: true,
        },
      ],
    },
    theme: 'system',
    skin: Skins.Default,
    iconRenderer: VIcon,
  },
  navbar: {
    type: NavbarType.Sticky,
    navbarBlur: true,
  },
  footer: { type: FooterType.Static },
  verticalNav: {
    isVerticalNavCollapsed: false,
    defaultNavItemIconProps: { icon: 'ri-circle-line' },
    isVerticalNavSemiDark: false,
  },
  horizontalNav: {
    type: 'sticky',
    transition: 'slide-y-reverse-transition',
    popoverOffset: 4,
  },

  /*
    // ℹ️  In below Icons section, you can specify icon for each component. Also you can use other props of v-icon component like `color` and `size` for each icon.
    // Such as: chevronDown: { icon: 'ri-arrow-down-s-line', color:'primary', size: '24' },
    */
  icons: {
    chevronDown: { icon: 'ri-arrow-down-s-line' },
    chevronRight: { icon: 'ri-arrow-right-s-line' },
    close: { icon: 'ri-close-line' },
    verticalNavPinned: { icon: 'ri-radio-button-line' },
    verticalNavUnPinned: { icon: 'ri-circle-line' },
    sectionTitlePlaceholder: { icon: 'ri-subtract-line' },
  },
})
