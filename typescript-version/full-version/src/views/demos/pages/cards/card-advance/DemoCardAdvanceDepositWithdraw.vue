<script setup lang="ts">
import gumroad from '@/assets/images/logos/gumroad.png'
</script>

<template>
  <v-card>
    <v-row no-gutters>
      <v-col
        cols="12"
        md="6"
      >
        <v-card-header>
          <v-card-header-text>
            <v-card-title>Deposit</v-card-title>
          </v-card-header-text>

          <a
            href="javascript:void(0)"
            class="text-caption"
          >View All</a>
        </v-card-header>

        <v-list class="px-1">
          <v-list-item>
            <v-list-item-avatar
              start
              rounded
            >
              <v-img
                :height="29"
                :width="28"
                :src="gumroad"
              />
            </v-list-item-avatar>

            <v-list-item-header>
              <v-list-item-title>Gumroad Account</v-list-item-title>
              <v-list-item-subtitle>Sell UI Kit</v-list-item-subtitle>
            </v-list-item-header>

            <v-list-item-action class="text-body-2 text-success font-weight-semibold">
              +$4,650
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-card-header>
          <v-card-header-text>
            <v-card-title>Withdraw</v-card-title>
          </v-card-header-text>

          <a
            href="javascript:void(0)"
            class="text-caption"
          >View All</a>
        </v-card-header>

        <v-list class="px-1">
          <v-list-item>
            <v-list-item-avatar
              start
              rounded
            >
              <v-img
                :height="29"
                :width="28"
                :src="gumroad"
              />
            </v-list-item-avatar>

            <v-list-item-header>
              <v-list-item-title>Google Adsense</v-list-item-title>
              <v-list-item-subtitle>Paypal deposit</v-list-item-subtitle>
            </v-list-item-header>

            <v-list-item-action class="text-body-2 text-error font-weight-semibold">
              +$4,650
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-card>
</template>
