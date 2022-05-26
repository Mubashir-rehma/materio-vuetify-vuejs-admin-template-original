<template>
  <v-row>
    <v-col cols="12">
      <v-textarea
        disabled
        label="Disabled"
        hint="Hint text"
        rows="2"
      />
    </v-col>

    <v-col cols="12">
      <v-textarea
        readonly
        rows="2"
        label="Readonly"
        hint="Hint text"
      />
    </v-col>
  </v-row>
</template>
