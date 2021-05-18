<template>
  <v-card>
    <v-card-title>
      <span>Website Statistics</span>
      <v-spacer></v-spacer>
      <v-icon class="cursor-pointer">
        {{ icons.mdiDotsVertical }}
      </v-icon>
    </v-card-title>

    <v-card-text class="d-flex align-center justify-space-between">
      <div>
        <p class="text-5xl font-weight-semibold text--primary mb-0">
          4,590
        </p>
        <span class="text-base">Total Traffic</span>
      </div>
      <vue-apex-charts
        height="60"
        width="150"
        :options="chartOptions"
        :series="series"
      ></vue-apex-charts>
    </v-card-text>

    <v-card-text>
      <div
        v-for="(data,index) in websiteStatistics"
        :key="data.title"
        :class="`statistics-table d-flex align-center pt-3 ${index !== websiteStatistics.length - 1 ? 'mb-3':''}`"
      >
        <span :class="`badge-sm ${data.color}`"></span>
        <span class="ml-2">{{ data.title }}</span>
        <v-spacer></v-spacer>
        <span class="font-weight-semibold text--primary mr-6">{{ data.traffic }}</span>
        <span class="font-weight-semibold text--primary mr-1">{{ data.percentage.slice(1) }}</span>
        <v-icon
          size="25"
          :color="data.percentage.charAt(0) === '+' ? 'success' :'error'"
        >
          {{ data.percentage.charAt(0) === '+' ? icons.mdiChevronUp:icons.mdiChevronDown }}
        </v-icon>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiDotsVertical, mdiChevronUp, mdiChevronDown } from '@mdi/js'
import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    VueApexCharts,
  },
  setup() {
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
          left: 0,
          right: 0,
          top: -45,
          bottom: -30,
        },
      },

      colors: ['#9155fd'],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '25%',
          startingShape: 'rounded',
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

    const websiteStatistics = [
      {
        title: 'Direct',
        color: 'success',
        traffic: '86,471',
        percentage: '-15%',
      },
      {
        title: 'Organic Search',
        color: 'primary',
        traffic: '57,484',
        percentage: '+85%',
      },
      {
        title: 'Referral',
        color: 'warning',
        traffic: '2,534',
        percentage: '+48%',
      },
      {
        title: 'Mail',
        color: 'error',
        traffic: '977',
        percentage: '-36%',
      },
      {
        title: 'Social',
        color: 'info',
        traffic: '92',
        percentage: '+55%',
      },
      {
        title: 'Other',
        color: 'secondary',
        traffic: '28',
        percentage: '+12%',
      },
    ]

    return {
      chartOptions,
      websiteStatistics,
      series: [
        {
          name: '2020',
          data: [50, 40, 110, 80, 40, 60, 40],
        },
      ],
      icons: {
        mdiDotsVertical,
        mdiChevronUp,
        mdiChevronDown,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.statistics-table {
  border-top: solid 1px rgba(93, 89, 98, 0.14);
  .badge-sm {
    width: 0.875rem;
    height: 0.875rem;
    border-radius: 50%;
    margin: 4px;
  }
}
</style>
