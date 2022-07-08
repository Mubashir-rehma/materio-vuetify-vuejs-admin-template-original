<script setup lang="ts">
const pageSuccess = ref(1)
const pageError = ref(2)
const pageInfo = ref(3)
</script>

<template>
  <VPagination
    v-model="pageSuccess"
    :length="7"
    color="success"
  />

  <VPagination
    v-model="pageError"
    :length="7"
    color="error"
  />

  <VPagination
    v-model="pageInfo"
    :length="7"
    color="info"
  />
</template>
