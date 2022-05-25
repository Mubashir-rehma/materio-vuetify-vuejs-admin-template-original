<script setup lang="ts">
import avatar1 from '@/assets/images/avatars/avatar-1.png'
import avatar2 from '@/assets/images/avatars/avatar-2.png'
import avatar3 from '@/assets/images/avatars/avatar-3.png'
import avatar4 from '@/assets/images/avatars/avatar-4.png'
import avatar5 from '@/assets/images/avatars/avatar-5.png'
import avatar6 from '@/assets/images/avatars/avatar-6.png'
</script>

<template>
  <div class="v-avatar-group">
    <v-avatar :size="45">
      <v-img :src="avatar1" />
    </v-avatar>

    <v-avatar :size="45">
      <v-img :src="avatar2" />
    </v-avatar>

    <v-avatar :size="45">
      <v-img :src="avatar3" />
    </v-avatar>

    <v-avatar :size="45">
      <v-img :src="avatar4" />
    </v-avatar>

    <v-avatar :size="45">
      <v-img :src="avatar5" />
    </v-avatar>

    <v-avatar :size="45">
      <v-img :src="avatar6" />
    </v-avatar>
  </div>
</template>
