<script setup lang="ts">
import KanbanBoard from '@/views/apps/kanban/KanbanBoard.vue'

import type { AddNewKanbanItem, EditKanbanItem, RenameKanbanBoard } from '@db/apps/kanban/types'

const { data: kanban, execute: refetchKanban } = await useApi<any>('/apps/kanban')

const addNewBoard = async (newBoardName: string) => {
  await $api('/api/apps/kanban/add-board', {
    method: 'POST',
    body: { title: newBoardName },
  })

  refetchKanban()
}

const deleteBoard = async (boardId: number) => {
  await $api(`/apps/kanban/${boardId}`, { method: 'DELETE' })
  refetchKanban()
}

const renameTheBoard = async (kanbanBoard: RenameKanbanBoard) => {
  await $api('/apps/kanban/rename-board', {
    method: 'PUT',
    body: kanbanBoard,
  })

  refetchKanban()
}

const addNewItem = async (newItem: AddNewKanbanItem) => {
  await $api('/apps/kanban/add-item', {
    method: 'POST',
    body: newItem,
  })

  refetchKanban()
}

const editItemFn = async (editItem: EditKanbanItem) => {
  await $api('/apps/kanban/update-item', {
    method: 'PUT',
    body: editItem,
  })

  refetchKanban()
}

const deleteItemFn = async (deleteItem: EditKanbanItem) => {
  await $api(`/apps/kanban/delete-item/${deleteItem.item.id}`, {
    method: 'DELETE',
    body: deleteItem,
  })

  refetchKanban()
}
</script>

<template>
  <div
    v-if="kanban"
    class="overflow-hidden"
    style="padding: 1rem; margin: -1rem;"
  >
    <KanbanBoard
      :kanban-data="kanban"
      @add-new-board="addNewBoard"
      @delete-board="deleteBoard"
      @rename-board="renameTheBoard"
      @add-new-item="addNewItem"
      @edit-item="editItemFn"
      @delete-item="deleteItemFn"
    />
  </div>
</template>
