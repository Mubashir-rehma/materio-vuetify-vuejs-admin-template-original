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
  <VList
    nav
    density="compact"
  >
    <VListItemGroup>
      <VListItem
        v-for="(item, i) in items"
        :key="i"
        :value="item"
      >
        <VListItemAvatar>
          <VIcon :icon="item.icon" />
        </VListItemAvatar>

        <VListItemTitle v-text="item.text" />
      </VListItem>
    </VListItemGroup>
  </VList>
</template>
