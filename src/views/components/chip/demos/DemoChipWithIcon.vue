<template>
  <div class="demo-space-x">
    <v-chip>
      <v-icon
        left
        dense
      >
        {{ icons.mdiAccountOutline }}
      </v-icon>
      Account
    </v-chip>

    <v-chip color="primary">
      <v-icon
        left
        dense
      >
        {{ icons.mdiStarOutline }}
      </v-icon>
      Premium
    </v-chip>

    <v-chip color="secondary">
      <v-icon
        left
        dense
      >
        {{ icons.mdiCake }}
      </v-icon>
      1 Year
    </v-chip>

    <v-chip color="success">
      <v-icon
        left
        dense
      >
        {{ icons.mdiBellOutline }}
      </v-icon>
      Notification
    </v-chip>

    <v-chip color="info">
      <v-icon
        left
        dense
      >
        {{ icons.mdiForumOutline }}
      </v-icon>
      Message
    </v-chip>

    <v-chip color="warning">
      <v-icon
        left
        dense
      >
        {{ icons.mdiAlertOutline }}
      </v-icon>
      Warning
    </v-chip>

    <v-chip color="error">
      <v-icon
        left
        dense
      >
        {{ icons.mdiAlertCircleOutline }}
      </v-icon>
      Error
    </v-chip>
  </div>
</template>

<script>
import {
  mdiAccountOutline,
  mdiStarOutline,
  mdiCake,
  mdiBellOutline,
  mdiAlertCircleOutline,
  mdiAlertOutline,
  mdiForumOutline,
} from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiAccountOutline,
        mdiStarOutline,
        mdiCake,
        mdiBellOutline,
        mdiAlertCircleOutline,
        mdiAlertOutline,
        mdiForumOutline,
      },
    }
  },
}
</script>
