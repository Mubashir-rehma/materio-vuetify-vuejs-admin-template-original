<template>
  <div class="misc-under-maintenance">
    <v-img
      class="misc-bg"
      height="226"
      :src="`/images/misc/misc-bg-${$vuetify.theme.dark ? 'dark':'light'}.png`"
    ></v-img>

    <v-img
      class="misc-tree"
      src="/images/misc/tree.png"
    ></v-img>

    <div class="app-title text-center">
      <h2 class="text-2xl font-weight-semibold text--primary">
        Under Maintenance! 🚧
      </h2>
      <p class="text-sm">
        Sorry for the inconvenience but we're performing some maintenance at the moment
      </p>

      <div class="misc-characters d-flex justify-center">
        <v-img
          max-width="424"
          src="/images/3d-characters/pose-36.png"
        ></v-img>
      </div>

      <v-btn
        color="primary"
        to="/"
      >
        Back to home
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.misc-under-maintenance {
  overflow: hidden;
  .app-title {
    margin-top: 6.25rem;
  }
  .misc-characters {
    margin-left: 17rem;
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
}

@media (max-width: 550px) {
  .misc-under-maintenance {
    .misc-tree {
      height: 150px !important;
      width: 150px;
    }
  }
}
</style>
