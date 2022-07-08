<script lang="ts" setup>
const files = [
  {
    color: 'blue',
    icon: 'mdi-clipboard-text',
    subtitle: 'Jan 20, 2014',
    title: 'Vacation itinerary',
  },
  {
    color: 'amber',
    icon: 'mdi-gesture-tap-button',
    subtitle: 'Jan 10, 2014',
    title: 'Kitchen remodel',
  },
]
const folders = [
  {
    subtitle: 'Jan 9, 2014',
    title: 'Photos',
  },
  {
    subtitle: 'Jan 17, 2014',
    title: 'Recipes',
  },
  {
    subtitle: 'Jan 28, 2014',
    title: 'Work',
  },
]
</script>

<template>
  <VList lines="two">
    <VListSubheader inset>
      Folders
    </VListSubheader>

    <VListItem
      v-for="folder in folders"
      :key="folder.title"
      prepend-icon="mdi-folder-outline"
      :title="folder.title"
      :subtitle="folder.subtitle"
    >
      <template #append>
        <VListItemAvatar end>
          <VBtn
            variant="text"
            color="grey lighten-1"
            icon="mdi-information-outline"
          />
        </VListItemAvatar>
      </template>
    </VListItem>

    <VDivider inset />

    <VListSubheader inset>
      Files
    </VListSubheader>

    <VListItem
      v-for="file in files"
      :key="file.title"
      :prepend-icon="file.icon"
      :title="file.title"
      :subtitle="file.subtitle"
    >
      <template #append>
        <VListItemAvatar end>
          <VBtn
            variant="text"
            color="grey lighten-1"
            icon="mdi-information-outline"
          />
        </VListItemAvatar>
      </template>
    </VListItem>
  </VList>
</template>
