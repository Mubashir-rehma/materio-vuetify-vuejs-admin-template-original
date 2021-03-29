<template>
  <v-list
    nav
    dense
  >
    <v-list-item-group
      v-model="selectedItem"
      color="primary"
    >
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
      >
        <v-list-item-icon>
          <v-icon>
            {{ item.icon }}
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { ref } from '@vue/composition-api'
// eslint-disable-next-line object-curly-newline
import { mdiFolder, mdiAccountMultiple, mdiStar, mdiHistory, mdiCheckCircle, mdiUpload, mdiCloudUpload } from '@mdi/js'

export default {
  setup() {
    const selectedItem = ref(0)
    const items = [
      { text: 'My Files', icon: mdiFolder },
      { text: 'Shared with me', icon: mdiAccountMultiple },
      { text: 'Starred', icon: mdiStar },
      { text: 'Recent', icon: mdiHistory },
      { text: 'Offline', icon: mdiCheckCircle },
      { text: 'Uploads', icon: mdiUpload },
      { text: 'Backups', icon: mdiCloudUpload },
    ]

    return { selectedItem, items }
  },
}
</script>
