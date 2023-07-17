<script setup lang="ts">
import girlWithLaptop from '@images/pages/pose-fs-9.png'
</script>

<template>
  <VCard>
    <VCardText>
      <div class="d-flex justify-center  align-start pb-0 px-3 pt-3 mb-4 bg-light-primary rounded">
        <VImg
          :src="girlWithLaptop"
          width="145"
          height="140"
        />
      </div>
      <div>
        <h6 class="text-h6 mb-1">
          Upcoming Webinar
        </h6>
        <span class="text-body-2">Next Generation Frontend Architecture Using Layout Engine And Vue.</span>
        <div class="d-flex justify-space-between my-4 flex-wrap">
          <div
            v-for="{ icon, title, value } in [{ icon: 'mdi-calendar-blank', title: '17 Nov 23', value: 'Date' }, { icon: 'mdi-clock-outline', title: '32 Minutes', value: 'Duration' }]"
            :key="title"
            class="d-flex gap-x-3 align-center"
          >
            <VAvatar
              color="primary"
              variant="tonal"
              rounded
            >
              <VIcon :icon="icon" />
            </VAvatar>
            <div>
              <div class="text-body-1 text-high-emphasis">
                {{ title }}
              </div>
              <div class="text-caption">
                {{ value }}
              </div>
            </div>
          </div>
        </div>
        <VBtn>
          Join the event
        </VBtn>
      </div>
    </VCardText>
  </VCard>
</template>
