<template>
  <div id="icons-container">
    <div class="d-flex align-center flex-wrap">
      <v-tooltip
        v-for="item in iconsList"
        :key="item.icon"
        top
      >
        <template v-slot:activator="{ on, attrs }">
          <v-card
            v-bind="attrs"
            class="icons-card mb-6 me-6"
            v-on="on"
          >
            <v-card-text class="py-3 px-4">
              <v-icon size="30">
                {{ item.icon }}
              </v-icon>
            </v-card-text>
          </v-card>
        </template>
        <span>{{ item.name }}</span>
      </v-tooltip>
    </div>

    <!-- more icons -->
    <div class="text-center">
      <v-btn
        href="https://materialdesignicons.com/"
        target="_blank"
        rel="nofollow"
        color="primary"
      >
        View All Material Design Icons
      </v-btn>
    </div>
  </div>
</template>

<script>
import {
  mdiMagnify,
  mdiAbTesting,
  mdiAbacus,
  mdiAbjadArabic,
  mdiAbjadHebrew,
  mdiAbugidaDevanagari,
  mdiAbugidaThai,
  mdiAccessPoint,
  mdiAccessPointCheck,
  mdiAccessPointMinus,
  mdiAccessPointNetwork,
  mdiAccessPointNetworkOff,
  mdiAccessPointOff,
  mdiAccessPointPlus,
  mdiAccessPointRemove,
  mdiAccount,
  mdiAccountAlert,
  mdiAccountAlertOutline,
  mdiAccountArrowLeft,
  mdiAccountArrowLeftOutline,
  mdiAccountArrowRight,
  mdiAccountArrowRightOutline,
  mdiAccountBox,
  mdiAccountBoxMultiple,
  mdiAccountBoxMultipleOutline,
  mdiAccountBoxOutline,
  mdiAccountCancel,
  mdiAccountCancelOutline,
  mdiAccountCash,
  mdiAccountCashOutline,
  mdiAccountCheck,
  mdiAccountCheckOutline,
  mdiAccountChild,
  mdiAccountChildCircle,
  mdiAccountChildOutline,
  mdiAccountCircle,
  mdiAccountCircleOutline,
  mdiAccountClock,
  mdiAccountClockOutline,
  mdiAccountCog,
  mdiAccountCogOutline,
  mdiAccountConvert,
  mdiAccountConvertOutline,
  mdiAccountCowboyHat,
  mdiAccountDetails,
  mdiAccountDetailsOutline,
} from '@mdi/js'

export default {
  setup() {
    // icons list
    const iconsList = [
      { icon: mdiAbTesting, name: 'mdiAbTesting' },
      { icon: mdiAbacus, name: 'mdiAbacus' },
      { icon: mdiAbjadArabic, name: 'mdiAbjadArabic' },
      { icon: mdiAbjadHebrew, name: 'mdiAbjadHebrew' },
      { icon: mdiAbugidaDevanagari, name: 'mdiAbugidaDevanagari' },
      { icon: mdiAbugidaThai, name: 'mdiAbugidaThai' },
      { icon: mdiAccessPoint, name: 'mdiAccessPoint' },
      { icon: mdiAccessPointCheck, name: 'mdiAccessPointCheck' },
      { icon: mdiAccessPointMinus, name: 'mdiAccessPointMinus' },
      { icon: mdiAccessPointNetwork, name: 'mdiAccessPointNetwork' },
      { icon: mdiAccessPointNetworkOff, name: 'mdiAccessPointNetworkOff' },
      { icon: mdiAccessPointOff, name: 'mdiAccessPointOff' },
      { icon: mdiAccessPointPlus, name: 'mdiAccessPointPlus' },
      { icon: mdiAccessPointRemove, name: 'mdiAccessPointRemove' },
      { icon: mdiAccount, name: 'mdiAccount' },
      { icon: mdiAccountAlert, name: 'mdiAccountAlert' },
      { icon: mdiAccountAlertOutline, name: 'mdiAccountAlertOutline' },
      { icon: mdiAccountArrowLeft, name: 'mdiAccountArrowLeft' },
      { icon: mdiAccountArrowLeftOutline, name: 'mdiAccountArrowLeftOutline' },
      { icon: mdiAccountArrowRight, name: 'mdiAccountArrowRight' },
      { icon: mdiAccountArrowRightOutline, name: 'mdiAccountArrowRightOutline' },
      { icon: mdiAccountBox, name: 'mdiAccountBox' },
      { icon: mdiAccountBoxMultiple, name: 'mdiAccountBoxMultiple' },
      { icon: mdiAccountBoxMultipleOutline, name: 'mdiAccountBoxMultipleOutline' },
      { icon: mdiAccountBoxOutline, name: 'mdiAccountBoxOutline' },
      { icon: mdiAccountCancel, name: 'mdiAccountCancel' },
      { icon: mdiAccountCancelOutline, name: 'mdiAccountCancelOutline' },
      { icon: mdiAccountCash, name: 'mdiAccountCash' },
      { icon: mdiAccountCashOutline, name: 'mdiAccountCashOutline' },
      { icon: mdiAccountCheck, name: 'mdiAccountCheck' },
      { icon: mdiAccountCheckOutline, name: 'mdiAccountCheckOutline' },
      { icon: mdiAccountChild, name: 'mdiAccountChild' },
      { icon: mdiAccountChildCircle, name: 'mdiAccountChildCircle' },
      { icon: mdiAccountChildOutline, name: 'mdiAccountChildOutline' },
      { icon: mdiAccountCircle, name: 'mdiAccountCircle' },
      { icon: mdiAccountCircleOutline, name: 'mdiAccountCircleOutline' },
      { icon: mdiAccountClock, name: 'mdiAccountClock' },
      { icon: mdiAccountClockOutline, name: 'mdiAccountClockOutline' },
      { icon: mdiAccountCog, name: 'mdiAccountCog' },
      { icon: mdiAccountCogOutline, name: 'mdiAccountCogOutline' },
      { icon: mdiAccountConvert, name: 'mdiAccountConvert' },
      { icon: mdiAccountConvertOutline, name: 'mdiAccountConvertOutline' },
      { icon: mdiAccountCowboyHat, name: 'mdiAccountCowboyHat' },
      { icon: mdiAccountDetails, name: 'mdiAccountDetails' },
      { icon: mdiAccountDetailsOutline, name: 'mdiAccountDetailsOutline' },
    ]

    return {
      iconsList,
      icons: {
        mdiMagnify,
      },
    }
  },
}
</script>
