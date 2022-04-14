<script lang="ts" setup>

// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import Prism from 'vue-prism-component'

interface Props {
  title: string
  code: string
  codeLanguage?: string
  noPadding?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  codeLanguage: 'markup',
  noPadding: false,
})

const isCodeShown = ref(false)
</script>

<template>
  <v-card class="mb-6">
    <v-card-header>
      <v-card-header-text class="d-flex items-center justify-space-between">
        <v-card-title>{{ props.title }}</v-card-title>
        <v-btn
          icon="mdi-code-braces"
          :color="isCodeShown ? 'primary': null"
          size="x-small"
          variant="text"
          @click="isCodeShown = !isCodeShown"
        />
      </v-card-header-text>
    </v-card-header>
    <slot v-if="noPadding" />
    <v-card-text v-else>
      <slot />
    </v-card-text>
    <v-expand-transition>
      <div v-show="isCodeShown">
        <v-divider />

        <v-card-text>
          <prism :language="props.codeLanguage">
            {{ props.code }}
          </prism>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
