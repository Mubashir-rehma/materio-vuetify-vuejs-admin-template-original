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
import { defineComponent } from '@vue/composition-api'

// demos
import DemoHeadlines from './demos/DemoHeadlines.vue'
import DemoTexts from './demos/DemoTexts.vue'

export default defineComponent({
  components: {
    DemoHeadlines,
    DemoTexts,
  },
})
</script>
