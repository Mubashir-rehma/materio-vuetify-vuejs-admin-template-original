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
          variant="outlined"
          density="compact"
          placeholder="First Name"
          hide-details
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
          variant="outlined"
          density="compact"
          placeholder="Last Name"
          hide-details
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
          variant="outlined"
          density="compact"
          placeholder="Email"
          hide-details
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
          variant="outlined"
          density="compact"
          placeholder="City"
          hide-details
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
          variant="outlined"
          density="compact"
          placeholder="Country"
          hide-details
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
          variant="outlined"
          density="compact"
          placeholder="Company"
          hide-details
        />
      </v-col>

      <!-- 👉 Remember me -->
      <v-col cols="12">
        <v-checkbox
          v-model="checkbox"
          label="Remember me"
          density="compact"
          hide-details
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
