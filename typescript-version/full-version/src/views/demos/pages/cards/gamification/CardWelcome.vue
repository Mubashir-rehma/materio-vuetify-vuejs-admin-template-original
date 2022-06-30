<script setup lang="ts">
import illustrationJohn from '@/assets/images/cards/illustration-john.png'
</script>

<template>
  <v-card class="pa-2">
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="6"
      >
        <v-card-header>
          <v-card-header-text>
            <v-card-title class="text-md-h5 flex-wrap">
              <span class="me-1">Welcome back</span><strong class="me-1">John!</strong><span>🥳</span>
            </v-card-title>
          </v-card-header-text>
        </v-card-header>

        <v-card-text class="mt-3">
          You have 4 tasks to finish today,
          <br>
          You already completed 68% 😍 tasks. Good job!
        </v-card-text>
      </v-col>

      <v-col
        cols="12"
        sm="6"
        class="text-center"
      >
        <img
          :src="illustrationJohn"
          class="john-illustration"
          :height="$vuetify.display.xs ? '165' : '200'"
          :class="$vuetify.display.xs ? 'position-relative' : 'position-absolute'"
        >
      </v-col>
    </v-row>
  </v-card>
</template>

<style lang="scss" scoped>
.john-illustration {
  inset-block-end: -0.0625rem;
  inset-inline-end: 0;
}
</style>
