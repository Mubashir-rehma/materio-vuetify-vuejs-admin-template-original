<script setup lang="ts">
import avatar1 from '@/assets/images/avatars/avatar-1.png'
</script>

<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <v-badge>
      <template #badge>
        <v-avatar size="15">
          <v-icon
            color="white"
            size="16"
            icon="mdi-information-variant"
          />
        </v-avatar>
      </template>

      <v-avatar>
        <v-img :src="avatar1" />
      </v-avatar>
    </v-badge>

    <!-- icon -->
    <v-badge icon="mdi-lock-open-outline">
      <v-avatar>
        <v-img :src="avatar1" />
      </v-avatar>
    </v-badge>
  </div>
</template>
