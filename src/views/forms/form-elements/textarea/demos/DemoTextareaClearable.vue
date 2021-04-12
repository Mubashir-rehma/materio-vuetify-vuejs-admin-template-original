<template>
  <v-textarea
    clearable
    :clear-icon="icons.mdiCloseCircle"
    label="Text"
    value="This is clearable text."
    hide-details
  ></v-textarea>
</template>

<script>
import { mdiCloseCircle } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiCloseCircle,
      },
    }
  },
}
</script>
