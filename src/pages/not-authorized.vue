<script lang="ts" setup>
import { getHomeRouteForLoggedInUser, getUserData } from '@/router/utils'
const router = useRouter()
const userData = getUserData()
</script>

<template>
  <p>Not authorized</p>
  <button @click="router.push(getHomeRouteForLoggedInUser(userData.role))">
    Go Home
  </button>
</template>

<style lang="scss">

</style>

<route lang="yaml">
meta:
  layout: blank
  action: read
  subject: Auth
</route>
