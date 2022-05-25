<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <v-text-field label="Default" />

      <v-text-field
        label="Outlined"
        variant="outlined"
      />

      <v-text-field
        label="Plain"
        variant="plain"
        hide-details
      />
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <v-text-field
        label="Filled"
        variant="filled"
      />

      <v-text-field
        label="Contained"
        variant="contained"
      />

      <v-text-field
        label="Underlined"
        variant="underlined"
        hide-details
      />
    </v-col>
  </v-row>
</template>
