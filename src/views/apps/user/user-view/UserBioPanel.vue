<template>
  <v-row class="user-bio-panel">
    <!-- user profile -->
    <v-col cols="12">
      <v-card class="pt-10">
        <v-card-title class="justify-center flex-column">
          <v-avatar
            :color="userData.avatar ? '' : 'primary'"
            :class="userData.avatar ? '' : 'v-avatar-light-bg primary--text'"
            size="120"
            rounded
            class="mb-4"
          >
            <v-img
              v-if="userData.avatar"
              :src="`/images/avatars/${userData.avatar}`"
            ></v-img>
            <span
              v-else
              class="font-weight-medium"
            >{{ avatarText(userData.fullName) }}</span>
          </v-avatar>

          <span class="mb-2">{{ userData.fullName }}</span>

          <v-chip
            label
            small
            :color="resolveUserRoleVariant(userData.role)"
            :class="`v-chip-light-bg text-sm font-weight-semibold ${resolveUserRoleVariant(userData.role)}--text text-capitalize`"
          >
            {{ userData.role }}
          </v-chip>
        </v-card-title>

        <v-card-text class="d-flex justify-center flex-wrap mt-2  pr-sm-0">
          <div class="d-flex align-center mr-8 mb-4">
            <v-avatar
              size="40"
              rounded
              color="primary"
              class="v-avatar-light-bg primary--text mr-3"
            >
              <v-icon
                color="primary"
                size="22"
              >
                {{ icons.mdiCheck }}
              </v-icon>
            </v-avatar>

            <div>
              <h3 class="text-xl font-weight-medium mb-n1">
                {{ kFormatter(userData.taskDone) }}
              </h3>
              <span>Task Done</span>
            </div>
          </div>

          <div class="d-flex align-center mb-4 mr-4">
            <v-avatar
              size="40"
              rounded
              color="primary"
              class="v-avatar-light-bg primary--text mr-3"
            >
              <v-icon
                color="primary"
                size="22"
              >
                {{ icons.mdiBriefcaseVariantOutline }}
              </v-icon>
            </v-avatar>

            <div>
              <h3 class="text-xl font-weight-medium mb-n1">
                {{ kFormatter(userData.projectDone) }}
              </h3>
              <span>Project Done</span>
            </div>
          </div>
        </v-card-text>

        <v-card-text>
          <h2 class="text-xl font-weight-semibold mb-2">
            Details
          </h2>

          <v-divider></v-divider>

          <v-list>
            <v-list-item
              dense
              class="px-0 mb-n2"
            >
              <span class="font-weight-medium mr-2">Username:</span>
              <span class="text--secondary">{{ userData.username }}</span>
            </v-list-item>

            <v-list-item
              dense
              class="px-0 mb-n2"
            >
              <span class="font-weight-medium text-no-wrap mr-2">Billing Email:</span>
              <span class="text--secondary">{{ userData.email }}</span>
            </v-list-item>

            <v-list-item
              dense
              class="px-0 mb-n2"
            >
              <span class="font-weight-medium mr-2">Status:</span>
              <span class="text--secondary">
                <v-chip
                  small
                  label
                  :color="resolveUserStatusVariant(userData.status)"
                  :class="`v-chip-light-bg ${resolveUserStatusVariant(userData.status)}--text font-weight-medium text-capitalize`"
                >
                  {{ userData.status }}
                </v-chip>
              </span>
            </v-list-item>

            <v-list-item
              dense
              class="px-0 mb-n2"
            >
              <span class="font-weight-medium mr-2">Role:</span>
              <span class="text--secondary ">{{ userData.role }}</span>
            </v-list-item>
            <v-list-item
              dense
              class="px-0 mb-n2"
            >
              <span class="font-weight-medium mr-2">Tax ID:</span>
              <span class="text--secondary">{{ userData.taxId }}</span>
            </v-list-item>

            <v-list-item
              dense
              class="px-0 mb-n2"
            >
              <span class="font-weight-medium mr-2">Contact:</span>
              <span class="text--secondary">+1 {{ userData.contact }}</span>
            </v-list-item>

            <v-list-item
              dense
              class="px-0 mb-n2"
            >
              <span class="font-weight-medium mr-2">Language:</span>
              <span class="text--secondary">{{ userData.language }}</span>
            </v-list-item>

            <v-list-item
              dense
              class="px-0 mb-n2"
            >
              <span class="font-weight-medium mr-2">Country:</span>
              <span class="text--secondary">{{ userData.country }}</span>
            </v-list-item>
          </v-list>
        </v-card-text>

        <v-card-actions class="justify-center">
          <v-btn
            color="primary"
            class="mr-3"
            @click="isBioDialogOpen = !isBioDialogOpen"
          >
            Edit
          </v-btn>
          <v-btn
            color="error"
            outlined
          >
            Suspended
          </v-btn>
        </v-card-actions>
      </v-card>

      <!-- edit profile dialog -->
      <v-dialog
        v-model="isBioDialogOpen"
        max-width="650px"
      >
        <v-card class="user-edit-info pa-sm-10 pa-3">
          <v-card-title class="justify-center text-h5">
            Edit User Information
          </v-card-title>
          <v-card-text class="text-center mt-n2">
            Updating user details will receive a privacy audit.
          </v-card-text>

          <v-card-text class="mt-5">
            <v-form class="multi-col-validation">
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    v-model="userData.fullName"
                    outlined
                    dense
                    label="Full Name"
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    v-model="userData.username"
                    prefix="@"
                    outlined
                    dense
                    label="Username"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    v-model="userData.email"
                    outlined
                    dense
                    label="Billing Email"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-select
                    v-model="userData.status"
                    :items="statusOptions"
                    item-text="title"
                    item-value="value"
                    outlined
                    dense
                    label="Status"
                  ></v-select>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    v-model="userData.taxId"
                    outlined
                    dense
                    label="Tax ID"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    v-model="userData.contact"
                    prefix="+1"
                    outlined
                    dense
                    label="Contact"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-select
                    v-model="userData.language"
                    :items="languageOptions"
                    outlined
                    dense
                    label="Language"
                  ></v-select>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-select
                    v-model="userData.country"
                    :items="countries"
                    outlined
                    dense
                    label="Country"
                  ></v-select>
                </v-col>

                <v-col cols="12">
                  <v-switch
                    v-model="isBillingAddress"
                    class="mt-0"
                    hide-details
                  >
                    <template #label>
                      <span class="font-weight-medium text--primary">Use as a billing address?</span>
                    </template>
                  </v-switch>
                </v-col>

                <v-col
                  cols="12"
                  class="d-flex justify-center mt-3"
                >
                  <v-btn
                    color="primary"
                    class="mr-3"
                    type="submit"
                    @click.prevent="isBioDialogOpen = !isBioDialogOpen"
                  >
                    submit
                  </v-btn>

                  <v-btn
                    outlined
                    color="secondary"
                    @click.prevent="isBioDialogOpen = !isBioDialogOpen"
                  >
                    Discard
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-col>

    <!-- user plan -->
    <v-col cols="12">
      <v-card class="user-plan">
        <v-card-title class="flex-start align-start justify-space-between pb-0">
          <v-chip
            label
            color="primary"
            small
            class="v-chip-light-bg primary--text font-weight-semibold mb-3 mr-3"
          >
            {{ standardPlan.plan }}
          </v-chip>

          <div class="user-pricing">
            <sup class="primary--text">$</sup>
            <span class="text-5xl font-weight-semibold primary--text">{{ standardPlan.price }}</span>
            <sub class="text-base font-weight-light">/ month</sub>
          </div>
        </v-card-title>

        <v-card-text>
          <v-list class="pa-0">
            <v-list-item
              v-for="benefit in standardPlan.benefits"
              :key="benefit"
              dense
              class="px-0 mb-n2"
            >
              <v-icon
                size="10"
                class="mr-2"
              >
                {{ icons.mdiCheckboxBlankCircle }}
              </v-icon>
              <span>{{ benefit }}</span>
            </v-list-item>
          </v-list>

          <p class="d-flex font-weight-semibold text--primary mt-3 mb-2">
            <span>Days</span>
            <v-spacer></v-spacer>
            <span>4 of 30 Days</span>
          </p>
          <v-progress-linear
            value="75"
            height="8"
            rounded
          ></v-progress-linear>
          <p class="mt-2">
            4 days remaining
          </p>

          <v-btn
            color="primary"
            block
            @click.stop="$emit('update:is-plan-upgrade-dialog-visible',true)"
          >
            Upgrade Plan
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mdiCheck, mdiBriefcaseVariantOutline, mdiCheckboxBlankCircle } from '@mdi/js'
import { avatarText, kFormatter } from '@core/utils/filter'
import { ref } from '@vue/composition-api'
import countries from '@/@fake-db/data/other/countries'
import useUsersList from '../user-list/useUsersList'

export default {
  props: {
    userData: {
      type: Object,
      required: true,
    },
    isPlanUpgradeDialogVisible: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const isBillingAddress = ref(true)

    const { resolveUserStatusVariant, resolveUserRoleVariant } = useUsersList()

    const isBioDialogOpen = ref(false)
    const standardPlan = {
      plan: 'Standard',
      price: 99,
      benefits: ['10 Users', 'Up to 10GB storage', 'Basic Support'],
    }
    const statusOptions = [
      { title: 'Pending', value: 'pending' },
      { title: 'Active', value: 'active' },
      { title: 'Inactive', value: 'inactive' },
    ]

    const languageOptions = ['English', 'Spanish', 'Portuguese', 'Russian', 'French', 'German']

    return {
      resolveUserStatusVariant,
      resolveUserRoleVariant,
      avatarText,
      kFormatter,
      statusOptions,
      standardPlan,
      countries,
      languageOptions,
      isBillingAddress,
      isBioDialogOpen,
      icons: {
        mdiCheck,
        mdiBriefcaseVariantOutline,
        mdiCheckboxBlankCircle,
      },
    }
  },
}
</script>
