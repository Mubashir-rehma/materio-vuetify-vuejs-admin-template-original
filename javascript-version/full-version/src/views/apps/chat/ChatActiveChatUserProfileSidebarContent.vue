<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { useChat } from './useChat'
import { useChatStore } from '@/views/apps/chat/useChatStore'
import { avatarText } from '@core/utils/formatters'

const emit = defineEmits(['close'])

const store = useChatStore()
const { resolveAvatarBadgeVariant } = useChat()
</script>

<template>
  <template v-if="store.activeChat">
    <!-- Close Button -->
    <div
      class="pt-2 me-2"
      :class="$vuetify.locale.isRtl ? 'text-left' : 'text-right'"
    >
      <VBtn
        variant="text"
        color="default"
        icon
        size="small"
        @click="$emit('close')"
      >
        <VIcon
          size="24"
          icon="mdi-close"
          class="text-medium-emphasis"
        />
      </VBtn>
    </div>

    <!-- User Avatar + Name + Role -->
    <div class="text-center px-6">
      <VBadge
        location="bottom right"
        offset-x="7"
        offset-y="4"
        bordered
        :color="resolveAvatarBadgeVariant(store.activeChat.contact.status)"
        class="chat-user-profile-badge mb-5"
      >
        <VAvatar
          size="80"
          class="bg-surface"
          variant="tonal"
          :class="`text-${resolveAvatarBadgeVariant(store.activeChat.contact.status)}`"
        >
          <VImg
            v-if="store.activeChat.contact.avatar"
            :src="store.activeChat.contact.avatar"
          />
          <span
            v-else
            class="text-3xl"
          >{{ avatarText(store.activeChat.contact.fullName) }}</span>
        </VAvatar>
      </VBadge>
      <h2 class="mb-1 font-weight-medium text-high-emphasis text-base">
        {{ store.activeChat.contact.fullName }}
      </h2>
      <p class="text-capitalize text-sm text-medium-emphasis">
        {{ store.activeChat.contact.role }}
      </p>
    </div>

    <!-- User Data -->
    <PerfectScrollbar
      class="ps-chat-user-profile-sidebar-content text-medium-emphasis pb-5 px-5"
      :options="{ wheelPropagation: false }"
    >
      <!-- About -->
      <div class="my-8">
        <span
          for="textarea-user-about"
          class="text-sm text-disabled"
        >ABOUT</span>
        <p class="mt-2">
          {{ store.activeChat.contact.about }}
        </p>
      </div>

      <!-- Personal Information -->
      <div class="mb-8">
        <span class="d-block text-sm text-disabled mb-3">PERSONAL INFORMATION</span>
        <div class="d-flex align-center">
          <VIcon
            class="me-2"
            icon="mdi-email-outline"
          />
          <span>lucifer@email.com</span>
        </div>
        <div class="d-flex align-center my-3">
          <VIcon
            class="me-2"
            icon="mdi-phone-outline"
          />
          <span>+1(123) 456 - 7890</span>
        </div>
        <div class="d-flex align-center">
          <VIcon
            class="me-2"
            icon="mdi-clock-outline"
          />
          <span>Mon - Fri 10AM - 8PM</span>
        </div>
      </div>

      <!-- Options -->
      <div>
        <span class="d-block text-sm text-disabled mb-3">OPTIONS</span>
        <div class="d-flex align-center">
          <VIcon
            class="me-2"
            icon="mdi-bookmark-outline"
          />
          <span>Add Tag</span>
        </div>
        <div class="d-flex align-center my-3">
          <VIcon
            class="me-2"
            icon="mdi-star-outline"
          />
          <span>Important Contact</span>
        </div>
        <div class="d-flex align-center mb-3">
          <VIcon
            class="me-2"
            icon="mdi-image-outline"
          />
          <span>Shared Media</span>
        </div>
        <div class="d-flex align-center mb-3">
          <VIcon
            class="me-2"
            icon="mdi-trash-can-outline"
          />
          <span>Delete Contact</span>
        </div>
        <div class="d-flex align-center">
          <VIcon
            class="me-3 ms-1"
            size="16"
            icon="mdi-block-helper"
          />
          <span>Block Contact</span>
        </div>
      </div>
    </PerfectScrollbar>
  </template>
</template>
