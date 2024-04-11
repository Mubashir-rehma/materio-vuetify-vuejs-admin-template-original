<script setup lang="ts">
import type { EditKanbanItem, KanbanItem } from '@db/apps/kanban/types'

const props = defineProps<{
  item: KanbanItem | undefined
  boardId: number
  boardName: string
}>()

const emit = defineEmits<{
  (e: 'deleteKanbanItem', value: EditKanbanItem): void
}>()

const resolveLabelColor: any = {
  'UX': 'success',
  'Image': 'warning',
  'Code Review': 'info',
  'Dashboard': 'primary',
  'Bug': 'error',
}

const moreOptions = [
  {
    title: 'Copy Task link',
    href: '#',
  },
  {
    title: 'Duplicate Task',
    href: '#',
  },
  {
    title: 'Delete',
    onClick: () => {
      emit('deleteKanbanItem', { item: props.item, boardId: props.boardId, boardName: props.boardName })
    },
  },
]
</script>

<template>
  <VCard
    v-if="item"
    :ripple="false"
    class="kanban-card position-relative"
  >
    <VCardText>
      <div class="d-flex align-start gap-2">
        <div
          v-if="item.labels && item.labels.length"
          class="d-flex flex-wrap gap-2"
        >
          <VChip
            v-for="text in item.labels"
            :key="text"
            size="small"
            :color="resolveLabelColor[text]"
          >
            {{ text }}
          </VChip>
        </div>

        <VSpacer />

        <VMenu>
          <template #activator="{ props: p, isActive }">
            <VIcon
              v-bind="p"
              icon="mdi-dots-vertical"
              class="position-absolute more-options"
              style="inset-block-start: 16px; inset-inline-end: 10px;"
              :style="isActive ? 'visibility:visible' : ''"
              size="20"
              @click.stop
            />
          </template>
          <VList
            :items="moreOptions"
            item-props
          />
        </VMenu>
      </div>

      <!-- Task Img -->
      <VImg
        v-if="item.image && item.image.length"
        :src="item.image"
        class=" mt-4 rounded"
      />
      <!-- Task title -->
      <p class="mt-2 mb-0 text-base text-high-emphasis">
        {{ item.title }}
      </p>

      <!-- footer  -->
      <div class="task-footer d-flex align-center flex-wrap justify-space-between">
        <div
          v-if="item.attachments || item.commentsCount"
          class="d-flex align-center gap-1 mt-2"
        >
          <div v-if="item.attachments">
            <VIcon
              size="18"
              icon="mdi-link-variant"
              class="me-1"
            />
            <span class="me-3">{{ item.attachments }}</span>
          </div>

          <div v-if="item.commentsCount">
            <VIcon
              size="18"
              icon="mdi-chat-outline"
              class="me-1"
            />
            <span>{{ item.commentsCount }}</span>
          </div>
        </div>

        <div
          v-if="item.members && item.members.length"
          class="v-avatar-group mt-2"
        >
          <VAvatar
            v-for="avatar in item.members"
            :key="avatar.name"
            size="28"
          >
            <VImg :src="avatar.img" />
            <VTooltip activator="parent">
              {{ avatar.name }}
            </VTooltip>
          </VAvatar>
        </div>
      </div>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.kanban-card {
  cursor: grab;

  :active {
    cursor: grabbing;
  }

  &[style^="z-index"] {
    cursor: grabbing !important;
  }

  .more-options {
    visibility: hidden;
  }

  &:hover .more-options {
    visibility: visible;
  }
}
</style>
