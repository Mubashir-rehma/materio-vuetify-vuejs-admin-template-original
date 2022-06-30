<script setup lang="ts">
import avatar1 from '@/assets/images/avatars/avatar-1.png'
</script>

<template>
  <div class="demo-space-x">
    <!-- 👉 Top End -->
    <v-badge
      content="1"
      location="end top"
    >
      <v-avatar size="48">
        <v-img :src="avatar1" />
      </v-avatar>
    </v-badge>

    <!-- 👉 Bottom Start -->
    <v-badge
      location="bottom start"
      content="2"
    >
      <v-avatar size="48">
        <v-img :src="avatar1" />
      </v-avatar>
    </v-badge>

    <!-- 👉 Bottom End -->
    <v-badge
      location="bottom end"
      content="3"
    >
      <v-avatar size="48">
        <v-img :src="avatar1" />
      </v-avatar>
    </v-badge>

    <!-- 👉 top Start -->
    <v-badge
      location="top start"
      content="4"
    >
      <v-avatar size="48">
        <v-img :src="avatar1" />
      </v-avatar>
    </v-badge>
  </div>
</template>
