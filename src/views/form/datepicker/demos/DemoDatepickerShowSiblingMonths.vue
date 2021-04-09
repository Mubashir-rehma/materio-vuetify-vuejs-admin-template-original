<template>
  <v-date-picker
    v-model="picker"
    show-adjacent-months
  ></v-date-picker>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const picker = ref(null)

    return {
      picker,
    }
  },
})
</script>
