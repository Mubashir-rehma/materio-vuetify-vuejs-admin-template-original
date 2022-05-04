<script lang="ts" setup>
import avatar1 from '@/assets/images/avatars/avatar-1.png'

const menu = ref(false)
</script>

<template>
  <v-menu
    v-model="menu"
    anchor="top"
  >
    <template #activator="{ props }">
      <v-btn v-bind="props">
        Menu as Popover
      </v-btn>
    </template>

    <v-card
      max-width="300"
    >
      <v-list>
        <v-list-item
          :prepend-avatar="avatar1"
          title="John Leider"
          subtitle="Founder of Vuetify"
        />
      </v-list>

      <v-divider />

      <v-card-text>
        Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake.
        Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee.
      </v-card-text>

      <v-card-actions>
        <v-btn icon>
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-bookmark-outline</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-share-variant </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>
