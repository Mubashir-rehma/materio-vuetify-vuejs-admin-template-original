<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
    >
      <v-textarea
        label="Default"
        rows="2"
      />

      <v-textarea
        label="Filled"
        rows="2"
        variant="filled"
      />

      <v-textarea
        label="Plain"
        rows="2"
        variant="plain"
        hide-details
      />
    </v-col>

    <v-col
      cols="12"
      sm="6"
    >
      <v-textarea
        label="Contained"
        rows="2"
        variant="contained"
      />

      <v-textarea
        label="Outlined"
        rows="2"
        variant="outlined"
      />

      <v-textarea
        label="Underlined"
        rows="2"
        variant="underlined"
        hide-details
      />
    </v-col>
  </v-row>
</template>
