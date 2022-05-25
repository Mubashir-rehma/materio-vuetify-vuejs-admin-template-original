<script setup lang="ts">
const xSmallPagination = ref(1)
const smallPagination = ref(2)
const largePagination = ref(3)
</script>

<template>
  <v-pagination
    v-model="xSmallPagination"
    :length="7"
    size="x-small"
  />

  <v-pagination
    v-model="smallPagination"
    :length="7"
    size="small"
  />

  <v-pagination
    v-model="largePagination"
    :length="7"
    size="large"
  />
</template>
