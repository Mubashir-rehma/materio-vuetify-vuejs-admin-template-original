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
  <v-row>
    <!-- 👉 Latest Statistics -->
    <v-col
      cols="12"
      md="6"
    >
      <v-card>
        <!-- Header -->
        <v-card-header>
          <v-card-header-text>
            <v-card-title>Latest Statistics</v-card-title>
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

        <!-- Body -->
        <v-card-text>
          <ChartJsBarChart />
        </v-card-text>
      </v-card>
    </v-col>

    <!-- 👉 Balance Horizontal Bar Chart -->
    <v-col
      cols="12"
      md="6"
    >
      <v-card>
        <!-- Header -->
        <v-card-header>
          <v-card-header-text>
            <v-card-title>Balance</v-card-title>
            <v-card-subtitle>$74,123</v-card-subtitle>
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

        <!-- Body -->
        <v-card-text>
          <ChartjsHorizontalBarChart />
        </v-card-text>
      </v-card>
    </v-col>

    <!-- 👉 Statistics Line Chart  -->
    <v-col cols="12">
      <v-card>
        <!-- Header -->
        <v-card-header>
          <v-card-header-text>
            <v-card-title>Statistics</v-card-title>
            <v-card-subtitle>
              Commercial networks and enterprises
            </v-card-subtitle>
          </v-card-header-text>
        </v-card-header>

        <!-- Body -->
        <v-card-text>
          <ChartJsLineChart />
        </v-card-text>
      </v-card>
    </v-col>

    <!-- 👉 Radar Chart -->
    <v-col
      cols="12"
      md="6"
    >
      <v-card>
        <!-- Header -->
        <v-card-header>
          <v-card-header-text>
            <v-card-title>Radar Chart</v-card-title>
          </v-card-header-text>
        </v-card-header>

        <!-- Body -->
        <v-card-text>
          <ChartJsRadarChart />
        </v-card-text>
      </v-card>
    </v-col>

    <!-- 👉 Average Skills Polar Area Chart -->
    <V-col
      cols="12"
      md="6"
    >
      <v-card>
        <!-- Header -->
        <v-card-header>
          <v-card-header-text>
            <v-card-title>Average Skills</v-card-title>
          </v-card-header-text>
        </v-card-header>

        <!-- Body -->
        <v-card-text>
          <ChartJsPolarAreaChart />
        </v-card-text>
      </v-card>
    </V-col>

    <!-- 👉  Bubble Chart -->
    <v-col cols="12">
      <v-card>
        <!-- Header -->
        <v-card-header>
          <v-card-header-text>
            <v-card-title>Bubble Chart</v-card-title>
          </v-card-header-text>
          <span class="text-subtitle-2">$ 100,000</span>
        </v-card-header>

        <!-- Body -->
        <v-card-text>
          <ChartJsBubbleChart />
        </v-card-text>
      </v-card>
    </v-col>

    <!-- 👉 Sessions By Device Doughnut Chart -->
    <v-col
      cols="12"
      lg="4"
    >
      <v-card>
        <!-- Header -->
        <v-card-header>
          <v-card-header-text>
            <v-card-title>Sessions By Device</v-card-title>
          </v-card-header-text>
        </v-card-header>

        <v-card-text>
          <ChartJsDoughnutChart />
        </v-card-text>

        <!-- stocks -->
        <v-card-text>
          <div
            v-for="(stock, index) in stockData"
            :key="stock.device"
            :class="index < stockData.length - 1 ? 'mb-4' : ''"
            class="d-flex justify-space-between"
          >
            <div class="d-flex align-center">
              <v-icon
                size="16"
                :color="stock.color"
              >
                {{ stock.icon }}
              </v-icon>
              <span class="font-weight-bold ms-2 me-2">{{ stock.device }}</span>
              <span>- {{ stock.percentage }}%</span>
            </div>
            <div>
              <span>{{ stock.upDown }}%</span>
              <v-icon
                size="14"
                :color="stock.upDown > 0 ? 'success' : 'error'"
              >
                {{ stock.upDown > 0 ? 'mdi-arrow-up' : 'mdi-arrow-down' }}
              </v-icon>
            </div>
          </div>
        </v-card-text>
        <!-- / stocks -->
      </v-card>
    </v-col>

    <!-- 👉 New Product Data Scatter Chart -->
    <v-col
      cols="12"
      lg="8"
    >
      <v-card>
        <!-- Header -->
        <v-card-header>
          <v-card-header-text>
            <v-card-title>New Product Data</v-card-title>
          </v-card-header-text>
          <v-btn-toggle
            color="primary"
            variant="outlined"
            density="compact"
          >
            <v-btn>Daily</v-btn>
            <v-btn>Monthly</v-btn>
            <v-btn>Yearly</v-btn>
          </v-btn-toggle>
        </v-card-header>

        <!-- Body -->
        <v-card-text>
          <ChartJsScatterChart />
        </v-card-text>
      </v-card>
    </v-col>

    <!-- 👉 Data Science Area Line Chart -->
    <v-col cols="12">
      <v-card>
        <!-- Header -->
        <v-card-header>
          <v-card-header-text>
            <v-card-title>
              Data Science
            </v-card-title>
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

        <!-- Body -->
        <v-card-text>
          <ChartJsLineAreaChart />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
