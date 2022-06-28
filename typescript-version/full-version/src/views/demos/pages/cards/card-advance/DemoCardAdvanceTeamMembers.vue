<script setup lang="ts">
import avatar1 from '@/assets/images/avatars/avatar-1.png'
import avatar2 from '@/assets/images/avatars/avatar-2.png'
import avatar3 from '@/assets/images/avatars/avatar-3.png'
import avatar5 from '@/assets/images/avatars/avatar-5.png'
import avatar8 from '@/assets/images/avatars/avatar-8.png'
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()

const chartOptions = {
  chart: {
    sparkline: {
      enabled: false,
    },
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '30%',
      },
      track: {
        background: '#ebe9f1',
      },
      dataLabels: {
        show: false,
        name: {
          show: false,
        },
      },
    },
  },

  grid: {
    padding: {
      bottom: -15,
    },
  },
}

const getChartConfig = (value: string) => {
  const options = JSON.parse(JSON.stringify(chartOptions))
  options.colors = [value]

  return options
}

const teamMembers = [
  {
    profilePic: avatar1,
    name: 'Dean Hogan',
    designation: 'IOS developer',
    project: 'Zipper',
    projectIndication: 'primary',
    task: '87/135',
    progress: [65],
    progressIndication: vuetifyTheme.current.value.colors.primary,
  },
  {
    profilePic: avatar8,
    name: 'Hilda Rice',
    designation: 'Laravel developer',
    project: 'Brandi',
    projectIndication: 'success',
    task: '340/420',
    progress: [75],
    progressIndication: vuetifyTheme.current.value.colors.success,
  },
  {
    profilePic: avatar5,
    name: 'Andrew O\'Brien',
    designation: 'React developer',
    project: 'Payers',
    projectIndication: 'warning',
    task: '50/82',
    progress: [55],
    progressIndication: vuetifyTheme.current.value.colors.warning,
  },
  {
    profilePic: avatar2,
    name: 'Eleanor Price',
    designation: 'Angular developer',
    project: 'Citibank',
    projectIndication: 'error',
    task: '98/260',
    progress: [60],
    progressIndication: vuetifyTheme.current.value.colors.error,
  },
  {
    profilePic: avatar3,
    name: 'Carl Oliver',
    designation: 'VueJs developer',
    project: 'Aviator',
    projectIndication: 'secondary',
    task: '12/25',
    progress: [60],
    progressIndication: vuetifyTheme.current.value.colors.secondary,
  },
]
</script>

<template>
  <v-card>
    <!-- SECTION Card Header and Menu -->
    <v-card-header>
      <v-card-header-text>
        <!-- 👉 Title -->
        <v-card-title>Team Members</v-card-title>
      </v-card-header-text>

      <!-- 👉 menu -->
      <v-btn
        size="x-small"
        variant="text"
        icon="mdi-dots-vertical"
        color="secondary"
        class="me-n3"
      />
    </v-card-header>
    <!-- !SECTION -->

    <!-- TODO try to remove table border -->
    <v-table class="text-no-wrap">
      <thead>
        <tr>
          <th>Name</th>
          <th>Project</th>
          <th>Tasks</th>
          <th>Progress</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="member in teamMembers"
          :key="member.name"
        >
          <td>
            <div class="d-flex">
              <div class="me-3">
                <v-avatar :image="member.profilePic" />
              </div>
              <div>
                <p class="text-body-2 font-weight-semibold mb-0">
                  {{ member.name }}
                </p>
                <span class="text-caption">{{ member.designation }}</span>
              </div>
            </div>
          </td>

          <td>
            <v-chip
              :color="member.projectIndication"
              size="small"
            >
              {{ member.project }}
            </v-chip>
          </td>

          <td>
            <span class="text-primary">{{ member.task.split('/')[0] }}</span>
            <span>/</span>
            <span>{{ member.task.split('/')[1] }}</span>
          </td>

          <td>
            <vue-apex-charts
              type="radialBar"
              :options="getChartConfig(member.progressIndication)"
              :series="member.progress"
              height="90"
              width="60"
            />
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>
