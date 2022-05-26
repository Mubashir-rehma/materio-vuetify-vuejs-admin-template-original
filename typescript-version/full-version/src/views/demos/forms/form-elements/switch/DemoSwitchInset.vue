<script lang="ts" setup>
const insetSwitch1 = ref(true)
const insetSwitch2 = ref(false)
</script>

<template>
  <v-switch
    v-model="insetSwitch1"
    inset
    :label="`Switch 1: ${insetSwitch1.toString()}`"
    hide-details
  />
  <v-switch
    v-model="insetSwitch2"
    inset
    :label="`Switch 2: ${insetSwitch2.toString()}`"
    hide-details
  />
</template>
