<template>
  <v-row>
    <v-col cols="12">
      <timeline-with-icons></timeline-with-icons>
    </v-col>
    <v-col
      cols="12"
      sm="6"
    >
      <custom-timeline></custom-timeline>
    </v-col>
  </v-row>
</template>

<script>
import CustomTimeline from './CustomTimeline.vue'
import TimelineWithIcons from './TimelineWithIcons.vue'

export default {
  components: {
    CustomTimeline,
    TimelineWithIcons,
  },
}
</script>

<style>
</style>
