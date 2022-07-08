<script setup lang="ts">
const stockData = [
  {
    device: 'Desktop',
    icon: 'mdi-monitor',
    color: 'primary',
    percentage: 80,
    upDown: 2,
  },
  {
    device: 'Mobile',
    icon: 'mdi-tablet-android',
    color: 'warning',
    percentage: 10,
    upDown: 8,
  },
  {
    device: 'Tablet',
    icon: 'mdi-tablet-android',
    color: 'success',
    percentage: 10,
    upDown: -5,
  },
]
</script>

<template>
  <VRow>
    <!-- 👉 Latest Statistics -->
    <VCol
      cols="12"
      md="6"
    >
      <VCard>
        <!-- Header -->
        <VCardHeader>
          <VCardHeaderText>
            <VCardTitle>Latest Statistics</VCardTitle>
          </VCardHeaderText>

          <div class="date-picker-wrapper">
            <AppDateTimePicker
              model-value="2022-06-09"
              prepend-inner-icon="mdi-calendar-blank-outline"
              density="compact"
            />
          </div>
        </VCardHeader>

        <!-- Body -->
        <VCardText>
          <ChartJsBarChart />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Balance Horizontal Bar Chart -->
    <VCol
      cols="12"
      md="6"
    >
      <VCard>
        <!-- Header -->
        <VCardHeader>
          <VCardHeaderText>
            <VCardTitle>Balance</VCardTitle>
            <VCardSubtitle>$74,123</VCardSubtitle>
          </VCardHeaderText>

          <div class="date-picker-wrapper">
            <AppDateTimePicker
              model-value="2022-06-09"
              prepend-inner-icon="mdi-calendar-blank-outline"
              density="compact"
            />
          </div>
        </VCardHeader>

        <!-- Body -->
        <VCardText>
          <ChartjsHorizontalBarChart />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Statistics Line Chart  -->
    <VCol cols="12">
      <VCard
        title="Statistics"
        subtitle="Commercial networks and enterprises"
      >
        <!-- Body -->
        <VCardText>
          <ChartJsLineChart />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Radar Chart -->
    <VCol
      cols="12"
      md="6"
    >
      <VCard title="Radar Chart">
        <!-- Body -->
        <VCardText>
          <ChartJsRadarChart />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Average Skills Polar Area Chart -->
    <VCol
      cols="12"
      md="6"
    >
      <VCard title="Average Skills">
        <!-- Body -->
        <VCardText>
          <ChartJsPolarAreaChart />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉  Bubble Chart -->
    <VCol cols="12">
      <VCard>
        <!-- Header -->
        <VCardHeader>
          <VCardHeaderText>
            <VCardTitle>Bubble Chart</VCardTitle>
          </VCardHeaderText>

          <span class="text-subtitle-2">$ 100,000</span>
        </VCardHeader>

        <!-- Body -->
        <VCardText>
          <ChartJsBubbleChart />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Sessions By Device Doughnut Chart -->
    <VCol
      cols="12"
      lg="4"
    >
      <VCard title="Sessions By Device">
        <VCardText>
          <ChartJsDoughnutChart />
        </VCardText>

        <!-- stocks -->
        <VCardText>
          <div
            v-for="(stock, index) in stockData"
            :key="stock.device"
            :class="index < stockData.length - 1 ? 'mb-4' : ''"
            class="d-flex justify-space-between"
          >
            <div class="d-flex align-center">
              <VIcon
                size="16"
                :color="stock.color"
              >
                {{ stock.icon }}
              </VIcon>
              <span class="font-weight-bold ms-2 me-2">{{ stock.device }}</span>
              <span>- {{ stock.percentage }}%</span>
            </div>
            <div>
              <span>{{ stock.upDown }}%</span>
              <VIcon
                size="14"
                :color="stock.upDown > 0 ? 'success' : 'error'"
              >
                {{ stock.upDown > 0 ? 'mdi-arrow-up' : 'mdi-arrow-down' }}
              </VIcon>
            </div>
          </div>
        </VCardText>
        <!-- / stocks -->
      </VCard>
    </VCol>

    <!-- 👉 New Product Data Scatter Chart -->
    <VCol
      cols="12"
      lg="8"
    >
      <VCard>
        <!-- Header -->
        <VCardHeader>
          <VCardHeaderText>
            <VCardTitle>New Product Data</VCardTitle>
          </VCardHeaderText>

          <VBtnToggle
            color="primary"
            variant="outlined"
            density="compact"
          >
            <VBtn>Daily</VBtn>
            <VBtn>Monthly</VBtn>
            <VBtn>Yearly</VBtn>
          </VBtnToggle>
        </VCardHeader>

        <!-- Body -->
        <VCardText>
          <ChartJsScatterChart />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Data Science Area Line Chart -->
    <VCol cols="12">
      <VCard>
        <!-- Header -->
        <VCardHeader>
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

        <!-- Body -->
        <VCardText>
          <ChartJsLineAreaChart />
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
.date-picker-wrapper {
  inline-size: 12.5rem;
}
</style>
