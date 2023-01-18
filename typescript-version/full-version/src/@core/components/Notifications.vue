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

const isAllMarkRead = ref(false)
const readNotifications = ref<number[]>([])
const notificationsLocal = ref(structuredClone(toRaw(props.notifications)))

watch(props, () => {
  notificationsLocal.value = structuredClone(toRaw(props.notifications))
})

const removeNotification = (notificationID: number) => {
  notificationsLocal.value.splice(notificationID, 1)
}

const addRemoveImportant = (index: number) => {
  console.log(readNotifications.value)

  if (readNotifications.value.includes(index)) {
    const i = readNotifications.value.indexOf(index)

    readNotifications.value.splice(i, 1)
  }
  else { readNotifications.value.push(index) }
}
</script>

<template>
  <VBadge
    :model-value="!!props.badgeProps"
    v-bind="props.badgeProps"
  >
    <IconBtn>
      <VBadge
        dot
        :model-value="!!notificationsLocal.length"
        color="error"
        bordered
        offset-x="1"
        offset-y="1"
      >
        <VIcon icon="mdi-bell-outline" />
      </VBadge>

      <VMenu
        activator="parent"
        width="380px"
        :location="props.location"
        offset="14px"
        :close-on-content-click="false"
      >
        <VCard class="d-flex flex-column">
          <!-- 👉 Header -->
          <VCardItem class="notification-section">
            <VCardTitle class="text-lg">
              Notifications
            </VCardTitle>

            <template #append>
              <IconBtn @click="isAllMarkRead = !isAllMarkRead">
                <VIcon :icon="isAllMarkRead ? 'mdi-email-outline' : 'mdi-email-open-outline'" />

                <VTooltip
                  activator="parent"
                  location="start"
                >
                  Mark all as read
                </VTooltip>
              </IconBtn>
            </template>
          </VCardItem>

          <VDivider />

          <!-- 👉 Notifications list -->
          <PerfectScrollbar :options="{ wheelPropagation: false }">
            <VList class="py-0">
              <template
                v-for="(notification, index) in notificationsLocal"
                :key="notification.title"
              >
                <VListItem
                  link
                  lines="one"
                  min-height="66px"
                  class="list-item-hover-class"
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

                  <VListItemTitle>{{ notification.title }}</VListItemTitle>
                  <VListItemSubtitle>{{ notification.subtitle }}</VListItemSubtitle>
                  <span class="text-xs text-disabled">{{ notification.time }}</span>

                  <!-- Slot: Append -->
                  <template #append>
                    <div class="d-flex flex-column align-center gap-4">
                      <VBadge
                        dot
                        :color="readNotifications.includes(index) ? 'primary' : '#a8aaae'"
                        class="ms-1"
                        @click="addRemoveImportant(index)"
                      />
                      <IconBtn
                        size="x-small"
                        @click="removeNotification(index)"
                      >
                        <VIcon
                          size="20"
                          icon="mdi-close"
                        />
                      </IconBtn>
                    </div>
                  </template>
                </VListItem>
                <VDivider />
              </template>
            </VList>
          </PerfectScrollbar>

          <!-- 👉 Footer -->
          <VCardActions class="notification-footer">
            <VBtn
              block
              @click="$emit('click:readAllNotifications')"
            >
              READ ALL NOTIFICATIONS
            </VBtn>
          </VCardActions>
        </VCard>
      </VMenu>
    </IconBtn>
  </VBadge>
</template>

<style lang="scss">
.notification-section {
  padding: 14px !important;
}

.notification-footer {
  padding: 6px !important;
}

.list-item-hover-class {
  .v-list-item__append {
    display: none;
  }

  &:hover {
    .v-list-item__append {
      display: block;
    }
  }
}
</style>
