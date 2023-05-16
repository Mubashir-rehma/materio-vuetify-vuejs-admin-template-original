<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import timelineCardHeader from '@images/cards/timeline-card-header.png'
import pdf from '@images/icons/project-icons/pdf.png'
</script>

<template>
  <VCard>
    <VImg
      cover
      height="210"
      :src="timelineCardHeader"
    />

    <VCardItem>
      <VCardTitle>Activity Timeline</VCardTitle>
    </VCardItem>

    <VCardText>
      <VTimeline
        side="end"
        align="start"
        line-inset="8"
        truncate-line="both"
        density="compact"
      >
        <VTimelineItem
          dot-color="error"
          size="x-small"
        >
          <div class="d-flex justify-space-between flex-wrap">
            <p class="app-timeline-title me-3 mb-2">
              8 Invoices have been paid
            </p>
            <small class="app-timeline-meta my-1">Wednesday</small>
          </div>

          <p class="app-timeline-text">
            Invoices have been paid to the company.
          </p>

          <div class="d-flex align-center">
            <img
              :src="pdf"
              width="20"
              class="me-2"
              alt="img"
            >

            <span class="font-weight-medium text-sm">
              invoice.pdf
            </span>
          </div>
        </VTimelineItem>

        <VTimelineItem
          dot-color="primary"
          size="x-small"
        >
          <div class="d-flex justify-space-between flex-wrap">
            <p class="app-timeline-title me-3 mb-2">
              Create a new project for client 😎
            </p>
            <small class="app-timeline-meta my-1">April, 18</small>
          </div>

          <p class="app-timeline-text">
            Invoices have been paid to the company.
          </p>

          <div class="d-flex align-center">
            <VAvatar
              size="24"
              :image="avatar1"
              class="me-3"
            />

            <span class="font-weight-medium text-sm">
              John Doe (Client)
            </span>
          </div>
        </VTimelineItem>

        <VTimelineItem
          dot-color="info"
          size="x-small"
        >
          <div class="d-flex justify-space-between flex-wrap">
            <p class="app-timeline-title me-3 mb-2">
              Order #37745 from September
            </p>
            <small class="app-timeline-meta my-1">January, 10</small>
          </div>

          <p class="mb-0 app-timeline-text mb-2">
            Invoices have been paid to the company.
          </p>
        </VTimelineItem>
      </VTimeline>
    </VCardText>
  </VCard>
</template>
