<script setup lang="ts">
const toggleCheckbox = ref(true)
const toggleIndeterminateCheckbox = ref(true)
</script>

<template>
  <div class="d-flex flex-wrap">
    <v-checkbox
      v-model="toggleCheckbox"
      label="On"
    />

    <v-checkbox label="Off" />

    <v-checkbox
      v-model:indeterminate="toggleIndeterminateCheckbox"
      label="Indeterminate"
    />

    <v-checkbox
      :model-value="true"
      disabled
      label="On disabled"
    />

    <v-checkbox
      disabled
      label="Off disabled"
    />
  </div>
</template>
