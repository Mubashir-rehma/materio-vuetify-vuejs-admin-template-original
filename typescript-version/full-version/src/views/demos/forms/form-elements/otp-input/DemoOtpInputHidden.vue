<script setup lang="ts">
import { VOtpInput } from 'vuetify/labs/VOtpInput'

const otp = ref('')
</script>

<template>
  <VOtpInput
    v-model="otp"
    type="password"
    length="5"
  />
</template>
