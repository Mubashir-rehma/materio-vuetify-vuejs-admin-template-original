<script lang="ts" setup>
const items = [
  { text: 'My Files', icon: 'mdi-folder-outline' },
  { text: 'Shared with me', icon: 'mdi-account-multiple-outline' },
  { text: 'Starred', icon: 'mdi-star-outline' },
  { text: 'Recent', icon: 'mdi-history' },
  { text: 'Offline', icon: 'mdi-check-circle-outline' },
  { text: 'Uploads', icon: 'mdi-upload-outline' },
  { text: 'Backups', icon: 'mdi-cloud-upload-outline' },
]
</script>

<template>
  <v-list
    nav
    density="compact"
  >
    <v-list-item-group>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
      >
        <v-list-item-avatar>
          <v-icon :icon="item.icon" />
        </v-list-item-avatar>

        <v-list-item-title v-text="item.text" />
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>
