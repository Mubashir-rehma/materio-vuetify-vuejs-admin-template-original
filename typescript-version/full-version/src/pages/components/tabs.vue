<script setup lang="ts">
import * as demoCode from '@/views/demos/components/tabs/demoCodeTabs'
</script>

<template>
  <v-row class="match-height">
    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Basic -->
      <AppCardCode
        title="Basic"
        :code="demoCode.basic"
      >
        <p>The <code>v-tabs</code> component is used for hiding content behind a selectable item.</p>

        <DemoTabsBasic />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Basic Pill -->
      <AppCardCode
        title="Basic Pill"
        :code="demoCode.basicPill"
      >
        <p>Use our custom class <code>.v-tabs-pill</code> along with <code>v-tabs</code> component to style pill tabs.</p>

        <DemoTabsBasicPill />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Stacked -->
      <AppCardCode
        title="Stacked"
        :code="demoCode.stacked"
      >
        <p>Using <code>stacked</code> prop you can have buttons that use both icons and text.</p>

        <DemoTabsStacked />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Vertical -->
      <AppCardCode
        title="Vertical"
        :code="demoCode.vertical"
      >
        <p>The <code>vertical</code> prop allows for <code>v-tab</code> components to stack vertically.</p>

        <DemoTabsVertical />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Vertical Pill -->
      <AppCardCode
        title="Vertical Pill"
        :code="demoCode.verticalPill"
      >
        <p>Use our custom class .v-tabs-pill along with v-tabs component to style pill tabs.</p>

        <DemoTabsVerticalPill />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Alignment -->
      <AppCardCode
        title="Alignment"
        :code="demoCode.alignment"
      >
        <p>Use <code>centered</code>, <code>right</code> prop to change the tabs alignment.</p>

        <DemoTabsAlignment />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Pagination -->
      <AppCardCode
        title="Pagination"
        :code="demoCode.pagination"
      >
        <p>If the tab items overflow their container, pagination controls will appear on desktop.</p>

        <DemoTabsPagination />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Custom Icons -->
      <AppCardCode
        title="Custom Icons"
        :code="demoCode.customIcons"
      >
        <p><code>prev-icon</code> and <code>next-icon</code> props can be used for applying custom pagination icons.</p>

        <DemoTabsCustomIcons />
      </AppCardCode>
    </v-col>

    <v-col cols="12">
      <!-- 👉 Fixed tabs -->
      <AppCardCode
        title="Fixed"
        :code="demoCode.fixed"
      >
        <p>The <code>fixed-tabs</code> prop forces <code>v-tab</code> to take up all available space up to the maximum width (300px).</p>

        <DemoTabsFixed />
      </AppCardCode>
    </v-col>

    <v-col cols="12">
      <!-- 👉 Grow -->
      <AppCardCode
        title="Grow"
        :code="demoCode.grow"
      >
        <p>The <code>grow</code> prop will make the tab items take up all available space up to a maximum width of 300px.</p>

        <DemoTabsGrow />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Programmatic Navigation -->
      <AppCardCode
        title="Programmatic Navigation"
        :code="demoCode.programmaticNavigation"
      >
        <DemoTabsProgrammaticNavigation />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Dynamic Tabs -->
      <AppCardCode
        title="Dynamic"
        :code="demoCode.dynamic"
      >
        <p>Tabs can be dynamically added and removed. This allows you to update to any number and the <code>v-tabs</code> component will react.</p>

        <DemoTabsDynamic />
      </AppCardCode>
    </v-col>
  </v-row>
</template>
