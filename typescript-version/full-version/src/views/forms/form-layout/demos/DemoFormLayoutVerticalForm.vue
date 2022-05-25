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
      label="First Name"
      placeholder="First Name"
      hide-details
    />

    <v-text-field
      v-model="email"
      label="Email"
      type="email"
      placeholder="Email"
    />

    <v-text-field
      v-model="mobile"
      label="Mobile"
      type="number"
      placeholder="Number"
    />

    <v-text-field
      v-model="password"
      label="Password"
      type="password"
      placeholder="password"
      hide-details
    />

    <v-checkbox
      v-model="checkbox"
      label="Remember me"
      density="compact"
      class="my-5"
      hide-details
    />

    <v-btn type="submit">
      Submit
    </v-btn>

    <v-btn
      type="reset"
      color="secondary"
      variant="outlined"
      class="mx-2"
    >
      Reset
    </v-btn>
  </v-form>
</template>
