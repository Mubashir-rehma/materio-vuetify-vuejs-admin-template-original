<script setup lang="ts">
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
    profilePic: dynamicImgImport('@/assets/images/avatars/avatar-1.png'),
    name: 'Dean Hogan',
    designation: 'IOS developer',
    project: 'Zipper',
    projectIndication: 'primary',
    task: '87/135',
    progress: [65],
    progressIndication: vuetifyTheme.current.value.colors.primary,
  },
  {
    profilePic: dynamicImgImport('@/assets/images/avatars/avatar-8.png'),
    name: 'Hilda Rice',
    designation: 'Laravel developer',
    project: 'Brandi',
    projectIndication: 'success',
    task: '340/420',
    progress: [75],
    progressIndication: vuetifyTheme.current.value.colors.success,
  },
  {
    profilePic: dynamicImgImport('@/assets/images/avatars/avatar-5.png'),
    name: 'Andrew O\'Brien',
    designation: 'React developer',
    project: 'Payers',
    projectIndication: 'warning',
    task: '50/82',
    progress: [55],
    progressIndication: vuetifyTheme.current.value.colors.warning,
  },
  {
    profilePic: dynamicImgImport('@/assets/images/avatars/avatar-2.png'),
    name: 'Eleanor Price',
    designation: 'Angular developer',
    project: 'Citibank',
    projectIndication: 'error',
    task: '98/260',
    progress: [60],
    progressIndication: vuetifyTheme.current.value.colors.error,
  },
  {
    profilePic: dynamicImgImport('@/assets/images/avatars/avatar-3.png'),
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
  <VCard>
    <!-- SECTION Card Header and Menu -->
    <VCardItem>
      <!-- 👉 Title -->
      <VCardTitle>Team Members</VCardTitle>

      <!-- 👉 menu -->
      <template #append>
        <VBtn
          size="x-small"
          variant="text"
          icon="mdi-dots-vertical"
          color="secondary"
          class="me-n3"
        />
      </template>
    </VCardItem>
    <!-- !SECTION -->

    <!-- TODO try to remove table border -->
    <VTable class="text-no-wrap">
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
                <VAvatar :image="member.profilePic" />
              </div>
              <div>
                <p class="text-sm font-weight-semibold mb-0">
                  {{ member.name }}
                </p>
                <span class="text-caption">{{ member.designation }}</span>
              </div>
            </div>
          </td>

          <td>
            <VChip
              :color="member.projectIndication"
              size="small"
            >
              {{ member.project }}
            </VChip>
          </td>

          <td>
            <span class="text-primary">{{ member.task.split('/')[0] }}</span>
            <span>/</span>
            <span>{{ member.task.split('/')[1] }}</span>
          </td>

          <td>
            <VueApexCharts
              type="radialBar"
              :options="getChartConfig(member.progressIndication)"
              :series="member.progress"
              height="90"
              width="60"
            />
          </td>
        </tr>
      </tbody>
    </VTable>
  </VCard>
</template>
