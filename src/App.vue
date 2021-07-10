<template>
  <component :is="resolveLayoutVariant">
    <transition
      :name="appRouteTransition"
      mode="out-in"
      appear
    >
      <router-view></router-view>
    </transition>
  </component>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { computed } from '@vue/composition-api'
// eslint-disable-next-line import/no-unresolved
import useAppConfig from '@core/@app-config/useAppConfig'
import { useRouter } from '@core/utils'
import { useLayout } from '@core/layouts/composable/useLayout'

// Layouts
const LayoutContentVerticalNav = () => import('@/layouts/variants/content/vertical-nav/LayoutContentVerticalNav.vue')
// eslint-disable-next-line arrow-body-style
const LayoutContentHorizontalNav = () => {
  return import('@/layouts/variants/content/horizontal-nav/LayoutContentHorizontalNav.vue')
}
const LayoutBlank = () => import('@/layouts/variants/blank/LayoutBlank.vue')

export default {
  components: {
    LayoutContentVerticalNav,
    LayoutContentHorizontalNav,
    LayoutBlank,
  },
  setup() {
    const { route } = useRouter()
    const { appContentLayoutNav, appRouteTransition } = useAppConfig()

    const { handleBreakpointLayoutSwitch } = useLayout()
    handleBreakpointLayoutSwitch()

    const resolveLayoutVariant = computed(() => {
      if (route.value.meta.layout === 'content') {
        if (appContentLayoutNav.value === 'vertical') return 'layout-content-vertical-nav'
        if (appContentLayoutNav.value === 'horizontal') return 'layout-content-horizontal-nav'
      }

      return 'layout-blank'
    })

    return {
      resolveLayoutVariant,
      appRouteTransition,
    }
  },
}
</script>
