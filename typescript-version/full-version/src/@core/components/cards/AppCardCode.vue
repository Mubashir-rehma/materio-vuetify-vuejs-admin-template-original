<script lang="ts" setup>
import { getHighlighter } from 'shikiji';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';

type CodeLanguages = 'ts' | 'js'

interface Props {
  title: string
  code: CodeProp
  codeLanguage?: string
  noPadding?: boolean
}

type CodeProp = Record<CodeLanguages, string>

const props = withDefaults(defineProps<Props>(), {
  codeLanguage: 'markup',
  noPadding: false,
})

const preferredCodeLanguage = useCookie<CodeLanguages>('preferredCodeLanguage', {
  default: () => 'ts',
  maxAge: COOKIE_MAX_AGE_1_YEAR,
})

const isCodeShown = ref(false)

const { copy, copied } = useClipboard({ source: computed(() => props.code[preferredCodeLanguage.value]) })

const highlighter = await getHighlighter({
  themes: ['dracula', 'dracula-soft'],
  langs: ['vue'],
})

const codeSnippet = highlighter.codeToHtml(props.code[preferredCodeLanguage.value], {
  lang: 'vue',
  theme: 'dracula',
})

</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>{{ props.title }}</VCardTitle>
      <template #append>
        <IconBtn
          :color="isCodeShown ? 'primary' : 'default'"
          :class="isCodeShown ? '' : 'text-disabled'"
          @click="isCodeShown = !isCodeShown"
        >
          <VIcon
            size="20"
            icon="mdi-code-tags"
          />
        </IconBtn>
      </template>
    </VCardItem>
    <slot v-if="noPadding" />
    <VCardText v-else>
      <slot />
    </VCardText>
    <VExpandTransition>
      <div v-show="isCodeShown">
        <VDivider />

        <VCardText class="d-flex gap-y-3 flex-column">
          <div class="d-flex justify-end">
            <VBtnToggle
              v-model="preferredCodeLanguage"
              mandatory
              variant="outlined"
              density="compact"
            >
              <VBtn
                size="x-small"
                value="ts"
                :color="preferredCodeLanguage === 'ts' ? 'primary' : 'default'"
              >
                <VIcon
                  size="x-large"
                  icon="mdi-language-typescript"
                  :color="preferredCodeLanguage === 'ts' ? 'primary' : 'secondary'"
                />
              </VBtn>
              <VBtn
                size="x-small"
                value="js"
                :color="preferredCodeLanguage === 'js' ? 'primary' : 'default'"
              >
                <VIcon
                  size="x-large"
                  icon="mdi-language-javascript"
                  :color="preferredCodeLanguage === 'js' ? 'primary' : 'secondary'"
                />
              </VBtn>
            </VBtnToggle>
          </div>

          <div class="position-relative">
            <PerfectScrollbar
              style="border-radius: 6px;max-block-size: 500px;"
              :options="{ wheelPropagation: false }"
            >
              <!-- eslint-disable-next-line vue/no-v-html -->
              <div v-html="codeSnippet" />
            </PerfectScrollbar>
            <IconBtn
              class="position-absolute app-card-code-copy-icon"
              color="white"
              @click="() => { copy() }"
            >
              <VIcon
                :icon="copied ? 'mdi-check' : 'mdi-content-copy'"
                size="20"
              />
            </IconBtn>
          </div>
        </VCardText>
      </div>
    </VExpandTransition>
  </VCard>
</template>

<style lang="scss">
@use "@styles/variables/vuetify.scss";

code[class*="language-"], pre[class*="language-"] {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 14px;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  border-radius: vuetify.$card-border-radius;
  max-block-size: 500px;
}

.app-card-code-copy-icon {
  inset-block-start: 1.2em;
  inset-inline-end: 0.8em;
}
</style>
