<script setup lang="ts">
import avatar1 from '@/assets/images/avatars/avatar-1.png'
</script>

<template>
  <div class="demo-space-x d-flex align-center flex-wrap">
    <!-- default -->
    <v-badge content="1">
      <v-btn variant="outlined">
        Default
      </v-btn>
    </v-badge>

    <!-- bordered -->
    <v-badge
      content="5"
      bordered
    >
      <v-btn variant="outlined">
        Border
      </v-btn>
    </v-badge>

    <!-- dot -->
    <v-badge
      dot
      location="bottom end"
      offset-x="3"
      offset-y="3"
    >
      <v-avatar size="48">
        <v-img :src="avatar1" />
      </v-avatar>
    </v-badge>

    <!-- inline -->
    <v-badge
      inline
      content="5"
    >
      <v-avatar size="48">
        <v-img :src="avatar1" />
      </v-avatar>
    </v-badge>

    <!-- Rounded -->
    <v-badge
      rounded="0"
      content="5"
    >
      <v-avatar>
        <v-img :src="avatar1" />
      </v-avatar>
    </v-badge>
  </div>
</template>
