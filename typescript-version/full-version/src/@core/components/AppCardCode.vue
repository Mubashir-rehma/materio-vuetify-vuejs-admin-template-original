<script lang="ts" setup>

// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import Prism from 'vue-prism-component'
interface Props {
  title: string
  code: CodeProp
  codeLanguage?: string
  noPadding?: boolean
}

interface CodeProp {
  ts: string
  js: string
}

const props = withDefaults(defineProps<Props>(), {
  codeLanguage: 'markup',
  noPadding: false,
})

const preferredCodeLanguage = useStorage('preferredCodeLanguage', 'ts')

const isCodeShown = ref(false)
</script>

<template>
  <v-card>
    <v-card-header>
      <v-card-header-text class="d-flex items-center justify-space-between">
        <v-card-title>{{ props.title }}</v-card-title>
        <div class="d-flex items-center gap-x-4">
          <!-- Language Selector -->
          <v-btn-toggle
            v-model="preferredCodeLanguage"
            shaped
            mandatory
            density="compact"
          >
            <v-btn value="ts">
              <v-icon>mdi-language-typescript</v-icon>
            </v-btn>

            <v-btn value="js">
              <v-icon>mdi-language-javascript</v-icon>
            </v-btn>
          </v-btn-toggle>
          <v-btn
            icon="mdi-code-tags"
            :color="isCodeShown ? 'primary' : null"
            size="x-small"
            variant="text"
            @click="isCodeShown = !isCodeShown"
          />
        </div>
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
            {{ props.code[preferredCodeLanguage] }}
          </prism>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
