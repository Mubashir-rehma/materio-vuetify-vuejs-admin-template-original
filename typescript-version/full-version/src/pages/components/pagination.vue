<script setup lang="ts">
import * as demoCode from '@/views/components/pagination/demos/demoCodePagination'
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
        :code="demoCode.basic"
      >
        <p>The <code>v-pagination</code> component is used to separate long sets of data.</p>

        <DemoPaginationBasic />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Circle -->
      <AppCardCode
        title="Circle"
        :code="demoCode.circle"
      >
        <p>The <code>rounded</code> prop allows you to render pagination buttons with alternative styles.</p>

        <DemoPaginationCircle />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Disabled -->
      <AppCardCode
        title="Disabled"
        :code="demoCode.disabled"
      >
        <p>Pagination items can be manually deactivated using the <code>disabled</code> prop.</p>

        <DemoPaginationDisabled />
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
        <p>Previous and next page icons can be customized with the <code>prev-icon</code> and <code>next-icon</code> props.</p>

        <DemoPaginationIcons />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Length -->
      <AppCardCode
        title="Length"
        :code="demoCode.length"
      >
        <p>Using the <code>length</code> prop you can set the length of <code>v-pagination</code>, if the number of page buttons exceeds the parent container, it will truncate the list.</p>

        <DemoPaginationLength />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Total visible -->
      <AppCardCode
        title="Total visible"
        :code="demoCode.totalVisible"
      >
        <p>You can also manually set the maximum number of visible page buttons with the <code>total-visible</code> prop.</p>

        <DemoPaginationTotalVisible />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Color -->
      <AppCardCode
        title="Color"
        :code="demoCode.color"
      >
        <p>Use color prop for create different color pagination.</p>

        <DemoPaginationColor />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Size -->
      <AppCardCode
        title="Size"
        :code="demoCode.size"
      >
        <p>Use <code>size</code> prop to sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: <strong>x-small</strong>, <strong>small</strong>, <strong>default</strong>, <strong>large</strong>, and <strong>x-large</strong>.</p>

        <DemoPaginationSize />
      </AppCardCode>
    </v-col>
  </v-row>
</template>
