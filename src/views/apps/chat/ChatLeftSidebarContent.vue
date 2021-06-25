<template>
  <div class="chat-left-sidebar h-full">
    <div class="d-flex align-center pa-4">
      <v-badge
        bottom
        overlap
        dot
        bordered
        color="success"
        offset-x="11"
        offset-y="11"
        class="mr-3"
      >
        <v-avatar size="2.375rem">
          <v-img src="/images/avatars/1.png"></v-img>
        </v-avatar>
      </v-badge>
      <v-text-field
        placeholder="search..."
        hide-details
        outlined
        rounded
        dense
        :prepend-inner-icon="icons.mdiMagnify"
      ></v-text-field>
    </div>

    <v-divider></v-divider>

    <perfect-scrollbar
      :options="perfectScrollbarOptions"
      class="ps-chat-left-sidebar py-7 px-3"
    >
      <!-- Chats -->
      <p class="font-weight-medium text-xl primary--text ml-3">
        Chats
      </p>
      <chat-contact
        v-for="contact in chatsContacts"
        :key="`chat-${contact.id}`"
        :user="contact"
        is-chat-contact
        :class="{'gradient-primary active-chat-contact': activeChatContactId === contact.id}"
        @click="$emit('open-chat', contact.id)"
      />

      <!-- Contacts -->
      <p class="font-weight-medium text-xl primary--text mt-7 ml-3">
        Contacts
      </p>
      <chat-contact
        v-for="contact in contacts"
        :key="contact.id"
        :user="contact"
        @click="$emit('open-chat', contact.id)"
      />
    </perfect-scrollbar>
  </div>
</template>

<script>
import { mdiMagnify } from '@mdi/js'
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import ChatContact from './ChatContact.vue'

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
  },
  setup() {
    // Perfect scrollbar options
    const perfectScrollbarOptions = {
      maxScrollbarLength: 60,
      wheelPropagation: false,
    }

    return {
      // Perfect Scrollbar options
      perfectScrollbarOptions,

      // Icons
      icons: {
        mdiMagnify,
      },
    }
  },
}
</script>
