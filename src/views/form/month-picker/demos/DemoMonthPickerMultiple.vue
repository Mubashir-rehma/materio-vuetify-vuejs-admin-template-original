<template>
  <v-row justify="center">
    <v-date-picker
      v-model="months"
      type="month"
      multiple
    ></v-date-picker>
  </v-row>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const months = ref(['2018-09', '2018-10'])

    return {
      months,
    }
  },
})
</script>
