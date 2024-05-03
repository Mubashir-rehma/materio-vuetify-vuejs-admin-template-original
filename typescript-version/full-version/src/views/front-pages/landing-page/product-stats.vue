<script setup lang="ts">
import peopleTag from '@images/svg/people-tag.svg'

const statData = [
  { title: 'Completed Sites', value: 137, icon: 'mdi-web', color: 'primary' },
  { title: 'Working Hours', value: 1100, icon: 'mdi-clock-time-three-outline', color: 'success' },
  { title: 'Happy Customers', value: 137, icon: peopleTag, color: 'warning' },
  { title: 'Awards Winning', value: 23, icon: 'mdi-medal', color: 'info' },
]
</script>

<template>
  <div :style="{ 'background-color': 'rgb(var(--v-theme-surface))' }">
    <VContainer>
      <div class="py-12">
        <VRow>
          <VCol
            v-for="(product, index) in statData"
            :key="index"
          >
            <VCard flat>
              <VCardText class="text-center">
                <VAvatar
                  size="82"
                  :color="product.color"
                  class="product-stats-avatar mb-6 cursor-pointer"
                >
                  <VIcon
                    :icon="product.icon"
                    size="42"
                  />
                </VAvatar>
                <h4 class="text-h4 font-weight-bold">
                  {{ product.value }}+
                </h4>
                <span class="text-body-1">{{ product.title }}</span>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
      </div>
    </VContainer>
  </div>
</template>
