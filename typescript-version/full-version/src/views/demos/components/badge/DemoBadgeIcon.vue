<script setup lang="ts">
import avatar1 from '@/assets/images/avatars/avatar-1.png'
</script>

<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <VBadge>
      <template #badge>
        <VAvatar size="15">
          <VIcon
            color="white"
            size="16"
            icon="mdi-information-variant"
          />
        </VAvatar>
      </template>

      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- icon -->
    <VBadge icon="mdi-lock-open-outline">
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
