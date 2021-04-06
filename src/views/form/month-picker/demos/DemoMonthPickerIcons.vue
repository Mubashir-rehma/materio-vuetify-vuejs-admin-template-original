<template>
  <v-row justify="center">
    <v-date-picker
      v-model="picker"
      type="month"
      :year-icon="icons.mdiCalendarBlank"
      :prev-icon="icons.mdiSkipPrevious"
      :next-icon="icons.mdiSkipNext"
    ></v-date-picker>
  </v-row>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mdiCalendarBlank, mdiSkipPrevious, mdiSkipNext } from '@mdi/js'

export default defineComponent({
  setup() {
    const picker = new Date().toISOString().substr(0, 7)

    return {
      picker,
      icons: {
        mdiCalendarBlank,
        mdiSkipPrevious,
        mdiSkipNext,
      },
    }
  },
})
</script>
