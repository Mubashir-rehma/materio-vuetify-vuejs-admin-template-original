<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
</script>

<template>
  <v-form @submit.prevent>
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </v-col>

      <v-col cols="12">
        <v-text-field
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </v-col>

      <v-col cols="12">
        <v-text-field
          v-model="mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </v-col>

      <v-col cols="12">
        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          placeholder="password"
        />
      </v-col>

      <v-col cols="12">
        <v-checkbox
          v-model="checkbox"
          density="compact"
          label="Remember me"
        />
      </v-col>

      <v-col cols="12">
        <v-btn
          type="submit"
          class="me-2"
        >
          Submit
        </v-btn>

        <v-btn
          type="reset"
          color="secondary"
          variant="outlined"
        >
          Reset
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
