import { mdiCheckboxBlankCircleOutline } from '@mdi/js'

const themeConfig = {
  app: {
    name: 'Maxify',
    logo: '/logo.svg',
    isDark: false,
    isRtl: false,
    contentLayoutNav: 'horizontal',
    routeTransition: 'scroll-x-transition',
    contentWidth: 'boxed',
  },
  menu: {
    isMenuHidden: false,
    isVerticalNavMini: false,
    verticalMenuAccordion: true,
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
      primary: '#9155FD',
      accent: '#0d6efd',
      secondary: '#656971',
      success: '#56CA00',
      info: '#16B1FF',
      warning: '#FFB400',
      error: '#FF4C51',
    },
    dark: {
      primary: '#9155FD',
      accent: '#0d6efd',
      secondary: '#656971',
      success: '#56CA00',
      info: '#16B1FF',
      warning: '#FFB400',
      error: '#FF4C51',
    },
  },
}

export default themeConfig
