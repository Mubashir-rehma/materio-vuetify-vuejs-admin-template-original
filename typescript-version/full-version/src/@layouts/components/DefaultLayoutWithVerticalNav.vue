<script lang="ts">
import type { PropType } from 'vue'
import { useLayouts } from '@layouts'
import { VerticalNav } from '@layouts/components'
import type { VerticalNavItems } from '@layouts/types'

export default defineComponent({
  props: {
    navItems: {
      type: Array as PropType<VerticalNavItems>,
      required: true,
    },
  },
  setup(props, { slots }) {
    const { y: windowScrollY } = useWindowScroll()
    const { width: windowWidth } = useWindowSize()
    const { _layoutClasses: layoutClasses, isLessThanOverlayNavBreakpoint, isNavbarBlurEnabled } = useLayouts()

    const isOverlayNavActive = ref(false)
    const isLayoutOverlayVisible = ref(false)
    const toggleIsOverlayNavActive = useToggle(isOverlayNavActive)

    // ℹ️ This is alternative to below two commented watcher
    // We want to show overlay if overlay nav is visible and want to hide overlay if overlay is hidden and vice versa.
    syncRef(isOverlayNavActive, isLayoutOverlayVisible)

    // watch(isOverlayNavActive, value => {
    //   // Sync layout overlay with overlay nav
    //   isLayoutOverlayVisible.value = value
    // })

    // watch(isLayoutOverlayVisible, value => {
    //   // If overlay is closed via click, close hide overlay nav
    //   if (!value) isOverlayNavActive.value = false
    // })

    // ℹ️ Hide overlay if user open overlay nav in <md and increase the window width without closing overlay nav
    watch(windowWidth, value => {
      if (!isLessThanOverlayNavBreakpoint.value(value) && isLayoutOverlayVisible.value)
        isLayoutOverlayVisible.value = false
    })

    const router = useRouter()
    const shallShowPageLoading = ref(false)
    router.beforeEach(() => {
      console.info('setting to true')
      shallShowPageLoading.value = true
    })
    router.afterEach(() => {
      console.info('setting to false')
      shallShowPageLoading.value = false
    })

    return () => {
      const verticalNav = h(
        VerticalNav,
        { isOverlayNavActive: isOverlayNavActive.value, toggleIsOverlayNavActive, navItems: props.navItems },
        {
          'nav-header': slots['vertical-nav-header']?.(),
          'before-nav-items': slots['before-vertical-nav-items']?.(),
        },
      )

      // 👉 Navbar
      const navbar = h(
        'header',
        { class: ['layout-navbar', { 'navbar-blur': isNavbarBlurEnabled.value }] },
        [
          h(
            'div',
            { class: 'navbar-content-container' },
            slots.navbar?.({
              toggleVerticalOverlayNavActive: toggleIsOverlayNavActive,
            }),
          ),
        ],
      )

      // 👉 Content area
      const main = h(
        'main',
        { class: 'layout-page-content' },

        // 💡 Only show loading if `content-loading` slot is used
        slots['content-loading']
          ? shallShowPageLoading.value ? slots['content-loading']?.() : slots.default?.()
          : slots.default?.(),
      )

      // 👉 Footer
      const footer = h(
        'footer',
        { class: 'layout-footer' },
        [
          h(
            'div',
            { class: 'footer-content-container' },
            slots.footer?.(),
          ),
        ],
      )

      // 👉 Overlay
      const layoutOverlay = h(
        'div',
        {
          class: ['layout-overlay', { visible: isLayoutOverlayVisible.value }],
          onClick: () => { isLayoutOverlayVisible.value = !isLayoutOverlayVisible.value },
        },
      )

      return h(
        'div',
        { class: ['layout-wrapper', ...layoutClasses.value(windowWidth.value, windowScrollY.value)] },
        [
          verticalNav,
          h(
            'div',
            { class: 'layout-content-wrapper' },
            [
              navbar,
              main,
              footer,
            ],
          ),
          layoutOverlay,
        ],
      )
    }
  },
})
</script>

<style lang="scss">
@use "@configured-variables" as variables;
@use "@layouts/styles/placeholders";

.layout-wrapper.layout-nav-type-vertical {
  // TODO(v2): Check why we need height in vertical nav & min-height in horizontal nav
  block-size: 100%;

  .layout-content-wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-block-size: calc(var(--vh, 1vh) * 100);
    transition: padding-inline-start 0.2s ease-in-out;
    will-change: padding-inline-start;
  }

  .layout-navbar {
    z-index: variables.$layout-vertical-nav-layout-navbar-z-index;

    .navbar-content-container {
      block-size: variables.$layout-vertical-nav-navbar-height;
    }

    @at-root {
      .layout-wrapper.layout-nav-type-vertical.layout-content-width-boxed .layout-navbar {
        @if variables.$layout-vertical-nav-navbar-is-contained {
          @extend %boxed-content;

          padding: 0 2rem;
        } @else {
          .navbar-content-container {
            padding: 0 2rem;
          }
        }
      }
    }
  }

  &.layout-navbar-sticky .layout-navbar {
    @extend %layout-navbar-sticky;
  }

  &.layout-navbar-hidden .layout-navbar {
    @extend %layout-navbar-hidden;
  }

  // 👉 Layout overlay
  .layout-overlay {
    position: fixed;
    z-index: variables.$layout-overlay-z-index;
    background-color: rgb(0 0 0 / 60%);
    cursor: pointer;
    inset: 0;
    opacity: 0;
    pointer-events: none;

    // TODO: Improve animation
    transition: opacity 0.25s ease-in-out;
    will-change: transform;

    &.visible {
      opacity: 1;
      pointer-events: auto;
    }
  }

  &:not(.layout-overlay-nav) .layout-content-wrapper {
    padding-inline-start: variables.$layout-vertical-nav-width;
  }

  // Adjust right column pl when vertical nav is collapsed
  &.layout-vertical-nav-collapsed .layout-content-wrapper {
    padding-inline-start: variables.$layout-vertical-nav-collapsed-width;
  }
}
</style>
