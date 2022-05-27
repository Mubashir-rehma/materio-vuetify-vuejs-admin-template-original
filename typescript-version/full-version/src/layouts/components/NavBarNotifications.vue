<script lang="ts" setup>
import { Notifications } from '@layouts/components'
import type { Notification } from '@layouts/types'

const notifications: Notification[] = [
  {
    img: 'https://cdn.vuetifyjs.com/images/john.jpg',
    title: 'Congratulation John!',
    subtitle: 'You have been awarded with 1 year free subscription to Premium plan.',
    time: '2 minutes ago',
  },
  {
    text: 'Tom Holland',
    title: 'New user registered.',
    subtitle: 'Registered via SSO',
    time: 'Yesterday',
  },
  {
    icon: 'mdi-home',
    title: 'New user registered.',
    subtitle: 'Registered via SSO',
    time: 'Yesterday',
  },
]
</script>

<template>
  <Notifications
    :notifications-count="10"
    :notifications="notifications"
  />
</template>
