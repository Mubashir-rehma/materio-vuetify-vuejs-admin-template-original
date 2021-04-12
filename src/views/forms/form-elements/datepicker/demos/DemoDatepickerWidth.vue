<template>
  <v-date-picker
    v-model="date"
    full-width
  ></v-date-picker>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const date = new Date().toISOString().substr(0, 10)

    return { date }
  },
})
</script>
