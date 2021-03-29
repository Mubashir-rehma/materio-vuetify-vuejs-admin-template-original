<template>
  <div class="demo-space-x">
    <v-avatar
      tile
      size="35"
      color="primary"
    >
      <v-icon
        color="white"
        size="25"
      >
        {{ icons.mdiAlertOctagon }}
      </v-icon>
    </v-avatar>
    <v-avatar
      tile
      size="35"
      color="secondary"
    >
      <v-icon
        color="white"
        size="25"
      >
        {{ icons.mdiAlarm }}
      </v-icon>
    </v-avatar>
    <v-avatar
      tile
      size="35"
      color="success"
    >
      <v-icon
        color="white"
        size="25"
      >
        {{ icons.mdiPlay }}
      </v-icon>
    </v-avatar>
    <v-avatar
      tile
      size="35"
      color="info"
    >
      <v-icon
        color="white"
        size="25"
      >
        {{ icons.mdiWifi }}
      </v-icon>
    </v-avatar>
    <v-avatar
      tile
      size="35"
      color="warning"
    >
      <v-icon
        color="white"
        size="25"
      >
        {{ icons.mdiAlert }}
      </v-icon>
    </v-avatar>
    <v-avatar
      tile
      size="35"
      color="error"
    >
      <v-icon
        size="25"
        color="white"
      >
        {{ icons.mdiAlertCircleOutline }}
      </v-icon>
    </v-avatar>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiAlertOctagon, mdiAlarm, mdiPlay, mdiWifi, mdiAlert, mdiAlertCircleOutline } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiAlertOctagon,
        mdiAlarm,
        mdiPlay,
        mdiWifi,
        mdiAlert,
        mdiAlertCircleOutline,
      },
    }
  },
}
</script>
