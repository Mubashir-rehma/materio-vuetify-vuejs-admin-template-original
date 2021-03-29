<template>
  <div>
    <v-alert
      color="primary"
      dark
      :icon="icons.mdiFirework"
    >
      Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Vivamus quis mi. Quisque ut nisi. Maecenas malesuada.
    </v-alert>

    <v-alert
      color="secondary"
      dark
      :icon="icons.mdiMaterialDesign"
    >
      Phasellus blandit leo ut odio. Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. In ut quam vitae odio lacinia tincidunt.
    </v-alert>

    <v-alert
      color="success"
      dark
      :icon="icons.mdiVuetify"
      class="mb-0"
    >
      Praesent congue erat at massa. Nullam vel sem. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapiens.
    </v-alert>
  </div>
</template>

<script>
import { mdiFirework, mdiMaterialDesign, mdiVuetify } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiFirework,
        mdiMaterialDesign,
        mdiVuetify,
      },
    }
  },
}
</script>
