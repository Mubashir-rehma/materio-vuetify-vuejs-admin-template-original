<script setup lang="ts">
import avatar1 from '@/assets/images/avatars/avatar-1.png';
</script>

<template>
  <div class="demo-space-x">
    <!-- Top End -->
    <v-badge
      content="1"
      color="primary"
      location="top-end"
    >
      <v-avatar size="48">
        <v-img :src="avatar1" />
      </v-avatar>
    </v-badge>

    <!-- Bottom End -->
    <v-badge
      color="primary"
      location="bottom-end"
      content="2"
    >
      <v-avatar size="48">
        <v-img :src="avatar1" />
      </v-avatar>
    </v-badge>

    <!-- Bottom Start -->
    <v-badge
      color="primary"
      location="bottom-start"
      content="3"
    >
      <v-avatar size="48">
        <v-img :src="avatar1" />
      </v-avatar>
    </v-badge>

    <!-- Bottom Start -->
    <v-badge
      color="primary"
      location="top-start"
      content="5"
    >
      <v-avatar size="48">
        <v-img :src="avatar1" />
      </v-avatar>
    </v-badge>
  </div>
</template>
