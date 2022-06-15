<script setup lang="ts">
import { useRoute } from 'vue-router'
import KnowledgeBaseSearchSectionVue from '@core/components/KnowledgeBaseSearchSection.vue'

import type { KnowledgeBaseSubcategory } from '@/@fake-db/types'
import axios from '@axios'

const kBSearchQuery = ref('')
const knowledgeBaseSubcategories = ref<KnowledgeBaseSubcategory[]>([])

const route = useRoute()

// fetching data from the @fake-db
const fetchKnowledgeBaseSubcategoryData = () => {
  return axios.get<KnowledgeBaseSubcategory[]>(`/pages/knowledge-base/categories/${route.params.category}`, {
    params: {
      q: kBSearchQuery.value,
    },
  }).then(r => {
    knowledgeBaseSubcategories.value = r.data
  })
}

// watching the search query to fetch the data again
watch(kBSearchQuery, fetchKnowledgeBaseSubcategoryData, { immediate: true })
</script>

<template>
  <section id="page-knowledge-base">
    <!-- 👉 Search Section -->
    <KnowledgeBaseSearchSectionVue v-model="kBSearchQuery" />

    <!-- 👉 Kb Search  content -->
    <div id="knowledge-base-content">
      <v-row class="match-height">
        <v-col
          v-for="item in knowledgeBaseSubcategories"
          :key="item.icon"
          md="4"
          sm="6"
          cols="12"
        >
          <v-card>
            <!-- 👉 title -->
            <v-card-header class="page-kbc-title">
              <v-card-header-text>
                <v-card-title>
                  <v-icon
                    :color="item.iconColor ? item.iconColor : '' "
                    :size="24"
                    class="me-3"
                    :icon="item.icon"
                  />

                  <span class="text-truncate">{{ item.title }} ({{ item.questions.length }})</span>
                </v-card-title>
              </v-card-header-text>
            </v-card-header>

            <!-- 👉 Questions -->
            <v-list>
              <v-list-item
                v-for="que in item.questions"
                :key="que.question"
                :to="{ name: 'pages-knowledge-base-category-question', params: { category: $route.params.category, question: que.slug } }"
              >
                <v-list-item-icon
                  size="14"
                  color="secondary"
                  class="me-2"
                >
                  mdi-checkbox-blank-circle-outline
                </v-list-item-icon>

                <v-list-item-subtitle>{{ que.question }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>

        <!-- 👉 No result found -->
        <v-col
          v-show="!knowledgeBaseSubcategories.length"
          cols="12"
          class="text-center"
        >
          <h4 class="mt-4">
            Search result not found!!
          </h4>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<style lang="scss">
@import "@core/scss/pages/knowledge-base";
</style>

<route lang="yaml">
meta:
  navActiveLink: pages-knowledge-base
</route>
