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
          prepend-inner-icon="mdi-account-outline"
          label="First Name"
          placeholder="First Name"
        />
      </v-col>

      <v-col cols="12">
        <v-text-field
          v-model="email"
          prepend-inner-icon="mdi-email-outline"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </v-col>

      <v-col cols="12">
        <v-text-field
          v-model="mobile"
          prepend-inner-icon="mdi-cellphone"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </v-col>

      <v-col cols="12">
        <v-text-field
          v-model="password"
          prepend-inner-icon="mdi-lock-outline"
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
