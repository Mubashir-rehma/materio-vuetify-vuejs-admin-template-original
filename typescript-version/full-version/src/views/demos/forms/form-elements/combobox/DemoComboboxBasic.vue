<script lang="ts" setup>
const selectedItem = ref(['Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
</script>

<template>
  <v-combobox
    v-model="selectedItem"
    :items="items"
  />
</template>
