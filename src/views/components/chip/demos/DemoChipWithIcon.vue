<template>
  <div class="demo-space-x">
    <v-chip>
      <v-icon left>
        {{ icons.mdiAccount }}
      </v-icon>
      Account
    </v-chip>

    <v-chip color="primary">
      <v-icon left>
        {{ icons.mdiStarOutline }}
      </v-icon>
      Premium
    </v-chip>

    <v-chip color="secondary">
      <v-icon left>
        {{ icons.mdiCakeVariant }}
      </v-icon>
      1 Year
    </v-chip>

    <v-chip color="success">
      <v-icon left>
        {{ icons.mdiBell }}
      </v-icon>
      Notification
    </v-chip>

    <v-chip color="info">
      <v-icon left>
        {{ icons.mdiForum }}
      </v-icon>
      Message
    </v-chip>

    <v-chip color="warning">
      <v-icon left>
        {{ icons.mdiAlert }}
      </v-icon>
      Warning
    </v-chip>

    <v-chip color="error">
      <v-icon left>
        {{ icons.mdiAlertCircleOutline }}
      </v-icon>
      Error
    </v-chip>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiAccount, mdiStarOutline, mdiCakeVariant, mdiBell, mdiAlertCircleOutline, mdiAlert, mdiForum } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiAccount,
        mdiStarOutline,
        mdiCakeVariant,
        mdiBell,
        mdiAlertCircleOutline,
        mdiAlert,
        mdiForum,
      },
    }
  },
}
</script>
