<script lang="ts" setup>
import { useRoute } from 'vue-router'
import axios from '@axios'
import type { KnowledgeBaseQuestionAndAnswer } from '@/@fake-db/types'

const route = useRoute()
const knowledgeBaseQuestionAndAnswer = ref<KnowledgeBaseQuestionAndAnswer>()

const fetchKnowledgeBaseQuestionsAndAnswers = () => {
  return axios.get<KnowledgeBaseQuestionAndAnswer>(`/pages/knowledge-base/categories/questions/${route.params.question}`).then(r => {
    knowledgeBaseQuestionAndAnswer.value = r.data
  })
}

watch(route, fetchKnowledgeBaseQuestionsAndAnswers, { immediate: true })
</script>

<template>
  <v-row id="page-knowledge-base">
    <v-col
      cols="12"
      md="8"
      lg="9"
    >
      <v-card>
        <v-img
          contain
          :src="knowledgeBaseQuestionAndAnswer?.postImg"
        />
        <!-- Post Title -->
        <v-card-header>
          <v-card-header-text>
            <v-card-title class="flex-nowrap">
              <span class="text-break text-h5 font-weight-medium">{{ knowledgeBaseQuestionAndAnswer?.postContent?.title }}</span>
            </v-card-title>
            <v-card-subtitle>Last updated on {{ knowledgeBaseQuestionAndAnswer?.postContent?.lastUpdated }}</v-card-subtitle>
          </v-card-header-text>
        </v-card-header>

        <v-card-text v-html="knowledgeBaseQuestionAndAnswer?.postContent?.postDesc" />
      </v-card>
    </v-col>
    <v-col
      cols="12"
      md="4"
      lg="3"
      class="kb-question-related-col"
    >
      <v-card variant="text">
        <v-card-header class="py-0 px-4">
          <v-card-header-text>
            <v-card-title>Related</v-card-title>
          </v-card-header-text>
        </v-card-header>
        <v-list style="background: transparent;">
          <v-list-item
            v-for="que in knowledgeBaseQuestionAndAnswer?.relatedQuestions"
            :key="que.question"
          >
            <v-list-item-title
              class="text-body-2"
              href="#"
              tag="a"
            >
              {{ que.question }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss">
@use "@configured-variables" as layouts_variables;

.kb-question-related-col {
  position: sticky;
  block-size: 100%;

  // 2rem is page-content padding & 12px is col padding
  inset-block-start: calc(layouts_variables.$layout-vertical-nav-navbar-height + 2rem - 12px);
  inset-inline-end: 0;
}
</style>

<route lang="yaml">
meta:
  navActiveLink: pages-knowledge-base
</route>
