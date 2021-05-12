<template>
  <v-stepper
    v-model="activeStep"
    class="custom-header"
  >
    <!-- Header -->
    <v-stepper-header>
      <!-- Header: Step 1 -->
      <v-stepper-step
        :complete="activeStep > 1"
        step="1"
      >
        <div class="d-flex align-center">
          <span class="text--primary text-4xl font-weight-bold mr-3">01</span>
          <div class="d-flex flex-column">
            <span class="text--primary text-sm font-weight-semibold">Account Details</span>
            <span class="text--secondary text-xs">Setup your account details</span>
          </div>
        </div>
      </v-stepper-step>

      <v-divider></v-divider>

      <!-- Header: Step 2 -->
      <v-stepper-step
        :complete="activeStep > 2"
        step="2"
      >
        <div class="d-flex align-center">
          <span class="text--primary text-4xl font-weight-bold mr-3">02</span>
          <div class="d-flex flex-column">
            <span class="text--primary text-sm font-weight-semibold">Personal Info</span>
            <span class="text--secondary text-xs">Setup Information</span>
          </div>
        </div>
      </v-stepper-step>

      <v-divider></v-divider>

      <!-- Header: Step 3 -->
      <v-stepper-step step="3">
        <div class="d-flex align-center">
          <span class="text--primary text-4xl font-weight-bold mr-3">03</span>
          <div class="d-flex flex-column">
            <span class="text--primary text-sm font-weight-semibold">Review &nbsp; Submit</span>
            <span class="text--secondary text-xs">Write a Review</span>
          </div>
        </div>
      </v-stepper-step>
    </v-stepper-header>

    <!-- Stepper Items -->
    <v-stepper-items>
      <!-- Stepper Content: Step 1 -->
      <v-stepper-content step="1">
        <v-card
          class="mb-8"
          color="secondary"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          class="mr-2"
          @click="activeStep = 2"
        >
          Next
        </v-btn>
      </v-stepper-content>

      <!-- Stepper Content: Step 2 -->
      <v-stepper-content step="2">
        <v-card
          class="mb-8"
          color="secondary"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          class="mr-2"
          @click="activeStep = 3"
        >
          Next
        </v-btn>

        <v-btn
          text
          @click="activeStep = 1"
        >
          Previous
        </v-btn>
      </v-stepper-content>

      <!-- Stepper Content: Step 3 -->
      <v-stepper-content step="3">
        <v-card
          class="mb-8"
          color="secondary"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          class="mr-2"
        >
          Complete
        </v-btn>

        <v-btn
          text
          @click="activeStep = 2"
        >
          Previous
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
  data() {
    return {
      activeStep: 1,
    }
  },
}
</script>
