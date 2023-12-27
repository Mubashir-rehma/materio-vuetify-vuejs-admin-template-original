<script lang="ts" setup>
const currentPage = ref(1)
</script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    prev-icon="ri-menu-line"
    next-icon="ri-menu-line"
  />
</template>
