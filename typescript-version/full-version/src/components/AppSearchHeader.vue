<script setup lang="ts">
import AppSearchHeaderBgDark from '@images/pages/app-search-header-bg-dark.png'
import AppSearchHeaderBgLight from '@images/pages/app-search-header-bg-light.png'

interface Props {
  title?: string
  subtitle?: string
  customClass?: string
}

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<Props>()

const themeBackgroundImg = useGenerateImageVariant(AppSearchHeaderBgLight, AppSearchHeaderBgDark)
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
      <h4 class="text-h4 text-primary">
        {{ props.title }}
      </h4>

      <!-- 👉 Search Input -->
      <VTextField
        v-bind="$attrs"
        placeholder="Ask a question.."
        class="search-header-input mx-auto my-4"
      >
        <template #prepend-inner>
          <VIcon
            icon="ri-search-line"
            size="23"
          />
        </template>
      </VTextField>

      <p class="text-body-1">
        {{ props.subtitle }}
      </p>
    </VCardText>
  </VCard>
</template>

<style lang="scss">
.search-header {
  padding: 4rem !important;
  background-size: cover !important;
}

// search input
.search-header-input {
  border-radius: 0.25rem !important;
  background-color: rgb(var(--v-theme-surface));
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
