<script setup lang="ts">
import { useConfigStore } from '@core/stores/config'
import type { SearchResults } from '@db/app-bar-search/types'
import Shepherd from 'shepherd.js'
import { withQuery } from 'ufo'
import type { RouteLocationRaw } from 'vue-router'

interface Suggestion {
  icon: string
  title: string
  url: RouteLocationRaw
}

defineOptions({
  inheritAttrs: false,
})

const configStore = useConfigStore()

interface SuggestionGroup {
  title: string
  content: Suggestion[]
}

// 👉 Is App Search Bar Visible
const isAppSearchBarVisible = ref(false)

// 👉 Default suggestions

const suggestionGroups: SuggestionGroup[] = [
  {
    title: 'Popular Searches',
    content: [
      { icon: 'ri-donut-chart-line', title: 'Analytics', url: { name: 'dashboards-analytics' } },
      { icon: 'ri-bubble-chart-line', title: 'CRM', url: { name: 'dashboards-crm' } },
      { icon: 'ri-article-line', title: 'Landing Page', url: { name: 'front-pages-landing-page' } },
      { icon: 'ri-group-line', title: 'User List', url: { name: 'apps-user-list' } },
    ],
  },
  {
    title: 'Apps & Pages',
    content: [
      { icon: 'ri-calendar-line', title: 'Calendar', url: { name: 'apps-calendar' } },
      { icon: 'ri-shopping-cart-2-line', title: 'ECommerce Product', url: { name: 'apps-ecommerce-product-list' } },
      { icon: 'ri-school-line', title: 'Academy', url: { name: 'apps-academy-dashboard' } },
      { icon: 'ri-truck-line', title: 'Logistic Fleet', url: { name: 'apps-logistics-fleet' } },
    ],
  },
  {
    title: 'User Interface',
    content: [
      { icon: 'ri-font-family', title: 'Typography', url: { name: 'pages-typography' } },
      { icon: 'ri-window-2-line', title: 'Tabs', url: { name: 'components-tabs' } },
      { icon: 'ri-map-line', title: 'Tour', url: { name: 'extensions-tour' } },
      { icon: 'ri-keyboard-box-line', title: 'Statistics', url: { name: 'pages-cards-card-statistics' } },
    ],
  },
  {
    title: 'Popular Searches',
    content: [
      { icon: 'ri-list-check', title: 'Select', url: { name: 'forms-select' } },
      { icon: 'ri-money-rupee-circle-line', title: 'Payment', url: { name: 'front-pages-payment' } },
      { icon: 'ri-calendar-2-line', title: 'Date & Time Picker', url: { name: 'forms-date-time-picker' } },
      { icon: 'ri-home-line', title: 'Property Listing Wizard', url: { name: 'wizard-examples-property-listing' } },
    ],
  },
]

// 👉 No Data suggestion
const noDataSuggestions: Suggestion[] = [
  {
    title: 'Analytics Dashboard',
    icon: 'ri-shopping-cart-line',
    url: { name: 'dashboards-analytics' },
  },
  {
    title: 'Account Settings',
    icon: 'ri-user-line',
    url: { name: 'pages-account-settings-tab', params: { tab: 'account' } },
  },
  {
    title: 'Pricing Page',
    icon: 'ri-cash-line',
    url: { name: 'pages-pricing' },
  },
]

const searchQuery = ref('')

const router = useRouter()
const searchResult = ref<SearchResults[]>([])

const fetchResults = async () => {
  const { data } = await useApi<any>(withQuery('/app-bar/search', { q: searchQuery.value }))

  searchResult.value = data.value
}

watch(searchQuery, fetchResults)

// 👉 redirect the selected page
const redirectToSuggestedOrSearchedPage = (selected: Suggestion) => {
  router.push(selected.url as string)
  isAppSearchBarVisible.value = false
  searchQuery.value = ''
}

const LazyAppBarSearch = defineAsyncComponent(() => import('@core/components/AppBarSearch.vue'))
</script>

<template>
  <div
    class="d-flex align-center cursor-pointer"
    v-bind="$attrs"
    style="user-select: none;"
    @click="isAppSearchBarVisible = !isAppSearchBarVisible"
  >
    <!-- 👉 Search Trigger button -->
    <!-- close active tour while opening search bar using icon -->
    <IconBtn
      class="me-1"
      @click="Shepherd.activeTour?.cancel()"
    >
      <VIcon icon="ri-search-line" />
    </IconBtn>

    <span
      v-if="configStore.appContentLayoutNav === 'vertical'"
      class="d-none d-md-flex align-center text-disabled"
      @click="Shepherd.activeTour?.cancel()"
    >
      <span class="me-3">Search</span>
      <span class="meta-key">&#8984;K</span>
    </span>
  </div>

  <!-- 👉 App Bar Search -->
  <LazyAppBarSearch
    v-model:isDialogVisible="isAppSearchBarVisible"
    :search-results="searchResult"
    @search="searchQuery = $event"
  >
    <!-- suggestion -->
    <template #suggestions>
      <VCardText class="app-bar-search-suggestions h-100 pa-10">
        <VRow
          v-if="suggestionGroups"
          class="gap-y-4"
        >
          <VCol
            v-for="suggestion in suggestionGroups"
            :key="suggestion.title"
            cols="12"
            sm="6"
            class="ps-6"
          >
            <p class="text-xs text-disabled text-uppercase">
              {{ suggestion.title }}
            </p>
            <VList class="card-list">
              <VListItem
                v-for="item in suggestion.content"
                :key="item.title"
                link
                :title="item.title"
                class="app-bar-search-suggestion"
                @click="redirectToSuggestedOrSearchedPage(item)"
              >
                <template #prepend>
                  <VIcon
                    :icon="item.icon"
                    size="20"
                    class="me-2"
                  />
                </template>
              </VListItem>
            </VList>
          </VCol>
        </VRow>
      </VCardText>
    </template>
    <!-- no data suggestion -->
    <template #noDataSuggestion>
      <div class="mt-8">
        <span class="d-flex justify-center text-disabled">Try searching for</span>
        <h6
          v-for="suggestion in noDataSuggestions"
          :key="suggestion.title"
          class="app-bar-search-suggestion text-sm font-weight-regular cursor-pointer mt-3"
          @click="redirectToSuggestedOrSearchedPage(suggestion)"
        >
          <VIcon
            size="20"
            :icon="suggestion.icon"
            class="me-3"
          />
          <span class="text-sm">{{ suggestion.title }}</span>
        </h6>
      </div>
    </template>
    <!-- search result -->
    <template #searchResult="{ item }">
      <VListSubheader class="text-disabled">
        {{ item.title }}
      </VListSubheader>
      <VListItem
        v-for="list in item.children"
        :key="list.title"
        link
        @click="redirectToSuggestedOrSearchedPage(list)"
      >
        <template #prepend>
          <VIcon
            size="20"
            :icon="list.icon"
            class="me-3"
          />
        </template>
        <template #append>
          <VIcon
            size="20"
            icon="ri-corner-down-left-line"
            class="enter-icon text-disabled"
          />
        </template>
        <VListItemTitle>
          {{ list.title }}
        </VListItemTitle>
      </VListItem>
    </template>
  </LazyAppBarSearch>
</template>

<style lang="scss" scoped>
@use "@styles/variables/vuetify.scss";

.meta-key {
  border: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 6px;
  block-size: 1.5625rem;
  line-height: 1.3125rem;
  padding-block: 0.125rem;
  padding-inline: 0.25rem;
}
</style>
