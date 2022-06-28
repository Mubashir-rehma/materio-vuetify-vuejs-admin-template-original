<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
</script>

<template>
  <v-select
    :items="items"
    label="Standard"
  />
</template>
