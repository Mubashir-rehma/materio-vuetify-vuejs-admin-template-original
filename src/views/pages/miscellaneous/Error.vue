<template>
  <div id="misc">
    <v-img
      class="misc-bg"
      height="226"
      :src="`/images/misc/misc-bg-${$vuetify.theme.dark ? 'dark':'light'}.png`"
    ></v-img>

    <v-img
      class="misc-tree"
      src="/images/misc/tree-4.png"
    ></v-img>

    <div class="app-title text-center">
      <h2 class="text-2xl font-weight-semibold text--primary">
        Page Not Found ⚠️
      </h2>
      <p class="text-sm">
        we couldn't find the page you are looking for
      </p>

      <div class="misc-characters d-flex justify-center">
        <v-img
          max-width="700"
          src="/images/3d-characters/error.png"
        ></v-img>
      </div>

      <v-btn
        color="primary"
        to="/"
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
