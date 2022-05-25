<script lang="ts" setup>
const rating = ref(4)
</script>

<template>
  <div class="d-flex flex-column">
    <v-rating
      v-model="rating"
      size="x-small"
    />
    <v-rating
      v-model="rating"
      size="small"
    />
    <v-rating v-model="rating" />
    <v-rating
      v-model="rating"
      size="large"
    />
    <v-rating
      v-model="rating"
      size="x-large"
    />
    <v-rating
      v-model="rating"
      size="54"
    />
  </div>
</template>
