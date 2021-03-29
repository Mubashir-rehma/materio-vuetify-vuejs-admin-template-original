<template>
  <div>
    <app-card-code
      v-for="i in 15"
      :key="i"
      title="Basic Buttons"
      :code="{ ts: 'const a: number = 1', js: 'const a = 1\n const b = 2' }"
      code-language="js"
      class="mb-6"
    >
      <v-card-text>
        Bootstrap includes six predefined button styles, each serving its own semantic purpose.
      </v-card-text>
    </app-card-code>
  </div>
</template>

<script>
import AppCardCode from '@core/components/app-card-code/AppCardCode.vue'

export default {
  components: {
    AppCardCode,
  },
}
</script>

<style>
</style>
