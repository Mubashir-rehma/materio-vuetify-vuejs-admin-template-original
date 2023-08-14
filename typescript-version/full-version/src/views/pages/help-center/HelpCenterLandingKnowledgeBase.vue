<script setup lang="ts">
import type { HelpCenterAllCategoryArticles } from '@/plugins/fake-api/handlers/pages/help-center/type'

interface Props {
  categories: HelpCenterAllCategoryArticles[]
}

const props = defineProps<Props>()
</script>

<template>
  <VRow>
    <VCol
      v-for="article in props.categories"
      :key="article.title"
      cols="12"
      sm="6"
      lg="4"
    >
      <VCard :title="article.title">
        <template #prepend>
          <VAvatar
            :icon="article.icon"
            rounded
            color="primary"
            variant="tonal"
          />
        </template>

        <VCardText>
          <VList class="card-list">
            <VListItem
              v-for="(item, index) in article.articles"
              :key="index"
              class="text-body-1"
              append-icon="mdi-chevron-right"
            >
              <RouterLink
                :to="{
                  name: 'front-pages-help-center-article-title',
                  params: {
                    title: 'how-to-add-product-in-cart',
                  },
                }"
                class="text-high-emphasis"
              >
                {{ item.title }}
              </RouterLink>
            </VListItem>
          </VList>

          <div class="mt-4">
            <RouterLink
              :to="{
                name: 'front-pages-help-center-article-title',
                params: {
                  title: 'how-to-add-product-in-cart',
                },
              }"
              class="text-base font-weight-medium"
            >
              See All Articles
            </RouterLink>
          </div>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
.card-list {
  --v-card-list-gap: 0.5rem;
}
</style>
