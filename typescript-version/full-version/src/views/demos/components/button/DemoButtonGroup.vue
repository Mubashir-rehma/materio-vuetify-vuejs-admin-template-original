<script lang="ts" setup>
const toggleExclusive = ref(1)
</script>

<template>
  <VBtnToggle
    v-model="toggleExclusive"
    divided
  >
    <VBtn
      flat
      variant="outlined"
    >
      <VIcon>mdi-format-align-left</VIcon>
    </VBtn>
    <VBtn
      flat
      variant="outlined"
    >
      <VIcon>mdi-format-align-center</VIcon>
    </VBtn>
    <VBtn
      flat
      variant="outlined"
    >
      <VIcon>mdi-format-align-right</VIcon>
    </VBtn>
    <VBtn
      flat
      variant="outlined"
    >
      <VIcon>mdi-format-align-justify</VIcon>
    </VBtn>
  </VBtnToggle>
</template>
