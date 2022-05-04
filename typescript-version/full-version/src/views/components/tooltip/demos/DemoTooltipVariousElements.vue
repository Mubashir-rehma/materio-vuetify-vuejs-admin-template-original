<script setup lang="ts">
import avatar4 from '@/assets/images/avatars/avatar-4.png'
</script>

<template>
  <div class="demo-space-x">
    <v-btn color="primary">
      Button
      <v-tooltip
        anchor="top"
        activator="parent"
      >
        Tooltip
      </v-tooltip>
    </v-btn>

    <v-avatar color="info">
      <v-img :src="avatar4" />
      <v-tooltip
        anchor="top"
        activator="parent"
      >
        Tooltip on Avatar
      </v-tooltip>
    </v-avatar>

    <v-tooltip anchor="top">
      <template #activator="{ props }">
        <v-icon
          v-bind="props"
          size="30"
        >
          mdi-account-outline
        </v-icon>
      </template>
      <span>Tooltip on Icon</span>
    </v-tooltip>
  </div>
</template>
