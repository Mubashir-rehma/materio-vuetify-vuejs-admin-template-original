<template>
  <v-card class="triangle-card">
    <v-row class="ma-0 pa-0">
      <v-col cols="8">
        <v-card-title class="title text-no-wrap pt-1 pl-2">
          Congratulations John! 🥳
        </v-card-title>
        <v-card-subtitle class="text-no-wrap pl-2">
          You have won Trophy
        </v-card-subtitle>
        <v-card-text class="d-flex align-center mt-2 pb-2 pl-2">
          <div>
            <p class="text-xl font-weight-semibold primary--text mb-2">
              $42.8k
            </p>

            <v-btn
              small
              color="primary"
            >
              View Sales
            </v-btn>
          </div>
        </v-card-text>
      </v-col>

      <v-col cols="4">
        <v-img
          contain
          height="180"
          width="159"
          :src="`/images/misc/triangle-${$vuetify.theme.dark ? 'dark':'light'}.png`"
          class="triangle-bg"
        ></v-img>
        <v-img
          contain
          height="108"
          max-width="83"
          class="analytics-trophy"
          src="/images/misc/trophy.png"
        ></v-img>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.triangle-card {
  position: relative;
  .triangle-bg {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .analytics-trophy {
    position: absolute;
    bottom: 10%;
    right: 8%;
  }
}

@media (max-width: 400px) {
  .title {
    font-size: 1.2rem !important;
  }
}
</style>
