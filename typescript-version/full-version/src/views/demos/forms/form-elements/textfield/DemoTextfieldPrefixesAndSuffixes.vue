<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        label="Amount"
        model-value="10.00"
        prefix="$"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Weight"
        model-value="28.00"
        suffix="lbs"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Email address"
        model-value="example"
        suffix="@gmail.com"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Label Text"
        model-value="12:30:00"
        type="time"
        suffix="PST"
      />
    </VCol>
  </VRow>
</template>
