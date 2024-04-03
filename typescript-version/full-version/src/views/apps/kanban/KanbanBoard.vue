<script setup lang="ts">
import { dragAndDrop } from '@formkit/drag-and-drop/vue'
import { VForm } from 'vuetify/components/VForm'
import KanbanBoardEditDrawer from '@/views/apps/kanban/KanbanBoardEditDrawer.vue'
import KanbanItems from '@/views/apps/kanban/KanbanItems.vue'
import type { AddNewKanbanItem, EditKanbanItem, KanbanBoard, KanbanData, RenameKanbanBoard } from '@db/apps/kanban/types'

const props = withDefaults(defineProps<{
  kanbanData: KanbanData
  groupName?: string
}>(), {
  groupName: 'kanban',
})

const emit = defineEmits<{
  (e: 'addNewBoard', value: string): void
  (e: 'renameBoard', value: RenameKanbanBoard): void
  (e: 'deleteBoard', value: number): void
  (e: 'update:kanbanData', value: KanbanBoard[]): void
  (e: 'addNewItem', value: AddNewKanbanItem): void
  (e: 'editItem', value: EditKanbanItem): void
  (e: 'deleteItem', value: EditKanbanItem): void
}>()

const kanbanWrapper = ref<HTMLElement>()
const localKanbanData = ref(JSON.parse(JSON.stringify(props.kanbanData.boards)))
const isKanbanBoardEditVisible = ref(false)

const isAddNewFormVisible = ref(false)
const refAddNewBoard = ref<VForm>()
const boardTitle = ref<string>('')

const editKanbanItem = ref<EditKanbanItem>(
  {
    boardId: 0,
    boardName: '',
    item: {
      id: 0,
      title: '',
      dueDate: '',
      labels: [],
      members: [],
      comments: '',
    },
  },
)

// 👉 Add new board function that emit the name and id of new board
const addNewBoard = () => {
  refAddNewBoard.value?.validate().then(valid => {
    if (valid.valid) {
      emit('addNewBoard', boardTitle.value)
      isAddNewFormVisible.value = false
      boardTitle.value = ''
    }
  })
}

// const checkTotalItemsAndProvideId = () => {
//   return localKanbanData.value.reduce((acc, board) => {
//     return acc + (board.items ? board.items.length : 0)
//   }, 0)
// }

// 👉 emit delete board event
const deleteBoard = (boardId: number) => {
  emit('deleteBoard', boardId)
}

// 👉 emit rename board event
const renameBoard = (boardName: RenameKanbanBoard) => {
  emit('renameBoard', boardName)
}

// 👉 emit add new task event
const addNewItem = (item: AddNewKanbanItem) => {
  // item.item.id = checkTotalItemsAndProvideId() + 1
  emit('addNewItem', item)
}

// 👉 check if the kanban data has changed and emit the event
// const updateKanbanData = () => {
//   if (!(JSON.stringify(localKanbanData.value) === JSON.stringify(props.kanbanData)))
//     emit('update:kanbanData', localKanbanData.value)
// }

// 👉 edit kanban item
const editKanbanItemFn = (item: EditKanbanItem) => {
  editKanbanItem.value = item
  isKanbanBoardEditVisible.value = true
}

// 👉 initialize the drag and drop
dragAndDrop({
  parent: kanbanWrapper,
  values: localKanbanData,
  dragHandle: '.drag-handler',
})

// assign the new kanban data to the local kanban data
watch(() => props.kanbanData, () => {
  localKanbanData.value = JSON.parse(JSON.stringify(props.kanbanData.boards))
}, { deep: true })

// 👉 emit updated task to parent
const emitUpdatedTaskFn = (item: EditKanbanItem) => {
  emit('editItem', item)
}

const deleteKanbanItemFn = (item: EditKanbanItem) => {
  emit('deleteItem', item)
}
</script>

<template>
  <div class="kanban-main-wrapper d-flex gap-4">
    <!-- 👉 kanban render  -->
    <div
      ref="kanbanWrapper"
      class="d-flex ga-4"
    >
      <template
        v-for="kb in localKanbanData"
        :key="kb.id"
      >
        <!-- 👉 kanban task render -->
        <KanbanItems
          :group-name="groupName"
          :kanban-ids="kb.itemsIds"
          :board-name="kb.title"
          :board-id="kb.id"
          :kanban-items="kanbanData.items"
          @delete-board="deleteBoard"
          @rename-board="renameBoard"
          @add-new-item="addNewItem"
          @edit-item="editKanbanItemFn"
        />
      </template>
    </div>

    <!-- 👉 add new form  -->
    <div class="add-new-form">
      <h6
        class="text-lg font-weight-medium cursor-pointer"
        @click="isAddNewFormVisible = !isAddNewFormVisible"
      >
        <VIcon
          size="18"
          icon="mdi-plus"
        /> Add New
      </h6>

      <!-- 👉 Form -->
      <VForm
        v-if="isAddNewFormVisible"
        ref="refAddNewBoard"
        class="mt-4"
        validate-on="submit"
        @submit.prevent="addNewBoard"
      >
        <div class="mb-4">
          <VTextField
            v-model="boardTitle"
            density="compact"
            :rules="[requiredValidator]"
            autofocus
            placeholder="Add Board Title"
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
  <!-- kanban edit drawer -->
  <KanbanBoardEditDrawer
    v-model:is-drawer-open="isKanbanBoardEditVisible"
    :kanban-item="editKanbanItem"
    @update:kanban-item="emitUpdatedTaskFn"
    @delete-kanban-item="deleteKanbanItemFn"
  />
</template>

<style lang="scss">
@use "@styles/variables/_vuetify.scss" as vuetify;

.kanban-main-wrapper {
  overflow: auto hidden;
  padding: 1rem;
  margin: -1rem;

  .add-new-form,
  .kanban-board {
    z-index: 1 !important;
    inline-size: 16.875rem;
    min-inline-size: 16.875rem;
  }

  .add-new-form {
    .v-field__field {
      border-radius: vuetify.$border-radius-root;
      background-color: rgb(var(--v-theme-surface));
    }
  }

  .kanban-board {
    .kanban-board-drop-zone {
      min-block-size: 1rem;
    }
  }
}
</style>
