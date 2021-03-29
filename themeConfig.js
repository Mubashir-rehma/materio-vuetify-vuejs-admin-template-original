import { mdiCheckboxBlankCircleOutline } from '@mdi/js'

const themeConfig = {
  app: {
    name: 'Material',
    logo: '/logo.svg',
    isDark: false,
    isRtl: false,
    contentLayoutNav: 'vertical',
    routeTransition: 'scroll-x-transition',
    contentWidth: 'boxed',
  },
  menu: {
    isMenuHidden: false,
    isVerticalNavMini: false,
    verticalMenuExpand: false,
    groupChildIcon: mdiCheckboxBlankCircleOutline,
  },
  appBar: {
    /*
    ! In Content Layout Horizontal Nav type `hidden` value won't work
    ! In Content Layout Horizontal Nav type value of `type` will affect both Appbar and Horizontal Navigation Menu
    */
    type: 'fixed',
  },
  footer: {
    type: 'static',
  },
  themes: {
    light: {
      primary: '#7367F0',
      accent: '#0d6efd',
      secondary: '#5c636a',
      success: '#62B726',
      info: '#32B8F2',
      warning: '#FFBF3F',
      error: '#FF5238',
    },
    dark: {
      primary: '#7367F0',
      accent: '#0d6efd',
      secondary: '#5c636a',
      success: '#62B726',
      info: '#32B8F2',
      warning: '#FFBF3F',
      error: '#FF5238',
    },
  },
}

export default themeConfig
