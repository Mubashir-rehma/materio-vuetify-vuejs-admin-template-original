<template>
  <v-row>
    <!-- colors -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Colors"
        :code="codeSnippets.avatarColors"
        class="mb-6"
      >
        <v-card-text>
          Use <code>color</code> prop to change the background color of avatar.
        </v-card-text>
        <v-card-text>
          <demo-avatar-colors></demo-avatar-colors>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- sizes -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Sizes"
        :code="codeSnippets.avatarSizes"
        class="mb-6"
      >
        <v-card-text>
          The size <code>prop</code> allows you to define the height and width of <code>v-avatar</code>.
        </v-card-text>
        <v-card-text>
          <demo-avatar-size></demo-avatar-size>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- icons -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Icons"
        :code="codeSnippets.avatarIcons"
        class="mb-6"
      >
        <v-card-text>
          The <code>v-avatar</code> default slot will accept the <code>v-icon</code> component, an image, or text. Mix and match these with other props to create something unique.
        </v-card-text>

        <v-card-text>
          <demo-avatar-icons></demo-avatar-icons>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- rounded -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Rounded"
        :code="codeSnippets.avatarRounded"
        class="mb-6"
      >
        <v-card-text>
          Use <code>rounded</code> prop to create a rounded border avatar.
        </v-card-text>

        <v-card-text>
          <demo-avatar-rounded></demo-avatar-rounded>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- tile -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Tile"
        :code="codeSnippets.avatarTile"
        class="mb-6"
      >
        <v-card-text>
          The <code>tile</code> prop removes the border radius from v-avatar leaving you with a simple square avatar.
        </v-card-text>
        <v-card-text>
          <demo-avatar-tile></demo-avatar-tile>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- actionable avatar -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Avatar Images"
        :code="codeSnippets.avatarImages"
      >
        <v-card-text>
          The <code>v-avatar</code> default slot will accept the <code>v-img</code> components.
        </v-card-text>

        <v-card-text>
          <demo-avatar-images></demo-avatar-images>
        </v-card-text>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoAvatarColors from './demos/DemoAvatarColors.vue'
import DemoAvatarSize from './demos/DemoAvatarSize.vue'
import DemoAvatarIcons from './demos/DemoAvatarIcons.vue'
import DemoAvatarRounded from './demos/DemoAvatarRounded.vue'
import DemoAvatarTile from './demos/DemoAvatarTile.vue'
import DemoAvatarImages from './demos/DemoAvatarImages.vue'

// code
// eslint-disable-next-line object-curly-newline
import { avatarColors, avatarSizes, avatarIcons, avatarRounded, avatarTile, avatarImages } from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoAvatarColors,
    DemoAvatarSize,
    DemoAvatarIcons,
    DemoAvatarRounded,
    DemoAvatarTile,
    DemoAvatarImages,
  },
  setup() {
    return {
      codeSnippets: {
        avatarColors,
        avatarSizes,
        avatarIcons,
        avatarRounded,
        avatarTile,
        avatarImages,
      },
    }
  },
}
</script>
