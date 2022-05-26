<script lang="ts" setup>
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'

  setTimeout(() => {
    loading.value = false
    message.value = 'You\'ve clicked me!'
  }, 2000)
}
</script>

<template>
  <v-text-field
    v-model="message"
    clearable
    label="Message"
    variant="outlined"
    type="text"
    hide-details
  >
    <!-- Prepend -->
    <template #prepend>
      <v-tooltip anchor="bottom">
        <template #activator="{ props }">
          <v-icon v-bind="props">
            mdi-help-circle-outline
          </v-icon>
        </template>
        I'm a tooltip
      </v-tooltip>
    </template>

    <!-- AppendInner -->
    <template #appendInner>
      <v-fade-transition leave-absolute>
        <v-progress-circular
          v-if="loading"
          size="24"
          color="info"
          indeterminate
        />
        <img
          v-else
          :src="themeConfig.app.logo"
          max-height="30px"
          max-width="30px"
          alt="logo"
          contain
        >
      </v-fade-transition>
    </template>

    <!-- Append -->
    <template #append>
      <v-btn @click="clickMe">
        <v-icon
          icon="mdi-target"
          start
        />
        Click me
      </v-btn>
    </template>
  </v-text-field>
</template>
