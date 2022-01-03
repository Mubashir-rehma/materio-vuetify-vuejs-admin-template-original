import { useLayouts } from '@layouts'
import type { InjectionKey, Plugin, Ref } from 'vue'
import { config } from './config'
import type { UserConfig } from './types'

const { _setAppDir } = useLayouts()

export const createLayouts = (userConfig: UserConfig): Plugin => {
  // TODO: Find a better way to assign config
  config.app.title = userConfig.app.title
  config.app.logo = userConfig.app.logo
  config.app.contentWidth = ref(userConfig.app.contentWidth)
  config.app.contentLayoutNav = ref(userConfig.app.contentLayoutNav)
  config.app.overlayNavFromBreakpoint = userConfig.app.overlayNavFromBreakpoint
  config.app.enableI18n = userConfig.app.enableI18n
  const localStorageIsAppRtl = localStorage.getItem('isAppRtl')
  config.app.isRtl = ref(localStorageIsAppRtl ? JSON.parse(localStorageIsAppRtl) : userConfig.app.isRtl)

  config.navbar.type = ref(userConfig.navbar.type)
  config.footer.type = ref(userConfig.footer.type)

  const localStorageIsVerticalNavCollapsed = localStorage.getItem('isVerticalNavCollapsed')
  config.verticalNav.isVerticalNavCollapsed = ref(localStorageIsVerticalNavCollapsed ? JSON.parse(localStorageIsVerticalNavCollapsed) : userConfig.verticalNav.isVerticalNavCollapsed)
  config.verticalNav.defaultNavItemIconClass = userConfig.verticalNav.defaultNavItemIconClass

  config.horizontalNav.type = ref(userConfig.horizontalNav.type)

  config.icons.chevronDown = userConfig.icons.chevronDown
  config.icons.chevronRight = userConfig.icons.chevronRight
  config.icons.close = userConfig.icons.close
  config.icons.verticalNavPinned = userConfig.icons.verticalNavPinned
  config.icons.verticalNavUnPinned = userConfig.icons.verticalNavUnPinned
  config.icons.sectionTitlePlaceholder = userConfig.icons.sectionTitlePlaceholder

  return (): void => {
    console.info('installing layouts...')

    watch(config.verticalNav.isVerticalNavCollapsed, val => {
      localStorage.setItem('isVerticalNavCollapsed', String(val))
    })

    watch(config.app.isRtl, val => {
      localStorage.setItem('isAppRtl', String(val))
    })

    _setAppDir(config.app.isRtl.value ? 'rtl' : 'ltr')
  }
}

export const injectionKeyIsVerticalNavHovered: InjectionKey<Ref<boolean>> = Symbol('isVerticalNavHovered')

export { useDynamicVhCssProperty } from './composable/useDynamicVhCssProperty'
export { useLayouts } from './composable/useLayouts'

