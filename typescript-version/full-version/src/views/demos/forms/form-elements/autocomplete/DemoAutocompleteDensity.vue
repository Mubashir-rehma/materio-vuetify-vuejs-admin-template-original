<script setup lang="ts">
const select = ref(['Florida'])
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
</script>

<template>
  <VAutocomplete
    v-model="select"
    label="States"
    density="compact"
    :items="items"
  />
</template>
