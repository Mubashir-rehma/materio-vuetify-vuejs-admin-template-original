<script setup lang="ts">
import * as demoCode from '@/views/demos/forms/form-elements/date-time-picker/demoCodeDateTimePicker'
</script>

<template>
  <v-row>
    <!-- 👉 Basic -->
    <v-col
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Basic"
        :code="demoCode.basic"
      >
        <DemoDateTimePickerBasic />
      </AppCardCode>
    </v-col>

    <!-- 👉 Time Picker -->
    <v-col
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Time Picker"
        :code="demoCode.timePicker"
      >
        <DemoDateTimePickerTimePicker />
      </AppCardCode>
    </v-col>

    <!-- 👉 Date & TIme -->
    <v-col
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Date and Time"
        :code="demoCode.dateAndTime"
      >
        <DemoDateTimePickerDateAndTime />
      </AppCardCode>
    </v-col>

    <!-- 👉 Multiple Dates -->
    <v-col
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Multiple Dates"
        :code="demoCode.multipleDates"
      >
        <DemoDateTimePickerMultipleDates />
      </AppCardCode>
    </v-col>

    <!-- 👉 Range -->
    <v-col
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Range"
        :code="demoCode.range"
      >
        <DemoDateTimePickerRange />
      </AppCardCode>
    </v-col>

    <!-- 👉 Human Friendly -->
    <v-col
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Human Friendly"
        :code="demoCode.humanFriendly"
      >
        <DemoDateTimePickerHumanFriendly />
      </AppCardCode>
    </v-col>

    <!-- 👉 Disabled Range -->
    <v-col
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Disabled Range"
        :code="demoCode.disabledRange"
      >
        <DemoDateTimePickerDisabledRange />
      </AppCardCode>
    </v-col>

    <!-- 👉 Inline -->
    <v-col
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Inline"
        :code="demoCode.inline"
      >
        <DemoDateTimePickerInline />
      </AppCardCode>
    </v-col>
  </v-row>
</template>
