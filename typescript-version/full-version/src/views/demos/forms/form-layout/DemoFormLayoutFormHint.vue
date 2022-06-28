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
    <v-row>
      <v-col cols="12">
        <!-- 👉 Username -->
        <v-text-field
          v-model="username"
          label="Username"
          placeholder="Username"
        />
      </v-col>

      <v-col cols="12">
        <!-- 👉 Email -->
        <v-text-field
          v-model="email"
          label="Email"
          type="email"
          hint="Enter a Valid Email"
          placeholder="Email"
        />
      </v-col>

      <v-col cols="12">
        <!-- 👉 Password -->
        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          persistent-hint
          placeholder="Password"
          hint="Your password must be 8-20 characters long."
        />
      </v-col>

      <v-col cols="12">
        <!-- 👉 Autocomplete -->
        <v-autocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
        />
      </v-col>

      <v-col cols="12">
        <!-- 👉 Checkbox -->
        <v-checkbox
          v-model="checkbox"
          density="compact"
          label="Remember me"
        />
      </v-col>

      <v-col cols="12">
        <!-- 👉 submit and reset button -->
        <v-btn
          type="submit"
          class="me-2"
        >
          Submit
        </v-btn>

        <v-btn
          color="secondary"
          type="reset"
          variant="outlined"
        >
          Reset
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
