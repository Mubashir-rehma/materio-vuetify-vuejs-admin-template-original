<script lang="ts" setup>
import Notifications from '@core/components/Notifications.vue'
import type { Notification } from '@layouts/types'

const notifications: Notification[] = [
  {
    img: 'https://cdn.vuetifyjs.com/images/john.jpg',
    title: 'Congratulation John!',
    subtitle: 'Won the monthly bestseller badge',
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
  <Notifications :notifications="notifications" />
</template>
