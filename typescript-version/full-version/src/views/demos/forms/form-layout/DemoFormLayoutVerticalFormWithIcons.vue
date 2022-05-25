<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
</script>

<template>
  <v-form @submit.prevent>
    <v-text-field
      v-model="firstName"
      prepend-inner-icon="mdi-account-outline"
      label="First Name"
      variant="outlined"
      density="compact"
      placeholder="First Name"
    />

    <v-text-field
      v-model="email"
      prepend-inner-icon="mdi-email-outline"
      label="Email"
      type="email"
      variant="outlined"
      density="compact"
      placeholder="Email"
    />

    <v-text-field
      v-model="mobile"
      prepend-inner-icon="mdi-cellphone"
      label="Mobile"
      variant="outlined"
      density="compact"
      type="number"
      placeholder="Number"
    />

    <v-text-field
      v-model="password"
      prepend-inner-icon="mdi-lock-outline"
      label="Password"
      variant="outlined"
      density="compact"
      type="password"
      placeholder="password"
      hide-details
    />

    <v-checkbox
      v-model="checkbox"
      label="Remember me"
      class="my-5"
      density="compact"
      hide-details
    />

    <v-btn type="submit">
      Submit
    </v-btn>

    <v-btn
      color="secondary"
      type="reset"
      variant="outlined"
      class="mx-2"
    >
      Reset
    </v-btn>
  </v-form>
</template>
