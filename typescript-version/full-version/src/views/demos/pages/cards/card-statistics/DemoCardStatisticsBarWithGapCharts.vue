<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()

const currentTheme = vuetifyTheme.current.value.colors

const series = [
  {
    name: 'Earning',
    data: [180, 120, 284, 180, 102],
  },
  {
    name: 'Expense',
    data: [-100, -130, -100, -60, -120],
  },
]

const chartOptions = {
  chart: {
    stacked: true,
    type: 'bar',
    height: '120',
    offsetX: -5,
    toolbar: { show: false },
  },
  grid: {
    padding: {
      top: -20,
      bottom: -10,
    },
    yaxis: {
      lines: { show: false },
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  colors: [currentTheme.secondary, currentTheme.error],
  plotOptions: {
    bar: {
      columnWidth: '25%',
      borderRadius: 4,
      startingShape: 'rounded',
      endingShape: 'rounded',
    },
    distributed: true,
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  stroke: {
    lineCap: 'round',
  },
}
</script>

<template>
  <v-card title="4,350">
    <VueApexCharts
      id="sessions-chart"
      :options="chartOptions"
      :series="series"
      height="auto"
    />

    <v-card-text class="text-center font-weight-semibold">
      Sessions
    </v-card-text>
  </v-card>
</template>

<style lang="scss">
#sessions-chart {
  .apexcharts-series {
    &[seriesName="Earning"] {
      transform: scaleY(0.965);
    }

    &[seriesName="Expense"] {
      transform: scaleY(1.035);
    }
  }
}
</style>
