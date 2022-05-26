<script lang="ts" setup>
import { useAbility } from '@casl/vue'
import type { LoginResponse } from '@/@fake-db/types'
import { initialAbility } from '@/plugins/casl/ability'
import type { AppAbility } from '@/plugins/casl/AppAbility'
import axios from '@axios'

const route = useRoute()
const router = useRouter()

const ability = useAbility<AppAbility>()

const email = ref('admin@demo.com')
const password = ref('admin')
const login = () => {
  console.log('email :>> ', email.value)
  console.log('password :>> ', password.value)

  axios.post<LoginResponse>('/auth/login', { email: email.value, password: password.value })
    .then(r => {
      const { accessToken, userData, userAbilities } = r.data

      localStorage.setItem('userAbilities', JSON.stringify(userAbilities))
      ability.update(userAbilities)

      localStorage.setItem('userData', JSON.stringify(userData))
      localStorage.setItem('accessToken', JSON.stringify(accessToken))

      if (route.query.to)
        router.replace(String(route.query.to))
      else router.replace('/')

      return null
    })
    .catch(e => { console.error(e.response.data) })
}

const logout = () => {
  ability.update(initialAbility)
  localStorage.setItem('userAbilities', JSON.stringify(initialAbility))

  localStorage.removeItem('userData')
  localStorage.removeItem('accessToken')
}
</script>

<template>
  <p>Login Page</p>
  <p>{{ ability.rules }}</p>
  <br>
  <br>
  <button @click="logout">
    logout
  </button>
  <br>
  <br>
  <p v-if="ability.can('read', 'Admin')">
    This is private data
  </p>
  <p v-if="ability.can('read', 'Auth')">
    This is public data
  </p>
  <br>
  <br>
  <form @submit.prevent="login">
    <input
      v-model="email"
      type="text"
      placeholder="email"
    >
    <input
      v-model="password"
      type="text"
      placeholder="password"
    >
    <button>Submit</button>
  </form>
</template>

<style lang="scss">

</style>

<route lang="yaml">
meta:
  layout: blank
  action: read
  subject: Auth
</route>
