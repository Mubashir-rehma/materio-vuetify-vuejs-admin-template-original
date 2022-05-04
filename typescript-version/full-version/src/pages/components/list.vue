<script setup lang="ts">
import * as demoCode from '@/views/components/list/demos/demoCodeList'
</script>

<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Basic -->
      <AppCardCode
        title="Basic"
        no-padding
        :code="demoCode.basic"
      >
        <v-card-text><code>v-list</code> component can contain an avatar, content, actions and much more.</v-card-text>

        <DemoListBasic />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Rounded -->
      <AppCardCode
        title="Rounded"
        no-padding
        :code="demoCode.rounded"
      >
        <v-card-text>You can make <code>v-list-item</code> rounded using <code>rounded</code> prop.</v-card-text>

        <DemoListRounded />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Density  -->
      <AppCardCode
        title="Density"
        :code="demoCode.density"
        no-padding
      >
        <v-card-text>Use <code>density</code> prop to adjusts the spacing within the component. Available options are: <code>default</code>, <code>comfortable</code>, and <code>compact</code>.</v-card-text>

        <DemoListDensity />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Nav -->
      <AppCardCode
        title="Nav"
        no-padding
        :code="demoCode.nav"
      >
        <v-card-text>Lists can receive an alternative <code>nav</code> styling that reduces the width <code>v-list-item</code> takes up as well as adding a border radius.</v-card-text>

        <DemoListNav />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Shaped -->
      <AppCardCode
        title="Shaped"
        no-padding
        :code="demoCode.shaped"
      >
        <v-card-text>
          Shaped lists have rounded borders on one side of the <code>v-list-item</code>.
        </v-card-text>

        <DemoListShaped />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Sub Group -->
      <AppCardCode
        title="Sub Group"
        no-padding
        :code="demoCode.subGroup"
      >
        <v-card-text>
          Using the <code>v-list-group</code> component you can create up to 2 levels in depth using the sub-group prop.
        </v-card-text>

        <DemoListSubGroup />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Two lines and Subheader -->
      <AppCardCode
        title="Two lines and subheader"
        no-padding
        :code="demoCode.twoLinesAndSubheader"
      >
        <v-card-text>Lists can contain subheaders, dividers, and can contain 1 or more lines. The subtitle will overflow with ellipsis if it extends past one line.</v-card-text>

        <DemoListTwoLinesAndSubheader />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Three Line -->
      <AppCardCode
        title="Three Line"
        no-padding
        :code="demoCode.threeLine"
      >
        <v-card-text>For three line lists, the subtitle will clamp vertically at 2 lines and then ellipsis. This feature uses line-clamp and is not supported in all browsers.</v-card-text>

        <DemoListThreeLine />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Action and item group -->
      <AppCardCode
        title="Action and item group"
        no-padding
        :code="demoCode.actionAndItemGroup"
      >
        <v-card-text>A <code>three-line</code> list with actions. Utilizing <code>v-list-group</code>, easily connect actions to your tiles.</v-card-text>

        <DemoListActionAndItemGroup />
      </AppCardCode>
    </v-col>
  </v-row>
</template>
