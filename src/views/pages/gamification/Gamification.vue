<template>
  <v-row>
    <v-col
      cols="12"
      md="4"
      sm="6"
      order="2"
      order-md="1"
      class="mb-10 mb-md-0"
    >
      <v-card>
        <v-card-title>Congratulations John! 🥳</v-card-title>
        <v-card-subtitle>Best seller of the month</v-card-subtitle>
        <v-card-text class="d-flex align-center">
          <div>
            <p class="text-2xl font-weight-semibold primary--text mb-0">
              $42.8k
            </p>
            <p>78% of target 🤟🏻</p>
            <v-btn color="primary">
              View Sales
            </v-btn>
          </div>
          <v-spacer></v-spacer>
          <v-img
            contain
            height="108"
            max-width="83"
            src="/images/misc/trophy.png"
          ></v-img>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col
      cols="12"
      md="8"
      order="1"
      order-md="2"
      class="align-self-end mb-10 mb-md-3"
    >
      <v-card class="flora-card">
        <v-row>
          <v-col cols="6">
            <v-card-title class="text-2xl">
              <span>Congratulations</span> <span class="font-weight-bold mx-1">Flora!</span><span>🎉</span>
            </v-card-title>
            <v-card-text>
              You have done 72% 🤩 more sales today.
              Check your new raising badge in your profile.
            </v-card-text>
          </v-col>
          <v-col cols="6">
            <v-img
              height="200"
              width="324"
              src="/images/3d-characters/illustration-flora.png"
              class="flora-img"
            ></v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col
      cols="12"
      md="8"
      order="4"
      order-md="3"
      class="align-self-end"
    >
      <v-card class="john-card">
        <v-row>
          <v-col cols="6">
            <v-card-title class="text-2xl">
              <span>Welcome back </span> <span class="font-weight-bold mx-1">John!</span> <span>🥳</span>
            </v-card-title>
            <v-card-text>
              You have 4 task to finish today,
              Your already completed 68% 😍 task good job.
            </v-card-text>
          </v-col>
          <v-col cols="6">
            <v-img
              height="200"
              width="324"
              src="/images/3d-characters/illustration-john.png"
              class="john-img"
            ></v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col
      cols="12"
      md="4"
      sm="6"
      order="3"
      order-md="4"
      class="mb-10 mb-md-0 mt-3"
    >
      <v-card class="triangle-card">
        <v-row>
          <v-col
            cols="8"
            class="py-0"
          >
            <v-card-title>Upgrade Account 👩🏻‍💻</v-card-title>
            <v-card-subtitle>Add 15 team members</v-card-subtitle>
            <v-card-text>
              <p class="text-2xl font-weight-semibold primary--text mb-0">
                $199
              </p>
              <p>40% OFF 🤩</p>
              <v-btn color="primary">
                Upgrade Plan
              </v-btn>
            </v-card-text>
          </v-col>
          <v-col
            cols="4"
            class="py-0"
          >
            <v-img
              contain
              width="166px"
              height="190px"
              :src="`/images/misc/triangle-${$vuetify.theme.dark ? 'dark':'light'}.png`"
              class="triangle-bg"
            ></v-img>
            <v-img
              contain
              height="176"
              max-width="45"
              src="/images/3d-characters/pose-m-9.png"
            ></v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.flora-card,
.john-card {
  position: relative;
  .flora-img,
  .john-img {
    position: absolute;
    bottom: 0;
  }
}
.triangle-card {
  position: relative;
  .triangle-bg {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
