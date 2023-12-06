<script setup lang="ts">
import { useTheme } from 'vuetify'

const { global } = useTheme()

const authProviders = [
  {
    icon: 'ri-facebook-circle-line',
    color: '#4267b2',
    colorInDark: '#4267b2',
  },
  {
    icon: 'ri-twitter-line',
    color: '#1da1f2',
    colorInDark: '#1da1f2',
  },
  {
    icon: 'ri-github-fill',
    color: '#272727',
    colorInDark: '#fff',
  },
  {
    icon: 'ri-google-line',
    color: '#db4437',
    colorInDark: '#db4437',
  },
]
</script>

<template>
  <VBtn
    v-for="link in authProviders"
    :key="link.icon"
    :icon="link.icon"
    variant="text"
    :color="global.name.value === 'dark' ? link.colorInDark : link.color"
  />
</template>
