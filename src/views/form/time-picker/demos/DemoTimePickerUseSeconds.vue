<template>
  <v-row justify="center">
    <v-time-picker
      v-model="picker"
      use-seconds
    ></v-time-picker>
  </v-row>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const picker = ref(null)

    return { picker }
  },
})
</script>
