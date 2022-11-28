<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import pumaShoes from '@images/pages/puma-shoes.jpeg'

const serverSwitch = ref(false)
</script>

<template>
  <VCard title="Timeline With Icons">
    <VCardText>
      <VTimeline
        align="start"
        justify="center"
        :density="$vuetify.display.smAndDown ? 'compact' : 'default'"
      >
        <!-- SECTION Timeline Item: Flight -->
        <VTimelineItem fill-dot>
          <template #icon>
            <div class="v-timeline-avatar-wrapper rounded-circle">
              <VAvatar
                color="primary"
                variant="tonal"
              >
                <VIcon icon="mdi-airplane" />
              </VAvatar>
            </div>
          </template>
          <!-- 👉 Header -->
          <div class="d-flex justify-space-between">
            <h6 class="text-sm font-weight-semibold mb-1 me-3">
              Get on the flight
            </h6>
            <small class="text-xs">Wednesday</small>
          </div>

          <!-- 👉 Content -->
          <p class="mb-1">
            <span>Charles de Gaulle Airport, Paris</span>
            <VIcon
              size="20"
              icon="mdi-arrow-right"
              class="mx-2"
            />
            <span>Heathrow Airport, London</span>
          </p>

          <p>6:30 AM</p>

          <div class="d-flex align-center">
            <VIcon
              color="error"
              icon="mdi-file-pdf-box"
              class="me-1"
            />
            <h6 class="text-sm font-weight-semibold text-sm">
              booking-card.pdf
            </h6>
          </div>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Timeline Item: Interview -->
        <VTimelineItem fill-dot>
          <template #icon>
            <div class="v-timeline-avatar-wrapper rounded-circle">
              <VAvatar
                color="success"
                variant="tonal"
              >
                <VIcon icon="mdi-clock-time-four-outline" />
              </VAvatar>
            </div>
          </template>

          <!-- 👉 Header -->
          <div class="d-flex justify-space-between">
            <h6 class="text-sm font-weight-semibold mb-1">
              Interview Schedule
            </h6>
            <small class="text-xs text-no-wrap">April, 18</small>
          </div>

          <p class="mb-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quos, voluptates voluptas rem veniam expedita.
          </p>

          <!-- 👉 Divider -->
          <VDivider class="my-4" />

          <!-- 👉 Person -->
          <div class="d-flex justify-space-between align-center flex-wrap gap-4">
            <!-- 👉 Avatar & Personal Info -->
            <span class="d-flex align-bottom mt-2">
              <VAvatar
                size="40"
                :image="avatar2"
                class="me-2"
              />
              <div class="d-flex flex-column">
                <h6 class="text-sm font-weight-semibold">Rebecca Godman</h6>
                <span>Javascript Developer</span>
              </div>
            </span>

            <!-- 👉 Person Actions -->
            <div>
              <VBtn
                size="small"
                variant="plain"
                color="secondary"
                icon
                class="me-2"
              >
                <VIcon
                  icon="mdi-message-text-outline"
                  size="20"
                />
              </VBtn>
              <VBtn
                size="small"
                variant="plain"
                color="secondary"
                icon
              >
                <VIcon
                  icon="mdi-phone"
                  size="20"
                />
              </VBtn>
            </div>
          </div>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Timeline Item: Puma Shoes -->
        <VTimelineItem fill-dot>
          <template #icon>
            <div class="v-timeline-avatar-wrapper rounded-circle">
              <VAvatar
                color="warning"
                variant="tonal"
              >
                <VIcon icon="mdi-cart-outline" />
              </VAvatar>
            </div>
          </template>

          <div class="d-flex align-start flex-sm-row flex-column mb-3">
            <VImg
              aspect-ratio="1"
              width="100"
              :src="pumaShoes"
              class="rounded me-4"
            />

            <div>
              <!-- 👉 Header -->
              <div class="d-flex justify-space-between">
                <h6 class="mb-1 font-weight-semibold text-base me-3">
                  Sold Puma POPX Blue Color
                </h6>
                <small class="text-xs text-no-wrap">January, 10</small>
              </div>
              <span>PUMA presents the latest shoes from its collection. Light &amp; comfortable made with highly durable material.</span>
            </div>
          </div>

          <!-- 👉 Timeline Item: Meta Content -->
          <div class="d-flex justify-space-between flex-sm-row flex-column gap-3">
            <div class="text-sm-center">
              <h6 class="mb-1 text-base font-weight-semibold">
                Customer
              </h6>
              <span>Micheal Scott</span>
            </div>

            <div class="text-sm-center">
              <h6 class="mb-1 text-base font-weight-semibold">
                Price
              </h6>
              <span>$375.00</span>
            </div>

            <div class="text-sm-center">
              <h6 class="mb-1 text-base font-weight-semibold">
                Quantity
              </h6>
              <span>1</span>
            </div>
          </div>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Timeline Item: Design Review -->
        <VTimelineItem fill-dot>
          <template #icon>
            <div class="v-timeline-avatar-wrapper rounded-circle">
              <VAvatar
                color="info"
                variant="tonal"
              >
                <VIcon icon="mdi-file-edit-outline" />
              </VAvatar>
            </div>
          </template>

          <!-- 👉 Header -->
          <div class="d-flex justify-space-between">
            <h6 class="mb-1 text-sm font-weight-semibold">
              Design Review
            </h6>
            <small class="text-xs text-no-wrap">September, 20</small>
          </div>

          <!-- 👉 Content -->
          <p>
            Weekly review of freshly prepared design for our new application.
          </p>
          <div class="d-flex align-center">
            <VAvatar
              size="40"
              :image="avatar1"
              class="me-2"
            />
            <h6 class="text-sm font-weight-semibold">
              John Doe (Client)
            </h6>
          </div>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Timeline Item: Ubuntu Server -->
        <VTimelineItem fill-dot>
          <template #icon>
            <div class="v-timeline-avatar-wrapper rounded-circle">
              <VAvatar
                color="error"
                variant="tonal"
              >
                <VIcon icon="mdi-server" />
              </VAvatar>
            </div>
          </template>

          <!-- 👉 Header -->
          <div class="d-flex justify-space-between">
            <h6 class="mb-1 text-sm font-weight-semibold">
              Ubuntu Server
            </h6>

            <VChip
              color="error"
              size="small"
            >
              Inactive
            </VChip>
          </div>

          <!-- 👉 Content -->
          <table class="w-100 mt-3">
            <tr>
              <td class="d-flex align-center pb-2">
                <VIcon
                  icon="mdi-web"
                  class="me-1"
                />
                <span>IP Address</span>
              </td>

              <td class="text-right">
                192.654.8.566
              </td>
            </tr>

            <tr>
              <td class="d-flex align-center pb-2">
                <VIcon
                  icon="mdi-cpu-32-bit"
                  class="me-1"
                />
                <span>CPU</span>
              </td>

              <td class="text-right">
                4 Cores
              </td>
            </tr>

            <tr>
              <td class="d-flex align-center pb-2">
                <VIcon
                  icon="mdi-memory"
                  class="me-1"
                />
                <span>Memory</span>
              </td>

              <td class="text-right">
                2 GB
              </td>
            </tr>
          </table>

          <VDivider class="mt-3" />
          <div class="d-flex justify-space-between align-end">
            <div>
              <VBtn
                size="x-small"
                variant="plain"
                color="secondary"
                icon
                class="me-2"
              >
                <VIcon
                  icon="mdi-share-variant-outline"
                  size="20"
                />
              </VBtn>
              <VBtn
                size="x-small"
                variant="plain"
                color="secondary"
                icon
              >
                <VIcon
                  icon="mdi-reload"
                  size="20"
                />
              </VBtn>
            </div>

            <VSwitch v-model="serverSwitch" />
          </div>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Timeline Item: Location -->
        <VTimelineItem fill-dot>
          <template #icon>
            <div class="v-timeline-avatar-wrapper rounded-circle">
              <VAvatar
                color="success"
                variant="tonal"
              >
                <VIcon
                  icon="mdi-map-marker-outline"
                />
              </VAvatar>
            </div>
          </template>

          <!-- 👉 Header -->
          <div class="d-flex justify-space-between">
            <div class="d-flex align-end mb-1">
              <VIcon
                icon="mdi-map-marker-outline"
                class="me-1"
              />
              <h6 class="mb-0 text-sm font-weight-semibold">
                <span>Location</span>
              </h6>
            </div>

            <VChip
              color="error"
              size="small"
            >
              High
            </VChip>
          </div>

          <!-- 👉 Content -->
          <h6 class="mb-0 text-sm font-weight-semibold">
            Find location for the company celebration.
          </h6>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

          <VDivider />

          <div class="d-flex justify-space-between mt-4 flex-wrap">
            <div>
              <VBtn
                size="x-small"
                variant="plain"
                color="secondary"
                icon
                class="me-2"
              >
                <VIcon
                  size="20"
                  icon="mdi-link-variant"
                />
              </VBtn>

              <VBtn
                size="x-small"
                variant="plain"
                color="secondary"
                icon
                class="me-2"
              >
                <VIcon
                  size="20"
                  icon="mdi-message-text-outline"
                />
              </VBtn>
              <VBtn
                size="x-small"
                variant="plain"
                color="secondary"
                icon
              >
                <VIcon
                  size="20"
                  icon="mdi-account-outline"
                />
              </VBtn>
            </div>

            <span class="text-xs">Due date: 15th Jan</span>
          </div>
        </VTimelineItem>
        <!-- !SECTION -->
      </VTimeline>
    </VCardText>
  </VCard>
</template>

<style lang="scss">
.v-timeline-avatar-wrapper {
  background-color: rgb(var(--v-theme-surface));
}
</style>
