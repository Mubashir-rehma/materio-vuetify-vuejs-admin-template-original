<script lang="ts" setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { useDisplay, useTheme } from 'vuetify'
import { themes } from '@/plugins/vuetify/theme'
import ChatActiveChatUserProfileSidebarContent from '@/views/apps/chat/ChatActiveChatUserProfileSidebarContent.vue'
import ChatLeftSidebarContent from '@/views/apps/chat/ChatLeftSidebarContent.vue'
import ChatLog from '@/views/apps/chat/ChatLog.vue'
import ChatUserProfileSidebarContent from '@/views/apps/chat/ChatUserProfileSidebarContent.vue'
import { useChat } from '@/views/apps/chat/useChat'
import { useChatStore } from '@/views/apps/chat/useChatStore'
import type { ChatContact as TypeChatContact } from '@db/apps/chat/types'

definePage({
  meta: {
    layoutWrapperClasses: 'layout-content-height-fixed',
  },
})

// composables
const vuetifyDisplays = useDisplay()
const store = useChatStore()
const { isLeftSidebarOpen } = useResponsiveLeftSidebar(vuetifyDisplays.smAndDown)
const { resolveAvatarBadgeVariant } = useChat()

// Perfect scrollbar
const chatLogPS = ref()

const scrollToBottomInChatLog = () => {
  const scrollEl = chatLogPS.value.$el || chatLogPS.value

  scrollEl.scrollTop = scrollEl.scrollHeight
}

// Search query
const q = ref('')

watch(
  q,
  val => store.fetchChatsAndContacts(val),
  { immediate: true },
)

// Open Sidebar in smAndDown when "start conversation" is clicked
const startConversation = () => {
  if (vuetifyDisplays.mdAndUp.value)
    return
  isLeftSidebarOpen.value = true
}

// Chat message
const msg = ref('')

const sendMessage = async () => {
  if (!msg.value)
    return

  await store.sendMsg(msg.value)

  // Reset message input
  msg.value = ''

  // Scroll to bottom
  nextTick(() => {
    scrollToBottomInChatLog()
  })
}

const openChatOfContact = async (userId: TypeChatContact['id']) => {
  await store.getChat(userId)

  // Reset message input
  msg.value = ''

  // Set unseenMsgs to 0
  const contact = store.chatsContacts.find(c => c.id === userId)
  if (contact)
    contact.chat.unseenMsgs = 0

  // if smAndDown =>  Close Chat & Contacts left sidebar
  if (vuetifyDisplays.smAndDown.value)
    isLeftSidebarOpen.value = false

  // Scroll to bottom
  nextTick(() => {
    scrollToBottomInChatLog()
  })
}

// User profile sidebar
const isUserProfileSidebarOpen = ref(false)

// Active chat user profile sidebar
const isActiveChatUserProfileSidebarOpen = ref(false)

// file input
const refInputEl = ref<HTMLElement>()

const moreList = [
  { title: 'View Contact', value: 'View Contact' },
  { title: 'Mute Notifications', value: 'Mute Notifications' },
  { title: 'Block Contact', value: 'Block Contact' },
  { title: 'Clear Chat', value: 'Clear Chat' },
  { title: 'Report', value: 'Report' },
]

const { name } = useTheme()

const chatContentContainerBg = computed(() => {
  let color = 'transparent'

  if (themes)
    color = themes?.[name.value].colors?.background as string

  return color
})
</script>

<template>
  <VLayout class="chat-app-layout bg-surface">
    <!-- 👉 user profile sidebar -->
    <VNavigationDrawer
      v-model="isUserProfileSidebarOpen"
      temporary
      touchless
      absolute
      class="user-profile-sidebar"
      location="start"
      width="370"
    >
      <ChatUserProfileSidebarContent @close="isUserProfileSidebarOpen = false" />
    </VNavigationDrawer>

    <!-- 👉 Active Chat sidebar -->
    <VNavigationDrawer
      v-model="isActiveChatUserProfileSidebarOpen"
      width="374"
      absolute
      temporary
      location="end"
      touchless
      class="active-chat-user-profile-sidebar"
    >
      <ChatActiveChatUserProfileSidebarContent @close="isActiveChatUserProfileSidebarOpen = false" />
    </VNavigationDrawer>

    <!-- 👉 Left sidebar   -->
    <VNavigationDrawer
      v-model="isLeftSidebarOpen"
      absolute
      touchless
      location="start"
      width="370"
      :temporary="$vuetify.display.smAndDown"
      class="chat-list-sidebar"
      :permanent="$vuetify.display.mdAndUp"
    >
      <ChatLeftSidebarContent
        v-model:isDrawerOpen="isLeftSidebarOpen"
        v-model:search="q"
        @open-chat-of-contact="openChatOfContact"
        @show-user-profile="isUserProfileSidebarOpen = true"
        @close="isLeftSidebarOpen = false"
      />
    </VNavigationDrawer>

    <!-- 👉 Chat content -->
    <VMain class="chat-content-container">
      <!-- 👉 Right content: Active Chat -->
      <div
        v-if="store.activeChat"
        class="d-flex flex-column h-100"
      >
        <!-- 👉 Active chat header -->
        <div class="active-chat-header d-flex align-center text-medium-emphasis">
          <!-- Sidebar toggler -->
          <IconBtn
            class="d-md-none me-3"
            @click="isLeftSidebarOpen = true"
          >
            <VIcon icon="mdi-menu" />
          </IconBtn>

          <!-- avatar -->
          <div
            class="d-flex align-center cursor-pointer"
            @click="isActiveChatUserProfileSidebarOpen = true"
          >
            <VBadge
              dot
              location="bottom right"
              offset-x="3"
              offset-y="3"
              :color="resolveAvatarBadgeVariant(store.activeChat.contact.status)"
              bordered
            >
              <VAvatar
                size="40"
                :variant="!store.activeChat.contact.avatar ? 'tonal' : undefined"
                :color="!store.activeChat.contact.avatar ? resolveAvatarBadgeVariant(store.activeChat.contact.status) : undefined"
                class="cursor-pointer"
              >
                <VImg
                  v-if="store.activeChat.contact.avatar"
                  :src="store.activeChat.contact.avatar"
                  :alt="store.activeChat.contact.fullName"
                />
                <span v-else>{{ avatarText(store.activeChat.contact.fullName) }}</span>
              </VAvatar>
            </VBadge>

            <div class="flex-grow-1 ms-4 overflow-hidden">
              <h6 class="text-base font-weight-regular">
                {{ store.activeChat.contact.fullName }}
              </h6>
              <span class="d-block text-sm text-truncate text-disabled">{{ store.activeChat.contact.role }}</span>
            </div>
          </div>

          <VSpacer />

          <!-- Header right content -->
          <div class="d-sm-flex align-center d-none">
            <IconBtn>
              <VIcon icon="mdi-phone" />
            </IconBtn>
            <IconBtn>
              <VIcon icon="mdi-video-outline" />
            </IconBtn>
            <IconBtn>
              <VIcon icon="mdi-magnify" />
            </IconBtn>
          </div>

          <MoreBtn :menu-list="moreList" />
        </div>

        <VDivider />

        <!-- Chat log -->
        <PerfectScrollbar
          ref="chatLogPS"
          tag="ul"
          :options="{ wheelPropagation: false }"
          class="flex-grow-1"
        >
          <ChatLog />
        </PerfectScrollbar>

        <!-- Message form -->
        <VForm
          class="chat-log-message-form mb-5 mx-5"
          @submit.prevent="sendMessage"
        >
          <VTextarea
            :key="store.activeChat?.contact.id"
            v-model="msg"
            auto-grow
            rows="1"
            max-rows="2"
            variant="solo"
            class="chat-message-input"
            no-resize
            placeholder="Type your message"
            autofocus
            @keyup.enter="sendMessage"
          >
            <template #append-inner>
              <IconBtn>
                <VIcon icon="mdi-microphone-outline" />
              </IconBtn>

              <IconBtn
                class="mx-sm-2 mx-0"
                @click="refInputEl?.click()"
              >
                <VIcon icon="mdi-attachment" />
              </IconBtn>

              <VBtn
                class="d-none d-md-block"
                @click="sendMessage"
              >
                Send
              </VBtn>

              <IconBtn class="d-block d-md-none">
                <VIcon icon="mdi-send" />
              </IconBtn>
            </template>
          </VTextarea>

          <input
            ref="refInputEl"
            type="file"
            name="file"
            accept=".jpeg,.png,.jpg,GIF"
            hidden
          >
        </VForm>
      </div>

      <!-- 👉 Start conversation -->
      <div
        v-else
        class="d-flex h-100 align-center justify-center flex-column"
      >
        <VAvatar
          size="109"
          class="elevation-3 mb-6 bg-surface"
        >
          <VIcon
            size="50"
            class="rounded-0 text-high-emphasis"
            icon="mdi-message-outline"
          />
        </VAvatar>
        <p
          class="mb-0 px-6 py-1 font-weight-medium text-lg elevation-3 rounded-xl text-high-emphasis bg-surface"
          :class="[{ 'cursor-pointer': $vuetify.display.smAndDown }]"
          @click="startConversation"
        >
          Start Conversation
        </p>
      </div>
    </VMain>
  </VLayout>
</template>

<style lang="scss">
@use "@styles/variables/vuetify.scss";
@use "@core/scss/base/mixins.scss";
@use "@layouts/styles/mixins" as layoutsMixins;

// Variables
$chat-app-header-height: 68px;

// Placeholders
%chat-header {
  display: flex;
  align-items: center;
  min-block-size: $chat-app-header-height;
  padding-inline: 1rem;
}

.chat-app-layout {
  border-radius: vuetify.$card-border-radius;

  @include mixins.elevation(vuetify.$card-elevation);

  $sel-chat-app-layout: &;

  @at-root {
    .skin--bordered {
      @include mixins.bordered-skin($sel-chat-app-layout);
    }
  }

  .active-chat-user-profile-sidebar,
  .user-profile-sidebar {
    .v-navigation-drawer__content {
      display: flex;
      flex-direction: column;
    }
  }

  .chat-list-header,
  .active-chat-header {
    @extend %chat-header;
  }

  .chat-list-search {
    .v-field__outline__start {
      flex-basis: 20px !important;
      border-radius: 28px 0 0 28px !important;
    }

    .v-field__outline__end {
      border-radius: 0 28px 28px 0 !important;
    }

    @include layoutsMixins.rtl {
      .v-field__outline__start {
        flex-basis: 20px !important;
        border-radius: 0 28px 28px 0 !important;
      }

      .v-field__outline__end {
        border-radius: 28px 0 0 28px !important;
      }
    }
  }

  .chat-list-sidebar {
    .v-navigation-drawer__content {
      display: flex;
      flex-direction: column;
    }
  }
}

.chat-content-container {
  /* stylelint-disable-next-line value-keyword-case */
  background-color: v-bind(chatContentContainerBg);

  // Adjust the padding so text field height stays 48px
  .chat-message-input {
    .v-field__append-inner {
      align-items: center;
      padding-block-start: 0;
    }

    .v-field--appended {
      padding-inline-end: 6px;
    }
  }
}

.chat-user-profile-badge {
  .v-badge__badge {
    /* stylelint-disable liberty/use-logical-spec */
    min-width: 12px !important;
    height: 0.75rem;
    /* stylelint-enable liberty/use-logical-spec */
  }
}
</style>
