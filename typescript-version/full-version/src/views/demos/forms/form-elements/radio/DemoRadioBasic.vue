<script lang="ts" setup>
const radioGroup = ref(1)
</script>

<template>
  <v-radio-group
    v-model="radioGroup"
    hide-details
  >
    <v-radio
      v-for="n in 2"
      :key="n"
      :label="`Radio ${n}`"
      :value="n"
    />
  </v-radio-group>
</template>
