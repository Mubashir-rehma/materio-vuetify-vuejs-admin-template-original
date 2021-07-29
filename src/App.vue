<template>
  <component
    :is="resolveLayoutVariant"
    :class="`skin-variant--${appSkinVariant}`"
  >
    <transition
      :name="appRouteTransition"
      mode="out-in"
      appear
    >
      <router-view></router-view>
    </transition>
    <buy-now></buy-now>
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
import LayoutContentVerticalNav from '@/layouts/variants/content/vertical-nav/LayoutContentVerticalNav.vue'
import LayoutContentHorizontalNav from '@/layouts/variants/content/horizontal-nav/LayoutContentHorizontalNav.vue'
import LayoutBlank from '@/layouts/variants/blank/LayoutBlank.vue'

// Dynamic vh
import useDynamicVh from '@core/utils/useDynamicVh'

import BuyNow from '@/components/BuyNow.vue'

export default {
  components: {
    LayoutContentVerticalNav,
    LayoutContentHorizontalNav,
    LayoutBlank,
    BuyNow,
  },
  setup() {
    const { route } = useRouter()
    const { appContentLayoutNav, appSkinVariant, appRouteTransition } = useAppConfig()

    const { handleBreakpointLayoutSwitch } = useLayout()
    handleBreakpointLayoutSwitch()

    const resolveLayoutVariant = computed(() => {
      if (route.value.meta.layout === 'blank') return 'layout-blank'
      if (route.value.meta.layout === 'content') return `layout-content-${appContentLayoutNav.value}-nav`

      return null
    })

    useDynamicVh()

    return {
      resolveLayoutVariant,
      appSkinVariant,
      appRouteTransition,
    }
  },
}
</script>
