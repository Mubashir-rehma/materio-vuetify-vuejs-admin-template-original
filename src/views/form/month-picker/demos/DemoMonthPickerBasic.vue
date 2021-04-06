<template>
  <v-row justify="center">
    <v-date-picker
      v-model="picker"
      type="month"
    ></v-date-picker>
  </v-row>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const picker = new Date().toISOString().substr(0, 10)

    return {
      picker,
    }
  },
})
</script>
