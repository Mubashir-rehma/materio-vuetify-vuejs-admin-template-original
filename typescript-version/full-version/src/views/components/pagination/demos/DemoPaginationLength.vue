<script lang="ts" setup>
const currentPage = ref(1)
</script>

<template>
  <v-pagination
    v-model="currentPage"
    :length="7"
  />
</template>
