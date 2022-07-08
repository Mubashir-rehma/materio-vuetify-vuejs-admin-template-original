<script setup lang="ts">
import avatar4 from '@/assets/images/avatars/avatar-4.png'
</script>

<template>
  <div class="demo-space-x">
    <VBtn>
      Button
      <VTooltip
        anchor="top"
        activator="parent"
      >
        Tooltip
      </VTooltip>
    </VBtn>

    <VAvatar color="info">
      <VImg :src="avatar4" />
      <VTooltip
        anchor="top"
        activator="parent"
      >
        Tooltip on Avatar
      </VTooltip>
    </VAvatar>

    <VTooltip anchor="top">
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          size="30"
        >
          mdi-account-outline
        </VIcon>
      </template>
      <span>Tooltip on Icon</span>
    </VTooltip>
  </div>
</template>
