<template>
  <div class="d-flex align-center">
    <div class="d-flex flex-column mr-2 text-right">
      <span>
        John Doe
      </span>
      <small class="text--secondary">Admin</small>
    </div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-avatar
          v-bind="attrs"
          size="40"
          v-on="on"
        >
          <v-img src="/images/avatars/1.png"></v-img>
        </v-avatar>
      </template>
      <v-list>
        <!-- Profile -->
        <v-list-item :to="{ name: 'components-alert' }">
          <v-list-item-icon class="mr-2">
            <v-icon>{{ icons.mdiAccountOutline }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- Profile -->
        <v-list-item :to="{ name: 'components-alert' }">
          <v-list-item-icon class="mr-2">
            <v-icon>{{ icons.mdiAccountOutline }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- Profile -->
        <v-list-item :to="{ name: 'components-alert' }">
          <v-list-item-icon class="mr-2">
            <v-icon>{{ icons.mdiAccountOutline }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <!-- Profile -->
        <v-list-item :to="{ name: 'components-alert' }">
          <v-list-item-icon class="mr-2">
            <v-icon>{{ icons.mdiAccountOutline }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- Profile -->
        <v-list-item :to="{ name: 'components-alert' }">
          <v-list-item-icon class="mr-2">
            <v-icon>{{ icons.mdiAccountOutline }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mdiAccountOutline } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiAccountOutline,
      },
    }
  },
}
</script>

<style>
</style>
