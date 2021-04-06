<template>
  <v-row
    justify="space-around"
    class="mt-1"
  >
    <v-date-picker
      v-model="picker"
      color="success"
    ></v-date-picker>
  </v-row>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const picker = new Date().toISOString().substr(0, 10)
    const picker2 = new Date().toISOString().substr(0, 10)

    return {
      picker,
      picker2,
    }
  },
})
</script>
