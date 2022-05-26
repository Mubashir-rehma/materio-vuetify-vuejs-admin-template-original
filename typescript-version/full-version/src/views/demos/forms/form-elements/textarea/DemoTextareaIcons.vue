<template>
  <v-row>
    <v-col cols="12">
      <v-textarea
        label="prepend-icon"
        rows="1"
        prepend-icon="mdi-comment-outline"
      />
    </v-col>

    <v-col cols="12">
      <v-textarea
        append-icon="mdi-comment-outline"
        label="append-icon"
        rows="1"
      />
    </v-col>

    <v-col cols="12">
      <v-textarea
        prepend-inner-icon="mdi-comment-outline"
        label="prepend-inner-icon"
        rows="1"
      />
    </v-col>

    <v-col cols="12">
      <v-textarea
        append-inner-icon="mdi-comment-outline"
        label="append-inner-icon"
        rows="1"
      />
    </v-col>
  </v-row>
</template>
