<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { VForm } from 'vuetify/components/VForm'
import type { EditKanbanItem } from '@db/apps/kanban/types'

interface Emit {
  (e: 'update:isDrawerOpen', value: boolean): void
  (e: 'update:kanbanItem', value: EditKanbanItem): void
  (e: 'deleteKanbanItem', value: EditKanbanItem): void
}

const props = withDefaults(defineProps<{
  kanbanItem?: EditKanbanItem | undefined
  isDrawerOpen: boolean
}>(), {
  kanbanItem: () => ({
    item: {
      title: '',
      dueDate: '',
      labels: [],
      members: [],
      id: 0,
      attachments: 0,
      commentsCount: 0,
      image: '',
      comments: '',
    },
    boardId: 0,
    boardName: '',
  }),
})

const emit = defineEmits<Emit>()

const refEditTaskForm = ref<VForm>()
const labelOptions = ['UX', 'Image', 'Code Review', 'Dashboard', 'Bug']

const localKanbanItem = ref(JSON.parse(JSON.stringify(props.kanbanItem)))

const handleDrawerModelValueUpdate = (val: boolean) => {
  emit('update:isDrawerOpen', val)
}

// kanban item watcher
watch(() => props.kanbanItem, () => {
  localKanbanItem.value = JSON.parse(JSON.stringify(props.kanbanItem))
}, { deep: true })

const updateKanbanItem = () => {
  refEditTaskForm.value?.validate().then(valid => {
    if (valid.valid) {
      emit('update:kanbanItem', localKanbanItem.value)
      emit('update:isDrawerOpen', false)
    }
  })
}

// delete kanban item
const deleteKanbanItem = () => {
  emit('deleteKanbanItem', localKanbanItem.value)
  emit('update:isDrawerOpen', false)
}

// 👉 label/chip color
const resolveLabelColor: any = {
  'UX': 'success',
  'Image': 'warning',
  'Code Review': 'info',
  'Dashboard': 'primary',
  'Bug': 'error',
}
</script>

<template>
  <VNavigationDrawer
    location="end"
    :width="400"
    temporary
    :model-value="props.isDrawerOpen"
    @update:model-value="handleDrawerModelValueUpdate"
  >
    <!-- 👉 Header -->
    <AppDrawerHeaderSection
      title="Edit Task"
      @cancel="$emit('update:isDrawerOpen', false)"
    />

    <PerfectScrollbar
      :options="{ wheelPropagation: false }"
      style="block-size: calc(100vh - 4rem);"
    >
      <VForm
        v-if="localKanbanItem"
        ref="refEditTaskForm"
        @submit.prevent="updateKanbanItem"
      >
        <VCardText>
          <VRow>
            <VCol cols="12">
              <VTextField
                v-model="localKanbanItem.item.title"
                label="Title"
                :rules="[requiredValidator]"
              />
            </VCol>
            <VCol cols="12">
              <AppDateTimePicker
                v-model="localKanbanItem.item.dueDate"
                label="Due date"
              />
            </VCol>

            <VCol cols="12">
              <VSelect
                v-model="localKanbanItem.item.labels"
                :items="labelOptions"
                label="Label"
                multiple
                eager
              >
                <template #chip="{ item }">
                  <VChip :color="resolveLabelColor[item.raw]">
                    {{ item.raw }}
                  </VChip>
                </template>
              </VSelect>
            </VCol>

            <VCol cols="12">
              <p class="mb-1">
                Assigned
              </p>

              <div class="d-flex align-center flex-wrap gap-1">
                <VAvatar
                  v-for="avatar in localKanbanItem.item.members"
                  :key="avatar.name"
                  size="26"
                >
                  <VImg :src="avatar.img" />

                  <VTooltip activator="parent">
                    {{ avatar.name }}
                  </VTooltip>
                </VAvatar>
                <VAvatar
                  size="26"
                  variant="tonal"
                >
                  <VIcon
                    class="text-medium-emphasis"
                    size="20"
                    icon="mdi-plus"
                  />
                </VAvatar>
              </div>
            </VCol>

            <VCol cols="12">
              <VFileInput label="Choose file" />
            </VCol>

            <VCol cols="12">
              <VTextarea
                label="Comment"
                placeholder="Write a comment..."
                rows="5"
                textarea
              />
            </VCol>

            <VCol cols="12">
              <VBtn
                type="submit"
                class="me-3"
              >
                Update
              </VBtn>
              <VBtn
                color="error"
                variant="tonal"
                @click="deleteKanbanItem"
              >
                Delete
              </VBtn>
            </VCol>
          </VRow>
        </VCardText>
      </VForm>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
