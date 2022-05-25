<script lang="ts" setup>
const username = ref('')
const email = ref('')
const password = ref<string>()
const checkbox = ref(false)
const items = ['foo', 'bar', 'fizz', 'buzz'] as const
const values = ref<typeof items[number][]>([])
</script>

<template>
  <v-form @submit.prevent>
    <!-- 👉 Username -->
    <v-text-field
      v-model="username"
      label="Username"
      placeholder="Username"
    />

    <!-- 👉 Email -->
    <v-text-field
      v-model="email"
      label="Email"
      type="email"
      hint="Enter a Valid Email"
      placeholder="Email"
    />

    <!-- 👉 Password -->
    <v-text-field
      v-model="password"
      label="Password"
      type="password"
      persistent-hint
      placeholder="Password"
      hint="Your password must be 8-20 characters long."
    />

    <!-- 👉 Autocomplete -->
    <v-autocomplete
      v-model="values"
      :items="items"
      chips
      multiple
      label="Autocomplete"
      hide-details
    />

    <!-- 👉 Checkbox -->
    <v-checkbox
      v-model="checkbox"
      label="Remember me"
      density="compact"
      class="my-5"
      hide-details
    />

    <!-- 👉 submit and reset button -->
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
