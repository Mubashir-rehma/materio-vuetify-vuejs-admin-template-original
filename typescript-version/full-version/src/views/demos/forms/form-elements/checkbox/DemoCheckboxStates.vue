<script setup lang="ts">
const toggleCheckbox = ref(true)
const toggleIndeterminateCheckbox = ref(true)
</script>

<template>
  <div class="d-flex flex-wrap">
    <VCheckbox
      v-model="toggleCheckbox"
      label="On"
    />

    <VCheckbox label="Off" />

    <VCheckbox
      v-model:indeterminate="toggleIndeterminateCheckbox"
      label="Indeterminate"
    />

    <VCheckbox
      :model-value="true"
      disabled
      label="On disabled"
    />

    <VCheckbox
      disabled
      label="Off disabled"
    />
  </div>
</template>
