<script lang="ts" setup>
import avatar1 from '@/assets/images/avatars/avatar-1.png'
import avatar4 from '@/assets/images/avatars/avatar-4.png'
import avatar8 from '@/assets/images/avatars/avatar-8.png'

const solidCardData = [
  {
    cardBg: 'info',
    title: 'Twitter Card',
    icon: 'mdi-twitter',
    text: '"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."',
    avatarImg: avatar4,
    avatarName: 'Mary Vaughn',
    likes: '1.2k',
    share: '80',
  },
  {
    cardBg: 'primary',
    title: 'Facebook Card',
    icon: 'mdi-facebook',
    text: 'You\'ve read about the importance of being courageous, rebellious and imaginative. These are all vital ingredients in an effective',
    avatarImg: avatar1,
    avatarName: 'Eugene Clarke',
    likes: '3.2k',
    share: '49',
  },
  {
    cardBg: 'success',
    title: 'Linkedin Card',
    icon: 'mdi-linkedin',
    text: 'With the Internet spreading like wildfire and reaching every part of our daily life, more and more traffic is directed.',
    avatarImg: avatar8,
    avatarName: 'Anne Burke1',
    likes: '1.2k',
    share: '80',
  },
]
</script>

<template>
  <v-row>
    <v-col
      v-for="data in solidCardData"
      :key="data.icon"
      cols="12"
      md="6"
      lg="4"
    >
      <v-card :color="data.cardBg">
        <v-card-header>
          <v-card-header-text>
            <v-card-title>
              <v-icon
                size="1.5rem"
                color="white"
                class="me-2"
                :icon="data.icon"
              />
              <span class="text-white">{{ data.title }}</span>
            </v-card-title>
          </v-card-header-text>
        </v-card-header>

        <v-card-text class="text-white">
          {{ data.text }}
        </v-card-text>

        <v-card-text class="d-flex justify-space-between align-center">
          <div>
            <v-avatar
              size="34"
              :image="data.avatarImg"
            />
            <span class="text-white ms-2">{{ data.avatarName }}</span>
          </div>

          <div>
            <v-icon
              icon="mdi-heart"
              color="white"
              size="1rem"
              class="me-1"
            />
            <span class="text-subtitle-2 text-white me-4">{{ data.likes }}</span>

            <v-icon
              icon="mdi-share-variant"
              color="white"
              size="1rem"
              class="me-1"
            />
            <span class="text-subtitle-2 text-white">{{ data.share }}</span>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
