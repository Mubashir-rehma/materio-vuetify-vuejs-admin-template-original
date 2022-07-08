<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'
</script>

<template>
  <VRow>
    <!-- 👉  Area chart -->
    <VCol cols="12">
      <VCard>
        <VCardHeader class="flex-wrap">
          <VCardHeaderText>
            <VCardTitle>Area Chart</VCardTitle>
            <VCardSubtitle>Commercial networks</VCardSubtitle>
          </VCardHeaderText>

          <div class="date-picker-wrapper">
            <AppDateTimePicker
              model-value="2022-06-09"
              prepend-inner-icon="mdi-calendar-blank-outline"
              density="compact"
            />
          </div>
        </VCardHeader>

        <VCardText>
          <ApexChartAreaChart />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Data Science -->
    <VCol cols="12">
      <VCard>
        <VCardHeader class="flex-wrap">
          <VCardHeaderText>
            <VCardTitle>Data Science</VCardTitle>
          </VCardHeaderText>

          <div class="date-picker-wrapper">
            <AppDateTimePicker
              model-value="2022-06-09"
              prepend-inner-icon="mdi-calendar-blank-outline"
              density="compact"
            />
          </div>
        </VCardHeader>

        <VCardText>
          <ApexChartDataScience />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 New Technologies Data -->
    <VCol cols="12">
      <VCard>
        <VCardHeader class="flex-wrap">
          <VCardHeaderText>
            <VCardTitle>New Technologies Data</VCardTitle>
          </VCardHeaderText>

          <VBtnToggle
            density="compact"
            color="primary"
            variant="outlined"
          >
            <VBtn>Daily</VBtn>
            <VBtn>Monthly</VBtn>
            <VBtn>Yearly</VBtn>
          </VBtnToggle>
        </VCardHeader>

        <VCardText>
          <ApexChartNewTechnologiesData />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Balance Line Chart  -->
    <VCol cols="12">
      <VCard>
        <VCardHeader class="flex-wrap">
          <VCardHeaderText>
            <VCardTitle>Balance</VCardTitle>
            <VCardSubtitle>Commercial networks & enterprises</VCardSubtitle>
          </VCardHeaderText>

          <h6 class="text-h6 me-3">
            $221,267
          </h6>
          <VChip
            label
            color="success"
            class="font-weight-bold"
          >
            <VIcon
              start
              icon="mdi-arrow-up"
              size="15"
            />
            <span>22%</span>
          </VChip>
        </VCardHeader>

        <VCardText>
          <ApexChartBalance />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Balance Horizontal Bar -->
    <VCol
      cols="12"
      md="6"
    >
      <VCard>
        <VCardHeader class="flex-wrap">
          <VCardHeaderText>
            <VCardTitle>Balance</VCardTitle>
            <VCardSubtitle>$74,382.72</VCardSubtitle>
          </VCardHeaderText>

          <div class="date-picker-wrapper">
            <AppDateTimePicker
              model-value="2022-06-09"
              prepend-inner-icon="mdi-calendar-blank-outline"
              density="compact"
            />
          </div>
        </VCardHeader>

        <VCardText>
          <ApexChartHorizontalBar />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Stock Price Chart -->
    <VCol
      cols="12"
      md="6"
    >
      <VCard>
        <VCardHeader class="flex-wrap">
          <VCardHeaderText>
            <VCardTitle>Stocks Prices</VCardTitle>
            <VCardSubtitle>$50,863.98</VCardSubtitle>
          </VCardHeaderText>

          <div class="date-picker-wrapper">
            <AppDateTimePicker
              model-value="2022-06-09"
              prepend-inner-icon="mdi-calendar-blank-outline"
              density="compact"
            />
          </div>
        </VCardHeader>

        <VCardText>
          <ApexChartStockPrice />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Daily Sales States -->
    <VCol
      cols="12"
      md="6"
    >
      <VCard title="Daily Sales States">
        <VCardText>
          <ApexChartDailySalesStates />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Statistics -->
    <VCol
      cols="12"
      md="6"
    >
      <VCard title="Statistics">
        <VCardText>
          <ApexChartStatistics />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Mobile Comparison -->
    <VCol
      cols="12"
      md="6"
    >
      <VCard title="Mobile Comparison">
        <VCardText>
          <ApexChartMobileComparison />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Expense Ratio Chart -->
    <VCol
      cols="12"
      md="6"
    >
      <VCard
        title="Expense Ratio"
        subtitle="Spending on various categories"
      >
        <VCardText>
          <ApexChartExpenseRatio />
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/libs/apex-chart.scss";

.date-picker-wrapper {
  inline-size: 12.5rem;
}
</style>
