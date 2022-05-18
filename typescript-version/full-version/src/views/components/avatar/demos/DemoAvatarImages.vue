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
    <v-avatar>
      <v-img :src="avatar1Src" />
    </v-avatar>

    <v-avatar>
      <v-img :src="avatar2Src" />
    </v-avatar>

    <v-avatar>
      <v-img :src="avatar3Src" />
    </v-avatar>
    <v-avatar>
      <v-img :src="avatar4Src" />
    </v-avatar>

    <v-avatar>
      <v-img :src="avatar5Src" />
    </v-avatar>

    <v-avatar>
      <v-img :src="avatar6Src" />
    </v-avatar>
  </div>
</template>
