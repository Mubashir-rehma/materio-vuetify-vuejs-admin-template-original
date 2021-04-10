<template>
  <v-card flat>
    <v-toolbar flat>
      <v-icon>{{ icons.mdiSilverware }}</v-icon>
      <v-toolbar-title>Local hotspots</v-toolbar-title>
    </v-toolbar>

    <v-row>
      <v-col
        cols="12"
        sm="5"
      >
        <v-card-text>
          <v-treeview
            v-model="tree"
            :load-children="fetch"
            :items="items"
            selected-color="primary"
            open-on-click
            selectable
            return-object
            :expand-icon="icons.mdiChevronDown"
            :on-icon="icons.mdiBookmark"
            :off-icon="icons.mdiBookmarkOutline"
            :indeterminate-icon="icons.mdiBookmarkMinus"
          >
          </v-treeview>
        </v-card-text>
      </v-col>

      <v-col
        sm="1"
        cols="12"
      >
        <v-divider :vertical="$vuetify.breakpoint.name === 'xs' ? false : true"></v-divider>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-card-text>
          <div
            v-if="tree.length === 0"
            key="title"
            class="title font-weight-light grey--text pa-4 text-center"
          >
            Select your favorite breweries
          </div>

          <v-scroll-x-transition
            group
            hide-on-leave
          >
            <v-chip
              v-for="(selection, i) in tree"
              :key="i"
              color="grey"
              dark
              small
              class="ma-1"
            >
              <v-icon
                left
                small
              >
                {{ icons.mdiBeer }}
              </v-icon>
              {{ selection.name }}
            </v-chip>
          </v-scroll-x-transition>
        </v-card-text>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-card-actions class="pb-0">
      <v-btn
        text
        @click="tree = []"
      >
        Reset
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        color="success"
        depressed
      >
        Save
        <v-icon right>
          {{ icons.mdiContentSave }}
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from '@axios'
import { computed, defineComponent, ref } from '@vue/composition-api'
import {
  mdiContentSave,
  mdiBeer,
  mdiSilverware,
  mdiChevronDown,
  mdiBookmark,
  mdiBookmarkOutline,
  mdiBookmarkMinus,
} from '@mdi/js'

export default defineComponent({
  setup() {
    const breweries = ref([])
    const isLoading = ref(false)
    const tree = ref([])
    const types = ref([])

    const fetch = () => {
      // eslint-disable-next-line no-useless-return
      if (breweries.value.length) return

      // eslint-disable-next-line consistent-return
      return (
        axios
          .get('https://api.openbrewerydb.org/breweries')
          .then(res => {
            console.log(res.data)

            return res.data
          })
          // eslint-disable-next-line no-return-assign
          .then(data => {
            console.log(data)

            // eslint-disable-next-line no-return-assign
            return (breweries.value = data)
          })
          .catch(err => console.log(err))
      )
    }
    const getName = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`

    const getChildren = type => {
      const breweriesClone = []

      // eslint-disable-next-line no-restricted-syntax
      for (const brewery of breweries.value) {
        // eslint-disable-next-line no-continue
        if (brewery.brewery_type !== type) continue

        breweriesClone.push({
          ...brewery,
          name: getName(brewery.name),
        })
      }
    }

    const items = computed(() => {
      const children = types.value.map(type => ({
        id: type,
        name: getName(type),
        children: getChildren(type),
      }))

      return [
        {
          id: 1,
          name: 'All Breweries',
          children,
        },
      ]
    })

    const shouldShowTree = computed(() => breweries.value.length > 0 && !isLoading.value)

    return {
      breweries,
      isLoading,
      tree,
      types,
      items,
      shouldShowTree,
      fetch,
      getName,
      getChildren,
      icons: {
        mdiContentSave,
        mdiBeer,
        mdiSilverware,
        mdiChevronDown,
        mdiBookmark,
        mdiBookmarkOutline,
        mdiBookmarkMinus,
      },
    }
  },
})
</script>
