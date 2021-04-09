<template>
  <v-rating
    v-model="rating"
    color="warning"
    background-color="warning"
    half-increments
    hover
  ></v-rating>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const rating = ref(4.5)

    return {
      rating,
    }
  },
})
</script>
