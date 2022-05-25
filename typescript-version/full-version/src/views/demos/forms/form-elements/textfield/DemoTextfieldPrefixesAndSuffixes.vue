<template>
  <v-text-field
    label="Amount"
    model-value="10.00"
    prefix="$"
  />

  <v-text-field
    label="Weight"
    model-value="28.00"
    suffix="lbs"
  />

  <v-text-field
    label="Email address"
    model-value="example"
    suffix="@gmail.com"
  />

  <v-text-field
    label="Label Text"
    model-value="12:30:00"
    type="time"
    suffix="PST"
    hide-details
  />
</template>
