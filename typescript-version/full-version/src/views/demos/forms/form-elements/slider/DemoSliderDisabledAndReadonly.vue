<template>
  <v-row>
    <v-col cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <v-slider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </v-col>

    <v-col cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <v-slider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </v-col>
  </v-row>
</template>
