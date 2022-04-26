<template>
  <v-tabs
    grow
    color="primary"
  >
    <v-tab>
      <v-badge
        content="3"
        color="primary"
        :offset-x="-12"
        :offset-y="-4"
      >
        Item One
      </v-badge>
    </v-tab>

    <v-tab>
      <v-badge
        content="1"
        :offset-x="-12"
        :offset-y="-4"
        color="primary"
      >
        Item Two
      </v-badge>
    </v-tab>

    <v-tab>
      <v-badge
        content="2"
        :offset-x="-12"
        :offset-y="-4"
        color="primary"
      >
        Item Three
      </v-badge>
    </v-tab>
  </v-tabs>
</template>
