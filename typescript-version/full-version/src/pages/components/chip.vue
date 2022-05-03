<script setup lang="ts">
import * as demoCode from '@/views/components/chip/demos/demoCodeChip'
</script>

<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Color -->
      <AppCardCode
        title="Color"
        :code="demoCode.color"
      >
        <p>Use <code>color</code> prop to change the background color of chips.</p>

        <DemoChipColor />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Outlined -->
      <AppCardCode
        title="Outlined"
        :code="demoCode.outlined"
      >
        <p>Use <code>outlined</code> variant option to create outline border chips.</p>

        <DemoChipOutlined />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Label -->
      <AppCardCode
        title="Label"
        :code="demoCode.label"
      >
        <p>Label chips use the <code>v-card</code> border-radius. Use <code>label</code> prop to create label chips.</p>

        <DemoChipLabel />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Closable -->
      <AppCardCode
        title="Closable"
        :code="demoCode.closable"
      >
        <p>Closable chips can be controlled with a <code>v-model</code>.</p>

        <DemoChipClosable />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Chip With Icon -->
      <AppCardCode
        title="Chip With Icon"
        :code="demoCode.withIcon"
      >
        <p>Chips can use text or any icon available in the Material Icons font library.</p>

        <DemoChipWithIcon />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Sizes -->
      <AppCardCode
        title="Sizes"
        :code="demoCode.sizes"
      >
        <p>The <code>v-chip</code> component can have various sizes from <code>x-small</code> to <code>x-large</code>.</p>

        <DemoChipSizes />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 In Selects -->
      <AppCardCode
        title="In Select"
        :code="demoCode.inSelects"
      >
        <p>Selects can use <code>chips</code> to display the selected data. Try adding your own tags below.</p>

        <DemoChipInSelects />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Expandable -->
      <AppCardCode
        title="Expandable"
        :code="demoCode.expandable"
      >
        <p>Chips can be combined with <code>v-menu</code> to enable a specific set of actions for a chip.</p>

        <DemoChipExpandable />
      </AppCardCode>
    </v-col>
  </v-row>
</template>
