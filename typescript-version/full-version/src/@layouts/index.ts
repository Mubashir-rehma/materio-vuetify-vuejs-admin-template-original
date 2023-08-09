import type { Plugin } from 'vue'
import { config } from './config'
import { ContentWidth } from './enums'
import type { UserConfig } from './types'
import { useLayouts } from '@layouts'

const { _setAppDir } = useLayouts()

const getStoredItem = (item: string) => typeof localStorage !== 'undefined' ? localStorage.getItem(item) : null

// 🔌 Plugin
export const createLayouts = (userConfig: UserConfig): Plugin => {
  const localStorageIsVerticalNavCollapsed = getStoredItem(`${userConfig.app.title}-isVerticalNavCollapsed`)

  const localStorageContentWidth = (() => {
    const storageValue = getStoredItem(`${userConfig.app.title}-contentWidth`)

    return Object.values(ContentWidth).find(v => v === storageValue)
  })()

  const localStorageNavbarBlur = getStoredItem(`${userConfig.app.title}-navbarBlur`)

  config.app.title = userConfig.app.title
  config.app.logo = userConfig.app.logo
  config.app.contentWidth.value = localStorageContentWidth || userConfig.app.contentWidth
  config.app.contentLayoutNav.value = userConfig.app.contentLayoutNav
  config.app.overlayNavFromBreakpoint = userConfig.app.overlayNavFromBreakpoint
  config.app.i18n.enable = userConfig.app.i18n.enable
  config.app.i18n.defaultLocale = userConfig.app.i18n.defaultLocale
  config.app.isRtl.value = false
  config.app.iconRenderer = userConfig.app.iconRenderer

  config.navbar.type.value = userConfig.navbar.type
  config.navbar.navbarBlur.value = localStorageNavbarBlur ? JSON.parse(localStorageNavbarBlur) : userConfig.navbar.navbarBlur

  config.footer.type.value = userConfig.footer.type

  config.verticalNav.isVerticalNavCollapsed.value
    = localStorageIsVerticalNavCollapsed
      ? JSON.parse(localStorageIsVerticalNavCollapsed)
      : userConfig.verticalNav.isVerticalNavCollapsed

  config.verticalNav.defaultNavItemIconProps = userConfig.verticalNav.defaultNavItemIconProps

  config.horizontalNav.type.value = userConfig.horizontalNav.type

  config.icons.chevronDown = userConfig.icons.chevronDown
  config.icons.chevronRight = userConfig.icons.chevronRight
  config.icons.close = userConfig.icons.close
  config.icons.verticalNavPinned = userConfig.icons.verticalNavPinned
  config.icons.verticalNavUnPinned = userConfig.icons.verticalNavUnPinned
  config.icons.sectionTitlePlaceholder = userConfig.icons.sectionTitlePlaceholder

  return (): void => {
    _setAppDir(config.app.isRtl.value ? 'rtl' : 'ltr')
  }
}

export * from './components'
export { useLayouts } from './composable/useLayouts'
