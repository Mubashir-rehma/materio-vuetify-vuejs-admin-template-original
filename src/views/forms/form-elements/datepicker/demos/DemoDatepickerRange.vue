<template>
  <v-date-picker
    v-model="dates"
    range
    color="primary"
  ></v-date-picker>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const dates = ref(['2019-09-10', '2019-09-20'])

    return {
      dates,
    }
  },
})
</script>
