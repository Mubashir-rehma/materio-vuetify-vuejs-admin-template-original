<script lang="ts" setup>
import { avatarText } from '@core/utils/formatters'
import type { Notification } from '@layouts/types'
interface Props {
  notifications: Notification[]
  badgeProps?: unknown
}
const props = defineProps<Props>()

defineEmits<{
  (e: 'click:readAllNotifications'): void
}>()
</script>

<template>
  <VBadge
    :model-value="!!props.badgeProps"
    v-bind="props.badgeProps"
  >
    <VBtn
      icon
      variant="text"
      color="default"
    >
      <VBadge
        :content="props.notifications.length"
        :model-value="!!props.notifications.length"
        color="error"
      >
        <VIcon icon="mdi-bell-outline" />
      </VBadge>
      <VMenu
        activator="parent"
        width="380px"
      >
        <VList
          class="py-0"
        >
          <!-- 👉 Header -->
          <VListItem
            title="Notifications"
            class="notification-section"
            height="48px"
          >
            <template #append>
              <VChip
                v-if="props.notifications.length"
                color="primary"
                size="small"
              >
                {{ props.notifications.length }} New
              </VChip>
            </template>
          </VListItem>

          <VDivider />

          <!-- 👉 Notifications list -->
          <template
            v-for="notification in props.notifications"
            :key="notification.title"
          >
            <VListItem

              :title="notification.title"
              :subtitle="notification.subtitle"
              link
              lines="one"
              min-height="66px"
            >
              <!-- Slot: Prepend -->
              <!-- Handles Avatar: Image, Icon, Text -->
              <template #prepend>
                <VListItemAvatar start>
                  <VAvatar
                    :color="notification.color || 'primary'"
                    :image="notification.img || null"
                    :icon="notification.icon || null"
                  >
                    <span v-if="notification.text">{{ avatarText(notification.text) }}</span>
                  </VAvatar>
                </VListItemAvatar>
              </template>
              <!-- Slot: Append -->
              <template #append>
                <small class="whitespace-no-wrap text-medium-emphasis">{{ notification.time }}</small>
              </template>
            </VListItem>
            <VDivider />
          </template>

          <!-- 👉 Footer -->
          <VListItem class="notification-section">
            <VBtn
              block
              @click="$emit('click:readAllNotifications')"
            >
              READ ALL NOTIFICATIONS
            </VBtn>
          </VListItem>
        </VList>
      </VMenu>
    </VBtn>
  </VBadge>
</template>

<style lang="scss">
.notification-section {
  padding: 14px !important;
}
</style>
