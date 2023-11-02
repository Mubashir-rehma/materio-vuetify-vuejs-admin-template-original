<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import pdf from '@images/icons/project-icons/pdf.png'
import pumaShoes from '@images/pages/puma-shoes.jpeg'

const serverSwitch = ref(false)
</script>

<template>
  <VCard title="Timeline With Icons">
    <VCardText>
      <VTimeline
        align="start"
        line-inset="20"
        truncate-line="start"
        justify="center"
        :density="$vuetify.display.smAndDown ? 'compact' : 'default'"
      >
        <!-- SECTION Timeline Item: Flight -->
        <VTimelineItem
          fill-dot
          size="small"
        >
          <template #icon>
            <div class="v-timeline-avatar-wrapper rounded-circle">
              <VAvatar
                size="32"
                color="error"
                variant="tonal"
              >
                <VIcon
                  icon="ri-plane-line"
                  size="20"
                />
              </VAvatar>
            </div>
          </template>

          <!-- 👉 Header -->
          <div class="d-flex justify-space-between align-center gap-2 flex-wrap mb-6">
            <span class="app-timeline-title align-self-start">
              Get on the flight
            </span>
            <span class="app-timeline-meta">Wednesday</span>
          </div>

          <!-- 👉 Content -->
          <p class="app-timeline-text mb-2">
            <span>Charles de Gaulle Airport, Paris</span>
            <VIcon
              size="20"
              icon="ri-arrow-right-line"
              class="mx-2"
            />
            <span>Heathrow Airport, London</span>
          </p>

          <p class="app-timeline-meta">
            6:30 AM
          </p>

          <VChip
            variant="tonal"
            color="default"
            label
          >
            <img
              :src="pdf"
              width="20"
              class="me-2"
              alt="img"
            >

            <span class="app-timeline-text font-weight-medium">
              booking-card.pdf
            </span>
          </VChip>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Timeline Item: Interview -->
        <VTimelineItem
          fill-dot
          size="small"
          class="text-start"
        >
          <template #icon>
            <div class="v-timeline-avatar-wrapper rounded-circle">
              <VAvatar
                size="32"
                color="success"
                variant="tonal"
              >
                <VIcon
                  size="20"
                  icon="ri-time-line"
                />
              </VAvatar>
            </div>
          </template>

          <!-- 👉 Header -->
          <div class="d-flex justify-space-between align-center gap-2 flex-wrap mb-6">
            <span class="app-timeline-title">
              Interview Schedule
            </span>
            <span class="app-timeline-meta">April, 18</span>
          </div>

          <p class="app-timeline-text mb-0">
            Bonbon gummies caramels brownie topping fruitcake gingerbread jelly-o marzipan.
          </p>

          <!-- 👉 Divider -->
          <VDivider class="my-4" />

          <!-- 👉 Person -->
          <div class="d-flex justify-space-between align-center flex-wrap">
            <!-- 👉 Avatar & Personal Info -->
            <div class="d-flex align-center">
              <VAvatar
                size="32"
                class="me-2"
                :image="avatar2"
              />
              <div>
                <div class="text-body-2 font-weight-medium">
                  Rebecca Godman
                </div>
                <span class="text-body-2 font-weight-normal">JavaScript Developer</span>
              </div>
            </div>

            <!-- 👉 Person Actions -->
            <div>
              <IconBtn class="me-2">
                <VIcon
                  size="20"
                  icon="ri-message-line"
                />
              </IconBtn>
              <IconBtn>
                <VIcon
                  size="20"
                  icon="ri-phone-line"
                />
              </IconBtn>
            </div>
          </div>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Timeline Item: Puma Shoes -->
        <VTimelineItem
          fill-dot
          size="small"
        >
          <template #icon>
            <div class="v-timeline-avatar-wrapper rounded-circle">
              <VAvatar
                size="32"
                color="warning"
                variant="tonal"
              >
                <VIcon
                  size="20"
                  icon="ri-shopping-cart-line"
                />
              </VAvatar>
            </div>
          </template>

          <div class="d-flex align-start flex-sm-row flex-column mb-3">
            <VImg
              aspect-ratio="1"
              width="100"
              :src="pumaShoes"
              class="rounded me-4 mb-4"
            />

            <div>
              <!-- Header -->
              <div class="d-flex justify-space-between align-center flex-wrap mb-2">
                <span class="app-timeline-title">
                  Sold Puma POPX Blue Color
                </span>
                <span class="app-timeline-meta">January, 10</span>
              </div>
              <span class="app-timeline-text">PUMA presents the latest shoes from its collection. Light &amp; comfortable made with highly durable material.</span>
            </div>
          </div>

          <!-- 👉 Timeline Item: Meta Content -->
          <div class="d-flex justify-space-between flex-column flex-sm-row gap-3">
            <div class="text-sm-center">
              <h6 class="text-sm font-weight-medium mb-1">
                Customer
              </h6>
              <span class="text-xs">Micheal Scott</span>
            </div>
            <div class="text-sm-center">
              <h6 class="text-sm font-weight-medium mb-1">
                Price
              </h6>
              <span class="text-xs">$375.00</span>
            </div>
            <div class="text-sm-center">
              <h6 class="text-sm font-weight-medium mb-1">
                Quantity
              </h6>
              <span class="text-xs">1</span>
            </div>
          </div>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Timeline Item: Design Review -->
        <VTimelineItem
          fill-dot
          size="small"
        >
          <template #icon>
            <div class="v-timeline-avatar-wrapper rounded-circle">
              <VAvatar
                size="32"
                color="info"
                variant="tonal"
              >
                <VIcon
                  size="20"
                  icon="ri-file-edit-line"
                />
              </VAvatar>
            </div>
          </template>

          <!-- 👉 Header -->
          <div class="d-flex justify-space-between align-center gap-2 flex-wrap mb-2">
            <span class="app-timeline-title">
              Design Review
            </span>
            <span class="app-timeline-meta">September, 20</span>
          </div>

          <!-- 👉 Content -->
          <p class="app-timeline-text">
            Weekly review of freshly prepared design for our new application.
          </p>
          <div class="d-flex align-center">
            <VAvatar
              size="32"
              :image="avatar1"
              class="me-2"
            />
            <h6 class="text-sm font-weight-medium">
              John Doe (Client)
            </h6>
          </div>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Timeline Item: Ubuntu Server -->
        <VTimelineItem
          fill-dot
          size="small"
        >
          <template #icon>
            <div class="v-timeline-avatar-wrapper rounded-circle">
              <VAvatar
                size="32"
                color="error"
                variant="tonal"
              >
                <VIcon
                  size="18"
                  icon="ri-server-line"
                />
              </VAvatar>
            </div>
          </template>

          <!-- 👉 Header -->
          <div class="d-flex justify-space-between flex-wrap">
            <span class="app-timeline-title">
              Ubuntu Server
            </span>

            <VChip
              color="error"
              size="small"
            >
              Inactive
            </VChip>
          </div>

          <!-- 👉 Content -->
          <table class="w-100 mt-6">
            <tbody>
              <tr>
                <td class="d-flex align-center pb-2">
                  <VIcon
                    icon="ri-global-line"
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
                    icon="ri-cpu-line"
                    size="24"
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
                    icon="ri-cpu-fill"
                    size="24"
                    class="me-1"
                  />
                  <span>Memory</span>
                </td>

                <td class="text-right">
                  2 GB
                </td>
              </tr>
            </tbody>
          </table>

          <VDivider class="mt-3" />
          <div class="d-flex justify-space-between align-center">
            <div>
              <IconBtn class="me-2">
                <VIcon
                  size="20"
                  icon="ri-share-line"
                />
              </IconBtn>
              <IconBtn>
                <VIcon
                  size="20"
                  icon="ri-restart-line"
                />
              </IconBtn>
            </div>

            <VSwitch v-model="serverSwitch" />
          </div>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Timeline Item: Location -->
        <VTimelineItem
          fill-dot
          size="small"
        >
          <template #icon>
            <div class="v-timeline-avatar-wrapper rounded-circle">
              <VAvatar
                size="32"
                color="success"
                variant="tonal"
              >
                <VIcon
                  size="20"
                  icon="ri-map-pin-line"
                />
              </VAvatar>
            </div>
          </template>

          <!-- 👉 Header -->
          <div class="d-flex justify-space-between flex-wrap mb-6">
            <div class="d-flex align-end">
              <VIcon
                icon="ri-map-pin-line"
                class="me-1"
              />

              <span class="app-timeline-title">Location</span>
            </div>

            <VChip
              color="error"
              size="small"
            >
              High
            </VChip>
          </div>

          <!-- 👉 Content -->
          <p class="app-timeline-text mb-1">
            Find location for the company celebration.
          </p>
          <p class="app-timeline-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>

          <VDivider />

          <div class="d-flex justify-space-between align-center flex-wrap mt-1">
            <div>
              <IconBtn class="me-2">
                <VIcon
                  size="20"
                  icon="ri-links-line"
                />
              </IconBtn>

              <IconBtn class="me-2">
                <VIcon
                  size="20"
                  icon="ri-chat-4-line"
                />
              </IconBtn>
              <IconBtn>
                <VIcon
                  size="20"
                  icon="ri-user-line"
                />
              </IconBtn>
            </div>

            <span class="app-timeline-meta">Due date: 15th Jan</span>
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
