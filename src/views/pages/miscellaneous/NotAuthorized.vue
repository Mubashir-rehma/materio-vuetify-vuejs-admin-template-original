<template>
  <div id="misc">
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
      <p class="text-sm">
        You don’t have permission to access this page. Go Home!
      </p>

      <div class="misc-characters d-flex justify-center">
        <v-img
          max-width="700"
          src="/images/3d-characters/not-authorized.png"
        ></v-img>
      </div>

      <v-btn
        color="primary"
        href="/"
        class="mb-4"
      >
        Back to home
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '@core/preset/preset/misc.scss';
</style>
