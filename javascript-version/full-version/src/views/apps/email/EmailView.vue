<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { useEmail } from '@/views/apps/email/useEmail'

const props = defineProps({
  email: {
    type: null,
    required: true,
  },
  emailMeta: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits([
  'refresh',
  'navigated',
  'close',
  'trash',
  'unread',
  'read',
  'star',
  'unstar',
])

const emailReply = ref('')
const showReplyBox = ref(false)
const showReplyCard = ref(true)
const { updateEmailLabels } = useEmail()
const { labels, resolveLabelColor, emailMoveToFolderActions, shallShowMoveToActionFor, moveSelectedEmailTo } = useEmail()

const handleMoveMailsTo = async action => {
  await moveSelectedEmailTo(action, [props.email.id])
  emit('refresh')
  emit('close')
}

const updateMailLabel = async label => {
  await updateEmailLabels([props.email.id], label)
  emit('refresh')
}
</script>

<template>
  <!-- ℹ️ calc(100% - 256px) => 265px is left sidebar width -->
  <VNavigationDrawer
    temporary
    :model-value="!!props.email"
    location="right"
    :scrim="false"
    floating
    class="email-view"
  >
    <template v-if="props.email">
      <!-- 👉 header -->

      <div class="email-view-header d-flex align-center px-5 py-4">
        <IconBtn
          class="me-2 flip-in-rtl"
          @click="$emit('close'); showReplyBox = false; showReplyCard = true; emailReply = ''"
        >
          <VIcon icon="ri-arrow-left-s-line" />
        </IconBtn>

        <div class="d-flex align-center flex-wrap flex-grow-1 overflow-hidden gap-2">
          <h6 class="text-h6 font-weight-regular text-truncate">
            {{ props.email.subject }}
          </h6>

          <div class="d-flex flex-wrap gap-2">
            <VChip
              v-for="label in props.email.labels"
              :key="label"
              :color="resolveLabelColor(label)"
              size="small"
              class="text-capitalize flex-shrink-0"
            >
              {{ label }}
            </VChip>
          </div>
        </div>

        <div class="d-flex align-center gap-2">
          <IconBtn
            variant="plain"
            :disabled="!props.emailMeta.hasPreviousEmail"
            class="flip-in-rtl"
            @click="$emit('navigated', 'previous')"
          >
            <VIcon icon="ri-arrow-left-s-line" />
          </IconBtn>
          <IconBtn
            variant="plain"
            class="flip-in-rtl"
            :disabled="!props.emailMeta.hasNextEmail"
            @click="$emit('navigated', 'next')"
          >
            <VIcon icon="ri-arrow-right-s-line" />
          </IconBtn>
        </div>
      </div>

      <VDivider />

      <!-- 👉 Action bar -->
      <div class="email-view-action-bar d-flex align-center text-medium-emphasis gap-1 px-5">
        <!-- Trash -->
        <IconBtn
          v-show="!props.email.isDeleted"
          @click="$emit('trash'); $emit('close')"
        >
          <VIcon icon="ri-delete-bin-7-line" />
          <VTooltip
            activator="parent"
            location="top"
          >
            Delete Mail
          </VTooltip>
        </IconBtn>

        <!-- Read/Unread -->
        <IconBtn @click.stop="$emit('unread'); $emit('close')">
          <VIcon icon="ri-mail-line" />
          <VTooltip
            activator="parent"
            location="top"
          >
            Mark as Unread
          </VTooltip>
        </IconBtn>

        <!-- Move to folder -->
        <IconBtn>
          <VIcon icon="ri-folder-line" />
          <VTooltip
            activator="parent"
            location="top"
          >
            Move to
          </VTooltip>

          <VMenu activator="parent">
            <VList density="compact">
              <template
                v-for="moveTo in emailMoveToFolderActions"
                :key="moveTo.title"
              >
                <VListItem
                  :class="shallShowMoveToActionFor(moveTo.action) ? 'd-flex' : 'd-none'"
                  class="align-center"
                  href="#"
                  @click="handleMoveMailsTo(moveTo.action)"
                >
                  <template #prepend>
                    <VIcon
                      :icon="moveTo.icon"
                      class="me-2"
                      size="20"
                    />
                  </template>
                  <VListItemTitle class="text-capitalize">
                    {{ moveTo.action }}
                  </VListItemTitle>
                </VListItem>
              </template>
            </VList>
          </VMenu>
        </IconBtn>

        <!-- Update labels -->
        <IconBtn>
          <VIcon icon="ri-price-tag-3-line" />
          <VTooltip
            activator="parent"
            location="top"
          >
            Label
          </VTooltip>

          <VMenu activator="parent">
            <VList density="compact">
              <VListItem
                v-for="label in labels"
                :key="label.title"
                href="#"
                @click.stop="updateMailLabel(label.title)"
              >
                <template #prepend>
                  <VBadge
                    inline
                    :color="resolveLabelColor(label.title)"
                    dot
                  />
                </template>
                <VListItemTitle class="ms-2 text-capitalize">
                  {{ label.title }}
                </VListItemTitle>
              </VListItem>
            </VList>
          </VMenu>
        </IconBtn>

        <VSpacer />

        <div class="d-flex align-center gap-x-1">
          <!-- Star/Unstar -->
          <IconBtn
            :color="props.email.isStarred ? 'warning' : 'default'"
            @click="props.email?.isStarred ? $emit('unstar') : $emit('star'); $emit('refresh')"
          >
            <VIcon
              :color="props.email.isStarred ? 'warning' : '' "
              icon="ri-star-line"
            />
          </IconBtn>
          <MoreBtn />
        </div>
      </div>

      <VDivider />

      <!-- 👉 Mail Content -->
      <PerfectScrollbar
        tag="div"
        class="mail-content-container flex-grow-1 pa-sm-12 pa-6"
        :options="{ wheelPropagation: false }"
      >
        <VCard class="mb-4">
          <VCardText class="mail-header">
            <div class="d-flex align-start">
              <VAvatar
                size="38"
                class="me-3"
              >
                <VImg
                  :src="props.email.from.avatar"
                  :alt="props.email.from.name"
                />
              </VAvatar>

              <div class="d-flex flex-wrap flex-grow-1 overflow-hidden">
                <div class="text-truncate">
                  <h6 class="text-h6 font-weight-regular text-truncate">
                    {{ props.email.from.name }}
                  </h6>
                  <p class="text-body-2 mb-0">
                    {{ props.email.from.email }}
                  </p>
                </div>

                <VSpacer />

                <div class="d-flex align-center">
                  <span class="text-disabled me-4">{{ formatDate(props.email.time) }}</span>
                  <IconBtn v-show="props.email.attachments.length">
                    <VIcon icon="ri-attachment-2" />
                  </IconBtn>
                </div>
              </div>
              <MoreBtn class="align-self-sm-center" />
            </div>
          </VCardText>

          <VDivider />

          <VCardText>
            <!-- eslint-disable vue/no-v-html -->
            <div class="text-body-1 font-weight-medium text-truncate mb-4">
              {{ props.email.from.name }},
            </div>
            <div
              class="text-base"
              v-html="props.email.message"
            />
            <!-- eslint-enable -->
          </VCardText>

          <template v-if="props.email.attachments.length">
            <VDivider />

            <VCardText class="d-flex flex-column gap-y-4 pt-4">
              <span>2 Attachments</span>
              <div
                v-for="attachment in props.email.attachments"
                :key="attachment.fileName"
                class="d-flex align-center"
              >
                <VImg
                  :src="attachment.thumbnail"
                  :alt="attachment.fileName"
                  aspect-ratio="1"
                  max-height="24"
                  max-width="24"
                  class="me-2"
                />
                <span>{{ attachment.fileName }}</span>
              </div>
            </VCardText>
          </template>
        </VCard>

        <!-- Reply or Forward -->
        <VCard v-show="showReplyCard">
          <VCardText class="font-weight-medium text-high-emphasis">
            <div class="text-base">
              Click here to <span
                class="text-primary cursor-pointer"
                @click="showReplyBox = !showReplyBox; showReplyCard = !showReplyCard"
              >
                Reply
              </span> or <span class="text-primary cursor-pointer">
                Forward
              </span>
            </div>
          </VCardText>
        </VCard>

        <VCard v-if="showReplyBox">
          <VCardText>
            <h6 class="text-body-1 text-high-emphasis mb-4">
              Reply to {{ email?.from.name }}
            </h6>
            <TiptapEditor
              v-model="emailReply"
              placeholder="Write your message..."
              :is-divider="false"
            />
            <div class="d-flex justify-end gap-4 pt-2 flex-wrap">
              <IconBtn
                icon="ri-delete-bin-7-line"
                @click="showReplyBox = !showReplyBox; showReplyCard = !showReplyCard; emailReply = ''"
              />
              <VBtn
                variant="text"
                color="secondary"
              >
                <template #prepend>
                  <VIcon
                    icon="ri-attachment-2"
                    class="text-high-emphasis"
                  />
                </template>
                Attachments
              </VBtn>
              <VBtn append-icon="ri-send-plane-line">
                Send
              </VBtn>
            </div>
          </VCardText>
        </VCard>
      </PerfectScrollbar>
    </template>
  </VNavigationDrawer>
</template>

<style lang="scss">
.email-view {
  &:not(.v-navigation-drawer--active) {
    transform: translateX(110%) !important;
  }

  inline-size: 100% !important;

  @media only screen and (min-width: 1280px) {
    inline-size: calc(100% - 256px) !important;
  }

  .editor {
    padding-block-start: 0 !important;
    padding-inline: 0 !important;
  }

  .v-navigation-drawer__content {
    display: flex;
    flex-direction: column;
  }

  .ProseMirror {
    block-size: 100px;
    overflow-y: auto;

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

    ul,
    ol {
      padding-inline: 1.125rem;
    }
  }

  .is-active {
    border-color: rgba(var(--v-theme-primary), var(--v-border-opacity)) !important;
    background-color: rgba(var(--v-theme-primary), var(--v-activated-opacity));
    color: rgb(var(--v-theme-primary));
  }

  .ProseMirror-focused {
    outline: none !important;
  }
}

.email-view-action-bar {
  min-block-size: 54px;
}

.mail-content-container {
  background-color: rgb(var(--v-theme-on-background), var(--v-hover-opacity));

  .mail-header {
    min-block-size: 84px;
  }

  .v-card {
    border: 1px solid rgba(var(--v-theme-on-surface), var(--v-border-opacity));
  }
}
</style>
