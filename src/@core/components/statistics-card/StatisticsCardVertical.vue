<template>
  <v-card>
    <v-card-title class="justify-space-between">
      <v-avatar
        :color="color"
        size="38"
      >
        <v-icon
          size="24"
          color="white"
        >
          {{ icon }}
        </v-icon>
      </v-avatar>

      <v-icon class="cursor-pointer">
        {{ mdiDotsVertical }}
      </v-icon>
    </v-card-title>
    <v-card-text class="text-no-wrap font-weight-bold text--primary">
      <p class="mb-1">
        {{ statTitle }}
      </p>

      <span class="text-2xl">{{ statistics }}</span>
      <span
        class="percentage text-xs font-weight-light"
        :class="checkChange(change) ? 'success--text':'error--text'"
      > {{ change }}</span>
      <p class="font-weight-light text-xs mt-2 mb-0">
        {{ subtitle }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiDotsVertical } from '@mdi/js'

export default {
  props: {
    statTitle: { type: String, default: '' },
    icon: { type: String, default: '' },
    color: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    statistics: { type: String, default: '' },
    change: { type: String, default: '' },
  },
  setup() {
    const checkChange = value => {
      const firstChar = value.charAt(0)
      if (firstChar === '+') {
        return true
      }

      return false
    }

    return {
      mdiDotsVertical,
      checkChange,
    }
  },
}
</script>

<style lang="scss" scoped>
.percentage {
  top: -8px;
  position: relative;
}
</style>
