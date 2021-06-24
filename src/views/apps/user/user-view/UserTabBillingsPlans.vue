<template>
  <div class="user-tab-billings-plans">
    <!-- current plan -->
    <v-card class="mb-7">
      <v-card-title>
        Current plan
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <h4 class="mb-1">
              <span class="font-weight-medium mr-1">Your Current Plan is</span>
              <span>Basic</span>
            </h4>
            <p>A simple start for everyone</p>

            <h4 class="font-weight-medium mb-1">
              Active until Dec 09, 2021
            </h4>
            <p>We will send you a notification upon Subscription expiration</p>

            <div class="d-flex align-center">
              <h4 class="font-weight-medium mr-2 mb-1">
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
              class="mr-3 mb-3 mb-sm-0"
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

    <!-- payment methods -->
    <v-card class="mb-7">
      <v-card-title>
        <span>Payment Methods</span>
        <v-spacer></v-spacer>
        <v-btn color="primary">
          <v-icon
            size="18"
            class="mr-1"
          >
            {{ icons.mdiPlus }}
          </v-icon>
          <span>Add Card</span>
        </v-btn>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text>
        <v-card
          v-for="(payment,index) in paymentMethods"
          :key="payment.cardImg"
          outlined
          :class="index < paymentMethods.length -1 ? 'mb-4':''"
        >
          <v-card-text class="d-flex align-center">
            <div>
              <v-img
                contain
                :max-width="payment.imgWidth"
                :src="`/images/logos/${payment.cardImg}`"
              ></v-img>
              <div class="text--primary font-weight-medium mt-2">
                <span class="text-base mr-2">{{ payment.owner }}</span>

                <v-chip
                  v-if="payment.cardStatus"
                  :color="resolvePaymentStatusVariant(payment.cardStatus)"
                  label
                  small
                  :class="`v-chip-light-bg ${resolvePaymentStatusVariant(payment.cardStatus)}--text`"
                >
                  {{ payment.cardStatus }}
                </v-chip>
              </div>
              <span>
                <span class="text-xs">**** ****</span>
                <span>{{ payment.cardLastDigit.substring(payment.cardLastDigit.length - 4) }}</span>
              </span>
            </div>

            <v-spacer></v-spacer>

            <div class="text-right">
              <v-btn
                color="primary"
                outlined
                class="mb-5"
                @click="editCardDetails(payment.id)"
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
                class="ml-3 mb-5"
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
                <span class="mr-1">Card expires at</span>
                <span>{{ payment.cardExpires }}</span>
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

      <v-divider></v-divider>

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
                  <p class="billing-title text-no-wrap text--primary font-weight-medium">
                    Billing Email:
                  </p>
                </td>
                <td><p>gertrude@gmail.com</p></td>
              </tr>
              <tr>
                <td class="billing-title">
                  <p class="billing-title text-no-wrap text--primary font-weight-medium">
                    Tax ID:
                  </p>
                </td>
                <td><p>TAX-875623</p></td>
              </tr>
              <tr>
                <td class="billing-title">
                  <p class="billing-title text-no-wrap text--primary font-weight-medium">
                    VAT Number:
                  </p>
                </td>
                <td><p>SDF754K77</p></td>
              </tr>
              <tr>
                <td class="billing-title">
                  <p class="billing-title text-no-wrap text--primary font-weight-medium mb-0">
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

    <!-- plan upgrade dialog -->
    <v-dialog
      v-model="isPlanUpgrade"
      max-width="650"
    >
      <v-card class="user-card-detail pa-sm-10 pa-3">
        <v-card-title class="user-edit-title justify-center text-h5">
          Edit Card
        </v-card-title>
        <v-card-text class="text-center mt-n2">
          Edit card for future billing
        </v-card-text>

        <v-card-text class="mt-5">
          <v-form class="multi-col-validation">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="cardDetail.cardLastDigit"
                  label="Card Number"
                  outlined
                  dense
                >
                  <template v-slot:append>
                    <img
                      max-width="60"
                      :src="`/images/logos/${cardDetail.cardImg}`"
                      alt="card-logo"
                    />
                  </template>
                </v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="9"
              >
                <v-text-field
                  v-model="cardDetail.owner"
                  outlined
                  dense
                  label="Name On Card"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="3"
              >
                <v-text-field
                  v-model="cardDetail.cardExpires"
                  outlined
                  dense
                  label="Expiration Date"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="9"
              >
                <v-select
                  v-model="cardDetail.cardStatus"
                  label="Card Status"
                  outlined
                  :items="['Primary','Expired','Active']"
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="3"
              >
                <v-text-field
                  outlined
                  label="CVV"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-switch
                  v-model="cardDetail.saveCardDetails"
                  hide-details
                  class="mt-0"
                >
                  <template v-slot:label>
                    <span>Save Card for future billing?</span>
                  </template>
                </v-switch>
              </v-col>

              <v-col
                cols="12"
                class="d-flex justify-center"
              >
                <v-btn
                  color="primary"
                  class="mr-3"
                  @click="isPlanUpgrade = !isPlanUpgrade"
                >
                  submit
                </v-btn>
                <v-btn
                  color="secondary"
                  outlined
                  @click="isPlanUpgrade = !isPlanUpgrade"
                >
                  Cancel
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mdiPlus, mdiDeleteOutline, mdiSquareEditOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  props: {
    isPlanUpgradeDialogVisible: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const paymentMethods = [
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

    const isPlanUpgrade = ref(false)

    const cardDetail = ref({})

    // card details
    const editCardDetails = cardID => {
      const detail = paymentMethods.filter(item => item.id === cardID)
      cardDetail.value = JSON.parse(JSON.stringify(detail[0]))
      Object.assign(cardDetail.value, { saveCardDetails: true })

      if (isPlanUpgrade.value) {
        isPlanUpgrade.value = false
      } else {
        isPlanUpgrade.value = true
      }
    }

    const resolvePaymentStatusVariant = status => {
      if (status === 'Primary') return 'primary'
      if (status === 'Expired') return 'error'

      return 'secondary'
    }

    return {
      paymentMethods,
      isPlanUpgrade,
      cardDetail,
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
