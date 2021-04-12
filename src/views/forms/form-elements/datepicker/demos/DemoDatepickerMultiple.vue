<template>
  <v-date-picker
    v-model="dates"
    multiple
  ></v-date-picker>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const dates = ref(['2018-09-15', '2018-09-20'])

    return {
      dates,
    }
  },
})
</script>
