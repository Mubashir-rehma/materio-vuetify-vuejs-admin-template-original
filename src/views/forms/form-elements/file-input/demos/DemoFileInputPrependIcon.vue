<template>
  <v-file-input
    label="File input"
    filled
    :prepend-icon="icons.mdiCamera"
    hide-details
  ></v-file-input>
</template>

<script>
import { mdiCamera } from '@mdi/js'

export default {
  setup() {
    return { icons: { mdiCamera } }
  },
}
</script>
