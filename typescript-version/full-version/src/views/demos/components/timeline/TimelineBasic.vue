<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import pumaShoes from '@images/pages/puma-shoes.jpeg'
</script>

<template>
  <VCard title="Basic Timeline">
    <VCardText>
      <VTimeline
        side="end"
        align="start"
        truncate-line="start"
        density="compact"
        class="v-timeline-density-compact"
      >
        <!-- SECTION Timeline Item: Flight -->
        <VTimelineItem
          dot-color="error"
          size="x-small"
        >
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
            <h6 class="font-weight-semibold text-sm">
              booking-card.pdf
            </h6>
          </div>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Timeline Item: Interview Schedule -->
        <VTimelineItem
          size="x-small"
          dot-color="primary"
        >
          <!-- 👉 Header -->
          <div class="d-flex justify-space-between">
            <h6 class="text-sm font-weight-semibold mb-1 me-3">
              Interview Schedule
            </h6>
            <small class="text-xs text-no-wrap">April, 18</small>
          </div>

          <p class="mb-0">
            Bonbon gummies caramels brownie topping fruitcake gingerbread jelly-o marzipan.
          </p>

          <!-- 👉 Divider -->
          <VDivider class="my-4" />

          <!-- 👉 Person -->
          <div class="d-flex justify-space-between align-center">
            <!-- 👉 Avatar & Personal Info -->
            <span class="d-flex align-bottom mt-2">
              <VAvatar
                size="40"
                class="me-2"
                :image="avatar2"
              />
              <div>
                <h6 class="text-sm font-weight-semibold">Rebecca Godman</h6>
                <span>Javascript Developer</span>
              </div>
            </span>

            <!-- 👉 Person Actions -->
            <div>
              <VBtn
                size="x-small"
                variant="plain"
                color="secondary"
                icon="mdi-message-text-outline"
                class="me-2"
              />
              <VBtn
                size="x-small"
                variant="plain"
                color="secondary"
                icon="mdi-phone"
              />
            </div>
          </div>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Timeline Item: Puma Shoes -->
        <VTimelineItem
          size="x-small"
          dot-color="info"
        >
          <div class="d-flex align-start flex-sm-row flex-column mb-3">
            <VImg
              aspect-ratio="1"
              width="100"
              :src="pumaShoes"
              class="rounded me-4"
            />

            <div>
              <!-- Header -->
              <div class="d-flex justify-space-between">
                <h6 class="font-weight-semibold text-base mb-1 me-3">
                  Sold Puma POPX Blue Color
                </h6>
                <small class="text-xs text-no-wrap">January, 10</small>
              </div>
              <span>PUMA presents the latest shoes from its collection. Light &amp; comfortable made with highly durable material.</span>
            </div>
          </div>

          <!-- 👉 Timeline Item: Meta Content -->
          <div class="d-flex justify-space-between flex-column flex-sm-row gap-3">
            <div class="text-sm-center">
              <h6 class="text-base font-weight-semibold mb-1">
                Customer
              </h6>
              <span>Micheal Scott</span>
            </div>
            <div class="text-sm-center">
              <h6 class="text-base font-weight-semibold mb-1">
                Price
              </h6>
              <span>$375.00</span>
            </div>
            <div class="text-sm-center">
              <h6 class="text-base font-weight-semibold mb-1">
                Quantity
              </h6>
              <span>1</span>
            </div>
          </div>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Design Review -->
        <VTimelineItem
          size="x-small"
          dot-color="success"
        >
          <!-- 👉 Header -->
          <div class="d-flex justify-space-between">
            <h6 class="text-sm font-weight-semibold mb-1">
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
      </VTimeline>
    </VCardText>
  </VCard>
</template>
