<template>
  <div>
    <v-icon @click="shallShowFullSearchLocal = true">
      {{ icons.mdiMagnify }}
    </v-icon>

    <!-- This is clever hack to hide scrolling 😉 -->
    <v-dialog
      :value="shallShowFullSearchLocal"
      hide-overlay
      persistent
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
        :color="$vuetify.theme.dark ? 'white' : null"
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
        @blur="shallShowFullSearchLocal = false"
      >
        <template #selection></template>
        <template #item="{ item, on, attrs }">
          <div
            v-bind="attrs"
            v-on="on"
          >
            <div v-if="getSearchResultType(item) === 'pages'">
              <v-icon class="mr-4">
                {{ item.icon }}
              </v-icon>
              <span>{{ item.title }}</span>
            </div>
            <div
              v-else-if="getSearchResultType(item) === 'files'"
              class="d-flex align-center py-2"
            >
              <v-icon class="mr-4">
                {{ item.icon }}
              </v-icon>
              <div class="d-flex flex-column flex-grow-1">
                <span class="d-block">{{ item.title }}</span>
                <small class="text--secondary">by {{ item.by }}</small>
              </div>
              <small class="text--secondary">{{ item.size }}</small>
            </div>

            <!-- Contact -->
            <div
              v-else-if="getSearchResultType(item) === 'contacts'"
              class="d-flex align-center py-2"
            >
              <v-avatar
                class="mr-4"
                size="40"
              >
                <v-img :src="item.avatar"></v-img>
              </v-avatar>
              <div class="d-flex flex-column flex-grow-1">
                <span class="d-block">{{ item.title }}</span>
                <small class="text--secondary">{{ item.email }}</small>
              </div>
              <small class="text--secondary">{{ item.time }}</small>
            </div>
          </div>
        </template>
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
    const { slash } = useMagicKeys()
    whenever(slash, () => {
      shallShowFullSearchLocal.value = true
    })

    // Result type
    const getSearchResultType = item => {
      if (item.to !== undefined) return 'pages'
      if (item.size !== undefined) return 'files'
      if (item.email !== undefined) return 'contacts'

      return null
    }

    return {
      shallShowFullSearchLocal,
      searchQuery,
      valueSelected,
      getSearchResultType,

      icons: {
        mdiMagnify,
      },
    }
  },
}
</script>

<style lang="scss">
@import '~@core/preset/preset/mixins.scss';

@include theme(app-bar-autocomplete-box) using ($material) {
  div[role='combobox'] {
    background-color: map-deep-get($material, 'cards');
  }
}

.app-bar-autocomplete-box {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
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
    z-index: 10;
    padding: 0 20px !important;

    .v-input__prepend-inner {
      align-self: center;
    }
  }
  // Content - Result
  .v-menu__content {
    @include style-scroll-bar();
    max-width: unset;
    width: 100%;
    border-radius: 12px !important;
    top: calc(64px + 0.625rem) !important;

    .v-list-item {
      > [id^='list-item'] {
        width: 100%;
      }
    }
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

// ————————————————————————————————————
//* ——— Horionral Nav
// ————————————————————————————————————

.content-layout.horizontal-nav {
  .app-system-bar {
    // Assigning 7 z-index so that search result can be seen on top of navigation menu
    z-index: 7;

    .v-text-field {
      margin-top: 0;
      padding-top: 0;
    }

    // Remove 3rem padding from both side.
    // ? 3rem is applied to navbar-content-container
    .app-bar-autocomplete-box {
      max-width: calc(100% - 3rem * 2);
      margin-left: 3rem;
    }

    // ? In Full content contet have padding of 1.72rem
    &:not(.app-system-bar-boxed) {
      .app-bar-autocomplete-box {
        max-width: calc(100% - 1.72rem * 2);
        margin-left: 1.72rem;
      }
    }
  }
}
</style>
