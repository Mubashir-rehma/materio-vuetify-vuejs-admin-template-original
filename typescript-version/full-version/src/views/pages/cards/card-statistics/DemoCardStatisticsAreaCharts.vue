<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()

const currentTheme = vuetifyTheme.current.value.colors

const series = [
  {
    name: 'Subscribers',
    data: [28, 40, 36, 52, 38, 60, 55],
  },
]

const chartOptions = {
  grid: {
    show: false,
  },
  chart: {
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 2.5,
  },

  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 0.9,
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 80, 100],
    },
  },
  xaxis: {
    type: 'numeric',
    lines: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    labels: { show: false },
  },
  yaxis: [
    {
      y: 0,
      offsetX: 0,
      offsetY: 0,
      padding: {
        left: 0,
        right: 0,
      },
    },
  ],
  tooltip: {
    x: { show: false },
  },
  theme: {
    monochrome: {
      enabled: true,

      color: currentTheme.success,
      shadeTo: 'light',
      shadeIntensity: 0.65,
    },
  },
}
</script>

<template>
  <VCard title="42.5k">
    <VCardText>
      <VueApexCharts
        type="area"
        height="auto"
        :options="chartOptions"
        :series="series"
      />
    </VCardText>

    <VCardText class="text-center font-weight-semibold mt-10">
      Total Growth
    </VCardText>
  </VCard>
</template>
