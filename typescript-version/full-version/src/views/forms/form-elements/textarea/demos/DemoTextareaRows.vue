<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
    >
      <v-textarea
        label="One row"
        auto-grow
        variant="outlined"
        rows="1"
        row-height="15"
      />
    </v-col>

    <v-col
      cols="12"
      sm="6"
    >
      <v-textarea
        variant="outlined"
        auto-grow
        label="Two rows"
        rows="2"
        row-height="20"
      />
    </v-col>

    <v-col
      cols="12"
      sm="6"
    >
      <v-textarea
        label="Three rows"
        auto-grow
        variant="outlined"
        rows="3"
        row-height="25"
      />
    </v-col>

    <v-col
      cols="12"
      sm="6"
    >
      <v-textarea
        variant="outlined"
        auto-grow
        label="Four rows"
        rows="4"
        row-height="30"
        hide-details
      />
    </v-col>
  </v-row>
</template>
