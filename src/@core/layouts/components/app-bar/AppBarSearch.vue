<template>
  <v-text-field
    outlined
    rounded
    dense
    hide-details
    :prepend-inner-icon="mdiMagnify"
  ></v-text-field>
</template>

<script>
import { mdiMagnify } from '@mdi/js'

export default {
  setup() {
    return {
      mdiMagnify,
    }
  },
}
</script>

<style>
</style>
