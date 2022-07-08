<script lang="ts" setup>
const people = ref(['John'])
</script>

<template>
  <VSwitch
    v-model="people"
    label="John"
    value="John"
    hide-details
  />

  <VSwitch
    v-model="people"
    label="Jacob"
    value="Jacob"
    hide-details
  />
  <p class="mt-2 mb-0">
    {{ people }}
  </p>
</template>
