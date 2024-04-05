<script setup lang="ts">
import { animations, remapNodes } from '@formkit/drag-and-drop'
import { dragAndDrop } from '@formkit/drag-and-drop/vue'
import { VForm } from 'vuetify/components/VForm'
import type { AddNewKanbanItem, EditKanbanItem, KanbanData, KanbanState, RenameKanbanBoard } from '@db/apps/kanban/types'

import KanbanCard from '@/views/apps/kanban/KanbanCard.vue'

const props = defineProps<{
  kanbanIds: number[]
  groupName: string
  boardName: string
  boardId: number
  kanbanData: KanbanData
}>()

const emit = defineEmits<{
  (e: 'renameBoard', value: RenameKanbanBoard): void
  (e: 'deleteBoard', value: number): void
  (e: 'addNewItem', value: AddNewKanbanItem): void
  (e: 'editItem', value: EditKanbanItem | undefined): void
  (e: 'updateItemsState', value: KanbanState): void
  (e: 'deleteItem', value: EditKanbanItem): void
}>()

const refKanbanBoard = ref<HTMLElement>()
const localBoardName = ref(props.boardName)

const localIds = ref<number[]>(props.kanbanIds)

const isAddNewFormVisible = ref(false)
const isBoardNameEditing = ref(false)
const refForm = ref<VForm>()
const newTaskTitle = ref<string>('')

// 👉 required validator
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
  emit('renameBoard', {
    oldName: props.boardName,
    newName: localBoardName.value,
    boardId: props.boardId,
  })
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
  values: localIds,
  group: props.groupName,
  plugins: [animations()],
  draggable: child => child.classList.contains('kanban-card'),
})

// 👉 watch kanbanIds its is useful when you add new task
watch(props, () => {
  localIds.value = props.kanbanIds
}, { immediate: true, deep: true })

// watching `localIds` to update the `kanbanIds` in database
watch(localIds, () => {
  emit('updateItemsState', { boardId: props.boardId, ids: localIds.value })

  // 👉 remap the nodes when we rename the board: https://github.com/formkit/drag-and-drop/discussions/52#discussioncomment-8995203
  remapNodes(refKanbanBoard.value as any)
}, { deep: true })

// 👉 resolve item using id
const resolveItemUsingId = (id: number) => props.kanbanData.items.find(item => item.id === id)

const deleteItem = (item: EditKanbanItem) => {
  emit('deleteItem', item)
}
</script>

<template>
  <div class="kanban-board">
    <!-- 👉 board heading and title -->
    <div class="kanban-board-header d-flex align-center justify-space-between mb-4">
      <div class="flex-grow-1">
        <VForm
          v-if="isBoardNameEditing"
          @submit.prevent="renameBoard"
        >
          <VTextField
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
        </VForm>
        <h4
          v-else
          class="text-lg font-weight-medium"
        >
          {{ boardName }}
        </h4>
      </div>

      <VIcon
        class="drag-handler"
        size="20"
        icon="mdi-arrow-all"
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
      v-if="localIds"
      ref="refKanbanBoard"
      class="kanban-board-drop-zone rounded d-flex flex-column gap-4"
      :class="localIds.length ? 'mb-4' : ''"
    >
      <template
        v-for="id in localIds"
        :key="id"
      >
        <KanbanCard
          :item="resolveItemUsingId(id)"
          :board-id="props.boardId"
          :board-name="props.boardName"
          @delete-kanban-item="deleteItem"
          @click="emit('editItem', { item: resolveItemUsingId(id), boardId: props.boardId, boardName: props.boardName })"
        />
      </template>

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
