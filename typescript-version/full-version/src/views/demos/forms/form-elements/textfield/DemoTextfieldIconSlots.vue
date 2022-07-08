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
  <VTextField
    v-model="message"
    clearable
    label="Message"
    type="text"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip anchor="bottom">
        <template #activator="{ props }">
          <VIcon v-bind="props">
            mdi-help-circle-outline
          </VIcon>
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #appendInner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
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
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn @click="clickMe">
        <VIcon
          icon="mdi-target"
          start
        />
        Click me
      </VBtn>
    </template>
  </VTextField>
</template>
