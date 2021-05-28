<template>
  <div class="misc-not-authorized">
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
        You are not authorized! 🔐
      </h2>
      <p class="text-sm mx-4">
        You don’t have permission to access this page. Go Home!
      </p>

      <div class="misc-characters d-flex justify-center">
        <v-img
          max-width="476"
          src="/images/3d-characters/pose-f-9.png"
        ></v-img>
      </div>

      <v-btn
        color="primary"
        href="/"
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
.misc-not-authorized {
  overflow: hidden;
  .app-title {
    margin-top: 6.25rem;
  }
  .misc-characters {
    margin-left: 15rem;
    margin-bottom: 3.313rem;
    margin-top: 3rem;
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
  .misc-not-authorized {
    .misc-tree {
      height: 150px !important;
      width: 150px;
    }
  }
}
</style>
