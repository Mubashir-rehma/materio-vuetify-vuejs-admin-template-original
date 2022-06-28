<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
</script>

<template>
  <v-select
    :items="items"
    :menu-props="{ transition: 'scroll-y-transition' }"
    label="Label"
  />
</template>
