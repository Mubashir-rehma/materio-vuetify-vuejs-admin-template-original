<script setup lang="ts">
import knowledgeBaseBgDark from '@/assets/images/pages/knowledge-base-bg-dark.png'
import knowledgeBaseBgLight from '@/assets/images/pages/knowledge-base-bg-light.png'

import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'

interface Props {
  title?: string
  subtitle?: string
  customClass?: string
}

const props = defineProps<Props>()

defineOptions({
  inheritAttrs: false,
})

const themeBackgroundImg = useGenerateImageVariant(knowledgeBaseBgLight, knowledgeBaseBgDark)
</script>

<template>
  <!-- 👉 Search Banner  -->
  <VCard
    flat
    class="text-center search-header"
    :class="props.customClass"
    :style="`background: url(${themeBackgroundImg});`"
  >
    <VCardText>
      <h5 class="text-h5 font-weight-medium text-primary">
        {{ props.title }}
      </h5>

      <!-- 👉 Search Input -->
      <VTextField
        v-bind="$attrs"
        placeholder="Ask a question.."
        class="search-header-input mx-auto my-3"
      >
        <template #prepend-inner>
          <VIcon
            icon="mdi-magnify"
            size="23"
          />
        </template>
      </VTextField>

      <p>{{ props.subtitle }}</p>
    </VCardText>
  </VCard>
</template>

<style lang="scss">
.search-header {
  padding: 4rem !important;
  background-size: cover;
}

// search input
.search-header-input {
  background-color: rgb(var(--v-theme-surface));
  border-radius: 0.25rem !important;
  max-inline-size: 32.125rem;

  .v-field__prepend-inner {
    i {
      inset-block-start: 3px !important;
    }
  }
}

@media (max-width: 37.5rem) {
  .search-header {
    padding: 1.5rem !important;
  }
}
</style>
