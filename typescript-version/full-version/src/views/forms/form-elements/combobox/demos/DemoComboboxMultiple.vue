<script lang="ts" setup>
const selectedItem = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
</script>

<template>
  <v-combobox
    v-model="selectedItem"
    :items="items"
    label="Select a favorite activity or create a new one"
    multiple
  />

  <v-combobox
    v-model="selectedItem"
    :items="items"
    label="I use chips"
    multiple
    chips
  />

  <v-combobox
    v-model="selectedItem"
    label="I'm readonly"
    chips
    multiple
    readonly
    hide-details
  />
</template>
