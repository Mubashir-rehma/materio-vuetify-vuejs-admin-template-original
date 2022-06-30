<script setup lang="ts">
import illustrationJohn from '@/assets/images/cards/illustration-john-2.png'
</script>

<template>
  <v-card class="pa-2">
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="6"
        order="2"
        order-sm="1"
      >
        <v-card-header>
          <v-card-header-text>
            <v-card-title class="text-md-h5">
              <span class="me-1">Congratulations</span><strong class="me-1">John!</strong><span>🎉</span>
            </v-card-title>
          </v-card-header-text>
        </v-card-header>

        <v-card-text class="mt-3">
          You have done 72% 🤩 more sales today.
          <br>
          Check your new raising badge in your profile.
        </v-card-text>
      </v-col>

      <v-col
        cols="12"
        sm="6"
        order="1"
        order-sm="2"
        class="text-center"
      >
        <img
          :src="illustrationJohn"
          :height="$vuetify.display.xs ? '165' : '200'"
          :class="$vuetify.display.xs ? 'position-relative' : 'position-absolute'"
          class="john-illustration"
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
