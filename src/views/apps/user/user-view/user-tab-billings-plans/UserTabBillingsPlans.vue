<template>
  <div class="user-tab-billings-plans">
    <!-- current plan -->
    <v-card class="mb-7">
      <v-card-title>
        Current plan
      </v-card-title>

      <v-card-text>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <h4 class="mb-1">
              <span class="font-weight-medium me-1">Your Current Plan is</span>
              <span>Basic</span>
            </h4>
            <p>A simple start for everyone</p>

            <h4 class="font-weight-medium mb-1">
              Active until Dec 09, 2021
            </h4>
            <p>We will send you a notification upon Subscription expiration</p>

            <div class="d-flex align-center">
              <h4 class="font-weight-medium me-2 mb-1">
                $99 Per Month
              </h4>
              <v-chip
                label
                color="primary"
                small
                class="v-chip-light-bg primary--text font-weight-semibold mb-1"
              >
                Popular
              </v-chip>
            </div>
            <p>Standard plan for small to medium businesses</p>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-alert
              color="warning"
              text
            >
              <p class="font-weight-semibold mb-1">
                We need your attention!
              </p>
              <p class="text-sm mb-0">
                your plan requires updates
              </p>
            </v-alert>

            <p class="d-flex font-weight-semibold text--primary mt-3 mb-2">
              <span>Days</span>
              <v-spacer></v-spacer>
              <span>4 of 30 Days</span>
            </p>
            <v-progress-linear
              value="85"
              height="10"
              rounded
            ></v-progress-linear>
            <p class="mt-2">
              4 days remaining
            </p>
          </v-col>

          <v-col
            cols="12"
            class="d-flex align-center flex-wrap"
          >
            <v-btn
              color="primary"
              class="me-3 mb-3 mb-sm-0"
              @click.stop="$emit('update:is-plan-upgrade-dialog-visible',true)"
            >
              Upgrade Plan
            </v-btn>
            <v-btn
              color="error"
              outlined
              class="mb-3 mb-sm-0"
            >
              Cancel Subscription
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- payment cards -->
    <v-card class="mb-7">
      <v-card-title>
        <span>Payment Methods</span>
        <v-spacer></v-spacer>
        <v-btn color="primary">
          <v-icon
            size="18"
            class="me-1"
          >
            {{ icons.mdiPlus }}
          </v-icon>
          <span>Add Card</span>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <v-card
          v-for="(paymentCard,index) in paymentCards"
          :key="paymentCard.id"
          outlined
          :class="index < paymentCards.length -1 ? 'mb-4':''"
        >
          <v-card-text class="d-flex align-center">
            <div>
              <v-img
                contain
                :max-width="paymentCard.imgWidth"
                :src="`/images/logos/${paymentCard.cardImg}`"
              ></v-img>
              <div class="text--primary font-weight-medium mt-2">
                <span class="text-base me-2">{{ paymentCard.owner }}</span>

                <v-chip
                  v-if="paymentCard.cardStatus"
                  :color="resolvePaymentStatusVariant(paymentCard.cardStatus)"
                  label
                  small
                  :class="`v-chip-light-bg ${resolvePaymentStatusVariant(paymentCard.cardStatus)}--text`"
                >
                  {{ paymentCard.cardStatus }}
                </v-chip>
              </div>
              <span>
                <span class="text-xs">**** ****</span>
                <span>{{ paymentCard.cardLastDigit.substring(paymentCard.cardLastDigit.length - 4) }}</span>
              </span>
            </div>

            <v-spacer></v-spacer>

            <div class="text-right">
              <v-btn
                color="primary"
                outlined
                class="mb-5"
                @click="editCardDetails(paymentCard.id)"
              >
                <span class="d-none d-sm-block">Edit</span>
                <v-icon
                  size="20"
                  class="d-block d-sm-none"
                >
                  {{ icons.mdiSquareEditOutline }}
                </v-icon>
              </v-btn>
              <v-btn
                color="secondary"
                outlined
                class="ms-3 mb-5"
              >
                <span class="d-none d-sm-block">Delete</span>
                <v-icon
                  size="20"
                  class="d-block d-sm-none"
                >
                  {{ icons.mdiDeleteOutline }}
                </v-icon>
              </v-btn>

              <p class="mb-0">
                <span class="me-1">Card expires at</span>
                <span>{{ paymentCard.cardExpires }}</span>
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-card-text>
    </v-card>

    <!-- Billing Address -->
    <v-card>
      <v-card-title>
        <span>Billing Address</span>
        <v-spacer></v-spacer>
        <v-btn color="primary">
          Edit Address
        </v-btn>
      </v-card-title>

      <v-card-text>
        <v-row>
          <v-col
            cols="12"
            lg="6"
          >
            <table class="billing-address-table">
              <tr>
                <td class="billing-title">
                  <p class="text-no-wrap text--primary font-weight-medium">
                    Company Name:
                  </p>
                </td>
                <td><p>PIXINVENT</p></td>
              </tr>
              <tr>
                <td class="billing-title">
                  <p class="text-no-wrap text--primary font-weight-medium">
                    Billing Email:
                  </p>
                </td>
                <td><p>gertrude@gmail.com</p></td>
              </tr>
              <tr>
                <td class="billing-title">
                  <p class="text-no-wrap text--primary font-weight-medium">
                    Tax ID:
                  </p>
                </td>
                <td><p>TAX-875623</p></td>
              </tr>
              <tr>
                <td class="billing-title">
                  <p class="text-no-wrap text--primary font-weight-medium">
                    VAT Number:
                  </p>
                </td>
                <td><p>SDF754K77</p></td>
              </tr>
              <tr>
                <td class="billing-title">
                  <p class="text-no-wrap text--primary font-weight-medium mb-0">
                    Billing Address:
                  </p>
                </td>
                <td>
                  <p class="mb-0">
                    100 Water Plant Avenue, Building 1303 Wake Island
                  </p>
                </td>
              </tr>
            </table>
          </v-col>
          <v-col
            cols="12"
            lg="6"
          >
            <table class="billing-address-table">
              <tr>
                <td class="billing-title">
                  <p class="text-no-wrap text--primary font-weight-medium">
                    Contact:
                  </p>
                </td>
                <td><p>+1(609) 933-44-22</p></td>
              </tr>
              <tr>
                <td class="billing-title">
                  <p class="text-no-wrap text--primary font-weight-medium">
                    Country:
                  </p>
                </td>
                <td><p>Wake Island</p></td>
              </tr>
              <tr>
                <td class="billing-title">
                  <p class="text-no-wrap text--primary font-weight-medium">
                    State:
                  </p>
                </td>
                <td><p>Capholim</p></td>
              </tr>
              <tr>
                <td class="billing-title">
                  <p class="text-no-wrap text--primary font-weight-medium">
                    Zip Code:
                  </p>
                </td>
                <td><p>403114</p></td>
              </tr>
            </table>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- edit card details -->
    <user-tab-payment-details-edit
      :is-plan-upgrade-open.sync="isPlanUpgradeOpen"
      :card-detail="cardDetail"
    ></user-tab-payment-details-edit>
  </div>
</template>

<script>
import { mdiPlus, mdiDeleteOutline, mdiSquareEditOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'
import UserTabPaymentDetailsEdit from './UserTabPaymentDetailsEdit.vue'

export default {
  components: {
    UserTabPaymentDetailsEdit,
  },
  props: {
    isPlanUpgradeDialogVisible: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const paymentCards = [
      {
        id: 1,
        cardImg: 'master.png',
        imgWidth: '45',
        owner: 'Tom McBride',
        cardLastDigit: '5577 0000 5577 9865',
        cardExpires: '12/24',
        cardStatus: 'Primary',
      },
      {
        id: 2,
        cardImg: 'visa.png',
        imgWidth: '60',
        owner: 'Mildred Wagner',
        cardLastDigit: '4532361620705678',
        cardExpires: '02/24',
      },
      {
        id: 3,
        cardImg: 'ae.png',
        imgWidth: '80',
        owner: 'Lester Jennings',
        cardLastDigit: '6011 0009 9013 9424',
        cardExpires: '02/24',
        cardStatus: 'Expired',
      },
    ]

    const cardDetail = ref({})
    const isPlanUpgradeOpen = ref(false)

    const resolvePaymentStatusVariant = status => {
      if (status === 'Primary') return 'primary'
      if (status === 'Expired') return 'error'

      return 'secondary'
    }

    const editCardDetails = cardID => {
      const detail = paymentCards.filter(item => item.id === cardID)
      cardDetail.value = JSON.parse(JSON.stringify(detail[0]))
      Object.assign(cardDetail.value, { saveCardDetails: true })

      if (isPlanUpgradeOpen.value) {
        isPlanUpgradeOpen.value = false
      } else {
        isPlanUpgradeOpen.value = true
      }
    }

    return {
      paymentCards,
      cardDetail,
      isPlanUpgradeOpen,

      resolvePaymentStatusVariant,
      editCardDetails,
      icons: {
        mdiPlus,
        mdiDeleteOutline,
        mdiSquareEditOutline,
      },
    }
  },
}
</script>
