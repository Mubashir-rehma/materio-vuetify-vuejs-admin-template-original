import store from '@/store'
import { getVuetify } from '@core/utils'
import { computed } from '@vue/composition-api'

export default function useAppConfig() {
  const $vuetify = getVuetify()

  const appContentLayoutNav = computed({
    get: () => store.state.appConfig.app.contentLayoutNav,
    set: value => {
      store.commit('appConfig/UPDATE_CONTENT_LAYOUT_NAV', value)
    },
  })

  const appRouteTransition = computed({
    get: () => store.state.appConfig.app.routeTransition,
    set: value => {
      store.commit('appConfig/UPDATE_APP_ROUTE_TRANSITION', value)
    },
  })

  const appContentWidth = computed({
    get: () => store.state.appConfig.app.contentWidth,
    set: value => {
      store.commit('appConfig/UPDATE_APP_CONTENT_WIDTH', value)
    },
  })

  const menuIsMenuHidden = computed({
    get: () => store.state.appConfig.menu.isMenuHidden,
    set: value => {
      store.commit('appConfig/TOGGLE_MENU_MENU_HIDDEN', value)
    },
  })

  const menuIsVerticalNavMini = computed({
    get: () => store.state.appConfig.menu.isVerticalNavMini,
    set: value => {
      store.commit('appConfig/TOGGLE_MENU_VERTICAL_NAV_MINI', value)
    },
  })

  const appBarType = computed({
    get: () => store.state.appConfig.appBar.type,
    set: value => {
      store.commit('appConfig/UPDATE_APP_BAR_TYPE', value)
    },
  })

  const footerType = computed({
    get: () => store.state.appConfig.footer.type,
    set: value => {
      store.commit('appConfig/UPDATE_FOOTER_TYPE', value)
    },
  })

  const isDark = computed({
    get: () => $vuetify.theme.dark,
    set: value => {
      $vuetify.theme.dark = value
    },
  })

  const isRtl = computed({
    get: () => $vuetify.rtl,
    set: value => {
      $vuetify.rtl = value
    },
  })

  const themes = computed({
    get: () => $vuetify.theme.themes,
    set: value => {
      store.commit('appConfig/UPDATE_THEMES', value)

      // ? We have to assign light and dark individually to make it reflect changes in UI
      // ! `$vuetify.theme.themes = value` isn't reactive
      $vuetify.theme.themes.light = value.light
      $vuetify.theme.themes.dark = value.dark
    },
  })

  return {
    appContentLayoutNav,
    appRouteTransition,
    appContentWidth,
    menuIsMenuHidden,
    menuIsVerticalNavMini,
    appBarType,
    footerType,
    isDark,
    isRtl,
    themes,
  }
}
