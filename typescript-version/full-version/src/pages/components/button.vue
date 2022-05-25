<script lang="ts" setup>
import * as demoCode from '@/views/demos/components/button/demoCodeButton'
</script>

<template>
  <v-row>
    <v-col cols="12">
      <!-- 👉 Colors -->
      <AppCardCode
        title="Colors"
        :code="demoCode.colors"
      >
        <p>The <code>color</code> prop is used to change the background color of the alert.</p>
        <DemoButtonColors />
      </AppCardCode>
    </v-col>

    <v-col cols="12">
      <!-- 👉 Outlined -->
      <AppCardCode
        title="Outlined"
        :code="demoCode.outlined"
      >
        <p>The <code>outlined</code> variant option is used to create outlined buttons.</p>
        <DemoButtonOutlined />
      </AppCardCode>
    </v-col>

    <v-col cols="12">
      <!-- 👉 Flat -->
      <AppCardCode
        title="Flat"
        :code="demoCode.flat"
      >
        <p>The <code>flat</code> buttons still maintain their background color, but have no box shadow.</p>
        <DemoButtonFlat />
      </AppCardCode>
    </v-col>

    <v-col cols="12">
      <!-- 👉 Rounded -->
      <AppCardCode
        title="Rounded"
        :code="demoCode.rounded"
      >
        <p>Use the <code>rounded</code> prop to control the border radius of buttons.</p>
        <DemoButtonRounded />
      </AppCardCode>
    </v-col>

    <v-col cols="12">
      <!-- 👉 Text -->
      <AppCardCode
        title="Text"
        :code="demoCode.text"
      >
        <p>Use <code>text</code> variant option to create text button. Text buttons have no box shadow and no background.</p>
        <DemoButtonText />
      </AppCardCode>
    </v-col>

    <v-col cols="12">
      <!-- 👉 Plain -->
      <AppCardCode
        title="Plain"
        :code="demoCode.plain"
      >
        <p>Use <code>plain</code> variant option to a create a plain button. Plain buttons have a lower baseline opacity that reacts to hover and focus.</p>
        <DemoButtonPlain />
      </AppCardCode>
    </v-col>

    <v-col cols="12">
      <!-- 👉 Contained Text -->
      <AppCardCode
        title="Contained Text"
        :code="demoCode.containedText"
      >
        <p>Use <code>Contained Text</code> variant option to a create a light background button.</p>
        <DemoButtonContainedText />
      </AppCardCode>
    </v-col>

    <v-col cols="12">
      <!-- 👉 Icon -->
      <AppCardCode
        title="Icon"
        :code="demoCode.icon"
      >
        <p>Icons can be used inside of buttons to add emphasis to the action.</p>
        <DemoButtonIcon />
      </AppCardCode>
    </v-col>

    <v-col cols="12">
      <!-- 👉 Icon Only -->
      <AppCardCode
        title="Icon Only"
        :code="demoCode.iconOnly"
      >
        <p>Use <code>icon</code> prop to create button with icon only. This property makes the button rounded and applies the text prop styles.</p>
        <DemoButtonIconOnly />
      </AppCardCode>
    </v-col>

    <v-col cols="12">
      <!-- 👉 Sizing -->
      <AppCardCode
        title="Sizing"
        :code="demoCode.sizing"
      >
        <p>Buttons can be given different sizing options to fit a multitude of scenarios.</p>
        <DemoButtonSizing />
      </AppCardCode>
    </v-col>

    <v-col cols="12">
      <!-- 👉 Block  -->
      <AppCardCode
        title="Block"
        :code="demoCode.block"
      >
        <p>The <code>block</code> prop allows buttons to extend the full available width.</p>
        <DemoButtonBlock />
      </AppCardCode>
    </v-col>

    <v-col cols="12">
      <!-- 👉 Router -->
      <AppCardCode
        title="Router"
        :code="demoCode.router"
      >
        <p>Use <code>to</code> prop to create button with router support.</p>
        <v-alert
          color="warning"
          variant="contained-text"
          class="mb-4"
        >
          Note: On click of the link button, You will get redirected to another page.
        </v-alert>
        <DemoButtonRouter />
      </AppCardCode>
    </v-col>

    <v-col cols="12">
      <!-- 👉 Link -->
      <AppCardCode
        title="Link"
        :code="demoCode.link"
      >
        <p>Designates that the component is a link. This is automatic when using the <code>href</code> or <code>to</code> prop.</p>
        <v-alert
          color="warning"
          variant="contained-text"
          class="mb-4"
        >
          Note: On click of the link button, You will get redirected to another page.
        </v-alert>
        <DemoButtonLink />
      </AppCardCode>
    </v-col>

    <v-col cols="12">
      <!-- 👉 Button Group -->
      <AppCardCode
        title="Group"
        :code="demoCode.group"
      >
        <p>
          Wrap buttons with the <code>v-btn-toggle</code> component to create a group button. You can add a visual divider  between buttons with the <code>divided</code> prop.
        </p>
        <DemoButtonGroup />
      </AppCardCode>
    </v-col>
  </v-row>
</template>
