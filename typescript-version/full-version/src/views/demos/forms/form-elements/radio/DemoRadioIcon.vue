<script lang="ts" setup>
const radioGroup = ref(1)
</script>

<template>
  <v-radio-group
    v-model="radioGroup"
    false-icon="mdi-bell-off-outline"
    true-icon="mdi-bell-outline"
  >
    <v-radio
      v-for="n in 2"
      :key="n"
      :label="`Radio ${n}`"
      :value="n"
    />
  </v-radio-group>
</template>
