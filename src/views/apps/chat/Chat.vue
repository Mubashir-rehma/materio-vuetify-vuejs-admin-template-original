<template>
  <v-card class="h-full position-relative overflow-hidden text-sm app-chat">
    <!-- Navigation Drawer: Left Sidebar -->
    <v-navigation-drawer
      v-model="isLeftSidebarOpen"
      width="374"
      mobile-breakpoint="sm"
      absolute
    >
      <chat-left-sidebar-content
        :chats-contacts="chatsContacts"
        :contacts="contacts"
        :active-chat-contact-id="activeChat.contact ? activeChat.contact.id : null"
        :profile-user-minimal-data="profileUserDataMinimal"
        @close-left-sidebar="isLeftSidebarOpen = false"
        @open-chat="openChatOfContact"
        @open-chat-user-profile-sidebar-content="isUserProfileSidebarOpen = true"
      ></chat-left-sidebar-content>
    </v-navigation-drawer>

    <!-- Navigation Drawer: User Profile -->
    <v-navigation-drawer
      v-model="isUserProfileSidebarOpen"
      width="374"
      absolute
      temporary
    >
      <chat-user-profile-sidebar-content
        :profile-user-data="profileUserData"
        @close-user-profile-sidebar="isUserProfileSidebarOpen = false"
      ></chat-user-profile-sidebar-content>
    </v-navigation-drawer>

    <!-- Navigation Drawer: Active Chat -->
    <v-navigation-drawer
      v-model="isActiveChatUserProfileSidebarOpen"
      width="374"
      absolute
      temporary
      right
    >
      <chat-active-chat-user-profile-sidebar-content
        v-if="activeChat.contact"
        :profile-user-data="activeChat.contact"
        @close-active-chat-user-profile-sidebar="isActiveChatUserProfileSidebarOpen = false"
      ></chat-active-chat-user-profile-sidebar-content>
    </v-navigation-drawer>
    <div
      class="chat-content-area h-full d-flex flex-column"
      :style="contentStyles"
    >
      <!-- Active Chat -->
      <div
        v-if="activeChat.contact"
        class="h-full"
      >
        <!-- Navbar -->
        <div class="d-flex align-center justify-space-between px-5 py-4">
          <!-- Sidebar Toggler, Avatar & Name -->
          <div class="d-flex align-center">
            <v-icon
              v-show="!isLeftSidebarOpen"
              @click="isLeftSidebarOpen = true"
            >
              {{ icons.mdiMenu }}
            </v-icon>
            <v-badge
              bottom
              overlap
              dot
              bordered
              :color="resolveAvatarBadgeVariant(activeChat.contact.status)"
              offset-x="11"
              offset-y="11"
              class="mr-3 user-status-badge"
            >
              <v-avatar
                size="38"
                class="cursor-pointer"
                @click="isActiveChatUserProfileSidebarOpen = true"
              >
                <v-img :src="activeChat.contact.avatar"></v-img>
              </v-avatar>
            </v-badge>
            <p class="mb-0 text--primary font-weight-medium">
              {{ activeChat.contact.fullName }}
            </p>
          </div>

          <!-- Active Chat Actions -->
          <div>
            <v-icon class="mr-2 cursor-pointer">
              {{ icons.mdiPhone }}
            </v-icon>
            <v-icon class="mr-2 cursor-pointer">
              {{ icons.mdiVideoOutline }}
            </v-icon>
            <v-icon class="mr-2 cursor-pointer">
              {{ icons.mdiMagnify }}
            </v-icon>
            <v-icon class="cursor-pointer">
              {{ icons.mdiDotsVertical }}
            </v-icon>
          </div>
        </div>

        <v-divider></v-divider>

        <perfect-scrollbar
          :options="perfectScrollbarOptions"
          class="ps-chat-log h-full"
        >
          <h1>Chat Log</h1>
        </perfect-scrollbar>

        <v-text-field
          placeholder="Type your message"
          solo
          class="pa-5 flex-grow-0"
          hide-details
          height="50"
          background-color="white"
        >
          <template #append>
            <v-icon>{{ icons.mdiMicrophone }}</v-icon>
            <v-icon class="ml-2 mr-3">
              {{ icons.mdiAttachment }}
            </v-icon>
            <v-btn
              color="primary"
              elevation="0"
            >
              Send
            </v-btn>
          </template>
        </v-text-field>
      </div>

      <!-- Start Conversation -->
      <div
        v-else
        class="d-flex align-center justify-center flex-grow-1 flex-column"
      >
        <v-avatar
          size="109"
          class="elevation-3 mb-6 white"
        >
          <v-icon
            size="50"
            class="rounded-0 text--primary"
          >
            {{ icons.mdiMessageTextOutline }}
          </v-icon>
        </v-avatar>
        <p
          class="mb-0 px-6 py-1 font-weight-medium text-lg elevation-3 rounded-xl text--primary white"
          :class="[{ 'cursor-pointer': $vuetify.breakpoint.smAndDown }]"
          @click="startConversation"
        >
          Start Conversation
        </p>
      </div>
    </div>
  </v-card>
</template>

<script>
import { useResponsiveLeftSidebar } from '@core/comp-functions/ui'
// eslint-disable-next-line object-curly-newline
import {
  mdiMenu,
  mdiMessageTextOutline,
  mdiPhone,
  mdiVideoOutline,
  mdiMagnify,
  mdiDotsVertical,
  mdiAttachment,
  mdiMicrophone,
} from '@mdi/js'
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'

import { ref, onUnmounted, nextTick } from '@vue/composition-api'
import { until, invoke } from '@vueuse/core'
import { getVuetify } from '@core/utils'
import store from '@/store'
import ChatLeftSidebarContent from './ChatLeftSidebarContent.vue'
import ChatUserProfileSidebarContent from './ChatUserProfileSidebarContent.vue'
import ChatActiveChatUserProfileSidebarContent from './ChatActiveChatUserProfileSidebarContent.vue'
import chatStoreModule from './chatStoreModule'
import useChat from './useChat'

export default {
  components: {
    ChatLeftSidebarContent,
    ChatUserProfileSidebarContent,
    ChatActiveChatUserProfileSidebarContent,
    PerfectScrollbar,
  },
  setup() {
    const { resolveAvatarBadgeVariant } = useChat()
    const $vuetify = getVuetify()

    const { isLeftSidebarOpen, contentStyles } = useResponsiveLeftSidebar({ sidebarWidth: 374 })

    // * Store module Registration
    const CHAT_APP_STORE_MODULE_NAME = 'app-chat'

    // Register module
    if (!store.hasModule(CHAT_APP_STORE_MODULE_NAME)) store.registerModule(CHAT_APP_STORE_MODULE_NAME, chatStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(CHAT_APP_STORE_MODULE_NAME)) store.unregisterModule(CHAT_APP_STORE_MODULE_NAME)
    })

    // Scroll to Bottom ChatLog
    const refChatLogPS = ref(null)
    const scrollToBottomInChatLog = () => {
      const scrollEl = refChatLogPS.value.$el || refChatLogPS.value
      scrollEl.scrollTop = scrollEl.scrollHeight
    }

    // ————————————————————————————————————
    //* ——— User Profile Sidebar
    // ————————————————————————————————————
    // ? Will contain all details of profile user (e.g. settings, about etc.)
    const profileUserData = ref({})

    // ? Will contain id, name and avatar & status
    const profileUserDataMinimal = ref({})

    const isUserProfileSidebarOpen = ref(false)

    // * One time watch for fetching user profile sidebar data
    invoke(async () => {
      await until(isUserProfileSidebarOpen).toBe(true)

      store.dispatch('app-chat/getProfileUser').then(response => {
        profileUserData.value = response.data
      })
    })

    // ————————————————————————————————————
    //* ——— Chats & Contacts
    // ————————————————————————————————————
    const chatsContacts = ref([])
    const contacts = ref([])

    const fetchChatAndContacts = () => {
      store.dispatch('app-chat/fetchChatsAndContacts').then(response => {
        chatsContacts.value = response.data.chatsContacts
        contacts.value = response.data.contacts
        profileUserDataMinimal.value = response.data.profileUser
      })
    }

    fetchChatAndContacts()

    // ————————————————————————————————————
    //* ——— Single Chat
    // ————————————————————————————————————

    const activeChat = ref({})
    const chatInputMessage = ref('')
    const openChatOfContact = userId => {
      // Reset send message input value
      chatInputMessage.value = ''

      store.dispatch('app-chat/getChat', { userId }).then(response => {
        activeChat.value = response.data

        // Set unseenMsgs to 0
        const contact = chatsContacts.value.find(c => c.id === userId)
        if (contact) contact.chat.unseenMsgs = 0

        // Scroll to bottom
        // ! Enable It
        // nextTick(() => { scrollToBottomInChatLog() })
      })

      // if smAndDown =>  Close Chat & Contacts left sidebar
      if ($vuetify.breakpoint.smAndDown) isLeftSidebarOpen.value = false
    }

    const sendMessage = () => {
      if (!chatInputMessage.value) return
      const payload = {
        contactId: activeChat.value.contact.id,
        // eslint-disable-next-line no-use-before-define
        senderId: profileUserDataMinimal.value.id,
        message: chatInputMessage.value,
      }
      store.dispatch('app-chat/sendMessage', payload).then(response => {
        const { newMessageData, chat } = response.data

        // ? If it's not undefined => New chat is created (Contact is not in list of chats)
        if (chat !== undefined) {
          activeChat.value = { chat, contact: activeChat.value.contact }
          chatsContacts.value.push({
            ...activeChat.value.contact,
            chat: {
              id: chat.id,
              lastMessage: newMessageData,
              unseenMsgs: 0,
            },
          })
        } else {
          // Add message to log
          activeChat.value.chat.chat.push(newMessageData)
        }

        // Reset send message input value
        chatInputMessage.value = ''

        // Set Last Message for active contact
        const contact = chatsContacts.value.find(c => c.id === activeChat.value.contact.id)
        contact.chat.lastMessage = newMessageData

        // Scroll to bottom
        nextTick(() => {
          scrollToBottomInChatLog()
        })
      })
    }

    // ————————————————————————————————————
    //* ——— Active Chat
    // ————————————————————————————————————

    const isActiveChatUserProfileSidebarOpen = ref(false)

    // Open Sidebar in smAndDown when "start conversation" is clicked
    const startConversation = () => {
      if ($vuetify.breakpoint.mdAndUp) return
      isLeftSidebarOpen.value = true
    }

    // Perfect scrollbar options
    const perfectScrollbarOptions = {
      maxScrollbarLength: 60,
      wheelPropagation: false,
    }

    return {
      // useChat
      resolveAvatarBadgeVariant,

      // Layout
      isLeftSidebarOpen,
      contentStyles,

      // Templare ref
      refChatLogPS,

      // User Profile Sidebar
      profileUserDataMinimal,
      profileUserData,
      isUserProfileSidebarOpen,

      // Chat & Contacts
      chatsContacts,
      contacts,

      // Single Chat
      activeChat,
      chatInputMessage,
      openChatOfContact,
      sendMessage,

      // Active Chat
      isActiveChatUserProfileSidebarOpen,

      // startConversation
      startConversation,

      // Perfect Scrollbar
      perfectScrollbarOptions,

      icons: {
        mdiMenu,
        mdiMessageTextOutline,
        mdiPhone,
        mdiVideoOutline,
        mdiMagnify,
        mdiDotsVertical,
        mdiAttachment,
        mdiMicrophone,
      },
    }
  },
}
</script>

<style lang="scss">
@import '~@core/preset/preset/apps/chat.scss';
</style>
