<template>
  <div
    class="vertical-nav-menu-container"
    @mouseenter="isMouseOver = true"
    @mouseleave="isMouseOver = false"
  >
    <slot name="v-nav-menu-header">
      <vertical-nav-menu-header></vertical-nav-menu-header>
    </slot>
    <perfect-scrollbar
      class="ps-nav-menu-items"
      :options="perfectScrollbarOptions"
    >
      <vertical-nav-menu-items :items="navMenuItems"></vertical-nav-menu-items>
    </perfect-scrollbar>
  </div>
</template>

<script>
import navMenuItems from '@/navigation/vertical'
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import { watch, provide, ref } from '@vue/composition-api'
import VerticalNavMenuHeader from './VerticalNavMenuHeader.vue'
import VerticalNavMenuItems from './VerticalNavMenuItems.vue'

// 3rd Party Package

export default {
  components: {
    VerticalNavMenuHeader,
    VerticalNavMenuItems,

    // 3rd Party
    PerfectScrollbar,
  },
  setup() {
    const perfectScrollbarOptions = {
      maxScrollbarLength: 60,
      wheelPropagation: false,
    }

    const isMouseOver = ref(false)
    const controlledIsMouseOver = ref(isMouseOver.value)
    watch(isMouseOver, value => {
      if (value) controlledIsMouseOver.value = true
      else {
        setTimeout(() => {
          controlledIsMouseOver.value = false
        }, 200)
      }
    })
    provide('isMouseOver', isMouseOver)
    provide('controlledIsMouseOver', controlledIsMouseOver)

    return {
      perfectScrollbarOptions,
      navMenuItems,
      isMouseOver,
    }
  },
}
</script>

<style lang="scss">
@import '~vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';
</style>

<style lang="scss" scoped>
.vertical-nav-menu-container {
  height: 100%;
  .ps-nav-menu-items {
    height: calc(100% - 74px) !important;
  }
}
</style>
