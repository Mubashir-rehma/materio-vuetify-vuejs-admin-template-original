<template>
  <div class="misc-coming-soon">
    <v-img
      class="misc-bg"
      height="226"
      :src="`/images/misc/misc-bg-${$vuetify.theme.dark ? 'dark':'light'}.png`"
    ></v-img>

    <v-img
      class="misc-tree"
      src="/images/misc/tree-2.png"
    ></v-img>

    <div class="app-title text-center">
      <h2 class="text-2xl font-weight-semibold text--primary">
        We are launching soon 🚀
      </h2>
      <p class="text-sm">
        Our website is opening soon. Please register to get notified when it's ready!
      </p>

      <div class="d-flex align-center justify-center">
        <v-text-field
          outlined
          hide-details
          dense
          placeholder="Enter your email or username"
          class="misc-input-width mr-3"
        ></v-text-field>
        <v-btn color="primary">
          Notify
        </v-btn>
      </div>

      <div class="misc-characters d-flex justify-center">
        <v-img
          max-width="401"
          src="/images/3d-characters/pose-9.png"
        ></v-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.misc-coming-soon {
  overflow: hidden;
  .app-title {
    margin-top: 6.25rem;
  }
  .misc-characters {
    margin-left: 13rem;
    margin-bottom: 3.313rem;
    margin-top: 5rem;
  }
  .misc-bg,
  .misc-tree {
    position: absolute;
  }

  .misc-bg {
    bottom: 0;
  }

  .misc-tree {
    height: 226px;
    max-width: 300px;
    left: 0;
    bottom: 8%;
  }
  .misc-input-width {
    max-width: 15.125rem;
  }
}

@media (max-width: 550px) {
  .misc-coming-soon {
    .misc-tree {
      height: 150px !important;
      width: 150px;
    }
  }
}
</style>
