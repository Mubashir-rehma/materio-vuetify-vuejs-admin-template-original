<script lang="ts" setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { useChat } from './useChat'
import { useChatStore } from '@/views/apps/chat/useChatStore'
import { avatarText } from '@core/utils/formatters'

defineEmits<{
  (e: 'close'): void
}>()

// composables
const store = useChatStore()
const { resolveAvatarBadgeVariant } = useChat()

const userStatusRadioOptions = [
  { title: 'Online', value: 'online', color: 'success' },
  { title: 'Away', value: 'away', color: 'warning' },
  { title: 'Do not disturb', value: 'busy', color: 'error' },
  { title: 'Offline', value: 'offline', color: 'secondary' },
]
</script>

<template>
  <template v-if="store.profileUser">
    <!-- Close Button -->
    <div class="pt-2 me-2 text-end">
      <IconBtn @click="$emit('close')">
        <VIcon
          class="text-medium-emphasis"
          icon="mdi-close"
        />
      </IconBtn>
    </div>

    <!-- User Avatar + Name + Role -->
    <div class="text-center px-6">
      <VBadge
        location="bottom right"
        offset-x="7"
        offset-y="4"
        bordered
        :color="resolveAvatarBadgeVariant(store.profileUser.status)"
        class="chat-user-profile-badge mb-5"
      >
        <VAvatar
          size="84"
          :variant="!store.profileUser.avatar ? 'tonal' : undefined"
          :color="!store.profileUser.avatar ? resolveAvatarBadgeVariant(store.profileUser.status) : undefined"
        >
          <VImg
            v-if="store.profileUser.avatar"
            :src="store.profileUser.avatar"
          />
          <span
            v-else
            class="text-3xl"
          >{{ avatarText(store.profileUser.fullName) }}</span>
        </VAvatar>
      </VBadge>
      <h2 class="mb-1 text-high-emphasis font-weight-medium text-base">
        {{ store.profileUser.fullName }}
      </h2>
      <p class="text-capitalize text-medium-emphasis text-sm">
        {{ store.profileUser.role }}
      </p>
    </div>

    <!-- User Data -->
    <PerfectScrollbar
      class="ps-chat-user-profile-sidebar-content pb-5 px-5"
      :options="{ wheelPropagation: false }"
    >
      <!-- About -->
      <div class="my-6 text-medium-emphasis">
        <span
          for="textarea-user-about"
          class="text-sm text-disabled mb-1"
        >ABOUT</span>
        <VTextarea
          id="textarea-user-about"
          v-model="store.profileUser.about"
          auto-grow
          class="mt-1"
          rows="3"
        />
      </div>

      <!-- Status -->
      <div class="mb-6">
        <span class="text-sm text-disabled">STATUS</span>
        <VRadioGroup
          v-model="store.profileUser.status"
          class="mt-1"
        >
          <VRadio
            v-for="radioOption in userStatusRadioOptions"
            :key="radioOption.title"
            :label="radioOption.title"
            :value="radioOption.value"
            :color="radioOption.color"
          />
        </VRadioGroup>
      </div>

      <!-- Settings -->
      <div class="text-medium-emphasis">
        <span class="text-sm text-disabled">SETTINGS</span>
        <div class="d-flex align-center my-3">
          <VIcon
            class="me-3"
            icon="mdi-check-circle-outline"
          />
          <span class="text-sm">Two-step Verification</span>
        </div>
        <div class="d-flex align-center mb-3">
          <VIcon
            class="me-3"
            icon="mdi-bell-outline"
          />
          <span class="text-sm">Notification</span>
        </div>
        <div class="d-flex align-center mb-3">
          <VIcon
            class="me-3"
            icon="mdi-account-outline"
          />
          <span class="text-sm">Invite Friends</span>
        </div>
        <div class="d-flex align-center">
          <VIcon
            class="me-3"
            icon="mdi-trash-can-outline"
          />
          <span class="text-sm">Delete Account</span>
        </div>
      </div>

      <!-- Logout Button -->
      <VBtn
        color="primary"
        class="mt-6"
      >
        Logout
      </VBtn>
    </PerfectScrollbar>
  </template>
</template>
