<template>
  <layout-content-vertical-nav>
    <slot></slot>
    <template #v-app-content>
      <app-customizer></app-customizer>
    </template>
  </layout-content-vertical-nav>
</template>

<script>
import LayoutContentVerticalNav from '@/@core/layouts/variants/content/vertical-nav/LayoutContentVerticalNav.vue'
import AppCustomizer from '@core/layouts/components/app-customizer/AppCustomizer.vue'

export default {
  components: {
    LayoutContentVerticalNav,
    AppCustomizer,
  },
}
</script>
