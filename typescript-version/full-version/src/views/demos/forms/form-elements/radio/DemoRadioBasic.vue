<script lang="ts" setup>
const radioGroup = ref(1)
</script>

<template>
  <VRadioGroup v-model="radioGroup">
    <VRadio
      v-for="n in 2"
      :key="n"
      :label="`Radio ${n}`"
      :value="n"
    />
  </VRadioGroup>
</template>
