<template>
  <v-row justify="space-around">
    <v-date-picker
      v-model="date"
      full-width
      color="primary"
      type="month"
      class="mt-4"
    ></v-date-picker>
  </v-row>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const date = new Date().toISOString().substr(0, 7)

    return {
      date,
    }
  },
})
</script>
