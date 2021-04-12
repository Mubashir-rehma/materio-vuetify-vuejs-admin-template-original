<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <v-date-picker
        v-model="date"
        type="month"
        readonly
      ></v-date-picker>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <v-date-picker
        v-model="date"
        type="month"
        disabled
      ></v-date-picker>
    </v-col>
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
