<script setup lang="ts">
const logisticData = ref([
  { icon: 'mdi-car-estate', color: 'primary', title: 'On route vehicles', value: 42, change: 18.2, isHover: false },
  { icon: 'mdi-alert-outline', color: 'warning', title: 'Vehicles with errors', value: 8, change: -8.7, isHover: false },
  { icon: 'mdi-source-branch', color: 'error', title: 'Deviated from route', value: 27, change: 4.3, isHover: false },
  { icon: 'mdi-timer-outline', color: 'info', title: 'Late vehicles', value: 13, change: -2.5, isHover: false },
])
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
      <div>
        <VCard
          class="logistics-card-statistics cursor-pointer"
          :style="data.isHover ? { 'border-block-end': `3px solid rgba(var(--v-theme-${data.color}))` } : { 'border-block-end': `2px solid rgba(var(--v-theme-${data.color}), var(--v-disabled-opacity))` }"
          @mouseenter="data.isHover = true"
          @mouseleave="data.isHover = false"
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
      </div>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/base/mixins" as mixins;

.logistics-card-statistics:hover {
  @include mixins.elevation(12);
  transition: all 0.1s ease-out;
}
</style>
