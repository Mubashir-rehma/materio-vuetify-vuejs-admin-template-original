<script lang="ts" setup>
const people = ref(['John'])
</script>

<template>
  <v-switch
    v-model="people"
    label="John"
    value="John"
    hide-details
  />

  <v-switch
    v-model="people"
    label="Jacob"
    value="Jacob"
    hide-details
  />
  <p class="mt-2 mb-0">
    {{ people }}
  </p>
</template>
