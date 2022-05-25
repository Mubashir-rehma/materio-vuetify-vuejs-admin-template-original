<script setup lang="ts">
const pageSuccess = ref(1)
const pageError = ref(2)
const pageInfo = ref(3)
</script>

<template>
  <v-pagination
    v-model="pageSuccess"
    :length="7"
    color="success"
  />

  <v-pagination
    v-model="pageError"
    :length="7"
    color="error"
  />

  <v-pagination
    v-model="pageInfo"
    :length="7"
    color="info"
  />
</template>
