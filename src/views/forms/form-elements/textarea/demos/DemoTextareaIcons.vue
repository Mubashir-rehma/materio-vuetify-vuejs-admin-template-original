<template>
  <div>
    <v-textarea
      label="prepend-icon"
      rows="1"
      :prepend-icon="icons.mdiComment"
    ></v-textarea>

    <v-textarea
      :append-icon="icons.mdiComment"
      label="append-icon"
      rows="1"
    ></v-textarea>

    <v-textarea
      :prepend-inner-icon="icons.mdiComment"
      class="mx-2"
      label="prepend-inner-icon"
      rows="1"
    ></v-textarea>

    <v-textarea
      :append-outer-icon="icons.mdiComment"
      class="mx-2"
      label="append-outer-icon"
      rows="1"
    ></v-textarea>
  </div>
</template>

<script>
import { mdiComment } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiComment,
      },
    }
  },
}
</script>
