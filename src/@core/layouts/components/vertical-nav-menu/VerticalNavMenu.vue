<template>
  <div
    class="vertical-nav-menu-container"
    @mouseenter="isMouseHovered = true"
    @mouseleave="isMouseHovered = false"
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
        :shaped="isListShaped"
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
import { watch, ref, computed, provide } from '@vue/composition-api'

// SFCs
import VerticalNavMenuHeader from '@core/layouts/components/vertical-nav-menu/components/vertical-nav-menu-header/VerticalNavMenuHeader.vue'
import VerticalNavMenuSectionTitle from '@core/layouts/components/vertical-nav-menu/components/vertical-nav-menu-section-title/VerticalNavMenuSectionTitle.vue'
import VerticalNavMenuGroup from '@core/layouts/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue'
import VerticalNavMenuLink from '@core/layouts/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue'

// Composable
import useVerticalNavMenu from '@/@core/layouts/composable/vertical-nav/useVerticalNavMenu'
import useAppConfig from '@core/@app-config/useAppConfig'

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
  props: {
    navMenuItems: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const { resolveNavItemComponent, isMouseHovered } = useVerticalNavMenu()
    const { menuIsVerticalNavMini } = useAppConfig()
    provide('isMouseHovered', isMouseHovered)

    // ? Q: Why `isMouseHoveredTransitioned` instead of `isMouseHovered`
    // ? A: Assign false after transition is complete* (*Just before complete)
    const isMouseHoveredTransitioned = ref(isMouseHovered.value)
    watch(isMouseHovered, value => {
      if (value) isMouseHoveredTransitioned.value = true
      else {
        // ! Actual time is 200 but we are assigning 100 because it is only used in isListShaped
        setTimeout(() => {
          isMouseHoveredTransitioned.value = false
        }, 100)
      }
    })

    const isListShaped = computed(
      () => !menuIsVerticalNavMini.value || (menuIsVerticalNavMini.value && isMouseHoveredTransitioned.value),
    )

    const perfectScrollbarOptions = {
      maxScrollbarLength: 60,
      wheelPropagation: false,
    }

    provide('openGroups', ref([]))

    return {
      resolveNavItemComponent,
      perfectScrollbarOptions,
      isMouseHovered,
      isListShaped,
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

    &.vertical-nav-menu-link {
      .v-list-item__icon {
        .v-icon {
          transition: none !important;
        }
      }
    }
  }
}
</style>
