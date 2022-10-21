# Navbar Notifications

> File: src/@layouts/components/navbar/Notifications.vue

---

You can pass notifications received from your API response to this component for displaying them in the navbar. It also emits `click:readAllNotifications` event to mark all notifications as read. This component is used in `src/layouts/components/NavBarNotifications.vue` file.

Below is code snippet of component usage:

<code-group>
<code-block title="TS">

```vue
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
]
</script>

<template>
  <Notifications :notifications="notifications" />
</template>
```

</code-block>

<code-block title="JS">

```vue
<script setup>
import { Notifications } from '@layouts/components'

const notifications = [
  {
    img: 'https://cdn.vuetifyjs.com/images/john.jpg',
    title: 'Congratulation John!',
    subtitle: 'You have been awarded with 1 year free subscription to Premium plan.',
    time: '2 minutes ago',
  },
]
</script>

<template>
  <Notifications :notifications="notifications" />
</template>
```

</code-block>
</code-group>
