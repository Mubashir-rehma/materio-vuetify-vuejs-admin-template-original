<template>
  <div class="chat-left-sidebar h-full">
    <div class="d-flex align-center pa-4">
      <v-badge
        bottom
        overlap
        dot
        bordered
        :color="resolveAvatarBadgeVariant(profileUserMinimalData.status)"
        offset-x="11"
        offset-y="11"
        class="me-3 user-status-badge"
      >
        <v-avatar
          size="2.375rem"
          class="cursor-pointer"
          @click="$emit('open-chat-user-profile-sidebar-content', true); $vuetify.breakpoint.smAndDown && $emit('close-left-sidebar')"
        >
          <v-img :src="profileUserMinimalData.avatar"></v-img>
        </v-avatar>
      </v-badge>
      <v-text-field
        v-model="searchQuery"
        placeholder="search..."
        hide-details
        outlined
        rounded
        dense
        :prepend-inner-icon="icons.mdiMagnify"
      ></v-text-field>
      <v-icon
        class="d-inline-flex d-md-none ms-1"
        @click="$emit('close-left-sidebar')"
      >
        {{ icons.mdiClose }}
      </v-icon>
    </div>

    <v-divider></v-divider>

    <perfect-scrollbar
      :options="perfectScrollbarOptions"
      class="ps-chat-left-sidebar pt-7 pb-3 px-3"
    >
      <!-- Chats -->
      <p class="font-weight-medium text-xl primary--text ms-3">
        Chats
      </p>
      <chat-contact
        v-for="contact in filteredChatsContacts"
        :key="`chat-${contact.id}`"
        :user="contact"
        is-chat-contact
        :class="{'bg-gradient-primary active-chat-contact': activeChatContactId === contact.id}"
        @click="$emit('open-chat', contact.id)"
      />

      <!-- Contacts -->
      <p class="font-weight-medium text-xl primary--text mt-7 ms-3">
        Contacts
      </p>
      <chat-contact
        v-for="contact in filteredContacts"
        :key="contact.id"
        :user="contact"
        @click="$emit('open-chat', contact.id)"
      />
    </perfect-scrollbar>
  </div>
</template>

<script>
import { mdiMagnify, mdiClose } from '@mdi/js'
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import { ref, computed } from '@vue/composition-api'
import ChatContact from './ChatContact.vue'
import useChat from './useChat'

export default {
  components: {
    PerfectScrollbar,
    ChatContact,
  },
  props: {
    chatsContacts: {
      type: Array,
      required: true,
    },
    contacts: {
      type: Array,
      required: true,
    },
    activeChatContactId: {
      type: Number,
      default: null,
    },
    profileUserMinimalData: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { resolveAvatarBadgeVariant } = useChat()

    // Search Query
    const searchQuery = ref('')

    const searchFilterFunction = contact => contact.fullName.toLowerCase().includes(searchQuery.value.toLowerCase())
    const filteredChatsContacts = computed(() => props.chatsContacts.filter(searchFilterFunction))
    const filteredContacts = computed(() => props.contacts.filter(searchFilterFunction))

    // Perfect scrollbar options
    const perfectScrollbarOptions = {
      maxScrollbarLength: 60,
      wheelPropagation: false,
      wheelSpeed: 0.7,
    }

    return {
      // Use Chat
      resolveAvatarBadgeVariant,

      // Search
      searchQuery,
      filteredChatsContacts,
      filteredContacts,

      // Perfect Scrollbar options
      perfectScrollbarOptions,

      // Icons
      icons: {
        mdiMagnify,
        mdiClose,
      },
    }
  },
}
</script>
