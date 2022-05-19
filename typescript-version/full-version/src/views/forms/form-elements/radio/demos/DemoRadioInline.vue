<script lang="ts" setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
</script>

<template>
  <v-radio-group
    v-model="columnRadio"
    hide-details
  >
    <v-radio
      label="Option 1"
      value="radio-1"
    />
    <v-radio
      label="Option 2"
      value="radio-2"
    />
  </v-radio-group>

  <v-divider class="my-4" />

  <v-radio-group
    v-model="inlineRadio"
    inline
    hide-details
  >
    <v-radio
      label="Option 1"
      value="radio-1"
    />
    <v-radio
      label="Option 2"
      value="radio-2"
    />
  </v-radio-group>
</template>
