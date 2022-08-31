<script setup lang="ts">
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'

const analytics = [
  {
    title: '42.8k',
    subtitle: 'Number of like',
    img: useGenerateImageVariant('@/assets/images/cards/heart.png'),
  },
  {
    title: '21.2k',
    subtitle: 'Number of Followers',
    img: useGenerateImageVariant('@/assets/images/cards/chart.png'),
  },
  {
    title: '2.4k',
    subtitle: 'Number of Comments',
    img: useGenerateImageVariant('@/assets/images/cards/message.png'),
  },
  {
    title: '389.50k',
    subtitle: 'Number of Visits',
    img: useGenerateImageVariant('@/assets/images/cards/user.png'),
  },
]
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>
        Analytics
      </VCardTitle>

      <template #append>
        <div class="me-n3">
          <VBtn
            icon
            size="x-small"
            variant="text"
            color="default"
          >
            <VIcon
              size="24"
              icon="mdi-dots-vertical"
            />
          </VBtn>
        </div>
      </template>
    </VCardItem>

    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="item in analytics"
          :key="item.title"
        >
          <template #prepend>
            <VAvatar :image="item.img.value" />
          </template>

          <VListItemTitle class="text-h6 font-weight-medium mb-1">
            {{ item.title }}
          </VListItemTitle>
          <VListItemSubtitle class="text-xs">
            {{ item.subtitle }}
          </VListItemSubtitle>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

