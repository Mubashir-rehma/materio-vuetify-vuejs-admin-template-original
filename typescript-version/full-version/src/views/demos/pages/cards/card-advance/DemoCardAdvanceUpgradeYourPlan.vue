<script setup lang="ts">
import briefcase from '@/assets/images/cards/briefcase.png';
import creditCard from '@/assets/images/cards/logo-credit-card-2.png';
import masterCard from '@/assets/images/cards/logo-mastercard-small.png';

const savedCards = [
  {
    logo: masterCard,
    type: 'Credit card',
    number: '2566 xxxx xxxx 8908',
  },
  {
    logo: creditCard,
    type: 'Credit card',
    number: '8990 xxxx xxxx 6852',
  },
]
</script>

<template>
  <v-card>
    <!-- SECTION Card Header and Menu -->
    <v-card-header>
      <v-card-header-text>
        <!-- 👉 Title -->
        <v-card-title>Upgrade Your Plan</v-card-title>
      </v-card-header-text>

      <!-- 👉 menu -->

      <v-btn
        size="x-small"
        variant="text"
        icon="mdi-dots-vertical"
        color="secondary"
        class="me-n3"
      />
    </v-card-header>
    <!-- !SECTION -->

    <v-card-text>
      <span class="text-caption">Please make the payment to start enjoying all the features of our premium plan as soon as possible.</span>

      <!-- SECTION Upgrade plan banner -->
      <v-list class="plan-upgrade-banner">
        <v-list-item
          active-color="primary"
          active
          rounded
        >
          <!-- 👉 Avatar -->
          <v-list-item-avatar
            start
            rounded
            :size="44"
            :image="briefcase"
            class="plan-details pa-2"
          />
          <!-- 👉 Title and subtitle -->
          <v-list-item-header>
            <v-list-item-title class="text-body-2 font-weight-medium">
              Platinum
            </v-list-item-title>
            <v-list-item-subtitle class="text-caption font-weight-medium">
              Upgrade Plan
            </v-list-item-subtitle>
          </v-list-item-header>

          <!-- 👉 Actions -->
          <v-list-item-action>
            <sup class="text-caption text-secondary">$</sup>
            <span class="text-h5 font-weight-semibold">5250</span>
            <sub class="text-secondary">/year</sub>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <!-- !SECTION -->

      <!-- SECTION Payment Details -->
      <v-list
        class="mx-n4 pt-0"
      >
        <v-list-subheader>
          Payment details
        </v-list-subheader>

        <v-list-item
          v-for="card in savedCards"
          :key="card.logo"
        >
          <!-- 👉 Avatar -->
          <v-list-item-avatar
            rounded
            start
            :size="45"
            :image="card.logo"
          />

          <!-- 👉 Title and Subtitle -->
          <v-list-item-header>
            <v-list-item-title class="text-body-2 font-weight-medium">
              {{ card.type }}
            </v-list-item-title>
            <v-list-item-subtitle class="text-caption">
              {{ card.number }}
            </v-list-item-subtitle>
          </v-list-item-header>

          <!-- 👉 Action -->
          <v-list-item-action>
            <v-text-field
              density="compact"
              placeholder="CVV"
            />
          </v-list-item-action>
        </v-list-item>

        <!-- 👉 Add Payment  -->
        <v-list-item>
          <a
            href="javascript:void(0)"
            class="text-primary text-caption"
          >Add Payment Method</a>
        </v-list-item>
      </v-list>
      <!-- !SECTION -->

      <!-- 👉 Email -->
      <v-form>
        <v-row>
          <v-col cols="12">
            <v-text-field placeholder="Email Address" />
          </v-col>

          <v-col cols="12">
            <v-btn
              block
              append-icon="mdi-arrow-right"
            >
              Process To Payment
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<style lang="scss">
.plan-upgrade-banner {
  .plan-details {
    border: 1px solid rgb(var(--v-theme-primary));
  }
}
</style>
