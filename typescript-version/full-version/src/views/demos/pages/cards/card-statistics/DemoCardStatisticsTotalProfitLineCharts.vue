<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()

const currentTheme = vuetifyTheme.current.value.colors

const series = [
  {
    data: [0, 20, 5, 30, 15, 45],
  },
]

const chartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  grid: {
    strokeDashArray: 7,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: -30,
      right: 20,
      left: 20,
      bottom: -10,
    },
  },
  stroke: {
    width: 3,
  },
  colors: [currentTheme.primary],
  markers: {
    size: 6,
    colors: 'transparent',
    strokeColors: 'transparent',
    strokeWidth: 4,
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: series[0].data.length - 1,
        fillColor: currentTheme['on-primary'],
        strokeColor: currentTheme.primary,
        size: 6,
      },
    ],
    hover: {
      size: 7,
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  tooltip: {
    enbled: false,
  },
}
</script>

<template>
  <v-card title="$86.4k">
    <VueApexCharts
      type="line"
      :options="chartOptions"
      :series="series"
      height="auto"
    />

    <v-card-text class="text-center font-weight-semibold">
      Total Profit
    </v-card-text>
  </v-card>
</template>
