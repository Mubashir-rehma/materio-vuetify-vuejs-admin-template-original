<template>
  <div class="demo-space-x">
    <v-btn
      color="primary"
      dark
    >
      Accept
      <v-icon
        dark
        right
      >
        {{ icons.mdiCheckboxMarkedCircleOutline }}
      </v-icon>
    </v-btn>

    <v-btn
      color="secondary"
      dark
    >
      <v-icon
        dark
        left
      >
        {{ icons.mdiMinusCircle }}
      </v-icon>Cancel
    </v-btn>

    <v-btn
      color="success"
      dark
    >
      Upload
      <v-icon
        dark
        right
      >
        {{ icons.mdiCloudUpload }}
      </v-icon>
    </v-btn>

    <v-btn
      color="info"
      dark
    >
      <v-icon
        dark
        left
      >
        {{ icons.mdiArrowLeft }}
      </v-icon>Back
    </v-btn>

    <v-btn
      color="warning"
      dark
    >
      <v-icon dark>
        {{ icons.mdiWrench }}
      </v-icon>
    </v-btn>

    <v-btn
      color="error"
      dark
    >
      <v-icon dark>
        {{ icons.mdiCancel }}
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import {
  mdiCheckboxMarkedCircleOutline,
  mdiCancel,
  mdiMinusCircle,
  mdiArrowLeft,
  mdiWrench,
  mdiCloudUpload,
} from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiCheckboxMarkedCircleOutline,
        mdiCancel,
        mdiMinusCircle,
        mdiArrowLeft,
        mdiWrench,
        mdiCloudUpload,
      },
    }
  },
}
</script>
