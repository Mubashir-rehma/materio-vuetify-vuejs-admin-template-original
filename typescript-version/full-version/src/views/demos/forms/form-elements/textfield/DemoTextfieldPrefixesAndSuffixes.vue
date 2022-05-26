<template>
  <v-row>
    <v-col cols="12">
      <v-text-field
        label="Amount"
        model-value="10.00"
        prefix="$"
      />
    </v-col>

    <v-col cols="12">
      <v-text-field
        label="Weight"
        model-value="28.00"
        suffix="lbs"
      />
    </v-col>

    <v-col cols="12">
      <v-text-field
        label="Email address"
        model-value="example"
        suffix="@gmail.com"
      />
    </v-col>

    <v-col cols="12">
      <v-text-field
        label="Label Text"
        model-value="12:30:00"
        type="time"
        suffix="PST"
      />
    </v-col>
  </v-row>
</template>
