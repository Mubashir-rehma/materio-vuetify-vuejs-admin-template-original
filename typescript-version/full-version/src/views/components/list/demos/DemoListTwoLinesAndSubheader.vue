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
  <v-list two-line>
    <v-list-subheader inset>
      Folders
    </v-list-subheader>

    <v-list-item
      v-for="folder in folders"
      :key="folder.title"
      prepend-icon="mdi-folder-outline"
      :title="folder.title"
      :subtitle="folder.subtitle"
    >
      <template #append>
        <v-list-item-avatar end>
          <v-btn
            variant="text"
            color="grey lighten-1"
            icon="mdi-information-outline"
          />
        </v-list-item-avatar>
      </template>
    </v-list-item>

    <v-divider inset />

    <v-list-subheader inset>
      Files
    </v-list-subheader>

    <v-list-item
      v-for="file in files"
      :key="file.title"
      :prepend-icon="file.icon"
      :title="file.title"
      :subtitle="file.subtitle"
    >
      <template #append>
        <v-list-item-avatar end>
          <v-btn
            variant="text"
            color="grey lighten-1"
            icon="mdi-information-outline"
          />
        </v-list-item-avatar>
      </template>
    </v-list-item>
  </v-list>
</template>
