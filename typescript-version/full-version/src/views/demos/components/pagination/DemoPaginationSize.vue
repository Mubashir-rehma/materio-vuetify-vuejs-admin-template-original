<script setup lang="ts">
const xSmallPagination = ref(1)
const smallPagination = ref(2)
const largePagination = ref(3)
</script>

<template>
  <VPagination
    v-model="xSmallPagination"
    :length="7"
    size="x-small"
  />

  <VPagination
    v-model="smallPagination"
    :length="7"
    size="small"
  />

  <VPagination
    v-model="largePagination"
    :length="7"
    size="large"
  />
</template>
