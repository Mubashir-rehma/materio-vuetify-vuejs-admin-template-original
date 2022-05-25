<script setup lang="ts">
const toggleCheckbox = ref(true)
const toggleIndeterminateCheckbox = ref(true)
</script>

<template>
  <div class="d-flex flex-wrap">
    <v-checkbox
      v-model="toggleCheckbox"
      label="On"
      hide-details
    />

    <v-checkbox
      label="Off"
      hide-details
    />

    <v-checkbox
      v-model:indeterminate="toggleIndeterminateCheckbox"
      label="Indeterminate"
      hide-details
    />

    <v-checkbox
      :model-value="true"
      disabled
      label="On disabled"
      hide-details
    />

    <v-checkbox
      disabled
      label="Off disabled"
      hide-details
    />
  </div>
</template>
