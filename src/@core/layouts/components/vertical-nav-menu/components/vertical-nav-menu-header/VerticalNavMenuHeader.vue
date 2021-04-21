<template>
  <div class="vertical-nav-header d-flex align-items-center justify-space-between pl-6 pr-2 pt-5">
    <router-link
      to="/"
      class="d-flex align-items-center text-decoration-none"
    >
      <v-img
        :src="appLogo"
        max-height="30px"
        max-width="30px"
        alt="logo"
        contain
        class="mr-3"
      ></v-img>
      <h2 class="app-title text--primary">
        {{ appName }}
      </h2>
    </router-link>

    <div
      class="d-flex"
      @click="menuIsVerticalNavMini = !menuIsVerticalNavMini"
    >
      <v-icon v-show="!menuIsVerticalNavMini">
        {{ icons.mdiRecordCircleOutline }}
      </v-icon>
      <v-icon v-show="menuIsVerticalNavMini">
        {{ icons.mdiRadioboxBlank }}
      </v-icon>
    </div>
  </div>
</template>

<script>
import { mdiRadioboxBlank, mdiRecordCircleOutline } from '@mdi/js'
import useAppConfig from '@core/@app-config/useAppConfig'
import themeConfig from '@themeConfig'

export default {
  setup() {
    const { menuIsVerticalNavMini } = useAppConfig()

    return {
      menuIsVerticalNavMini,
      appName: themeConfig.app.name,
      appLogo: themeConfig.app.logo,

      // Icons
      icons: {
        mdiRadioboxBlank,
        mdiRecordCircleOutline,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
// TODO: This is duplicated in LayoutContentHorizontalNav.vue
.app-title {
  font-size: 1.25rem;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.3px;
}

// .vertical-nav-header {
//   .v-navigation-drawer--mini-variant & {
//     padding-left: 14px !important;
//   }
// }
</style>
