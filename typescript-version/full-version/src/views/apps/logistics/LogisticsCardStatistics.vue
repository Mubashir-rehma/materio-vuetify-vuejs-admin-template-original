<script setup lang="ts">
const logisticData = [
  { icon: 'mdi-car-estate', color: 'primary', title: 'On route vehicles', value: 42, change: 18.2 },
  { icon: 'mdi-alert-outline', color: 'warning', title: 'Vehicles with errors', value: 8, change: -8.7 },
  { icon: 'mdi-source-branch', color: 'error', title: 'Deviated from route', value: 27, change: 4.3 },
  { icon: 'mdi-timer-outline', color: 'info', title: 'Late vehicles', value: 13, change: -2.5 },
]
</script>

<template>
  <VRow>
    <VCol
      v-for="(data, index) in logisticData"
      :key="index"
      cols="12"
      md="3"
      sm="6"
    >
      <VCard
        class="logistics-card-statistics cursor-pointer"
        :style="{ 'border-block-end': `2px solid`, 'border-block-end-color': `rgb(var(--v-theme-${data.color}))` }"
      >
        <VCardText>
          <div class="d-flex align-center gap-x-4 mb-2">
            <VAvatar
              variant="tonal"
              :color="data.color"
              rounded
            >
              <VIcon
                :icon="data.icon"
                size="24"
              />
            </VAvatar>
            <h5 class="text-h5 font-weight-medium">
              {{ data.value }}
            </h5>
          </div>
          <div class="text-high-emphasis text-body-1">
            {{ data.title }}
          </div>
          <div>
            <span class="text-body-1 me-2">{{ data.change }}%</span>
            <span>than last week</span>
          </div>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/base/mixins" as mixins;

.border-card {
  border-block-end: 3px solid rgb(var(--v-theme-primary));
}

.logistics-card-statistics:hover {
  @include mixins.elevation(9);
}
</style>
