<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
</script>

<template>
  <div class="demo-space-x">
    <VChip :prepend-avatar="avatar1">
      <span>Chip</span>
    </VChip>

    <VChip :prepend-avatar="avatar2">
      <span>Darcy Nooser</span>
    </VChip>

    <VChip
      :prepend-avatar="avatar3"
      pill
    >
      <span>Felicia Risker</span>
    </VChip>

    <VChip
      :prepend-avatar="avatar4"
      :pill="false"
    >
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
