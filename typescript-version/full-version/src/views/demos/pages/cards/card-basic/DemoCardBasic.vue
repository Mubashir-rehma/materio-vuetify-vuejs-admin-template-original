<script setup lang="ts">
import avatar1 from '@/assets/images/avatars/avatar-1.png'
import avatar2 from '@/assets/images/avatars/avatar-2.png'
import avatar3 from '@/assets/images/avatars/avatar-3.png'
import avatar4 from '@/assets/images/avatars/avatar-4.png'
import eCommerce2 from '@/assets/images/eCommerce/2.png'
import page1 from '@/assets/images/pages/1.png'
import page2 from '@/assets/images/pages/2.png'
import page3 from '@/assets/images/pages/3.png'
import page5 from '@/assets/images/pages/5.jpg'
import page6 from '@/assets/images/pages/6.jpg'

const avatars = [avatar1, avatar2, avatar3, avatar4]

const isCardDetailsVisible = ref(false)
const rating = ref(5)
</script>

<template>
  <v-row>
    <!-- 👉 Influencing The Influencer -->
    <v-col
      cols="12"
      sm="6"
      md="4"
    >
      <v-card>
        <v-img
          :src="page1"
          cover
        />

        <v-card-header>
          <v-card-header-text>
            <v-card-title>Influencing The Influencer</v-card-title>
          </v-card-header-text>
        </v-card-header>

        <v-card-text>
          Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism minister predicts Cancun will draw as many visitors in 2006 as it did two years ago.
        </v-card-text>
      </v-card>
    </v-col>

    <!-- 👉 Robert Meyer -->
    <v-col
      cols="12"
      sm="6"
      md="4"
    >
      <v-card>
        <v-img :src="page2" />

        <v-card-text class="position-relative">
          <!-- User Avatar -->
          <v-avatar
            size="60"
            class="avatar-center"
            :image="avatar1"
          />

          <!-- Title, Subtitle & Action Button -->
          <div class="d-flex justify-space-between flex-wrap pt-6">
            <div class="me-2 mb-2">
              <v-card-title class="pa-0">
                Robert Meyer
              </v-card-title>
              <v-card-subtitle class="text-caption pa-0">
                London, UK
              </v-card-subtitle>
            </div>
            <v-btn>send request</v-btn>
          </div>

          <!--  Mutual Friends -->
          <div class="d-flex justify-space-between align-center mt-5">
            <span class="font-weight-medium">18 mutual friends</span>

            <div class="v-avatar-group">
              <v-avatar
                v-for="avatar in avatars"
                :key="avatar"
                :image="avatar"
                size="40"
              />
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- 👉 Popular Uses Of The Internet -->
    <v-col
      cols="12"
      md="4"
      sm="6"
    >
      <v-card>
        <v-img :src="page3" />

        <v-card-header>
          <v-card-header-text>
            <v-card-title>Popular Uses Of The Internet</v-card-title>
          </v-card-header-text>
        </v-card-header>

        <v-card-text>
          Although cards can support multiple actions, UI controls, and an overflow menu.
        </v-card-text>

        <v-card-actions>
          <v-btn>
            Details
          </v-btn>

          <v-spacer />

          <!-- TODO: Adjust the size of button because Details button don't touch to bottom of card (https://discord.com/channels/340160225338195969/660898563139567625/981537135838507029) -->
          <v-btn
            color="secondary"
            :icon="isCardDetailsVisible ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="isCardDetailsVisible = !isCardDetailsVisible"
          />
        </v-card-actions>

        <v-expand-transition>
          <div v-show="isCardDetailsVisible">
            <v-divider />
            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>

    <!-- 👉 Apple iPhone 11 Pro -->
    <v-col
      sm="6"
      cols="12"
    >
      <v-card>
        <div class="d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row">
          <div class="mx-auto">
            <v-img
              cover
              width="220"
              height="100%"
              :src="eCommerce2"
            />
          </div>

          <v-divider :vertical="$vuetify.display.mdAndUp" />

          <div>
            <v-card-header>
              <v-card-header-text>
                <v-card-title>Apple iPhone 11 Pro</v-card-title>
              </v-card-header-text>
            </v-card-header>

            <v-card-text>
              Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic
            </v-card-text>

            <v-card-text class="text-subtitle-1">
              <span>Price :</span> <span class="font-weight-bold">$899</span>
            </v-card-text>

            <v-card-actions class="justify-space-between">
              <v-btn>
                <v-icon icon="mdi-cart-plus" />
                <span class="ms-2">Add to cart</span>
              </v-btn>

              <v-btn
                color="secondary"
                icon="mdi-share-variant-outline"
              />
            </v-card-actions>
          </div>
        </div>
      </v-card>
    </v-col>

    <!-- 👉 Stump town Roasters. -->
    <v-col
      sm="6"
      cols="12"
    >
      <v-card>
        <div class="d-flex flex-column-reverse flex-md-row">
          <div>
            <v-card-header>
              <v-card-header-text>
                <v-card-title>Stumptown Roasters</v-card-title>
              </v-card-header-text>
            </v-card-header>

            <v-card-text class="d-flex align-center flex-wrap body-1">
              <v-rating
                v-model="rating"
                readonly
                class="me-3"
              />
              <span>5 Star | 98 reviews</span>
            </v-card-text>

            <v-card-text>
              Before there was a United States of America, there were coffee houses, because how are you supposed to build.
            </v-card-text>

            <v-card-actions>
              <v-btn>Location</v-btn>
              <v-btn>Reviews</v-btn>
            </v-card-actions>
          </div>

          <!-- TODO: Refactor below so it doesn't use w-100 and h-100 -->
          <div class="h-100 w-100 my-auto">
            <v-img
              :class="$vuetify.display.mdAndUp ? 'rounded-lg' : 'rounded-t'"
              height="100%"
              :max-width="$vuetify.display.mdAndUp ? '200' : '100%'"
              :src="page5"
              class="w-100 mx-auto"
            />
          </div>
        </div>
      </v-card>
    </v-col>

    <!-- 👉 Apple Watch card -->
    <v-col
      lg="4"
      sm="6"
      cols="12"
    >
      <v-card>
        <v-img :src="page6" />

        <v-card-header>
          <v-card-header-text>
            <v-card-title>Apple Watch</v-card-title>
          </v-card-header-text>
        </v-card-header>

        <v-card-text>
          <p class="font-weight-medium text-body-1">
            $249.40
          </p>

          <p class="mb-0">
            3.1GHz 6-core 10th-generation Intel Core i5 processor, Turbo Boost up to 4.5GHz
          </p>
        </v-card-text>

        <v-btn
          block
          class="rounded-t-0"
        >
          Add to cart
        </v-btn>
      </v-card>
    </v-col>

    <!-- 👉 Lifetime Membership -->
    <v-col
      md="6"
      lg="8"
      cols="12"
    >
      <v-card>
        <v-row no-gutters>
          <v-col
            cols="12"
            sm="8"
            md="12"
            lg="8"
            order="2"
            order-lg="1"
          >
            <v-card-header>
              <v-card-header-text>
                <v-card-title>Lifetime Membership</v-card-title>
              </v-card-header-text>
            </v-card-header>

            <v-card-text>
              Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola, body muscles and holding ones own breath. Though, most of these notes are not fundamentally necessary, they are such that you can use them for a good laugh, at a drinks party or for picking up women or men.
            </v-card-text>

            <v-card-text>
              <v-divider />
            </v-card-text>

            <v-card-text class="d-flex justify-center">
              <div class="me-auto pe-4">
                <p class="d-flex align-center mb-6">
                  <v-icon
                    color="primary"
                    icon="mdi-lock-open-outline"
                  />
                  <span class="ms-3">Full Access</span>
                </p>

                <p class="d-flex align-center mb-0">
                  <v-icon
                    color="primary"
                    icon="mdi-account-outline"
                  />
                  <span class="ms-3">15 Members</span>
                </p>
              </div>

              <v-divider
                v-if="$vuetify.display.smAndUp"
                vertical
                inset
              />

              <div class="ms-auto ps-4">
                <p class="d-flex align-center mb-6">
                  <v-icon
                    color="primary"
                    icon="mdi-star-outline"
                  />
                  <span class="ms-3">Access all Features</span>
                </p>

                <p class="d-flex align-center mb-0">
                  <v-icon
                    color="primary"
                    icon="mdi-trending-up"
                  />
                  <span class="ms-3">Lifetime Free Update</span>
                </p>
              </div>
            </v-card-text>
          </v-col>

          <v-col
            cols="12"
            sm="4"
            md="12"
            lg="4"
            order="1"
            order-lg="2"
            class="member-pricing-bg text-center"
          >
            <div class="membership-pricing d-flex flex-column align-center py-lg-0 pt-10 pb-12 h-100 justify-center">
              <p>
                <sub class="text-h5">$</sub>
                <sup class="text-h2 font-weight-medium">899</sup>
                <sub class="text-h5">USD</sub>
              </p>

              <p class="text-subtitle-2">
                5 Tips For Offshore Software Development
              </p>

              <v-btn>Contact Now</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>

    <!-- 👉 Influencing The Influencer -->
    <v-col
      cols="12"
      lg="4"
      md="6"
    >
      <v-card title="Influencing The Influencer">
        <v-card-text>
          Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery people scan bar codes with handhelds and workers in the field stay in touch.
        </v-card-text>

        <v-card-text>
          If you're in the market for new desktops, notebooks, or PDAs, there are a myriad of choices. Here's a rundown of some of the best systems available.
        </v-card-text>

        <v-card-text>
          The following non-standard attributes are available on some browsers.
        </v-card-text>

        <v-card-actions>
          <v-btn>Read More</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <!-- 👉 The Best Answers -->
    <v-col
      cols="12"
      lg="4"
      md="6"
    >
      <v-card title="The Best Answers">
        <v-card-text class="d-flex align-center flex-wrap">
          <v-rating
            v-model="rating"
            readonly
          />
          <span class="ms-3 text-subtitle-2">5 Star | 98 reviews</span>
        </v-card-text>

        <v-card-text>
          If you are looking for a new way to promote your business that won't cost you more money, maybe printing is one of the options you won't resist. Printing is a widely use process in making printed materials that are used for advertising.
        </v-card-text>

        <v-card-text>
          become fast, easy and simple. If you want your promotional material to be an eye-catching
        </v-card-text>

        <v-card-actions>
          <v-btn>Location</v-btn>
          <v-btn>Reviews</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <!-- 👉 Support -->
    <v-col
      cols="12"
      md="6"
      lg="4"
    >
      <v-card class="text-center">
        <v-card-text class="d-flex flex-column justify-center align-center">
          <v-avatar
            color="primary"
            class="v-avatar-light-bg text-primary"
            size="50"
          >
            <v-icon
              size="2rem"
              icon="mdi-help-circle-outline"
            />
          </v-avatar>

          <h6 class="text-h6">
            Support
          </h6>
        </v-card-text>

        <v-card-text>
          <p>
            According to us blisters are a very common thing and we come across them very often in our daily lives. It is a very common occurrence like cold or fever depending upon your lifestyle.
          </p>

          <v-btn>Contact Now</v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.avatar-center {
  position: absolute;
  border: 3px solid rgb(var(--v-theme-surface));
  inset-block-start: -2rem;
  inset-inline-start: 1rem;
}

// membership pricing
.member-pricing-bg {
  position: relative;
  /* stylelint-disable-next-line color-function-notation */
  background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
}

.membership-pricing {
  sup {
    inset-block-start: 9px;
  }
}
</style>
