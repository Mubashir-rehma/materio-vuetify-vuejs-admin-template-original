<script lang="ts" setup>
const length = ref(5)
const rating = ref(2)
</script>

<template>
  <div class="text-caption">
    Custom length
  </div>
  <v-slider
    v-model="length"
    :min="1"
    :max="7"
  />

  <v-rating
    v-model="rating"
    :length="length"
  />
</template>
