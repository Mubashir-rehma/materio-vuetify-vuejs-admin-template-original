<script lang="ts" setup>
const rating = ref(4.5)
</script>

<template>
  <v-rating
    v-model="rating"
    half-increments
    hover
  />
</template>
