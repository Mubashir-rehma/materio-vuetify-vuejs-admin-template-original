<script setup lang="ts">
import { useDragAndDrop } from '@formkit/drag-and-drop/vue'

const props = defineProps<{
  todoItems: string[]
  groupName: string
  boardName: string
}>()

const [todoList, todos] = useDragAndDrop(props.todoItems, { group: props.groupName })
</script>

<template>
  <div>
    <h4 class="text-4 mb-3">
      {{ boardName }}
    </h4>

    <div
      ref="todoList"
      class="pa-4 bg-surface rounded d-flex flex-column gap-4 elevation-4"
    >
      <div
        v-for="todo in todos"
        :key="todo"
        class="pa-2 border rounded"
      >
        {{ todo }}
      </div>
    </div>
  </div>
</template>
