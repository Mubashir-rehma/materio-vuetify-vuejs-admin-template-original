import { injectionKeyIsVerticalNavHovered } from '@layouts'
import { config } from '@layouts/config'
import type { MaybeRef } from '@vueuse/shared'
import type { Ref } from 'vue'

// TODO: Use config from this composition instead of getting it via config object
// TODO: Check if we need useLayout?

export const useLayouts = () => {
  const navbarType = computed({
    get() {
      return config.navbar.type.value
    },
    set(value: typeof config.navbar.type.value) {
      config.navbar.type.value = value
    },
  })

  const _setAppDir = (dir: 'ltr' | 'rtl') => {
    document.documentElement.setAttribute('dir', dir)
  }

  const footerType = computed({
    get() {
      return config.footer.type.value
    },
    set(value: typeof config.footer.type.value) {
      config.footer.type.value = value
    },
  })

  const isVerticalNavCollapsed = computed({
    get() {
      return config.verticalNav.isVerticalNavCollapsed.value
    },
    set(val: typeof config.verticalNav.isVerticalNavCollapsed.value) {
      config.verticalNav.isVerticalNavCollapsed.value = val
    },
  })

  const appContentWidth = computed({
    get() {
      return config.app.contentWidth.value
    },
    set(val: typeof config.app.contentWidth.value) {
      config.app.contentWidth.value = val
    },
  })

  const appContentLayoutNav = computed({
    get() {
      return config.app.contentLayoutNav.value
    },
    set(val: typeof config.app.contentLayoutNav.value) {
      config.app.contentLayoutNav.value = val
    },
  })

  const horizontalNavType = computed({
    get() {
      return config.horizontalNav.type.value
    },
    set(value: typeof config.horizontalNav.type.value) {
      config.horizontalNav.type.value = value
    },
  })

  const isLessThanOverlayNavBreakpoint = computed(() => {
    return (windowWidth: MaybeRef<number>) => unref(windowWidth) < config.app.overlayNavFromBreakpoint
  })

  const _layoutClasses = computed(() => (windowWidth: MaybeRef<number>, windowScrollY: MaybeRef<number>) => [
    `layout-nav-type-${appContentLayoutNav.value}`,
    `layout-navbar-${navbarType.value}`,
    `layout-footer-${footerType.value}`,
    { 'layout-vertical-nav-collapsed': isVerticalNavCollapsed.value && appContentLayoutNav.value === 'vertical' && !isLessThanOverlayNavBreakpoint.value(windowWidth) },
    { [`horizontal-nav-${horizontalNavType.value}`]: appContentLayoutNav.value === 'horizontal' },
    `layout-content-width-${appContentWidth.value}`,
    { 'layout-overlay-nav': isLessThanOverlayNavBreakpoint.value(windowWidth) },
    { 'window-scrolled': unref(windowScrollY) },
  ])

  /*
    ℹ️ We are getting `isVerticalNavHovered` as param instead of via `inject` because
        we are using this in `VerticalNav.vue` component which provide it and I guess because
        same component is providing & injecting we are getting undefined error
  */
  const isVerticalNavMini = (isVerticalNavHovered: Ref<boolean> = null) => {
    const isVerticalNavHoveredLocal = isVerticalNavHovered || inject(injectionKeyIsVerticalNavHovered)

    return computed(() => isVerticalNavCollapsed.value && !isVerticalNavHoveredLocal.value)
  }

  const dynamicI18nProps = computed(() => (key: string, tag = 'span') => {
    const isI18nEnabled = config.app.enableI18n

    return {
      keypath: isI18nEnabled ? key : null,
      tag: isI18nEnabled ? tag : null,
    }
  })

  const isAppRtl = computed({
    get() {
      return config.app.isRtl.value
    },
    set(value: typeof config.app.isRtl.value) {
      config.app.isRtl.value = value
      _setAppDir(value ? 'rtl' : 'ltr')
    },
  })

  return {
    navbarType,
    footerType,
    isVerticalNavCollapsed,
    appContentWidth,
    appContentLayoutNav,
    horizontalNavType,
    isLessThanOverlayNavBreakpoint,
    _layoutClasses,
    isVerticalNavMini,
    dynamicI18nProps,
    isAppRtl,
    _setAppDir,
  }
}
