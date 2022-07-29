<script lang="ts" setup>
import { useRoute } from 'vue-router'
import type { KnowledgeBaseQuestionAndAnswer } from '@/@fake-db/types'
import axios from '@axios'

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
  <VRow id="page-knowledge-base">
    <VCol
      cols="12"
      md="8"
      lg="9"
    >
      <VCard>
        <VImg
          contain
          :src="knowledgeBaseQuestionAndAnswer?.postImg"
        />
        <!-- Post Title -->
        <VCardItem>
          <VCardTitle class="flex-nowrap text-break text-h5 font-weight-medium">
            {{ knowledgeBaseQuestionAndAnswer?.postContent?.title }}
          </VCardTitle>
          <VCardSubtitle>Last updated on {{ knowledgeBaseQuestionAndAnswer?.postContent?.lastUpdated }}</VCardSubtitle>
        </VCardItem>

        <VCardText v-html="knowledgeBaseQuestionAndAnswer?.postContent?.postDesc" />
      </VCard>
    </VCol>
    <VCol
      cols="12"
      md="4"
      lg="3"
      class="kb-question-related-col"
    >
      <VCard variant="text">
        <VCardItem class="py-0 px-4">
          <VCardTitle>Related</VCardTitle>
        </VCardItem>

        <VList style="background: transparent;">
          <VListItem
            v-for="que in knowledgeBaseQuestionAndAnswer?.relatedQuestions"
            :key="que.question"
          >
            <VListItemTitle
              class="text-body-2"
              href="#"
              tag="a"
            >
              {{ que.question }}
            </VListItemTitle>
          </VListItem>
        </VList>
      </VCard>
    </VCol>
  </VRow>
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
