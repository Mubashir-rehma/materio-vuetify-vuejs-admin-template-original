<script setup lang="ts">
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import { useLogisticsStore } from '@/views/apps/logistics/useLogisticsStore'
import type { Options } from '@core/types'

const vehiclesData = ref([])
const totalVehicles = ref(0)

const logisticStore = useLogisticsStore()

const options = ref<Options>({
  page: 1,
  itemsPerPage: 5,
  sortBy: [],
  groupBy: [],
  search: undefined,
})

const fetchVehicles = () => {
  logisticStore.fetchVehicles({
    options: options.value,
  }).then(res => {
    vehiclesData.value = res.data.vehicles
    totalVehicles.value = res.data.totalVehicles
  })
}

const headers = [
  { title: 'LOCATION', key: 'location' },
  { title: 'STARTING ROUTE', key: 'startRoute' },
  { title: 'ENDING ROUTE', key: 'endRoute' },
  { title: 'WARNINGS', key: 'warnings' },
  { title: 'PROGRESS', key: 'progress' },
]

const resolveChipColor = (warning: string) => {
  if (warning === 'No Warnings')
    return 'success'
  if (warning === 'fuel problems')
    return 'primary'
  if (warning === 'Temperature Not Optimal')
    return 'warning'
  if (warning === 'Ecu Not Responding')
    return 'error'
  if (warning === 'Oil Leakage')
    return 'info'
}

watchEffect(fetchVehicles)
</script>

<template>
  <VCard>
    <VCardItem title="On Route vehicles">
      <template #append>
        <MoreBtn />
      </template>
    </VCardItem>

    <VDataTableServer
      v-model:items-per-page="options.itemsPerPage"
      v-model:page="options.page"
      :items-length="totalVehicles"
      :items="vehiclesData"
      :headers="headers"
      show-select
      class="text-no-wrap"
    >
      <template #item.location="{ item }">
        <VAvatar
          variant="tonal"
          class="me-4"
        >
          <VIcon
            icon="mdi-bus"
            size="28"
          />
        </VAvatar>
        <span class="text-body-2 text-high-emphasis font-weight-medium">
          VOL-{{ item.raw.location }}
        </span>
      </template>

      <template #item.startRoute="{ item }">
        {{ item.raw.startCity }}, {{ item.raw.startCountry }}
      </template>

      <template #item.endRoute="{ item }">
        {{ item.raw.endCity }}, {{ item.raw.endCountry }}
      </template>

      <template #item.warnings="{ item }">
        <VChip
          :color="resolveChipColor(item.raw.warnings)"
          density="comfortable"
        >
          {{ item.raw.warnings }}
        </VChip>
      </template>

      <template #item.progress="{ item }">
        <div
          class="d-flex align-center gap-x-4"
          style="min-inline-size: 240px;"
        >
          <div class="w-100">
            <VProgressLinear
              :model-value="item.raw.progress"
              rounded
              color="primary"
              :height="8"
            />
          </div>
          <div>
            {{ item.raw.progress }}%
          </div>
        </div>
      </template>
    </VDataTableServer>
  </VCard>
</template>
