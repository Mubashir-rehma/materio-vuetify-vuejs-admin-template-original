<template>
  <v-row>
    <v-col
      cols="12"
      class="mb-6"
    >
      <demo-headlines></demo-headlines>
    </v-col>
    <v-col cols="12">
      <demo-texts></demo-texts>
    </v-col>
  </v-row>
</template>

<script>
import DemoHeadlines from './demos/DemoHeadlines.vue'
import DemoTexts from './demos/DemoTexts.vue'

export default {
  components: {
    DemoHeadlines,
    DemoTexts,
  },
}
</script>
