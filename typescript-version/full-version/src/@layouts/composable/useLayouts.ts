import { useStorage } from '@vueuse/core'
import type { Ref } from 'vue'
import { AppContentLayoutNav, NavbarType } from '../enums'
import { injectionKeyIsVerticalNavHovered } from '@layouts/symbols'
import { config } from '@layouts/config'

export const useLayouts = () => {
  const navbarType = computed({
    get() {
      return config.navbar.type.value
    },
    set(value: typeof config.navbar.type.value) {
      config.navbar.type.value = value
    },
  })

  const isNavbarBlurEnabled = computed({
    get() {
      return config.navbar.navbarBlur.value
    },
    set(value: typeof config.navbar.navbarBlur.value) {
      config.navbar.navbarBlur.value = value
      useStorage<typeof config.navbar.navbarBlur.value>(`${config.app.title}-navbarBlur`, null).value = value
    },
  })

  const _setAppDir = (dir: 'ltr' | 'rtl') => {
    // Check if document exists for SSR
    if (typeof document !== 'undefined')
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
      useStorage<typeof config.verticalNav.isVerticalNavCollapsed.value>(`${config.app.title}-isVerticalNavCollapsed`, null).value = val
    },
  })

  const appContentWidth = computed({
    get() {
      return config.app.contentWidth.value
    },
    set(val: typeof config.app.contentWidth.value) {
      config.app.contentWidth.value = val
      useStorage<typeof config.app.contentWidth.value>(`${config.app.title}-contentWidth`, null).value = val
    },
  })

  const appContentLayoutNav = computed({
    get() {
      return config.app.contentLayoutNav.value
    },
    set(val: typeof config.app.contentLayoutNav.value) {
      config.app.contentLayoutNav.value = val

      // If Navbar type is hidden while switching to horizontal nav => Reset it to sticky
      if (val === AppContentLayoutNav.Horizontal) {
        if (navbarType.value === NavbarType.Hidden)
          navbarType.value = NavbarType.Sticky

        isVerticalNavCollapsed.value = false
      }
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

  const isLessThanOverlayNavBreakpoint = useMediaQuery(`(max-width: ${config.app.overlayNavFromBreakpoint}px)`)

  const _layoutClasses = computed(() => {
    const route = useRoute()
    const { y: windowScrollY } = useWindowScroll()

    return [
      `layout-nav-type-${appContentLayoutNav.value}`,
      `layout-navbar-${navbarType.value}`,
      `layout-footer-${footerType.value}`,
      {
        'layout-vertical-nav-collapsed':
          isVerticalNavCollapsed.value
          && appContentLayoutNav.value === 'vertical'
          && !isLessThanOverlayNavBreakpoint.value,
      },
      { [`horizontal-nav-${horizontalNavType.value}`]: appContentLayoutNav.value === 'horizontal' },
      `layout-content-width-${appContentWidth.value}`,
      { 'layout-overlay-nav': isLessThanOverlayNavBreakpoint.value },
      { 'window-scrolled': unref(windowScrollY) },
      route.meta.layoutWrapperClasses ? route.meta.layoutWrapperClasses : null,
    ]
  })

  const switchToVerticalNavOnLtOverlayNavBreakpoint = () => {
    /*
      ℹ️ This is flag will hold nav type need to render when switching between lgAndUp from mdAndDown window width

      Requirement: When we nav is set to `horizontal` and we hit the `mdAndDown` breakpoint nav type shall change to `vertical` nav
      Now if we go back to `lgAndUp` breakpoint from `mdAndDown` how we will know which was previous nav type in large device?

      Let's assign value of `appContentLayoutNav` as default value of lgAndUpNav. Why 🤔?
        If template is viewed in lgAndUp
          We will assign `appContentLayoutNav` value to `lgAndUpNav` because at this point both constant is same
          Hence, for `lgAndUpNav` it will take value from theme config file
        else
          It will always show vertical nav and if user increase the window width it will fallback to `appContentLayoutNav` value
          But `appContentLayoutNav` will be value set in theme config file
    */
    const lgAndUpNav = ref(appContentLayoutNav.value)

    /*
      There might be case where we manually switch from vertical to horizontal nav and vice versa in `lgAndUp` screen
      So when user comes back from `mdAndDown` to `lgAndUp` we can set updated nav type
      For this we need to update the `lgAndUpNav` value if screen is `lgAndUp`
    */
    watch(appContentLayoutNav, value => {
      if (!isLessThanOverlayNavBreakpoint.value)
        lgAndUpNav.value = value
    })

    /*
      This is layout switching part
      If it's `mdAndDown` => We will use vertical nav no matter what previous nav type was
      Or if it's `lgAndUp` we need to switch back to `lgAndUp` nav type. For this we will tracker property `lgAndUpNav`
    */
    watch(isLessThanOverlayNavBreakpoint, val => {
      if (!val)
        appContentLayoutNav.value = lgAndUpNav.value
      else
        appContentLayoutNav.value = AppContentLayoutNav.Vertical
    }, { immediate: true })
  }

  /*
    This function will return true if current state is mini. Mini state means vertical nav is:
      - Collapsed
      - Isn't hovered by mouse
      - nav is not less than overlay breakpoint (hence, isn't overlay menu)

    ℹ️ We are getting `isVerticalNavHovered` as param instead of via `inject` because
        we are using this in `VerticalNav.vue` component which provide it and I guess because
        same component is providing & injecting we are getting undefined error
  */
  const isVerticalNavMini = (isVerticalNavHovered: Ref<boolean> | null = null) => {
    const isVerticalNavHoveredLocal = isVerticalNavHovered || inject(injectionKeyIsVerticalNavHovered) || ref(false)

    return computed(() => isVerticalNavCollapsed.value && !isVerticalNavHoveredLocal.value && !isLessThanOverlayNavBreakpoint.value)
  }

  const dynamicI18nProps = (key: string, tag = 'span') => {
    if (!config.app.i18n.enable)
      return {}

    return {
      keypath: key,
      tag,
      scope: 'global',
    }
  }

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
    isNavbarBlurEnabled,
    footerType,
    isVerticalNavCollapsed,
    appContentWidth,
    appContentLayoutNav,
    horizontalNavType,
    isLessThanOverlayNavBreakpoint,
    _layoutClasses,
    switchToVerticalNavOnLtOverlayNavBreakpoint,
    isVerticalNavMini,
    dynamicI18nProps,
    isAppRtl,
    _setAppDir,
  }
}
