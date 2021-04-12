<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <h2>Start:</h2>
      <v-time-picker
        v-model="start"
        :max="end"
      ></v-time-picker>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <h2>End:</h2>
      <v-time-picker
        v-model="end"
        :min="start"
      ></v-time-picker>
    </v-col>
  </v-row>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const start = ref(null)
    const end = ref(null)

    return { start, end }
  },
})
</script>
