<script setup lang="ts">
import type { HelpCenterArticlesOverview } from '@db/pages/help-center/types'

interface Props {
  articles: HelpCenterArticlesOverview[]
}

const props = defineProps<Props>()
</script>

<template>
  <VRow>
    <VCol
      v-for="article in props.articles"
      :key="article.title"
      cols="12"
      md="4"
    >
      <VCard
        flat
        border
      >
        <VCardText class="text-center">
          <VImg
            :src="article.img"
            aspect-ratio="1"
            width="58"
            class="mx-auto"
          />

          <h6 class="text-h6 my-3">
            {{ article.title }}
          </h6>
          <p class="clamp-text">
            {{ article.subtitle }}
          </p>

          <VBtn
            size="small"
            variant="outlined"
            :to="{
              name: 'front-pages-help-center-article-title',
              params: {
                title: 'how-to-add-product-in-cart',
              },

            }"
          >
            Read More
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
