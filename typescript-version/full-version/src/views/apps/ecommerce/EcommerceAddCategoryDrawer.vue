<script setup lang="ts">
import { Image } from '@tiptap/extension-image'
import { Link } from '@tiptap/extension-link'
import { Placeholder } from '@tiptap/extension-placeholder'
import { StarterKit } from '@tiptap/starter-kit'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

interface Props {
  isDrawerOpen: boolean
}

interface Emit {
  (e: 'update:isDrawerOpen', value: boolean): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const handleDrawerModelValueUpdate = (val: boolean) => {
  emit('update:isDrawerOpen', val)
}

const editor = useEditor({
  content: '',
  extensions: [
    StarterKit,
    Image,
    Placeholder.configure({
      placeholder: 'Write something here...',
    }),
    Link.configure(
      {
        openOnClick: false,
      },
    ),
  ],
})

const setLink = () => {
  const previousUrl = editor.value?.getAttributes('link').href
  const url = window.prompt('URL', previousUrl)

  // cancelled
  if (url === null)
    return

  // empty
  if (url === '') {
    editor.value?.chain().focus().extendMarkRange('link').unsetLink().run()

    return
  }

  // update link
  editor.value?.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
}

const addImage = () => {
  const url = window.prompt('URL')

  if (url)
    editor.value?.chain().focus().setImage({ src: url }).run()
}
</script>

<template>
  <div>
    <VNavigationDrawer
      :model-value="props.isDrawerOpen"
      temporary
      location="end"
      width="370"
      @update:model-value="handleDrawerModelValueUpdate"
    >
      <!-- 👉 Header -->
      <AppDrawerHeaderSection
        title="Add Category"
        @cancel="$emit('update:isDrawerOpen', false)"
      />

      <PerfectScrollbar :options="{ wheelPropagation: false }">
        <VCard
          flat
          class="add-category-card"
        >
          <VCardText>
            <VForm @submit.prevent="">
              <VRow>
                <VCol cols="12">
                  <VTextField
                    label="Title"
                    placeholder="Fashion"
                  />
                </VCol>

                <VCol cols="12">
                  <VTextField
                    label="Slug"
                    placeholder="Trends fashion"
                  />
                </VCol>

                <VCol cols="12">
                  <VFileInput
                    prepend-icon=""
                    density="compact"
                    placeholder="No file chosen"
                    clearable
                  >
                    <template #prepend-inner>
                      <div class="text-no-wrap pe-2 cursor-pointer">
                        Choose Image
                      </div>
                      <VDivider vertical />
                    </template>
                  </VFileInput>
                </VCol>

                <VCol cols="12">
                  <VSelect
                    label="Parent Category"
                    placeholder="Select Parent Category"
                    :items="['HouseHold', 'Management', 'Electronics', 'Office', 'Accessories']"
                  />
                </VCol>

                <VCol cols="12">
                  <p class="mb-2">
                    Description
                  </p>
                  <div class="border rounded py-2 px-4">
                    <EditorContent :editor="editor" />
                    <div
                      v-if="editor"
                      class="d-flex justify-end flex-wrap gap-x-2"
                    >
                      <VIcon
                        icon="tabler-bold"
                        :color="editor.isActive('bold') ? 'primary' : ''"
                        size="20"
                        @click="editor.chain().focus().toggleBold().run()"
                      />

                      <VIcon
                        :color="editor.isActive('underline') ? 'primary' : ''"
                        icon="tabler-underline"
                        size="20"
                        @click="editor.commands.toggleUnderline()"
                      />

                      <VIcon
                        :color="editor.isActive('italic') ? 'primary' : ''"
                        icon="tabler-italic"
                        size="20"
                        @click="editor.chain().focus().toggleItalic().run()"
                      />

                      <VIcon
                        :color="editor.isActive('bulletList') ? 'primary' : ''"
                        icon="tabler-list"
                        size="20"
                        @click="editor.chain().focus().toggleBulletList().run()"
                      />

                      <VIcon
                        :color="editor.isActive('orderedList') ? 'primary' : ''"
                        icon="tabler-list-numbers"
                        size="20"
                        @click="editor.chain().focus().toggleOrderedList().run()"
                      />

                      <VIcon
                        icon="tabler-link"
                        size="20"
                        @click="setLink"
                      />

                      <VIcon
                        icon="tabler-photo"
                        size="20"
                        @click="addImage"
                      />
                    </div>
                  </div>
                </VCol>

                <VCol cols="12">
                  <VSelect
                    placeholder="Select Category Status"
                    label="Parent Status"
                    :items="['Published', 'Inactive', 'Scheduled']"
                  />
                </VCol>

                <VCol cols="12">
                  <div class="d-flex justify-start">
                    <VBtn
                      color="primary"
                      class="me-4"
                    >
                      Add
                    </VBtn>
                    <VBtn
                      color="error"
                      variant="outlined"
                      @click="$emit('update:isDrawerOpen', false)"
                    >
                      Discard
                    </VBtn>
                  </div>
                </VCol>
              </VRow>
            </VForm>
          </VCardText>
        </VCard>
      </PerfectScrollbar>
    </VNavigationDrawer>
  </div>
</template>

<style lang="scss">
.add-category-card{
  .ProseMirror {
    padding: 0.5rem;
    min-block-size: 15vh;

    p {
      margin-block-end: 0;
    }

    p.is-editor-empty:first-child::before {
      block-size: 0;
      color: #adb5bd;
      content: attr(data-placeholder);
      float: inline-start;
      pointer-events: none;
    }
  }

  .ProseMirror-focused{
    outline: none;
  }
}
</style>
