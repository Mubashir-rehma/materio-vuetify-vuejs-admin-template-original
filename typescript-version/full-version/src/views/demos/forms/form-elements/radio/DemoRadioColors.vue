<script lang="ts" setup>
const selectedRadio = ref('primary')
const colorsRadio = ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error']
</script>

<template>
  <v-radio-group
    v-model="selectedRadio"
    inline
  >
    <v-radio
      v-for="radio in colorsRadio"
      :key="radio"
      :label="radio"
      :color="radio.toLocaleLowerCase()"
      :value="radio.toLocaleLowerCase()"
    />
  </v-radio-group>
</template>
