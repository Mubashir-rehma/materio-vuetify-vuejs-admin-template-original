<script lang="ts" setup>
import axios from '@axios'
const username = ref('')
const email = ref('')
const password = ref('')

const register = () => {
  axios.post('/auth/register', {
    username: username.value,
    email: email.value,
    password: password.value,
  })
    .then(r => { console.log('r :>> ', r) })
    .catch(e => { console.log('e.response :>> ', e.response) })
}
</script>

<template>
  <p>Register:</p>
  <form @submit.prevent="register">
    <input v-model="username" type="text" placeholder="username">
    <input v-model="email" type="text" placeholder="email">
    <input v-model="password" type="text" placeholder="password">
    <button>Register</button>
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
