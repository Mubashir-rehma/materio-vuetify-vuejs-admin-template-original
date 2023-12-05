<script setup lang="ts">
const statData = ref([
  { title: 'Completed Sites', value: 137, icon: 'ri-layout-line', color: 'primary', isHover: false },
  { title: 'Working Hours', value: 1100, icon: 'ri-time-line', color: 'success', isHover: false },
  { title: 'Happy Customers', value: 137, icon: 'ri-user-smile-line', color: 'warning', isHover: false },
  { title: 'Awards Winning', value: 23, icon: 'ri-award-line', color: 'info', isHover: false },
])
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
                  :variant="product.isHover ? 'elevated' : 'tonal'"
                  class="mb-6 cursor-pointer"
                  @mouseenter="() => product.isHover = true"
                  @mouseleave="product.isHover = false"
                >
                  <VIcon
                    :icon="product.icon"
                    size="42"
                  />
                </VAvatar>
                <h4 class="text-h4 font-weight-bold">
                  {{ kFormatter(product.value) }}+
                </h4>
                <span class="text-body-1 text-medium-emphasis font-weight-medium">{{ product.title }}</span>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
      </div>
    </VContainer>
  </div>
</template>
