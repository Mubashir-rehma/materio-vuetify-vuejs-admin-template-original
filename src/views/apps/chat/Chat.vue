<template>
  <v-card class="h-full position-relative overflow-hidden">
    <v-navigation-drawer
      v-model="isLeftSidebarOpen"
      width="374"
      mobile-breakpoint="sm"
      absolute
    >
      <p>Hello</p>
    </v-navigation-drawer>
    <div
      class="chat-content-area"
      :style="contentStyles"
    >
      <v-icon
        v-show="!isLeftSidebarOpen"
        @click="isLeftSidebarOpen = true"
      >
        {{ icons.mdiMenu }}
      </v-icon>
      <p>isLeftSidebarOpen: {{ isLeftSidebarOpen }}</p>
      <p>contentStyles: {{ contentStyles }}</p>
      <v-divider></v-divider>
    </div>
  </v-card>
</template>

<script>
import { useResponsiveLeftSidebar } from '@core/comp-functions/ui'
import { mdiMenu } from '@mdi/js'

// import { ref } from '@vue/composition-api'

export default {
  setup() {
    const { isLeftSidebarOpen, contentStyles } = useResponsiveLeftSidebar({ sidebarWidth: 374 })

    return {
      isLeftSidebarOpen,
      contentStyles,
      icons: {
        mdiMenu,
      },
    }
  },
}
</script>

<style lang="scss">
@import '~@core/preset/preset/apps/chat.scss';
</style>
