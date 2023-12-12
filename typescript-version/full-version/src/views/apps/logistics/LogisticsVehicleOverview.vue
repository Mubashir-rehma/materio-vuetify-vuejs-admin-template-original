<script setup lang="ts">
const vehicleData = [
  { icon: 'ri-car-line', title: 'On the way', time: '2hr 10min', percentage: 39.7, color: 'rgba(var(--v-theme-on-surface), var(--v-hover-opacity))' },
  { icon: 'ri-download-cloud-2-line', title: 'Unloading', time: '3hr 15min', percentage: 28.3, color: 'rgb(var(--v-theme-primary))' },
  { icon: 'ri-upload-line', title: 'Loading', time: '1hr 24min', percentage: 17.4, color: 'rgb(var(--v-theme-info))' },
  { icon: 'ri-timer-line', title: 'Waiting', time: '5hr 19min', percentage: 14.6, color: '#1A0E33' },
]
</script>

<template>
  <VCard>
    <VCardItem title="Vehicles Overview">
      <template #append>
        <MoreBtn />
      </template>
    </VCardItem>
    <VCardText>
      <div class="d-flex mb-6">
        <div
          v-for="(item, index) in vehicleData"
          :key="item.title"
          :style="`inline-size: ${item.percentage}%;`"
        >
          <div class="vehicle-progress-label position-relative mb-4 text-body-1 d-none d-sm-block">
            {{ item.title }}
          </div>
          <VProgressLinear
            :color="item.color"
            model-value="100"
            height="46"
            :class="index === 0 ? 'rounded-s' : index === vehicleData.length - 1 ? 'rounded-e' : ''"
          >
            <p
              class="text-sm font-weight-medium mb-0"
              :class="index ? 'text-white' : 'text-high-emphasis'"
            >
              {{ item.percentage }}%
            </p>
          </VProgressLinear>
        </div>
      </div>
      <VTable class="text-no-wrap">
        <tbody>
          <tr
            v-for="(vehicle, index) in vehicleData"
            :key="index"
          >
            <td width="70%">
              <div class="d-flex align-center text-high-emphasis">
                <VIcon
                  :icon="vehicle.icon"
                  size="24"
                  class="me-2"
                />
                <h6 class="text-h6 font-weight-regular">
                  {{ vehicle.title }}
                </h6>
              </div>
            </td>
            <td>
              <h6 class="text-h6">
                {{ vehicle.time }}
              </h6>
            </td>
            <td>
              <span class="text-body-1">{{ vehicle.percentage }}%</span>
            </td>
          </tr>
        </tbody>
      </VTable>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.vehicle-progress-label {
  padding-block-end: 1rem;

  &::after {
    position: absolute;
    display: inline-block;
    background-color: rgba(var(--v-theme-on-surface), var(--v-border-opacity));
    block-size: 10px;
    content: "";
    inline-size: 2px;
    inset-block-end: 0;
    inset-inline-start: 0;

    [dir="rtl"] & {
      inset-inline: unset 0;
    }
  }
}
</style>

<style lang="scss">
.v-progress-linear__content {
  justify-content: start;
  padding-inline-start: 1rem;

}

@media (max-width: 1080px) {
  .v-progress-linear__content {
    padding-inline-start: 0.75rem !important;

  }
}

@media (max-width: 576px) {
  .v-progress-linear__content {
    padding-inline-start: 0.3rem !important;
  }
}
</style>
