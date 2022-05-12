<script lang="ts" setup>
import { avatarText } from '@core/utils/formatters'
import type { Notification } from '@layouts/types'
interface Props {
  notificationsCount: number
  notifications: Notification[]
  badgeProps?: any
}
const props = defineProps<Props>()
</script>

<template>
  <v-badge
    :model-value="!!props.badgeProps"
    v-bind="props.badgeProps"
  >
    <v-btn
      icon
      variant="text"
      color="default"
    >
      <!-- TODO: Check why we can't use `icon` prop here for btn -->
      <v-icon icon="mdi-bell-outline" />
      <v-menu
        activator="parent"
        width="380px"
      >
        <v-list class="py-0">
          <!-- 👉 Header -->
          <v-list-item
            title="Notifications"
            class="notification-section"
          >
            <template #append>
              <v-chip
                color="primary"
                size="small"
              >
                {{ props.notificationsCount }} New
              </v-chip>
            </template>
          </v-list-item>
          <v-divider />
          <!-- 👉 Notifications list -->
          <v-list-item
            v-for="notification in props.notifications"
            :key="notification.title"
            :title="notification.title"
            :subtitle="notification.subtitle"
          >
            <!-- Slot: Prepend -->
            <!-- Handles Avatar: Image, Icon, Text -->
            <template #prepend>
              <v-list-item-avatar start>
                <v-avatar
                  :color="notification.color || 'primary'"
                  :image="notification.img || null"
                  :icon="notification.icon || null"
                >
                  <span v-if="notification.text">{{ avatarText(notification.text) }}</span>
                </v-avatar>
              </v-list-item-avatar>
            </template>
            <!-- Slot: Append -->
            <template #append>
              <small class="whitespace-no-wrap text-medium-emphasis">{{ notification.time }}</small>
            </template>
          </v-list-item>
          <v-divider />
          <!-- 👉 Footer -->
          <v-list-item class="notification-section">
            <v-btn block="">
              READ ALL NOTIFICATIONS
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>
  </v-badge>
</template>

<style lang="scss">
.notification-section {
  padding: 14px !important;
}
</style>
