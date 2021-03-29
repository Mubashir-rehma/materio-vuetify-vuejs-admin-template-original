<template>
  <v-autocomplete
    v-model="friends"
    :items="people"
    filled
    chips
    hide-details
    label="Select"
    item-text="name"
    item-value="name"
    multiple
  >
    <template #selection="data">
      <v-chip
        v-bind="data.attrs"
        :input-value="data.selected"
        close
        @click="data.select"
        @click:close="remove(data.item)"
      >
        <v-avatar left>
          <v-img :src="data.item.avatar"></v-img>
        </v-avatar>
        {{ data.item.name }}
      </v-chip>
    </template>

    <template #item="data">
      <template v-if="typeof data.item !== 'object'">
        <v-list-item-content v-text="data.item"></v-list-item-content>
      </template>

      <template v-else>
        <v-list-item-avatar>
          <v-img :src="data.item.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
            {{ data.item.name }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ data.item.group }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </template>
    </template>
  </v-autocomplete>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const srcs = {
      1: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      2: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      3: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      4: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      5: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    }

    const friends = ref(['Sandra Adams', 'Britta Holt'])
    const name = ref('Midnight Crew')
    const people = ref([
      { header: 'Group 1' },
      { name: 'Sandra Adams', group: 'Group 1', avatar: srcs[1] },
      { name: 'Ali Connors', group: 'Group 1', avatar: srcs[2] },
      { name: 'Trevor Hansen', group: 'Group 1', avatar: srcs[3] },
      { name: 'Tucker Smith', group: 'Group 1', avatar: srcs[2] },
      { divider: true },
      { header: 'Group 2' },
      { name: 'Britta Holt', group: 'Group 2', avatar: srcs[4] },
      { name: 'Jane Smith ', group: 'Group 2', avatar: srcs[5] },
      { name: 'John Smith', group: 'Group 2', avatar: srcs[1] },
      { name: 'Sandra Williams', group: 'Group 2', avatar: srcs[3] },
    ])
    const title = ref('The summer breeze')

    const remove = item => {
      const index = friends.value.indexOf(item.name)
      if (index >= 0) friends.value.splice(index, 1)
    }

    return {
      friends,
      name,
      people,
      title,
      remove,
    }
  },
}
</script>
