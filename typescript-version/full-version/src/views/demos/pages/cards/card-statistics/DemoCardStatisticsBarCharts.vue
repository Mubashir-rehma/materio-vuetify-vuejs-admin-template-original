<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()

const currentTheme = vuetifyTheme.current.value.colors

const series = [
  {
    name: '2020',
    data: [45, 85, 65, 50, 70],
  },
]

const chartOptions = {
  chart: {
    type: 'bar',
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  grid: {
    show: false,
    padding: {
      left: 20,
      right: 20,
      top: -15,
      bottom: -15,
    },
  },

  colors: [currentTheme.error, currentTheme.primary, currentTheme.error, currentTheme.primary, currentTheme.primary],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '20%',
      borderRadius: 4,
      startingShape: 'rounded',
      endingShape: 'rounded',
      distributed: true,
      colors: {
        backgroundBarColors: ['#5e566914', '#5e566914', '#5e566914', '#5e566914', '#5e566914'],
        backgroundBarRadius: 5,
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
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
    x: {
      show: false,
    },
  },
}
</script>

<template>
  <v-card title="2,856">
    <VueApexCharts
      :options="chartOptions"
      :series="series"
      height="auto"
    />

    <v-card-text class="text-center font-weight-semibold">
      Sessions
    </v-card-text>
  </v-card>
</template>
