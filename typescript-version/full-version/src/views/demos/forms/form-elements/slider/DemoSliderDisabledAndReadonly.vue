<template>
  <div class="text-caption">
    Disabled
  </div>
  <v-slider
    disabled
    label="Disabled"
    :model-value="30"
  />

  <div class="text-caption">
    Readonly
  </div>
  <v-slider
    readonly
    label="Readonly"
    :model-value="30"
    hide-details
  />
</template>
