<template>
  <div @scroll.prevent.stop>
    <v-icon @click="shallShowFullSearchLocal = !shallShowFullSearchLocal">
      {{ icons.mdiMagnify }}
    </v-icon>

    <!-- This is clever hack to hide scrolling 😉 -->
    <v-dialog
      v-model="shallShowFullSearchLocal"
      hide-overlay
    ></v-dialog>
    <v-expand-transition>
      <v-autocomplete
        v-show="shallShowFullSearchLocal"
        :search-input.sync="searchQuery"
        :items="data"
        item-text="title"
        item-value="title"
        class="app-bar-autocomplete-box"
        return-object
        rounded
        attach
        hide-details
        :filter="filter"
        auto-select-first
        :prepend-inner-icon="icons.mdiMagnify"
        autofocus
        :menu-props="{ maxHeight: 500, transition: 'slide-y-transition' }"
        @input="valueSelected"
        @keyup.esc="shallShowFullSearchLocal = false"
      >
        <!-- @blur="shallShowFullSearchLocal = false" -->
        <template #selection></template>
      </v-autocomplete>
    </v-expand-transition>
  </div>
</template>

<script>
import { mdiMagnify } from '@mdi/js'
import { useVModel, useMagicKeys, whenever } from '@vueuse/core'
import { ref, watch } from '@vue/composition-api'
import { useRouter } from '@core/utils'
import store from '@/store'

export default {
  props: {
    shallShowFullSearch: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Array,
      required: true,
    },
    filter: {
      type: Function,
      default: null,
    },
  },
  setup(props, { emit }) {
    const shallShowFullSearchLocal = useVModel(props, 'shallShowFullSearch', emit)
    const searchQuery = ref('')

    watch(shallShowFullSearchLocal, value => {
      if (!value) searchQuery.value = ''
      store.commit('app/TOGGLE_CONTENT_OVERLAY', value)
    })

    const { router } = useRouter()
    const valueSelected = value => {
      if (value.to) {
        router.push(value.to).catch(() => {})
      }
      shallShowFullSearchLocal.value = false
      searchQuery.value = ''
    }

    // Hotkey
    const { shift_k: shiftK } = useMagicKeys()
    whenever(shiftK, () => {
      shallShowFullSearchLocal.value = true
    })

    return {
      shallShowFullSearchLocal,
      searchQuery,
      valueSelected,

      icons: {
        mdiMagnify,
      },
    }
  },
}
</script>

<style lang="scss">
@import '~@core/preset/preset/mixins.scss';

.app-bar-autocomplete-box {
  position: absolute;
  width: 100%;
  top: 0;
  height: 100%;
  border-radius: 14px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  z-index: 6 !important;

  .v-input__control {
    height: 100%;
  }

  div[role='combobox'] {
    height: 100%;
    background-color: #fff;
    z-index: 10;
    padding: 0 20px !important;

    .v-input__prepend-inner {
      align-self: center;
    }
  }
  // Content - Result
  .v-menu__content {
    // border-top-left-radius: 14px !important;
    // border-bottom-left-radius: 14px !important;
    border-radius: 12px !important;
    top: calc(64px + 0.625rem) !important;

    @include style-scroll-bar();
  }

  @at-root .v-app-bar.app-bar-shinked & {
    div[role='combobox'] {
      padding: 0 !important;
    }

    // Content - Result
    .v-menu__content {
      max-width: unset;
      width: calc(100% + 20px * 2);
      margin-left: -20px;
    }
  }
}
</style>
