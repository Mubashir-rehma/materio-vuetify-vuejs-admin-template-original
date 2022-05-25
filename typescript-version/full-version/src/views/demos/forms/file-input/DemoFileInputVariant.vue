<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
    >
      <v-file-input
        label="Default"
      />

      <v-file-input
        label="Outlined"
        variant="outlined"
      />

      <v-file-input
        label="Plain"
        variant="plain"
        hide-details
      />
    </v-col>

    <v-col
      cols="12"
      sm="6"
    >
      <v-file-input
        label="Filled"
        variant="filled"
      />

      <v-file-input
        label="Contained"
        variant="contained"
      />

      <v-file-input
        label="Underlined"
        variant="underlined"
        hide-details
      />
    </v-col>
  </v-row>
</template>
