import { useLayouts } from '@layouts'
import type { InjectionKey, Plugin, Ref } from 'vue'
import { config } from './config'
import type { UserConfig } from './types'

const { _setAppDir } = useLayouts()

// 🔌 Plugin
export const createLayouts = (userConfig: UserConfig): Plugin => {
  // TODO: Find a better way to assign config
  config.app.title = userConfig.app.title
  config.app.logo = userConfig.app.logo
  config.app.contentWidth.value = userConfig.app.contentWidth
  config.app.contentLayoutNav.value = userConfig.app.contentLayoutNav
  config.app.overlayNavFromBreakpoint = userConfig.app.overlayNavFromBreakpoint
  config.app.enableI18n = userConfig.app.enableI18n
  const localStorageIsAppRtl = localStorage.getItem('isAppRtl')
  config.app.isRtl.value = localStorageIsAppRtl ? JSON.parse(localStorageIsAppRtl) : userConfig.app.isRtl

  config.navbar.type.value = userConfig.navbar.type
  config.navbar.navbarBlur.value = userConfig.navbar.navbarBlur

  config.footer.type.value = userConfig.footer.type

  const localStorageIsVerticalNavCollapsed = localStorage.getItem('isVerticalNavCollapsed')
  config.verticalNav.isVerticalNavCollapsed.value
    = localStorageIsVerticalNavCollapsed
      ? JSON.parse(localStorageIsVerticalNavCollapsed)
      : userConfig.verticalNav.isVerticalNavCollapsed

  config.verticalNav.defaultNavItemIconClass = userConfig.verticalNav.defaultNavItemIconClass

  config.horizontalNav.type.value = userConfig.horizontalNav.type

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

