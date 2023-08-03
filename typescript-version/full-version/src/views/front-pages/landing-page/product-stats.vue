<template>
  <div :style="{ 'background-color': 'rgb(var(--v-theme-surface))' }">
    <VContainer>
      <div class="py-12">
        <VRow>
          <VCol
            v-for="(product, index) in [
              { title: 'Completed Sites', value: 137, icon: 'custom-layout-right', color: 'primary' },
              { title: 'Working Hours', value: 1100, icon: 'mdi-clock-time-three-outline', color: 'success' },
              { title: 'Happy Customers', value: 137, icon: 'custom-people-tag', color: 'warning' },
              { title: 'Awards Winning', value: 23, icon: 'custom-medal', color: 'info' },
            ]"
            :key="index"
          >
            <VCard flat>
              <VCardText class="text-center">
                <VAvatar
                  size="82"
                  :color="product.color"
                  variant="tonal"
                  class="mb-6"
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
