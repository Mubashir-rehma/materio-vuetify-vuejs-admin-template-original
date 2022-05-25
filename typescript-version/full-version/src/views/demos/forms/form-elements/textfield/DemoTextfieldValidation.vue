<script lang="ts" setup>
const email = ref('')
const rules = {
  required: (value: string) => !!value || 'Required.',
  email: (value: string) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    console.log(typeof value)

    return pattern.test(value) || 'Invalid e-mail.'
  },
}
</script>

<template>
  <v-form>
    <v-text-field
      v-model="email"
      :rules="[rules.required, rules.email]"
      label="E-mail"
    />
  </v-form>
</template>
