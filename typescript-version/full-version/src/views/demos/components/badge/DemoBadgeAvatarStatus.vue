<script setup lang="ts">
import avatar1 from '@/assets/images/avatars/avatar-1.png'
</script>

<template>
  <div class="demo-space-x">
    <v-badge
      dot
      bordered
      color="success"
      location="bottom-right"
    >
      <v-avatar size="large">
        <v-img :src="avatar1" />
      </v-avatar>
    </v-badge>

    <v-badge
      dot
      bordered
      color="warning"
      location="bottom-right"
    >
      <v-avatar size="large">
        <v-img :src="avatar1" />
      </v-avatar>
    </v-badge>

    <v-badge
      dot
      bordered
      color="error"
      location="bottom-right"
    >
      <v-avatar size="large">
        <v-img :src="avatar1" />
      </v-avatar>
    </v-badge>
  </div>
</template>
