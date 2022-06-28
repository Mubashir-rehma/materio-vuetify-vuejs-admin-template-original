<script lang="ts" setup>
const items = ['foo', 'bar', 'fizz', 'buzz']
const selected = ref(['foo', 'bar', 'fizz', 'buzz'])
</script>

<template>
  <v-select
    v-model="selected"
    :items="items"
    label="Chips"
    chips
    multiple
  />
</template>
