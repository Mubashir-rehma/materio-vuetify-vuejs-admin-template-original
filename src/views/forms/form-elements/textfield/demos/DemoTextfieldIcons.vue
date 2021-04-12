<template>
  <div>
    <v-text-field
      label="Prepend"
      :prepend-icon="icons.mdiMapMarker"
    ></v-text-field>

    <v-text-field
      label="Prepend inner"
      :prepend-inner-icon="icons.mdiMapMarker"
    ></v-text-field>

    <v-text-field
      label="Append"
      :append-icon="icons.mdiMapMarker"
    ></v-text-field>

    <v-text-field
      label="Append outer"
      :append-outer-icon="icons.mdiMapMarker"
      hide-details
    ></v-text-field>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mdiMapMarker } from '@mdi/js'

export default defineComponent({
  setup() {
    return {
      icons: {
        mdiMapMarker,
      },
    }
  },
})
</script>
