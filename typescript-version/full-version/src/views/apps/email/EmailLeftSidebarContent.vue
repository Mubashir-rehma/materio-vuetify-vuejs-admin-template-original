<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<Props>()

defineEmits<{
  (e: 'toggleComposeDialogVisibility'): void
}>()

interface Props {
  emailsMeta: {
    inbox: number
    draft: number
    spam: number
    star: number
  }
}

interface Folder {
  title: string
  prependIcon: string
  to: any
  badge?: {
    content: string | number
    color: string
  }
}

interface Label {
  title: string
  color: string
  to: any
}

const inboxEmails = ref(0)
const draftEmails = ref(0)
const spamEmails = ref(0)
const starredEmails = ref(0)

watch(() => props.emailsMeta, emailsMeta => {
  if (!emailsMeta)
    return

  inboxEmails.value = emailsMeta.inbox
  draftEmails.value = emailsMeta.draft
  spamEmails.value = emailsMeta.spam
  starredEmails.value = emailsMeta.star
}, { immediate: true, deep: true })

const folders: ComputedRef<Folder[]> = computed(() => [
  {
    title: 'Inbox',
    prependIcon: 'mdi-email-outline',
    to: { name: 'apps-email' },
    badge: { content: inboxEmails.value, color: 'primary' },
  },
  {
    title: 'Sent',
    prependIcon: 'mdi-send-outline',
    to: {
      name: 'apps-email-filter',
      params: { filter: 'sent' },
    },
  },
  {
    title: 'Draft',
    prependIcon: 'mdi-pencil-outline',
    to: {
      name: 'apps-email-filter',
      params: { filter: 'draft' },
    },
    badge: { content: draftEmails.value, color: 'warning' },
  },
  {
    title: 'Starred',
    prependIcon: 'mdi-star-outline',
    to: {
      name: 'apps-email-filter',
      params: { filter: 'starred' },
    },
    badge: { content: starredEmails.value, color: 'success' },
  },
  {
    title: 'Spam',
    prependIcon: 'mdi-information-outline',
    to: {
      name: 'apps-email-filter',
      params: { filter: 'spam' },
    },
    badge: { content: spamEmails.value, color: 'error' },
  },
  {
    title: 'Trash',
    prependIcon: 'mdi-delete-outline',
    to: {
      name: 'apps-email-filter',
      params: { filter: 'trashed' },
    },
  },
])

const labels: Label[] = [
  {
    title: 'Personal',
    color: 'success',
    to: {
      name: 'apps-email-label',
      params: { label: 'personal' },
    },
  },
  {
    title: 'Company',
    color: 'primary',
    to: {
      name: 'apps-email-label',
      params: { label: 'company' },
    },
  },
  {
    title: 'Important',
    color: 'warning',
    to: {
      name: 'apps-email-label',
      params: { label: 'important' },
    },
  },
  {
    title: 'Private',
    color: 'error',
    to: {
      name: 'apps-email-label',
      params: { label: 'private' },
    },
  },
]
</script>

<template>
  <div class="d-flex flex-column h-100">
    <!-- 👉 Compose -->
    <div class="pa-5">
      <VBtn
        block
        @click="$emit('toggleComposeDialogVisibility')"
      >
        Compose
      </VBtn>
    </div>

    <!-- 👉 Folders -->
    <PerfectScrollbar
      :options="{ wheelPropagation: false }"
      class="h-100"
    >
      <ul class="email-filters-labels">
        <RouterLink
          v-for="folder in folders"
          :key="folder.title"
          v-slot="{ isActive, href, navigate }"
          class="d-flex align-center cursor-pointer"
          :to="folder.to"
          custom
        >
          <li
            v-bind="$attrs"
            :href="href"
            :class="isActive && 'email-filter-active text-primary'"
            class="d-flex align-center cursor-pointer"
            @click="navigate"
          >
            <VIcon
              :icon="folder.prependIcon"
              class="me-3"
              size="20"
            />
            <span>{{ folder.title }}</span>

            <VSpacer />

            <VChip
              v-if="folder.badge?.content"
              size="x-small"
              :color="folder.badge.color"
            >
              {{ folder.badge.content }}
            </VChip>
          </li>
        </RouterLink>

        <!-- 👉 Labels -->
        <li class="text-xs d-block text-uppercase text-disabled mt-6">
          LABELS
        </li>
        <RouterLink
          v-for="label in labels"
          :key="label.title"
          v-slot="{ isActive, href, navigate }"
          class="d-flex align-center"
          :to="label.to"
          custom
        >
          <li
            v-bind="$attrs"
            :href="href"
            :class="isActive && 'email-label-active text-primary'"
            class="cursor-pointer"
            @click="navigate"
          >
            <VBadge
              inline
              dot
              :color="label.color"
              class="me-4"
            />
            <span>{{ label.title }}</span>
          </li>
        </RouterLink>
      </ul>
    </PerfectScrollbar>
  </div>
</template>

<style lang="scss">
.email-filters-labels {
  > li {
    position: relative;
    margin-block-end: 4px;
    padding-block: 4px;
    padding-inline: 20px;
  }

  .email-filter-active,
  .email-label-active {
    &::after {
      position: absolute;
      background: currentcolor;
      block-size: 100%;
      content: "";
      inline-size: 3px;
      inset-block-start: 0;
      inset-inline-start: 0;
    }
  }
}
</style>
