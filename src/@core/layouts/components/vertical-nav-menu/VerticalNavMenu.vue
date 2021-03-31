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
      <v-list
        expand
        :shaped="controlledIsListShaped"
        class="vertical-nav-menu-items"
      >
        <component
          :is="resolveNavItemComponent(item)"
          v-for="item in navMenuItems"
          :key="item.subheader || item.title"
          :item="item"
        />
      </v-list>
    </perfect-scrollbar>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { watch, provide, ref, computed } from '@vue/composition-api'

// SFCs
import VerticalNavMenuHeader from '@core/layouts/components/vertical-nav-menu/components/vertical-nav-menu-header/VerticalNavMenuHeader.vue'
import VerticalNavMenuSectionTitle from '@core/layouts/components/vertical-nav-menu/components/vertical-nav-menu-section-title/VerticalNavMenuSectionTitle.vue'
import VerticalNavMenuGroup from '@core/layouts/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue'
import VerticalNavMenuLink from '@core/layouts/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue'

// Composable
import useVerticalNavMenu from '@/@core/layouts/composable/vertical-nav/useVerticalNavMenu'
import useAppConfig from '@core/@app-config/useAppConfig'

// Other
import navMenuItems from '@/navigation/vertical'

// 3rd Party
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'

export default {
  components: {
    VerticalNavMenuHeader,
    VerticalNavMenuGroup,
    VerticalNavMenuLink,
    VerticalNavMenuSectionTitle,

    // 3rd Party
    PerfectScrollbar,
  },
  setup() {
    const { resolveNavItemComponent } = useVerticalNavMenu()
    const { menuIsVerticalNavMini } = useAppConfig()

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

    const isListShaped = computed(
      () => !menuIsVerticalNavMini.value || (menuIsVerticalNavMini.value && isMouseOver.value),
    )
    const controlledIsListShaped = ref(isListShaped.value)
    watch(isListShaped, value => {
      if (value) controlledIsListShaped.value = true
      else {
        setTimeout(() => {
          controlledIsListShaped.value = false
        }, 100)
      }
    })

    const perfectScrollbarOptions = {
      maxScrollbarLength: 60,
      wheelPropagation: false,
    }

    return {
      resolveNavItemComponent,
      perfectScrollbarOptions,
      navMenuItems,
      isMouseOver,
      controlledIsListShaped,
    }
  },
}
</script>

<style lang="scss">
@import '~vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';
</style>

<style lang="scss">
@import '~vuetify/src/styles/styles.sass';

.vertical-nav-menu-container {
  height: 100%;
  .ps-nav-menu-items {
    height: calc(100% - 74px) !important;
  }
}

@include theme(vertical-nav-menu-items) using ($material) {
  .v-list-item__icon {
    &:first-child {
      margin-top: 12px;
      margin-bottom: 12px;
    }
    margin-right: 12px;
  }

  // Center align small icon
  .v-list-group__items .v-list-item__icon {
    margin-top: 16px;
    margin-left: 3px;
    margin-right: 9px;
  }

  .v-list-item {
    height: 42px;
    // min-height: unset;
    &.v-list-item--active {
      &:not(.v-list-group__header) {
        color: white;
        background-image: linear-gradient(98deg, #c48eff, var(--v-primary-base) 94%);
      }

      // &.v-list-group__header {
      //   background-color: map-get($material, 'states', 'selected') !important;
      // }
    }
  }
}
</style>
