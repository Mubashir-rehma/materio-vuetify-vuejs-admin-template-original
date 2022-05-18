<script lang="ts" setup>
import * as demoCode from '@/views/components/avatar/demos/demoCodeAvatar';
</script>

<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Colors -->
      <AppCardCode
        title="Colors"
        :code="demoCode.colors"
      >
        <p>Use <code>color</code> prop to change the background color of avatar.</p>

        <DemoAvatarColors />
      </AppCardCode>
    </v-col>

    <v-col
      md="6"
      cols="12"
    >
      <!-- 👉 Sizes -->
      <AppCardCode
        title="Sizes"
        :code="demoCode.sizes"
      >
        <p>The <code>size</code> prop allows you to change the height and width of the avatar.</p>

        <DemoAvatarSizes />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Icons -->
      <AppCardCode
        title="Icons"
        :code="demoCode.icons"
      >
        <p>You can use <code>v-icon</code> in default slot of <code>v-avatar</code> component for rendering image.</p>

        <DemoAvatarIcons />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Tile -->
      <AppCardCode
        title="Tile"
        :code="demoCode.tile"
      >
        <p>The <code>rounded</code> prop can be used to remove the border radius from <code>v-avatar</code> leaving you with a simple square avatar.</p>

        <DemoAvatarTile />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Images -->
      <AppCardCode
        title="Images"
        :code="demoCode.images"
      >
        <p>You can use <code>v-img</code> in default slot of <code>v-avatar</code> component for rendering image.</p>

        <DemoAvatarImages />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Group -->
      <AppCardCode
        title="Group"
        :code="demoCode.group"
      >
        <p>Use <code>v-avatar-group</code> class as a wrapper of avatars.</p>

        <DemoAvatarGroup />
      </AppCardCode>
    </v-col>
  </v-row>
</template>
