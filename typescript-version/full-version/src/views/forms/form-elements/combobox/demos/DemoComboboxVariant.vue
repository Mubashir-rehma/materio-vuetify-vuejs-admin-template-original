<script lang="ts" setup>
const selectedItem = ref(['Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
</script>

<template>
  <v-combobox
    v-model="selectedItem"
    :items="items"
    multiple
    chips
    variant="contained"
    label="Contained"
  />

  <v-combobox
    v-model="selectedItem"
    multiple
    chips
    :items="items"
    variant="outlined"
    label="Outlined"
  />

  <v-combobox
    v-model="selectedItem"
    multiple
    chips
    :items="items"
    variant="underlined"
    label="Underlined"
  />

  <v-combobox
    v-model="selectedItem"
    multiple
    chips
    :items="items"
    variant="filled"
    label="Filled"
  />

  <v-combobox
    v-model="selectedItem"
    multiple
    chips
    :items="items"
    variant="plain"
    hide-details
    label="Plain"
  />
</template>
