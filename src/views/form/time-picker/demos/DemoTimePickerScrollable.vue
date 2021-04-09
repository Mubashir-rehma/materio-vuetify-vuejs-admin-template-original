<template>
  <v-time-picker
    v-model="picker"
    scrollable
  ></v-time-picker>
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
