<script setup lang="ts">
import { useDragAndDrop } from '@formkit/drag-and-drop/vue'
import KanbanBoard from './kanban-board.vue'

const todoItems = ['Schedule perm', 'Rewind VHS tapes', 'Make change for the arcade', 'Get disposable camera developed', 'Learn C++', 'Return Nintendo Power Glove']
const doneItems = ['Pickup new mix-tape from Beth']

const kanban = [
  {
    id: 1,
    name: 'Not Stated',
    tasks: todoItems,
  },
  {
    id: 2,
    name: 'In Progress',
    tasks: doneItems,
  },
  {
    id: 3,
    name: 'Done',
    tasks: doneItems,
  },
]

const [kanbanWrapper, todo] = useDragAndDrop(kanban)
</script>

<template>
  <div
    ref="kanbanWrapper"
    class="d-flex ga-4"
  >
    <template
      v-for="kb in todo"
      :key="kb.id"
    >
      <KanbanBoard
        group-name="kanban"
        :todo-items="kb.tasks"
        :board-name="kb.name"
      />
    </template>
  </div>
</template>
