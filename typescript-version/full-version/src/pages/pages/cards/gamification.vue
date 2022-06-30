<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
      md="4"
      order="2"
      order-md="1"
    >
      <CardAward />
    </v-col>

    <v-col
      cols="12"
      md="8"
      order="1"
      order-md="2"
      class="align-self-end mt-sm-10 mt-md-0"
    >
      <CardCongratulations />
    </v-col>

    <v-col
      cols="12"
      md="8"
      order="4"
      order-md="3"
      class="align-self-end mt-sm-10 mt-md-0"
    >
      <CardWelcome />
    </v-col>

    <v-col
      cols="12"
      md="4"
      sm="6"
      order="3"
      order-md="4"
    >
      <CardUpgrade />
    </v-col>
  </v-row>
</template>
