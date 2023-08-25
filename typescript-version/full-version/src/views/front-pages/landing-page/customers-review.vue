<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import { useGenerateImageVariant } from '@/@core/composable/useGenerateImageVariant'
import logo1dark from '@images/front-pages/branding/logo-1-dark.png'
import logo1light from '@images/front-pages/branding/logo-1-light.png'
import logo1 from '@images/front-pages/branding/logo-1.png'
import logo2dark from '@images/front-pages/branding/logo-2-dark.png'
import logo2light from '@images/front-pages/branding/logo-2-light.png'
import logo2 from '@images/front-pages/branding/logo-2.png'
import logo3dark from '@images/front-pages/branding/logo-3-dark.png'
import logo3light from '@images/front-pages/branding/logo-3-light.png'
import logo3 from '@images/front-pages/branding/logo-3.png'
import logo4dark from '@images/front-pages/branding/logo-4-dark.png'
import logo4light from '@images/front-pages/branding/logo-4-light.png'
import logo4 from '@images/front-pages/branding/logo-4.png'

import sectionTitleIcon from '@images/pages/section-title-icon.png'

register()

const brandLogo1 = useGenerateImageVariant(logo1light, logo1dark)
const brandLogo2 = useGenerateImageVariant(logo2light, logo2dark)
const brandLogo3 = useGenerateImageVariant(logo3light, logo3dark)
const brandLogo4 = useGenerateImageVariant(logo4light, logo4dark)

const reviewData = [
  {
    desc: 'I\'ve never used a theme as versatile and flexible as Vuexy. It\'s my go to for building dashboard sites on almost any project.',
    img: logo1,
    rating: 5,
    name: 'Eugenia Moore',
    position: 'Founder of Hubspot',
  },
  {
    desc: 'Materio is awesome, and I particularly enjoy knowing that if I get stuck on something.',
    img: logo2,
    rating: 5,
    name: 'Tommy haffman',
    position: 'Founder of Levis',
  },
  {
    desc: 'This template is superior in so many ways. The code, the design, the regular updates, the support.. It\'s the whole package. Excellent Work.',
    img: logo3,
    rating: 4,
    name: 'Eugenia Moore',
    position: 'CTO of Airbnb',
  },
  {
    desc: 'All the requirements for developers have been taken into consideration, so I\'m able to build any interface I want.',
    img: logo4,
    rating: 5,
    name: 'Sara Smith',
    position: 'Founder of Continental',
  },
  {
    desc: 'Materio is awesome, and I particularly enjoy knowing that if I get stuck on something.',
    img: logo2,
    rating: 5,
    name: 'Tommy haffman',
    position: 'Founder of Levis',
  },
  {
    desc: 'I\'ve never used a theme as versatile and flexible as Vuexy. It\'s my go to for building dashboard sites on almost any project.',
    img: logo1,
    rating: 5,
    name: 'Eugenia Moore',
    position: 'Founder of Hubspot',
  },
  {
    desc: 'Materio is awesome, and I particularly enjoy knowing that if I get stuck on something.',
    img: logo2,
    rating: 5,
    name: 'Tommy haffman',
    position: 'Founder of Levis',
  },
  {
    desc: 'This template is superior in so many ways. The code, the design, the regular updates, the support.. It\'s the whole package. Excellent Work.',
    img: logo3,
    rating: 4,
    name: 'Eugenia Moore',
    position: 'CTO of Airbnb',
  },
  {
    desc: 'All the requirements for developers have been taken into consideration, so I\'m able to build any interface I want.',
    img: logo4,
    rating: 5,
    name: 'Sara Smith',
    position: 'Founder of Continental',
  },
  {
    desc: 'Materio is awesome, and I particularly enjoy knowing that if I get stuck on something.',
    img: logo2,
    rating: 5,
    name: 'Tommy haffman',
    position: 'Founder of Levis',
  },
]
</script>

<template>
  <div class="customer-reviews">
    <!-- 👉 Headers  -->
    <div class="headers d-flex justify-center flex-column align-center mb-16">
      <h6 class="text-base mb-6 font-weight-medium my-auto d-flex gap-x-2">
        <img
          :src="sectionTitleIcon"
          alt="section title icon"
          height="20"
          width="20"
        >
        <span>
          REAL CUSTOMERS REVIEWS
        </span>
      </h6>
      <h5 class="text-h5 mb-2">
        <span class="font-weight-bold">Success Stories</span> from Clients
      </h5>
      <p>
        See what our customers have to say about their experience.
      </p>
    </div>

    <div class="swiper-reviews-carousel py-4 mb-10">
      <!-- eslint-disable vue/attribute-hyphenation -->
      <swiper-container
        slides-per-view="1"
        space-between="5"
        centered-slides="true"
        loop="true"
        autoplay-delay="3000"
        autoplay-disable-on-interaction="false"
        :pagination="{
          clickable: 'true',
        }"
        :injectStyles="[
          `
          .swiper-pagination{
            position: static;
            margin-block: 1rem;
          },
          .swiper-pagination-bullet-active{
            width: 1rem;
          }

      `]"
        :breakpoints="{
          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }"
      >
        <swiper-slide
          v-for="(data, index) in reviewData"
          :key="index"
        >
          <VCard
            flat
            border
            class="h-100 d-flex align-stretch"
          >
            <VCardText class="pa-6 d-flex flex-column justify-space-between align-center">
              <img
                :src="data.img"
                style="block-size: 1.75rem;"
              >

              <div class="text-body-1 text-high-emphasis text-center">
                {{ data.desc }}
              </div>
              <VRating
                :model-value="data.rating"
                color="warning"
                readonly
              />
              <div class="text-center">
                <span class="text-body-1 text-high-emphasis font-weight-medium">
                  {{ data.name }}
                </span>
                <br>
                <span class="text-body-2">{{ data.position }}</span>
              </div>
            </VCardText>
          </VCard>
        </swiper-slide>
      </swiper-container>
    </div>

    <VDivider />

    <div class="swiper-brands-carousel mt-8">
      <swiper-container
        slides-per-view="1"
        autoplay-delay="3000"
        loop="true"
        :breakpoints="{
          992: {
            slidesPerView: 5,
          },
          768: {
            centeredSlides: true,
            slidesPerView: 3,
          },
        }"
      >
        <swiper-slide>
          <VImg
            :src="brandLogo1"
            height="28"
          />
        </swiper-slide>

        <swiper-slide>
          <VImg
            :src="brandLogo2"
            height="28"
          />
        </swiper-slide>

        <swiper-slide>
          <VImg
            :src="brandLogo3"
            height="28"
          />
        </swiper-slide>

        <swiper-slide>
          <VImg
            :src="brandLogo4"
            height="28"
          />
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>

<style lang="scss">
@use "swiper/css/bundle";

swiper-container::part(bullet-active) {
  border-radius: 6px;
  background-color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity));
  inline-size: 38px;
}

swiper-container::part(bullet) {
  background-color: rgba(var(--v-theme-on-background));
}

.swiper-reviews-carousel {
  swiper-container {
    --swiper-pagination-bullet-width: 10px;
    --swiper-pagination-bullet-height: 10px;

    .swiper {
      padding-block-end: 3rem;
    }
  }

  swiper-slide {
    block-size: auto;
    opacity: 0.5;
    padding-block: 1rem;
    padding-block-end: 1rem;
    transition: all 0.35s ease;

    &.swiper-slide-active {
      opacity: 1;
      padding-block: 0;
    }
  }

  .swiper-pagination {
    inset-block-end: 0 !important;
    inset-block-start: 0 !important;
  }
}
</style>

<style lang="scss" scoped>
.customer-reviews {
  margin-block-end: 2rem;
  margin-block-start: 6.25rem;
}
</style>
