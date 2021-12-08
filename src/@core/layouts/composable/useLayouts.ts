import { injectionKeyIsVerticalNavHovered } from '@layouts'
import { config } from '@layouts/config'
import type { MaybeRef } from '@vueuse/shared'
import type { Ref } from 'vue'

export const useLayouts = () => {
  const navbarType = computed({
    get() {
      return config.value.navbar.type
    },
    set(value: typeof config.value.navbar.type) {
      config.value.navbar.type = value
    },
  })

  const footerType = computed({
    get() {
      return config.value.footer.type
    },
    set(value: typeof config.value.footer.type) {
      config.value.footer.type = value
    },
  })

  const isVerticalNavCollapsed = computed({
    get() {
      return config.value.verticalNav.isVerticalNavCollapsed
    },
    set(val: typeof config.value.verticalNav.isVerticalNavCollapsed) {
      config.value.verticalNav.isVerticalNavCollapsed = val
    },
  })

  const appContentWidth = computed({
    get() {
      return config.value.app.contentWidth
    },
    set(val: typeof config.value.app.contentWidth) {
      config.value.app.contentWidth = val
    },
  })

  const appContentLayoutNav = computed({
    get() {
      return config.value.app.contentLayoutNav
    },
    set(val: typeof config.value.app.contentLayoutNav) {
      config.value.app.contentLayoutNav = val
    },
  })

  const horizontalNavType = computed({
    get() {
      return config.value.horizontalNav.type
    },
    set(value: typeof config.value.horizontalNav.type) {
      config.value.horizontalNav.type = value
    },
  })

  const isLessThanOverlayNavBreakpoint = computed(() => {
    return (windowWidth: MaybeRef<number>) => unref(windowWidth) < config.value.app.overlayNavFromBreakpoint
  })

  const _layoutClasses = computed(() => (windowWidth: MaybeRef<number>) => [
    `layout-nav-type-${appContentLayoutNav.value}`,
    `layout-navbar-${navbarType.value}`,
    `layout-footer-${footerType.value}`,
    { 'layout-vertical-nav-collapsed': isVerticalNavCollapsed.value && appContentLayoutNav.value === 'vertical' && !isLessThanOverlayNavBreakpoint.value(windowWidth) },
    { [`horizontal-nav-${horizontalNavType.value}`]: appContentLayoutNav.value === 'horizontal' },
    `layout-content-width-${appContentWidth.value}`,
    { 'layout-overlay-nav': isLessThanOverlayNavBreakpoint.value(windowWidth) },
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
    const isI18nEnabled = config.value.app.enableI18n

    return {
      keypath: isI18nEnabled ? key : null,
      tag: isI18nEnabled ? tag : null,
    }
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
  }
}
