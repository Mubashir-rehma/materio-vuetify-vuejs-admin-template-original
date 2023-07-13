<script lang="ts" setup>
import Highlight from '@tiptap/extension-highlight'
import Placeholder from '@tiptap/extension-placeholder'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import StarterKit from '@tiptap/starter-kit'
import { EditorContent, useEditor } from '@tiptap/vue-3'

defineEmits<{
  (e: 'close'): void
}>()

const editor = useEditor({
  content: `
    <p>
      This is a radically reduced version of tiptap. It has support for a document, with paragraphs and text. That’s it. It’s probably too much for real minimalists though.
    </p>
    <p>
      The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.
    </p>
  `,
  extensions: [
    StarterKit,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
    Placeholder.configure({
      placeholder: 'Write something here...',
    }),
    Highlight,
    Underline,
  ],
})

const to = ref('')
const subject = ref('')
const message = ref('')
const isMenuOpen = ref(false)

const resetValues = () => {
  to.value = subject.value = message.value = ''
}
</script>

<template>
  <VCard
    class="email-compose-dialog"
    elevation="24"
    max-width="30vw"
  >
    <VCardItem class="py-3 px-5">
      <div class="d-flex align-center">
        <span class="font-weight-medium">Compose Mail</span>
        <VSpacer />
        <VIcon
          size="20"
          icon="mdi-minus"
          class="me-4"
          @click="$emit('close')"
        />
        <VIcon
          size="20"
          icon="mdi-close"
          @click="$emit('close'); resetValues()"
        />
      </div>
    </VCardItem>

    <div class="pe-5">
      <VTextField
        v-model="to"
        density="compact"
      >
        <template #prepend-inner>
          <div class="text-sm text-disabled">
            To:
          </div>
        </template>
        <template #append>
          <span class="cursor-pointer">Cc | Bcc</span>
        </template>
      </VTextField>
    </div>

    <VDivider />

    <VTextField
      v-model="subject"
      density="compact"
    >
      <template #prepend-inner>
        <div class="text-sm text-disabled">
          Subject:
        </div>
      </template>
    </VTextField>

    <VDivider />

    <div
      v-if="editor"
      class="d-flex gap-x-4 pa-2"
    >
      <VBtn
        :class="{ 'is-active': editor.isActive('bold') }"
        icon="mdi-format-bold"
        class="rounded"
        density="comfortable"
        variant="outlined"
        color="default"
        @click="editor.chain().focus().toggleBold().run()"
      />
      <VBtn
        :class="{ 'is-active': editor.isActive('bold') }"
        icon="mdi-format-underline"
        class="rounded"
        density="comfortable"
        variant="outlined"
        color="default"
        @click="editor.commands.toggleUnderline()"
      />
      <VBtn
        icon="mdi-format-italic"
        class="rounded"
        density="comfortable"
        variant="outlined"
        color="default"
        :class="{ 'is-active': editor.isActive('italic') }"
        @click="editor.chain().focus().toggleItalic().run()"
      />
      <VBtn
        icon="mdi-format-strikethrough"
        class="rounded"
        density="comfortable"
        variant="outlined"
        color="default"
        :class="{ 'is-active': editor.isActive('strike') }"
        @click="editor.chain().focus().toggleStrike().run()"
      />

      <VBtn
        icon="mdi-format-align-left"
        class="rounded"
        density="comfortable"
        variant="outlined"
        color="default"
        :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
        @click="editor.chain().focus().setTextAlign('left').run()"
      />
      <VBtn
        icon="mdi-format-align-center"
        class="rounded"
        density="comfortable"
        variant="outlined"
        color="default"
        :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
        @click="editor.chain().focus().setTextAlign('center').run()"
      />
      <VBtn
        icon="mdi-format-align-left"
        class="rounded"
        density="comfortable"
        variant="outlined"
        color="default"
        :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
        @click="editor.chain().focus().setTextAlign('right').run()"
      />
      <VBtn
        icon="mdi-format-align-justify"
        class="rounded"
        density="comfortable"
        variant="outlined"
        color="default"
        :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }"
        @click="editor.chain().focus().setTextAlign('justify').run()"
      />
    </div>
    <VDivider />
    <EditorContent
      :editor="editor"
      class="text-high-emphasis"
    />

    <VDivider />

    <div class="d-flex align-center px-5 py-4">
      <VBtnGroup
        color="primary"
        divided
        density="comfortable"
      >
        <VBtn>Send</VBtn>
        <VBtn
          icon
          @click="() => isMenuOpen = !isMenuOpen"
        >
          <VIcon
            :icon="isMenuOpen ? 'mdi-chevron-up' : 'mdi-chevron-down' "
            size="24"
          />
          <VMenu activator="parent">
            <VList :items="['Schedule Mail', 'Save Draft']" />
          </VMenu>
        </VBtn>
      </VBtnGroup>
      <VIcon
        icon="mdi-attachment"
        class="ms-4 cursor-pointer"
      />

      <VSpacer />

      <VIcon
        icon="mdi-dots-vertical"
        size="20"
        class="cursor-pointer"
      />
      <VIcon
        icon="mdi-delete-outline"
        size="20"
        class="ms-4 cursor-pointer"
        @click="$emit('close'); resetValues()"
      />
    </div>
  </VCard>
</template>

<style lang="scss">
.email-compose-dialog {
  z-index: 910 !important;

  .v-field--prepended {
    padding-inline-start: 20px;
  }

  .v-card-item {
    background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
  }

  .v-textarea .v-field {
    --v-field-padding-start: 20px;
  }

  .v-field__outline {
    display: none;
  }
}

.ProseMirror{
  p{
    margin-bottom: 0;
  }
  padding: 0.5rem;

  p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  float: left;
  color: #adb5bd;
  pointer-events: none;
  height: 0;
  }
}
</style>
