<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
</script>

<template>
  <div class="demo-space-x">
    <VChip>
      <VAvatar
        size="20"
        :image="avatar1"
        class="me-1"
      />
      <span>Chip</span>
    </VChip>

    <VChip pill>
      <VAvatar
        size="20"
        class="me-1"
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip pill>
      <VAvatar
        size="20"
        class="me-1"
        :image="avatar3"
      />
      <span>Felicia Risker</span>
    </VChip>

    <VChip>
      <VAvatar
        size="20"
        class="me-1"
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
