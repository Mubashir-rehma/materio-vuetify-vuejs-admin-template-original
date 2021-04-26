<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        icon
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>{{ icons.mdiBellOutline }}</v-icon>
      </v-btn>
    </template>
    <v-card>
      <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia aliquid maiores incidunt, et facere officiis. Aliquam blanditiis nesciunt quam saepe.
      </span>
    </v-card>
  </v-menu>
</template>

<script>
import { mdiBellOutline } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiBellOutline,
      },
    }
  },
}
</script>

<style>
</style>
