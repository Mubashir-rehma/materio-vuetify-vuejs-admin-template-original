<template>
  <v-list>
    <v-list-item>
      <v-list-item-icon>
        <v-img
          :src="appLogo"
          max-height="30px"
          max-width="30px"
          alt="logo"
        ></v-img>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class="title">
          {{ appName }}
        </v-list-item-title>
      </v-list-item-content>
      <v-list-item-icon @click="menuIsVerticalNavMini = !menuIsVerticalNavMini">
        <v-icon v-show="!menuIsVerticalNavMini">
          {{ icons.mdiRecordCircleOutline }}
        </v-icon>
        <v-icon v-show="menuIsVerticalNavMini">
          {{ icons.mdiRadioboxBlank }}
        </v-icon>
      </v-list-item-icon>
    </v-list-item>
  </v-list>
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
