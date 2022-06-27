<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()

const currentTheme = vuetifyTheme.current.value.colors

const series = [
  {
    data: [28, 58, 40, 68],
  },
]

const chartOptions = {
  grid: {
    show: false,
  },
  chart: {
    type: 'line',
    offsetX: -8,
    dropShadow: {
      enabled: true,
      top: 10,
      blur: 4,

      color: currentTheme.primary,
      opacity: 0.09,
    },
    toolbar: {
      show: false,
    },
  },
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
  stroke: {
    width: 5,
    curve: 'smooth',
    lineCap: 'round',
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    enabled: false,
  },

  colors: [currentTheme.primary],
}
</script>

<template>
  <v-card title="$35.4k">
    <VueApexCharts
      :options="chartOptions"
      :series="series"
      height="auto"
    />

    <v-card-text class="text-center font-weight-semibold">
      Total Revenue
    </v-card-text>
  </v-card>
</template>
