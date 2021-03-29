<template>
  <div>
    <v-tabs
      v-model="currentTab"
      icons-and-text
      grow
    >
      <v-tab>
        Recents
        <v-icon>{{ icons.mdiPhone }}</v-icon>
      </v-tab>

      <v-tab>
        Favorites
        <v-icon>{{ icons.mdiHeart }}</v-icon>
      </v-tab>

      <v-tab>
        Nearby
        <v-icon>{{ icons.mdiAccountBox }}</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="currentTab">
      <v-tab-item
        v-for="i in 3"
        :key="i"
      >
        <v-card flat>
          <v-card-text>{{ tabItemText }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiPhone, mdiHeart, mdiAccountBox } from '@mdi/js'

export default {
  setup() {
    const currentTab = ref(null)
    const tabItemText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    `

    return { currentTab, tabItemText, icons: { mdiPhone, mdiHeart, mdiAccountBox } }
  },
}
</script>
