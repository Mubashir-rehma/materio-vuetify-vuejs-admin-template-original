<script setup lang="ts">
import { VDataTableServer } from 'vuetify/labs/VDataTable'

// Data table options
const itemsPerPage = ref(5)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

// Update data table options
const updateOptions = (options: any) => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const { data: vehiclesData } = await useApi<any>(createUrl('/apps/logistics/vehicles', {
  query: {
    page,
    itemsPerPage,
    sortBy,
    orderBy,
  },
}))

const vehicles = computed(() => vehiclesData.value.vehicles)
const totalVehicles = computed(() => vehiclesData.value.totalVehicles)

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
</script>

<template>
  <VCard>
    <VCardItem title="On Route vehicles">
      <template #append>
        <MoreBtn />
      </template>
    </VCardItem>

    <VDataTableServer
      v-model:items-per-page="itemsPerPage"
      :items-per-page-options="[
        { value: 5, title: '5' },
        { value: 10, title: '10' },
        { value: 20, title: '20' },
        { value: -1, title: '$vuetify.dataFooter.itemsPerPageAll' },
      ]"
      :items-length="totalVehicles"
      :items="vehicles"
      :headers="headers"
      show-select
      class="text-no-wrap"
      @update:options="updateOptions"
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
        <RouterLink
          class="text-body-2 text-high-emphasis font-weight-medium"
          :to="{ name: 'apps-logistics-fleet' }"
        >
          VOL-{{ item.raw.location }}
        </RouterLink>
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
