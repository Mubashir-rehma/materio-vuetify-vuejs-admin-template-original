<script lang="ts" setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
</script>

<template>
  <v-form @submit.prevent>
    <v-row>
      <!-- 👉 First Name -->
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </v-col>

      <!-- 👉 Last Name -->
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="lastName"
          label="Last Name"
          placeholder="Last Name"
        />
      </v-col>

      <!-- 👉 Email -->
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="email"
          label="Email"
          placeholder="Email"
        />
      </v-col>

      <!-- 👉 City -->
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="city"
          label="City"
          placeholder="City"
        />
      </v-col>

      <!-- 👉 Country -->
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="country"
          label="Country"
          placeholder="Country"
        />
      </v-col>

      <!-- 👉 Company -->
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="company"
          label="Company"
          placeholder="Company"
        />
      </v-col>

      <!-- 👉 Remember me -->
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
