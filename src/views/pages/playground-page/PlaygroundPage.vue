<template>
  <v-row>
    <v-col cols="6">
      <h4>Aspect</h4>
      <v-card>
        <v-responsive :aspect-ratio="16/9">
          <v-card-text>
            This card will always be 16:9 (unless you put more stuff in it)
          </v-card-text>
        </v-responsive>
      </v-card>
    </v-col>

    <v-col cols="6">
      <h4>Banner</h4>
      <v-banner
        single-line
        :sticky="sticky"
      >
        We can't save your edits while you are in offline mode.

        <template v-slot:actions>
          <v-btn
            text
            color="primary"
          >
            Get Online
          </v-btn>
        </template>
      </v-banner>

      <h4 class="mt-4">
        Within Card
      </h4>
      <v-card class="mt-4">
        <v-banner
          single-line
          :sticky="sticky"
        >
          We can't save your edits while you are in offline mode.

          <template v-slot:actions>
            <v-btn
              text
              color="primary"
            >
              Get Online
            </v-btn>
          </template>
        </v-banner>
      </v-card>
    </v-col>

    <!-- App Bar -->
    <v-col cols="6">
      <h4>App Bar</h4>
      <v-app-bar
        color="primary"
        dense
        dark
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Page title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>{{ mdiHeart }}</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>{{ mdiMagnify }}</v-icon>
        </v-btn>

        <v-menu
          left
          bottom
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>{{ mdiDotsVertical }}</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="n in 5"
              :key="n"
              @click="() => {}"
            >
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </v-col>

    <!-- Toolbar -->
    <v-col cols="6">
      <h4>Toolbar</h4>
      <v-toolbar dense>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>{{ mdiMagnify }}</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>{{ mdiHeart }}</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>{{ mdiDotsVertical }}</v-icon>
        </v-btn>
      </v-toolbar>
    </v-col>

    <!-- system bar -->
    <v-col cols="6">
      <h4>System Bar</h4>
      <v-system-bar
        dark
        color="primary"
        class="mb-4"
      >
        <v-spacer></v-spacer>
        <v-icon>{{ mdiWifiStrength4 }}</v-icon>
        <v-icon>{{ mdiSignalCellularOutline }}</v-icon>
        <v-icon>{{ mdiBattery }}</v-icon>
        <span>12:30</span>
      </v-system-bar>

      <v-system-bar
        dark
        color="error"
        class="mb-4"
      >
        <v-spacer></v-spacer>
        <v-icon>{{ mdiWifiStrength4 }}</v-icon>
        <v-icon>{{ mdiSignalCellularOutline }}</v-icon>
        <v-icon>{{ mdiBattery }}</v-icon>
        <span>12:30</span>
      </v-system-bar>
    </v-col>

    <!-- bottom navigation -->
    <v-col cols="6">
      <h4>Bottom Navigation</h4>
      <v-bottom-navigation>
        <v-btn
          text
          value="recent"
        >
          <span>Recent</span>

          <v-icon>{{ mdiHistory }}</v-icon>
        </v-btn>

        <v-btn
          text
          value="favorites"
        >
          <span>Favorites</span>

          <v-icon>{{ mdiHeart }}</v-icon>
        </v-btn>

        <v-btn
          text
          value="nearby"
        >
          <span>Nearby</span>

          <v-icon>{{ mdiMapMarker }}</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-col>

    <!-- bottom sheets -->
    <v-col cols="6">
      <h4>Bottom Sheets</h4>
      <v-bottom-sheet
        v-model="sheet"
        inset
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="error"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Open Inset
          </v-btn>
        </template>

        <v-sheet
          class="text-center"
          height="200px"
        >
          <v-btn
            class="mt-6"
            text
            color="error"
            @click="sheet = !sheet"
          >
            close
          </v-btn>
          <div class="my-3">
            This is a bottom sheet using the inset prop
          </div>
        </v-sheet>
      </v-bottom-sheet>
    </v-col>

    <!-- breadcrumbs -->
    <v-col cols="6">
      <h4>Breadcrumbs</h4>
      <v-breadcrumbs
        :items="items"
        divider="-"
      ></v-breadcrumbs>

      <v-card>
        <v-breadcrumbs
          :items="items"
          divider="."
        ></v-breadcrumbs>
      </v-card>
    </v-col>

    <!-- carousel -->
    <v-col cols="6">
      <h4>Carousel</h4>
      <v-carousel>
        <v-carousel-item
          v-for="(item,i) in carouselItems"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </v-col>

    <!-- footer -->
    <v-col cols="6">
      <h4>Footer</h4>
      <v-footer
        padless
        class="mb-6"
      >
        <v-col
          class="error text-center"
          cols="12"
        >
          <div class="white--text">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </div>
        </v-col>
      </v-footer>

      <v-footer
        color="primary"
        padless
      >
        <v-row
          justify="center"
          no-gutters
        >
          <v-btn
            v-for="link in links"
            :key="link"
            color="white"
            text
            rounded
            class="my-2"
          >
            {{ link }}
          </v-btn>
          <v-col
            class="primary py-4 text-center white--text"
            cols="12"
          >
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-col>
        </v-row>
      </v-footer>
    </v-col>

    <!-- overflow button -->
    <v-col cols="6">
      <h4>Overflow button</h4>
      <v-overflow-btn
        :items="dropdown_edit"
        label="Overflow Btn w/ counter"
        counter
        item-value="text"
      ></v-overflow-btn>
    </v-col>

    <!-- chips group -->
    <v-col cols="6">
      <h4>Chips Group</h4>

      <v-chip-group
        active-class="primary--text"
        column
      >
        <v-chip
          v-for="tag in tags"
          :key="tag"
        >
          {{ tag }}
        </v-chip>
      </v-chip-group>
    </v-col>

    <!-- item group -->
    <v-col cols="6">
      <h4>Item Groups</h4>

      <v-item-group active-class="primary">
        <v-container>
          <v-row>
            <v-col
              v-for="n in 3"
              :key="n"
              cols="12"
              md="4"
            >
              <v-item v-slot="{ active, toggle }">
                <v-card
                  class="d-flex align-center"
                  dark
                  height="200"
                  @click="toggle"
                >
                  <v-scroll-y-transition>
                    <div
                      v-if="active"
                      class="display-3 flex-grow-1 text-center"
                    >
                      Active
                    </div>
                  </v-scroll-y-transition>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </v-col>

    <!-- slide groups -->
    <v-col cols="6">
      <h4>Slide Groups</h4>

      <v-slide-group
        v-model="model"
        class="pa-4"
        active-class="success"
        show-arrows
      >
        <v-slide-item
          v-for="n in 15"
          :key="n"
          v-slot="{ active, toggle }"
        >
          <v-card
            :color="active ? undefined : 'secondary'"
            class="ma-4"
            height="200"
            width="100"
            @click="toggle"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <v-scale-transition>
                <v-icon
                  v-if="active"
                  color="white"
                  size="48"
                  v-text="mdiCloseCircleOutline"
                ></v-icon>
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-col>

    <!-- windows  -->
    <v-col cols="6">
      <h4>Windows</h4>

      <v-card
        flat
        tile
      >
        <v-window
          v-model="onboarding"
          reverse
        >
          <v-window-item
            v-for="n in length"
            :key="`card-${n}`"
          >
            <v-card
              color="secondary"
              height="200"
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <h1
                  style="font-size: 5rem;"
                  class="white--text"
                >
                  Slide {{ n }}
                </h1>
              </v-row>
            </v-card>
          </v-window-item>
        </v-window>

        <v-card-actions class="justify-space-between">
          <v-btn
            text
            @click="prev"
          >
            <v-icon>{{ mdiChevronLeft }}</v-icon>
          </v-btn>
          <v-item-group
            v-model="onboarding"
            class="text-center"
            mandatory
          >
            <v-item
              v-for="n in length"
              :key="`btn-${n}`"
              v-slot="{ active, toggle }"
            >
              <v-btn
                :input-value="active"
                icon
                @click="toggle"
              >
                <v-icon>{{ mdiRecord }}</v-icon>
              </v-btn>
            </v-item>
          </v-item-group>
          <v-btn
            text
            @click="next"
          >
            <v-icon>{{ mdiChevronRight }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <!-- hover -->
    <v-col cols="6">
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-hover
            v-slot="{ hover }"
            open-delay="200"
          >
            <v-card
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              class="mx-auto"
              height="200"
              max-width="350"
            >
              <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
                Open Delay (Mouse enter)
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-hover
            v-slot="{ hover }"
            close-delay="200"
          >
            <v-card
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              class="mx-auto"
              height="200"
              max-width="350"
            >
              <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
                Close Delay (Mouse leave)
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-col>

    <!-- v-lazy -->
    <v-col cols="6">
      <h4>v-lazy</h4>

      <v-responsive
        class="overflow-y-auto"
        max-height="400"
      >
        <div class="pa-6 text-center">
          Scroll down
        </div>

        <v-responsive
          height="200vh"
          class="text-center pa-2"
        >
          <v-responsive min-height="50vh"></v-responsive>
          <div class="text-center body-2 mb-12">
            The card will appear below:
          </div>

          <v-lazy
            v-model="isActive"
            :options="{
              threshold: .5
            }"
            min-height="200"
            transition="fade-transition"
          >
            <v-card
              class="mx-auto"
              max-width="336"
            >
              <v-card-title>Card title</v-card-title>

              <v-card-text>
                Phasellus magna. Quisque rutrum. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Aliquam lobortis. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna.

                In turpis. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. In turpis. Pellentesque dapibus hendrerit tortor. Ut varius tincidunt libero.
              </v-card-text>
            </v-card>
          </v-lazy>
        </v-responsive>
      </v-responsive>
    </v-col>

    <!-- Navigation Drawers -->
    <v-col cols="6">
      <h4>Navigation Drawers</h4>

      <v-navigation-drawer permanent>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Application
            </v-list-item-title>
            <v-list-item-subtitle>
              subtext
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="item in navigationDrawer"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-col>

    <!-- overlay -->
    <v-col cols="6">
      <h4 class="mb-5">
        Overlay
      </h4>
      <v-card
        height="300"
        width="250"
      >
        <v-row justify="center">
          <v-btn
            color="success"
            class="mt-12"
            @click="overlay = !overlay"
          >
            Show Overlay
          </v-btn>

          <v-overlay
            :absolute="absolute"
            :value="overlay"
          >
            <v-btn
              color="success"
              @click="overlay = false"
            >
              Hide Overlay
            </v-btn>
          </v-overlay>
        </v-row>
      </v-card>
    </v-col>

    <!-- parallax -->
    <v-col cols="6">
      <h4>Parallax</h4>

      <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>
    </v-col>

    <!-- color picker -->
    <v-col cols="6">
      <h4>Color Picker</h4>
      <v-color-picker
        class="ma-2"
        canvas-height="300"
      ></v-color-picker>
    </v-col>

    <!-- Progress circular -->
    <v-col cols="6">
      <h4>Progress circular</h4>
      <div class="text-center">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>

        <v-progress-circular
          indeterminate
          color="red"
        ></v-progress-circular>

        <v-progress-circular
          indeterminate
          color="purple"
        ></v-progress-circular>

        <v-progress-circular
          indeterminate
          color="green"
        ></v-progress-circular>

        <v-progress-circular
          indeterminate
          color="amber"
        ></v-progress-circular>
      </div>

      <h4>Linear Progress</h4>
      <div class="mt-4">
        <v-progress-linear
          background-color="warning"
          color="warning"
          value="15"
        ></v-progress-linear>
        <br>
        <v-progress-linear
          background-color="primary"
          color="primary"
          value="30"
        ></v-progress-linear>
        <br>
        <v-progress-linear
          background-color="success"
          color="error"
          value="45"
        ></v-progress-linear>
      </div>
    </v-col>

    <!-- sheet -->
    <v-col cols="6">
      <h4>Sheet</h4>
      <v-sheet
        color="white"
        elevation="1"
        height="100"
        width="100"
      ></v-sheet>
    </v-col>

    <!-- skeleton loader -->
    <v-col cols="6">
      <h4>Skeleton Loader</h4>

      <v-sheet class="pa-3">
        <v-skeleton-loader
          class="mx-auto"
          max-width="300"
          type="card"
        ></v-skeleton-loader>
      </v-sheet>
    </v-col>

    <!-- spikeline -->
    <v-col cols="6">
      <h4>Sparklines</h4>

      <v-sparkline
        :value="value"
        :gradient="gradient"
        :smooth="radius || false"
        :padding="padding"
        :line-width="width"
        :stroke-linecap="lineCap"
        :gradient-direction="gradientDirection"
        :fill="fill"
        :type="type"
        :auto-line-width="autoLineWidth"
        auto-draw
      ></v-sparkline>
    </v-col>

    <!-- Timelines -->
    <v-col cols="6">
      <h4>Timelines</h4>

      <v-timeline>
        <v-timeline-item>timeline item</v-timeline-item>
        <v-timeline-item class="text-right">
          timeline item
        </v-timeline-item>
        <v-timeline-item>timeline item</v-timeline-item>
      </v-timeline>
    </v-col>
  </v-row>
</template>

<script>
import {
  mdiDotsVertical,
  mdiMagnify,
  mdiHeart,
  mdiWifiStrength4,
  mdiSignalCellularOutline,
  mdiBattery,
  mdiHistory,
  mdiMapMarker,
  mdiChevronLeft,
  mdiCloseCircleOutline,
  mdiRecord,
  mdiChevronRight,
  mdiViewDashboard,
  mdiImage,
  mdiHelpBox,
} from '@mdi/js'

const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]

export default {
  data: () => ({
    sticky: false,
    mdiDotsVertical,
    mdiMagnify,
    mdiHeart,
    mdiWifiStrength4,
    mdiSignalCellularOutline,
    mdiBattery,
    mdiHistory,
    mdiMapMarker,
    mdiChevronLeft,
    mdiRecord,
    mdiChevronRight,
    mdiCloseCircleOutline,
    sheet: false,
    length: 3,
    onboarding: 0,
    isActive: false,
    absolute: true,
    overlay: false,
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: 'round',
    gradient: gradients[5],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    gradientDirection: 'top',
    gradients,
    fill: false,
    type: 'trend',
    autoLineWidth: false,
    carouselItems: [
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      },
    ],
    navigationDrawer: [
      { title: 'Dashboard', icon: mdiViewDashboard },
      { title: 'Photos', icon: mdiImage },
      { title: 'About', icon: mdiHelpBox },
    ],
    right: null,
    items: [
      {
        text: 'Dashboard',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'Link 1',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        text: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ],
    links: ['Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us'],
    dropdown_edit: [{ text: '100%' }, { text: '75%' }, { text: '50%' }, { text: '25%' }, { text: '0%' }],
    tags: ['Work', 'Home Improvement', 'Vacation', 'Food', 'Drawers', 'Shopping', 'Art', 'Tech', 'Creative Writing'],
    model: null,
  }),

  methods: {
    next() {
      this.onboarding = this.onboarding + 1 === this.length ? 0 : this.onboarding + 1
    },
    prev() {
      this.onboarding = this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1
    },
  },
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
}
</script>

<style lang="scss" scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
