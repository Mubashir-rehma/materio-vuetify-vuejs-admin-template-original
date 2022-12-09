<script lang="ts" setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import type { Anchor } from 'vuetify/lib/components'
import { avatarText } from '@core/utils/formatters'
import type { Notification } from '@layouts/types'

interface Props {
  notifications: Notification[]
  badgeProps?: unknown
  location?: Anchor
}

const props = withDefaults(defineProps<Props>(), {
  location: 'bottom end',
  badgeProps: undefined,
})

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
      size="small"
    >
      <VBadge
        dot
        :model-value="!!props.notifications.length"
        color="error"
        bordered
        offset-x="1"
        offset-y="1"
      >
        <VIcon
          icon="mdi-bell-outline"
          size="24"
        />
      </VBadge>

      <VMenu
        activator="parent"
        width="380px"
        :location="props.location"
        offset="14px"
      >
        <VCard class="d-flex flex-column">
          <!-- 👉 Header -->
          <VCardItem class="notification-section">
            <VCardTitle class="text-base">
              Notifications
            </VCardTitle>

            <template #append>
              <VChip
                v-if="props.notifications.length"
                color="primary"
                size="small"
              >
                {{ props.notifications.length }} New
              </VChip>
            </template>
          </VCardItem>

          <VDivider />

          <!-- 👉 Notifications list -->
          <PerfectScrollbar :options="{ wheelPropagation: false }">
            <VList class="py-0">
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
                    <VListItemAction start>
                      <VAvatar
                        :color="notification.color || 'primary'"
                        :image="notification.img || undefined"
                        :icon="notification.icon || undefined"
                        size="40"
                        variant="tonal"
                      >
                        <span v-if="notification.text">{{ avatarText(notification.text) }}</span>
                      </VAvatar>
                    </VListItemAction>
                  </template>
                  <!-- Slot: Append -->
                  <template #append>
                    <small class="whitespace-no-wrap text-medium-emphasis">{{ notification.time }}</small>
                  </template>
                </VListItem>
                <VDivider />
              </template>
            </VList>
          </PerfectScrollbar>

          <!-- 👉 Footer -->
          <VCardText class="notification-section">
            <VBtn
              block
              @click="$emit('click:readAllNotifications')"
            >
              READ ALL NOTIFICATIONS
            </VBtn>
          </VCardText>
        </VCard>
      </VMenu>
    </VBtn>
  </VBadge>
</template>

<style lang="scss">
.notification-section {
  padding: 14px !important;
}
</style>
