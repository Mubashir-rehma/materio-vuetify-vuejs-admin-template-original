<template>
  <VCard title="Timeline Card">
    <VCardText>
      <VTimeline
        side="end"
        align="start"
        truncate-line="start"
        density="compact"
        class="v-timeline-density-compact"
      >
        <!-- SECTION Flight -->
        <VTimelineItem
          size="x-small"
          dot-color="error"
        >
          <VCard>
            <VCardItem
              density="compact"
              class="bg-error"
            >
              <VCardTitle class="text-base text-white">
                Get on the flight
              </VCardTitle>

              <template #append>
                <small class="text-xs">Wednesday</small>
              </template>
            </VCardItem>

            <VCardText class="pt-4">
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
            </VCardText>
          </VCard>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Interview Schedule -->
        <VTimelineItem
          size="x-small"
          dot-color="primary"
        >
          <VCard>
            <VCardItem class="bg-primary">
              <VCardTitle class="text-base text-white">
                Interview Schedule
              </VCardTitle>
              <template #append>
                <small class="text-xs text-no-wrap">April, 18</small>
              </template>
            </VCardItem>

            <VCardText class="pt-4">
              <p class="mb-0">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quos, voluptates voluptas rem veniam expedita.
              </p>

              <!-- 👉 Divider -->
              <VDivider class="my-4" />

              <!-- 👉 Person -->
              <div class="d-flex justify-space-between align-center">
                <!-- 👉 Avatar & Personal Info -->
                <span class="d-flex align-start mt-2">
                  <div>
                    <VAvatar
                      size="40"
                      :image="dynamicImgImport('@/assets/images/avatars/avatar-2.png')"
                      class="me-2"
                    />
                  </div>
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
            </VCardText>
          </VCard>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Puma Shoes -->
        <VTimelineItem
          size="x-small"
          dot-color="info"
        >
          <VCard>
            <VCardItem class="bg-info">
              <!-- 👉 Header -->
              <VCardTitle class="text-base text-white">
                Sold Puma POPX Blue Color
              </VCardTitle>
              <template #append>
                <small class="text-xs text-no-wrap">January, 10</small>
              </template>
            </VCardItem>

            <!-- 👉 content -->
            <VCardText class="pt-4">
              <div class="d-flex align-sm-center flex-sm-row flex-column mb-3">
                <VImg
                  height="80"
                  width="80"
                  :src="dynamicImgImport('@/assets/images/pages/puma-shoes.jpeg')"
                  class="rounded me-4"
                />
                <div>
                  <span>
                    PUMA presents the latest shoes from its collection. Light &amp; comfortable made with highly durable material.
                  </span>
                </div>
              </div>

              <div class="d-flex justify-space-between flex-column flex-sm-row gap-3">
                <div class="text-sm-center">
                  <p class="mb-1 text-base font-weight-semibold text--primary">
                    Customer
                  </p>
                  <span>Micheal Scott</span>
                </div>
                <div class="text-sm-center">
                  <p class="mb-1 text-base font-weight-semibold text--primary">
                    Price
                  </p>
                  <span>$375.00</span>
                </div>
                <div class="text-sm-center">
                  <p class="mb-1 text-base font-weight-semibold text--primary">
                    Quantity
                  </p>
                  <span>1</span>
                </div>
              </div>
            </VCardText>
          </VCard>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- 👉 Design Review -->
        <VTimelineItem
          size="x-small"
          dot-color="success"
        >
          <VCard>
            <VCardItem class="bg-success">
              <VCardTitle class="text-base text-white">
                Design Review
              </VCardTitle>
              <template #append>
                <small class="text-xs text-no-wrap">September, 20</small>
              </template>
            </VCardItem>

            <VCardText class="pt-4">
              <p>
                Weekly review of freshly prepared design for our new application.
              </p>
              <div class="d-flex align-center">
                <VAvatar
                  size="40"
                  class="me-2"
                >
                  <VImg :src="dynamicImgImport('@/assets/images/avatars/avatar-1.png')" />
                </VAvatar>
                <h6 class="text-sm font-weight-semibold">
                  John Doe (Client)
                </h6>
              </div>
            </VCardText>
          </VCard>
        </VTimelineItem>
      </VTimeline>
    </VCardText>
  </VCard>
</template>
