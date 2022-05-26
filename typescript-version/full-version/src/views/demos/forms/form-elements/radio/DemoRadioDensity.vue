<script lang="ts" setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
</script>

<template>
  <v-radio-group v-model="columnRadio">
    <v-radio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <v-radio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </v-radio-group>

  <v-divider class="my-3" />

  <v-radio-group
    v-model="inlineRadio"
    inline
  >
    <v-radio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <v-radio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </v-radio-group>
</template>
