<template>
  <v-text-field hide-details>
    <template v-slot:label>
      What about <strong>icon</strong> here? <v-icon style="vertical-align: middle">
        {{ icons.mdiFileFind }}
      </v-icon>
    </template>
  </v-text-field>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mdiFileFind } from '@mdi/js'

export default defineComponent({
  setup() {
    return {
      icons: {
        mdiFileFind,
      },
    }
  },
})
</script>
