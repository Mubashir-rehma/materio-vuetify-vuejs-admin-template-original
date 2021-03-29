<template>
  <div class="demo-space-x">
    <v-avatar
      size="35"
      color="primary"
    >
      <v-icon
        color="white"
        size="18"
      >
        {{ icons.mdiHomeOutline }}
      </v-icon>
    </v-avatar>

    <v-avatar
      size="35"
      color="success"
    >
      <v-icon
        color="white"
        size="18"
      >
        {{ icons.mdiBell }}
      </v-icon>
    </v-avatar>

    <v-avatar
      size="35"
      color="info"
    >
      <v-icon
        color="white"
        size="18"
      >
        {{ icons.mdiAccount }}
      </v-icon>
    </v-avatar>

    <v-avatar
      size="35"
      color="error"
    >
      <v-icon
        color="white"
        size="18"
      >
        {{ icons.mdiMessage }}
      </v-icon>
    </v-avatar>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiHomeOutline, mdiBell, mdiAccount, mdiMessage } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiHomeOutline,
        mdiBell,
        mdiAccount,
        mdiMessage,
      },
    }
  },
}
</script>
