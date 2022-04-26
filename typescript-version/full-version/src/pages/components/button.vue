<script lang="ts" setup>
import * as demoCode from '@/views/components/button/demos/demoCodeButton'
</script>

<template>
  <!-- 👉 Colors -->
  <AppCardCode
    title="Colors"
    :code="demoCode.buttonColors"
  >
    <p>The <code>color</code> prop is used to change the background color of the alert.</p>

    <DemoButtonColors />
  </AppCardCode>

  <!-- 👉 Outlined -->
  <AppCardCode
    title="Outlined"
    :code="demoCode.buttonOutlined"
  >
    <p>The <code>outlined</code> variant option is used to create outlined buttons.</p>

    <DemoButtonOutlined />
  </AppCardCode>

  <!-- 👉 Flat -->
  <AppCardCode
    title="Flat"
    :code="demoCode.buttonFlat"
  >
    <p>The <code>flat</code> buttons still maintain their background color, but have no box shadow.</p>

    <DemoButtonFlat />
  </AppCardCode>

  <!-- 👉 Rounded -->
  <AppCardCode
    title="Rounded"
    :code="demoCode.buttonRounded"
  >
    <p>Use the <code>rounded</code> prop to control the border radius of buttons.</p>

    <DemoButtonRounded />
  </AppCardCode>

  <!-- 👉 Text -->
  <AppCardCode
    title="Text"
    :code="demoCode.buttonText"
  >
    <p>Use <code>text</code> variant option to create text button. Text buttons have no box shadow and no background.</p>

    <DemoButtonText />
  </AppCardCode>

  <!-- 👉 Plain -->
  <AppCardCode
    title="Plain"
    :code="demoCode.buttonPlain"
  >
    <p>Use <code>plain</code> variant option to a create a plain button. Plain buttons have a lower baseline opacity that reacts to hover and focus.</p>

    <DemoButtonPlain />
  </AppCardCode>

  <!-- 👉 Contained Text -->
  <AppCardCode
    title="Contained Text"
    :code="demoCode.buttonPlain"
  >
    <p>Use <code>Contained Text</code> variant option to a create a light background button.</p>

    <DemoButtonContainedText />
  </AppCardCode>

  <!-- 👉 Icon -->
  <AppCardCode
    title="Icon"
    :code="demoCode.buttonIcon"
  >
    <p>Icons can be used inside of buttons to add emphasis to the action.</p>

    <DemoButtonIcon />
  </AppCardCode>

  <!-- 👉 Icon Only -->
  <AppCardCode
    title="Icon Only"
    :code="demoCode.buttonIconOnly"
  >
    <p>Use <code>icon</code> prop to create button with icon only. This property makes the button rounded and applies the text prop styles.</p>

    <DemoButtonIconOnly />
  </AppCardCode>

  <!-- 👉 Sizing -->
  <AppCardCode
    title="Sizing"
    :code="demoCode.buttonSizing"
  >
    <p>Buttons can be given different sizing options to fit a multitude of scenarios.</p>

    <DemoButtonSizing />
  </AppCardCode>

  <!-- 👉 Block Button -->
  <AppCardCode
    title="Block Button"
    :code="demoCode.buttonBlock"
  >
    <p>The <code>block</code> prop allows buttons to extend the full available width.</p>

    <DemoButtonBlock />
  </AppCardCode>

  <!-- 👉 Router -->
  <AppCardCode
    title="Router"
    :code="demoCode.buttonRouter"
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

  <!-- 👉 Link -->
  <AppCardCode
    title="Link"
    :code="demoCode.buttonLink"
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

  <!-- 👉 Button Group -->
  <AppCardCode
    title="Group Button"
    :code="demoCode.buttonGroup"
  >
    <p>
      Wrap buttons with the <code>v-btn-toggle</code> component to create a group button. You can add a visual divider  between buttons with the <code>divided</code> prop.
    </p>

    <DemoButtonGroup />
  </AppCardCode>
</template>
