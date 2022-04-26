<script lang="ts" setup>
const notifications = ref<number|null>(null)
</script>

<template>
  <div class="d-flex align-center">
    <v-badge
      :content="notifications"
      :model-value="notifications"
      color="success"
      class="me-10"
    >
      <v-icon
        size="40"
        icon="mdi-vuetify"
      />
    </v-badge>

    <div class="demo-space-x">
      <v-btn
        color="primary"
        @click="notifications = (notifications || 0) + 1"
      >
        Send Message
      </v-btn>

      <v-btn
        color="error"
        @click="notifications = null"
      >
        Clear Notifications
      </v-btn>
    </div>
  </div>
</template>
