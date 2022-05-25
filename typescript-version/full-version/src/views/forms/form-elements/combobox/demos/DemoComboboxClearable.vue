<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
</script>

<template>
  <v-combobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    clearable
    clear-icon="mdi-close-circle-outline"
  />
</template>
