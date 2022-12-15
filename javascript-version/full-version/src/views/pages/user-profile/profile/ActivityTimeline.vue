<script setup>
import avatar2 from '@images/avatars/avatar-2.png'
</script>

<template>
  <VCard>
    <VCardItem>
      <template #prepend>
        <VIcon icon="mdi-chart-timeline-variant" />
      </template>

      <VCardTitle>Activity Timeline</VCardTitle>
    </VCardItem>

    <VCardText>
      <VTimeline
        density="compact"
        align="start"
        truncate-line="both"
        :line-inset="12"
        class="v-timeline-density-compact"
      >
        <VTimelineItem
          dot-color="error"
          size="x-small"
        >
          <div class="d-flex justify-space-between align-center flex-wrap">
            <h4 class="text-base font-weight-medium me-1 mb-2">
              8 Invoices have been paid
            </h4>
            <span class="text-xs text-disabled text-no-wrap">Wednesday</span>
          </div>
          <p class="mb-2">
            Invoices have been paid to the company.
          </p>
          <div class="d-flex align-center mt-2">
            <VIcon
              color="error"
              icon="mdi-file-pdf-box"
              size="26"
              class="me-2"
            />
            <h6 class="font-weight-medium text-sm">
              Invoices.pdf
            </h6>
          </div>
        </VTimelineItem>

        <VTimelineItem
          dot-color="primary"
          size="x-small"
        >
          <div class="d-flex justify-space-between align-center flex-wrap">
            <h4 class="text-base font-weight-medium me-1 mb-2">
              Create a new project for client 😎
            </h4>
            <span class="text-xs text-disabled text-no-wrap">April, 18</span>
          </div>

          <p class="mb-1">
            Invoices have been paid to the company.
          </p>

          <div class="d-flex align-center mt-3">
            <VAvatar
              size="24"
              class="me-2"
              :image="avatar2"
            />
            <div>
              <span class="text-sm font-weight-medium mb-0">
                John Doe (Client)
              </span>
            </div>
          </div>
        </VTimelineItem>

        <VTimelineItem
          dot-color="info"
          size="x-small"
        >
          <div class="d-flex justify-space-between align-center flex-wrap">
            <h4 class="text-base font-weight-medium me-1 mb-2">
              Order #37745 from September
            </h4>
            <span class="text-xs text-disabled text-no-wrap">January, 10</span>
          </div>
          <p class="mb-0">
            Invoices have been paid to the company.
          </p>
        </VTimelineItem>

        <VTimelineItem
          dot-color="success"
          size="x-small"
        >
          <div class="d-flex justify-space-between align-center flex-wrap">
            <h4 class="text-base font-weight-medium me-1 mb-3">
              Public Meeting
            </h4>
            <span class="text-xs text-disabled text-no-wrap">September, 30</span>
          </div>
        </VTimelineItem>
      </VTimeline>
    </VCardText>
  </VCard>
</template>
