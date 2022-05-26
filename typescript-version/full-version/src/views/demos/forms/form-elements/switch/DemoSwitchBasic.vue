<script lang="ts" setup>
const toggleSwitch = ref(true)
const toggleFalseSwitch = ref(false)
</script>

<template>
  <v-switch
    v-model="toggleSwitch"
    :label="`${toggleSwitch.toString()}`"
    hide-details
  />

  <v-switch
    v-model="toggleFalseSwitch"
    :label="`${toggleFalseSwitch.toString()}`"
    hide-details
  />
</template>
