<template>
  <div class="text-center">
    <v-rating
      v-model="rating"
      color="warning"
      background-color="secondary"
      empty-icon="$ratingFull"
      half-increments
      hover
    ></v-rating>
  </div>
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
