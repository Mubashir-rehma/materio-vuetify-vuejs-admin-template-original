<script lang="ts" setup>
const toggleSwitch = ref(true)
const toggleFalseSwitch = ref(false)
</script>

<template>
  <VSwitch
    v-model="toggleSwitch"
    :label="`${toggleSwitch.toString()}`"
    hide-details
  />

  <VSwitch
    v-model="toggleFalseSwitch"
    :label="`${toggleFalseSwitch.toString()}`"
    hide-details
  />
</template>
