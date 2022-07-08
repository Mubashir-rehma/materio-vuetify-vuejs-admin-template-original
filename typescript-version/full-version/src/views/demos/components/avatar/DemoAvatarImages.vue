<script lang="ts" setup>
import avatar1Src from '@/assets/images/avatars/avatar-1.png'
import avatar2Src from '@/assets/images/avatars/avatar-2.png'
import avatar3Src from '@/assets/images/avatars/avatar-3.png'
import avatar4Src from '@/assets/images/avatars/avatar-4.png'
import avatar5Src from '@/assets/images/avatars/avatar-5.png'
import avatar6Src from '@/assets/images/avatars/avatar-6.png'
</script>

<template>
  <div class="demo-space-x">
    <VAvatar>
      <VImg :src="avatar1Src" />
    </VAvatar>

    <VAvatar>
      <VImg :src="avatar2Src" />
    </VAvatar>

    <VAvatar>
      <VImg :src="avatar3Src" />
    </VAvatar>
    <VAvatar>
      <VImg :src="avatar4Src" />
    </VAvatar>

    <VAvatar>
      <VImg :src="avatar5Src" />
    </VAvatar>

    <VAvatar>
      <VImg :src="avatar6Src" />
    </VAvatar>
  </div>
</template>
