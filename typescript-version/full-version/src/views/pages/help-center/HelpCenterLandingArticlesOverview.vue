<script setup lang="ts">
import type { HelpCenterArticlesOverview } from '@db/pages/help-center/types'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'

interface Props {
  articles: HelpCenterArticlesOverview[]
}

const props = defineProps<Props>()

const renderNode = (node: any) => {
  return h('div', { innerHTML: node })
}
</script>

<template>
  <VRow v-if="props.articles.length">
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
          <VNodeRenderer :nodes="renderNode(article.img)" />

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

<style lang="scss">
.v-card-text {
  svg {
    block-size: 58px;
    inline-size: 58px;
  }
}
</style>
