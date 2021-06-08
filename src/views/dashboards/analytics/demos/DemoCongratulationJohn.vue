<template>
  <v-card class="triangle-card">
    <v-row>
      <v-col cols="8">
        <v-card-title class="title text-no-wrap pt-2">
          Congratulations John! 🥳
        </v-card-title>
        <v-card-subtitle class="text-no-wrap">
          Best seller of the month
        </v-card-subtitle>
        <v-card-text class="d-flex align-center pb-2">
          <div>
            <p class="text-2xl font-weight-semibold primary--text mb-0">
              $42.8k
            </p>
            <p>78% of target 🤟🏻</p>
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
          width="166px"
          height="190px"
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
    right: 10%;
  }
}

@media (max-width: 400px) {
  .title {
    font-size: 1.2rem !important;
  }
}
</style>
