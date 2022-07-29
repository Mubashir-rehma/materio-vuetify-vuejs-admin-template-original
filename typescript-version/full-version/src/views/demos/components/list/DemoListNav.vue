<script lang="ts" setup>
const items = [
  { title: 'My Files', value: 1, props: { prependIcon: 'mdi-folder-outline' } },
  { title: 'Shared with me', value: 2, props: { prependIcon: 'mdi-account-multiple-outline' } },
  { title: 'Starred', value: 3, props: { prependIcon: 'mdi-star-outline' } },
  { title: 'Recent', value: 4, props: { prependIcon: 'mdi-history' } },
  { title: 'Offline', value: 5, props: { prependIcon: 'mdi-check-circle-outline' } },
  { title: 'Uploads', value: 6, props: { prependIcon: 'mdi-upload-outline' } },
  { title: 'Backups', value: 7, props: { prependIcon: 'mdi-cloud-upload-outline' } },
]
</script>

<template>
  <VList
    nav
    :lines="false"
    density="compact"
    :items="items"
  />
</template>
