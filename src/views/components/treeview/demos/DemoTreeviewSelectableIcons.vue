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
        class="white--text"
        color="green darken-1"
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
import {
  mdiContentSave,
  mdiBeer,
  mdiSilverware,
  mdiChevronDown,
  mdiBookmark,
  mdiBookmarkOutline,
  mdiBookmarkMinus,
} from '@mdi/js'

export default {
  data: () => ({
    breweries: [],
    isLoading: false,
    tree: [],
    types: [],
    icons: {
      mdiContentSave,
      mdiBeer,
      mdiSilverware,
      mdiChevronDown,
      mdiBookmark,
      mdiBookmarkOutline,
      mdiBookmarkMinus,
    },
  }),

  computed: {
    items() {
      const children = this.types.map(type => ({
        id: type,
        name: this.getName(type),
        children: this.getChildren(type),
      }))

      return [
        {
          id: 1,
          name: 'All Breweries',
          children,
        },
      ]
    },
    shouldShowTree() {
      return this.breweries.length > 0 && !this.isLoading
    },
  },

  watch: {
    breweries(val) {
      this.types = val
        .reduce((acc, cur) => {
          const type = cur.brewery_type

          if (!acc.includes(type)) acc.push(type)

          return acc
        }, [])
        .sort()
    },
  },

  methods: {
    fetch() {
      if (this.breweries.length) return

      // eslint-disable-next-line consistent-return
      return (
        fetch('https://api.openbrewerydb.org/breweries')
          .then(res => res.json())
          // eslint-disable-next-line no-return-assign
          .then(data => (this.breweries = data))
          .catch(err => console.log(err))
      )
    },
    getChildren(type) {
      const breweries = []

      // eslint-disable-next-line no-restricted-syntax
      for (const brewery of this.breweries) {
        // eslint-disable-next-line no-continue
        if (brewery.brewery_type !== type) continue

        breweries.push({
          ...brewery,
          name: this.getName(brewery.name),
        })
      }

      return breweries.sort((a, b) => (a.name > b.name ? 1 : -1))
    },
    getName(name) {
      return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
    },
  },
}
</script>
