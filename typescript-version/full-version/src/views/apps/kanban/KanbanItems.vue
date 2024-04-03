<script setup lang="ts">
import { animations } from '@formkit/drag-and-drop'
import { dragAndDrop } from '@formkit/drag-and-drop/vue'
import { VForm } from 'vuetify/components/VForm'
import type { AddNewKanbanItem, EditKanbanItem, KanbanItem, RenameKanbanBoard } from '@db/apps/kanban/types'

const props = defineProps<{
  kanbanIds: number[]
  groupName: string
  boardName: string
  boardId: number
  kanbanItems: KanbanItem[]
}>()

const emit = defineEmits<{
  (e: 'renameBoard', value: RenameKanbanBoard): void
  (e: 'deleteBoard', value: number): void
  (e: 'addNewItem', value: AddNewKanbanItem): void
  (e: 'editItem', value: EditKanbanItem): void
}>()

const localKanbanItems = ref<KanbanItem[]>([])
const refKanbanBoard = ref<HTMLElement>()
const localBoardName = ref(props.boardName)

const isAddNewFormVisible = ref(false)
const isBoardNameEditing = ref(false)
const refForm = ref<VForm>()
const newTaskTitle = ref<string>('')

const boardActions = [
  {
    title: 'Rename',
    prependIcon: 'mdi-pencil-outline',
    onClick: () => { isBoardNameEditing.value = true },
  },
  {
    title: 'Delete',
    prependIcon: 'mdi-delete-outline',
    onClick: () => (emit('deleteBoard', props.boardId)),
  },
]

// 👉 emit rename board event
const renameBoard = () => {
  emit('renameBoard', { oldName: props.boardName, newName: localBoardName.value, boardId: props.boardId })

  isBoardNameEditing.value = false
}

// 👉 emit add new item event
const addNewItem = () => {
  refForm.value?.validate().then(valid => {
    if (valid.valid) {
      emit('addNewItem', { itemTitle: newTaskTitle.value, boardName: props.boardName, boardId: props.boardId })
      isAddNewFormVisible.value = false
      newTaskTitle.value = ''
    }
  })
}

// 👉 initialize draggable
dragAndDrop({
  parent: refKanbanBoard,
  values: localKanbanItems,
  group: props.groupName,
  plugins: [animations()],
})

watch([() => props.kanbanIds], () => {
  localKanbanItems.value = props.kanbanIds?.map(id => props.kanbanItems.find(item => item.id === id)) as KanbanItem[]
}, { immediate: true, deep: true })
</script>

<template>
  <div class="kanban-board">
    <!-- 👉 board heading and title -->
    <div class="kanban-board-header d-flex align-center justify-space-between mb-4">
      <div class="flex-grow-1">
        <VTextField
          v-if="isBoardNameEditing"
          v-model="localBoardName"
          density="compact"
          autofocus
        >
          <template #append-inner>
            <VBtn
              size="x-small"
              variant="tonal"
              color="success"
              icon="mdi-arrow-right"
              class="flip-in-rtl me-1"
              @click="renameBoard"
            />

            <VBtn
              size="x-small"
              variant="tonal"
              color="error"
              icon="mdi-close"
              @click="isBoardNameEditing = false"
            />
          </template>
        </VTextField>
        <h4
          v-else
          class="text-lg font-weight-medium"
        >
          {{ boardName }}
        </h4>
      </div>

      <VIcon
        class="drag-handler"
        icon="mdi-drag"
      />

      <MoreBtn
        size="small"
        icon-size="20"
        :menu-list="boardActions"
        item-props
      />
    </div>

    <!-- 👉 draggable task start here -->
    <div
      v-if="localKanbanItems"
      ref="refKanbanBoard"
      class="kanban-board-drop-zone rounded d-flex flex-column gap-4"
      :class="localKanbanItems.length ? 'mb-4' : ''"
    >
      <VCard
        v-for="item in localKanbanItems"
        :key="item.id"
        :ripple="false"
        @click="emit('editItem', { item, boardId: props.boardId, boardName: props.boardName })"
      >
        <VCardText>
          <div
            v-if="item.labels && item.labels.length"
            class="d-flex flex-wrap gap-2 mb-2"
          >
            <VChip
              v-for="text in item.labels"
              :key="text"
              size="small"
              color="secondary"
            >
              {{ text }}
            </VChip>
          </div>

          <!-- Task Img -->
          <VImg
            v-if="item.image && item.image.length"
            :src="item.image"
            class="mb-2 rounded"
          />
          <!-- Task title -->
          <p class="mb-2 text-base text-high-emphasis">
            {{ item.title }}
          </p>

          <!-- footer  -->
          <div class="task-footer d-flex align-center flex-wrap justify-space-between">
            <div class="d-flex align-center gap-1">
              <VIcon
                size="18"
                icon="mdi-link-variant"
              />
              <span class="me-3">{{ item.attachments }}</span>

              <VIcon
                size="18"
                icon="mdi-chat-outline"
              />
              <span>{{ item.commentsCount }}</span>
            </div>

            <div
              v-if="item.members && item.members.length"
              class="v-avatar-group"
            >
              <VAvatar
                v-for="avatar in item.members"
                :key="avatar"
                :image="avatar"
                size="28"
              />
            </div>
          </div>
        </VCardText>
      </VCard>
    </div>

    <!-- 👉 Add new Form -->
    <div class="add-new-form">
      <h6
        class="text-base font-weight-medium cursor-pointer"
        @click="isAddNewFormVisible = !isAddNewFormVisible"
      >
        <VIcon
          size="15"
          icon="mdi-plus"
        /> Add New
      </h6>

      <VForm
        v-if="isAddNewFormVisible"
        ref="refForm"
        class="mt-4"
        validate-on="submit"
        @submit.prevent="addNewItem"
      >
        <div class="mb-4">
          <VTextField
            v-model="newTaskTitle"
            density="compact"
            :rules="[requiredValidator]"
            placeholder="Add Board Title"
            autofocus
          />
        </div>
        <div class="d-flex gap-3 flex-wrap">
          <VBtn
            size="small"
            type="submit"
          >
            Add
          </VBtn>
          <VBtn
            size="small"
            variant="tonal"
            color="secondary"
            @click="isAddNewFormVisible = false"
          >
            Cancel
          </VBtn>
        </div>
      </VForm>
    </div>
  </div>
</template>

<style lang="scss">
.kanban-board-header {
  .drag-handler {
    cursor: grab;
    visibility: hidden;
  }

  &:hover {
    .drag-handler {
      visibility: visible;
    }
  }
}
</style>
