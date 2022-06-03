<template>
  <v-row>
    <!-- 👉  Area chart -->
    <v-col cols="12">
      <v-card>
        <v-card-header class="flex-wrap">
          <v-card-header-text>
            <v-card-title>Area Chart</v-card-title>
            <v-card-subtitle>Commercial networks</v-card-subtitle>
          </v-card-header-text>
          <div class="text-subtitle-2">
            <v-icon
              start
              icon="mdi-calendar-blank-outline"
              size="18"
            />
            <span>2019-05-01 to 2019-05-10</span>
          </div>
        </v-card-header>

        <v-card-text>
          <ApexChartAreaChart />
        </v-card-text>
      </v-card>
    </v-col>

    <!-- 👉 Data Science -->
    <v-col cols="12">
      <v-card>
        <v-card-header class="flex-wrap">
          <v-card-header-text>
            <v-card-title>Data Science</v-card-title>
          </v-card-header-text>
          <div class="text-subtitle-2">
            <v-icon
              start
              icon="mdi-calendar-blank-outline"
              size="18"
            />
            <span>2019-05-01 to 2019-05-10</span>
          </div>
        </v-card-header>

        <v-card-text>
          <ApexChartDataScience />
        </v-card-text>
      </v-card>
    </v-col>

    <!-- 👉 New Technologies Data -->
    <v-col cols="12">
      <v-card>
        <v-card-header class="flex-wrap">
          <v-card-header-text>
            <v-card-title>New Technologies Data</v-card-title>
          </v-card-header-text>
          <v-btn-toggle
            density="compact"
            color="primary"
            variant="outlined"
          >
            <v-btn>Daily</v-btn>
            <v-btn>Monthly</v-btn>
            <v-btn>Yearly</v-btn>
          </v-btn-toggle>
        </v-card-header>

        <v-card-text>
          <ApexChartNewTechnologiesData />
        </v-card-text>
      </v-card>
    </v-col>

    <!-- 👉 Balance Line Chart  -->
    <v-col cols="12">
      <v-card>
        <v-card-header class="flex-wrap">
          <v-card-header-text>
            <v-card-title>Balance</v-card-title>
            <v-card-subtitle>Commercial networks & enterprises</v-card-subtitle>
          </v-card-header-text>
          <h6 class="text-h6 me-3">
            $221,267
          </h6>
          <v-chip
            label
            color="success"
            class="font-weight-bold"
          >
            <v-icon
              start
              icon="mdi-arrow-up"
              size="15"
            />
            <span>22%</span>
          </v-chip>
        </v-card-header>

        <v-card-text>
          <ApexChartBalance />
        </v-card-text>
      </v-card>
    </v-col>

    <!-- 👉 Balance Horizontal Bar -->
    <v-col
      cols="12"
      md="6"
    >
      <v-card>
        <v-card-header class="flex-wrap">
          <v-card-header-text>
            <v-card-title>Balance</v-card-title>
            <v-card-subtitle>$74,382.72</v-card-subtitle>
          </v-card-header-text>
          <div class="text-subtitle-2">
            <v-icon
              start
              icon="mdi-calendar-blank-outline"
              size="18"
            />
            <span>2019-05-01 to 2019-05-10</span>
          </div>
        </v-card-header>

        <v-card-text>
          <ApexChartHorizontalBar />
        </v-card-text>
      </v-card>
    </v-col>

    <!-- 👉 Stock Price Chart -->
    <v-col
      cols="12"
      md="6"
    >
      <v-card>
        <v-card-header class="flex-wrap">
          <v-card-header-text>
            <v-card-title>Stocks Prices</v-card-title>
            <v-card-subtitle>$50,863.98</v-card-subtitle>
          </v-card-header-text>
          <div class="text-subtitle-2">
            <v-icon
              start
              icon="mdi-calendar-blank-outline"
              size="18"
            />
            <span>2019-05-01 to 2019-05-10</span>
          </div>
        </v-card-header>

        <v-card-text>
          <ApexChartStockPrice />
        </v-card-text>
      </v-card>
    </v-col>

    <!-- 👉 Daily Sales States -->
    <v-col
      cols="12"
      md="6"
    >
      <v-card>
        <v-card-header>
          <v-card-header-text>
            <v-card-title>Daily Sales States</v-card-title>
          </v-card-header-text>
        </v-card-header>

        <v-card-text>
          <ApexChartDailySalesStates />
        </v-card-text>
      </v-card>
    </v-col>

    <!-- 👉 Statistics -->
    <v-col
      cols="12"
      md="6"
    >
      <v-card>
        <v-card-header>
          <v-card-header-text>
            <v-card-title>Statistics</v-card-title>
          </v-card-header-text>
        </v-card-header>

        <v-card-text>
          <ApexChartStatistics />
        </v-card-text>
      </v-card>
    </v-col>

    <!-- 👉 Mobile Comparison -->
    <v-col
      cols="12"
      md="6"
    >
      <v-card>
        <v-card-header>
          <v-card-header-text>
            <v-card-title>Mobile Comparison</v-card-title>
          </v-card-header-text>
        </v-card-header>

        <v-card-text>
          <ApexChartMobileComparison />
        </v-card-text>
      </v-card>
    </v-col>

    <!-- 👉 Expense Ratio Chart -->
    <v-col
      cols="12"
      md="6"
    >
      <v-card>
        <v-card-header>
          <v-card-header-text>
            <v-card-title>Expense Ratio</v-card-title>
            <v-card-subtitle>Spending on various categories</v-card-subtitle>
          </v-card-header-text>
        </v-card-header>

        <v-card-text>
          <ApexChartExpenseRatio />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss">
@use "@core/scss/libs/apex-chart.scss";
</style>
