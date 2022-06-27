<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()

const currentTheme = vuetifyTheme.current.value.colors

const series = [78]

const chartOptions = {
  chart: {
    sparkline: {
      enabled: true,
    },
  },
  colors: [currentTheme.info],
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: {
        size: '65%',
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          fontSize: '1.25rem',
          fontWeight: '600',
          offsetY: 0,
        },
      },
    },
  },
  stroke: {
    lineCap: 'round',
  },
}
</script>

<template>
  <v-card title="135k">
    <VueApexCharts
      id="stats-radial-bar-chart"
      :options="chartOptions"
      :series="series"
      type="radialBar"
      height="auto"
    />

    <v-card-text class="text-center font-weight-semibold mt-13">
      Total Revenue
    </v-card-text>
  </v-card>
</template>

  <style lang="scss">
  #stats-radial-bar-chart {
    .apexcharts-canvas {
      .apexcharts-text {
        &.apexcharts-datalabel-value {
          font-weight: 600;
        }
      }
    }
  }
  </style>

