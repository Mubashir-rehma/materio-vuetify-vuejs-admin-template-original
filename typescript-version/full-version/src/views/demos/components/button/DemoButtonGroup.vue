<script lang="ts" setup>
const toggleExclusive = ref(1)
</script>

<template>
  <VBtnToggle
    v-model="toggleExclusive"
    divided
    color="primary"
    variant="outlined"
  >
    <VBtn
      icon="ri-align-left"
      height="40"
    />
    <VBtn
      icon="ri-align-center"
      height="40"
    />
    <VBtn
      icon="ri-align-right"
      height="40"
    />
    <VBtn
      icon="ri-align-justify"
      height="40"
    />
  </VBtnToggle>
</template>
