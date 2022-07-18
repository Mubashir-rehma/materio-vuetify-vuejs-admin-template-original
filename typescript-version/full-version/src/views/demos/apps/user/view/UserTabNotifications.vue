<script lang="ts" setup>
const notifications = ref([
  {
    type: 'New for you',
    email: true,
    browser: false,
    app: false,
  },
  {
    type: 'Account activity',
    email: false,
    browser: true,
    app: true,
  },
  {
    type: 'A new browser used to sign in',
    email: true,
    browser: true,
    app: true,
  },
  {
    type: 'A new device is linked',
    email: false,
    browser: true,
    app: false,
  },
])
</script>

<template>
  <VCard
    title="Notifications"
    subtitle="You will receive notification for the below selected items."
    class="user-tab-notification"
  >
    <VTable>
      <thead>
        <tr>
          <th>TYPE</th>
          <th>EMAIL</th>
          <th>BROWSER</th>
          <th>APP</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="notification in notifications"
          :key="notification.type"
        >
          <td>{{ notification.type }}</td>
          <td><VCheckbox v-model="notification.email" /></td>
          <td><VCheckbox v-model="notification.browser" /></td>
          <td><VCheckbox v-model="notification.app" /></td>
        </tr>
      </tbody>
    </VTable>

    <VDivider />

    <VCardText>
      <VBtn
        color="primary"
        class="me-3"
      >
        save changes
      </VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Discard
      </VBtn>
    </VCardText>
  </VCard>
</template>
