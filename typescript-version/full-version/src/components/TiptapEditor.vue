<script setup lang="ts">
import { Placeholder } from '@tiptap/extension-placeholder'
import { TextAlign } from '@tiptap/extension-text-align'
import { Underline } from '@tiptap/extension-underline'
import { StarterKit } from '@tiptap/starter-kit'
import { EditorContent, useEditor } from '@tiptap/vue-3'

const props = defineProps<{
  modelValue: string
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
    Placeholder.configure({
      placeholder: 'Write something here...',
    }),
    Underline,
  ],
  onUpdate() {
    if (!editor.value)
      return

    emits('update:modelValue', editor.value.getHTML())
  },
})

watch(() => props.modelValue, () => {
  const isSame = editor.value?.getHTML() === props.modelValue

  if (isSame)
    return

  editor.value?.commands.setContent(props.modelValue)
})
</script>

<template>
  <div>
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
        :class="{ 'is-active': editor.isActive('underline') }"
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
        icon="mdi-format-align-right"
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
    <EditorContent :editor="editor" />
  </div>
</template>

<style lang="scss">
.ProseMirror{
  min-block-size: 15vh;
}

.is-active{
  background-color: rgba(0, 0, 0, 0.08);
}
</style>
