<script lang="ts" setup>
const colorCheckbox = ref(['primary', 'secondary', 'success', 'info', 'warning', 'error'])
</script>

<template>
  <div class="d-flex flex-wrap">
    <v-checkbox
      v-for="color in colorCheckbox"
      :key="color"
      :label="color"
      :color="color"
      :value="color"
    />
  </div>
</template>
