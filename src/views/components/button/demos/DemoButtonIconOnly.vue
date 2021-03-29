<template>
  <div class="demo-space-x">
    <v-btn
      icon
      color="primary"
    >
      <v-icon>
        {{ icons.mdiPackageDown }}
      </v-icon>
    </v-btn>

    <v-btn
      icon
      color="secondary"
    >
      <v-icon>
        {{ icons.mdiAccountPlus }}
      </v-icon>
    </v-btn>

    <v-btn
      icon
      color="success"
    >
      <v-icon>{{ icons.mdiMagnify }}</v-icon>
    </v-btn>

    <v-btn
      icon
      color="info"
    >
      <v-icon>{{ icons.mdiThumbUp }}</v-icon>
    </v-btn>

    <v-btn
      icon
      color="warning"
    >
      <v-icon>{{ icons.mdiStarFace }}</v-icon>
    </v-btn>

    <v-btn
      icon
      color="error"
    >
      <v-icon>{{ icons.mdiHeart }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiPackageDown, mdiAccountPlus, mdiMagnify, mdiHeart, mdiStarFace, mdiThumbUp } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiPackageDown,
        mdiAccountPlus,
        mdiMagnify,
        mdiHeart,
        mdiStarFace,
        mdiThumbUp,
      },
    }
  },
}
</script>
