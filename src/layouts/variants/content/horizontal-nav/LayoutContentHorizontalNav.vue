<template>
  <layout-content-horizontal-nav>
    <slot></slot>
    <template #v-app-content>
      <app-customizer></app-customizer>
    </template>
  </layout-content-horizontal-nav>
</template>

<script>
import LayoutContentHorizontalNav from '@core/layouts/variants/content/horizontal-nav/LayoutContentHorizontalNav.vue'
import AppCustomizer from '@core/layouts/components/app-customizer/AppCustomizer.vue'

export default {
  components: {
    LayoutContentHorizontalNav,
    AppCustomizer,
  },
  setup() {
    return {}
  },
}
</script>

<style lang="scss">
</style>
