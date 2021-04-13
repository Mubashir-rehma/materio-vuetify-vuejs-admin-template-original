<template>
  <v-card>
    <v-card-title>
      <span>New Product Data</span>

      <v-spacer></v-spacer>
      <v-btn-toggle
        dense
        color="primary"
      >
        <v-btn outlined>
          Daily
        </v-btn>
        <v-btn outlined>
          Monthly
        </v-btn>
        <v-btn outlined>
          Yearly
        </v-btn>
      </v-btn-toggle>
    </v-card-title>

    <!-- chart -->
    <v-card-text>
      <chartjs-component-scatter-chart
        :height="400"
        :data="chartjsData.scatterChart.data"
        :options="chartjsData.scatterChart.options"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import ChartjsComponentScatterChart from './charts-components/ChartjsComponentScatterChart.vue'
import chartjsData from './chartjsData'

export default defineComponent({
  components: {
    ChartjsComponentScatterChart,
  },
  setup() {
    return {
      chartjsData,
    }
  },
})
</script>
