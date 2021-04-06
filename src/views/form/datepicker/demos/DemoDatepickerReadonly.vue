<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
      class="text-center"
    >
      <v-date-picker
        v-model="date"
        readonly
      ></v-date-picker>
    </v-col>

    <v-col
      cols="12"
      md="6"
      class="text-center"
    >
      <v-date-picker
        v-model="date"
        disabled
      ></v-date-picker>
    </v-col>
  </v-row>
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
