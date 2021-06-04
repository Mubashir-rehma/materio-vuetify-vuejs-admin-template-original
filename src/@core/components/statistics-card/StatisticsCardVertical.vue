<template>
  <v-card>
    <v-card-title class="justify-space-between">
      <v-avatar
        :color="color"
        size="38"
        class="elevation-3"
      >
        <v-icon
          size="24"
          color="white"
        >
          {{ icon }}
        </v-icon>
      </v-avatar>

      <v-btn icon>
        <v-icon>
          {{ mdiDotsVertical }}
        </v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text class="text-no-wrap text--primary">
      <p class="font-weight-semibold text-sm mb-1">
        {{ statTitle }}
      </p>

      <span class="font-weight-semibold text-2xl">{{ statistics }}</span>
      <span
        class="percentage text-xs"
        :class="checkChange(change) ? 'success--text':'error--text'"
      > {{ change }}</span>
      <p class="text-xs text--secondary mt-2 mb-0">
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
