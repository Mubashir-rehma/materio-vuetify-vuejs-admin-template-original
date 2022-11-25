<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { SearchHeader, SearchItem } from '@/@fake-db/types'
import axios from '@axios'

interface Suggestion {
  icon: string
  title: string
  url: object
}

interface SuggestionGroup {
  title: string
  content: Suggestion[]
}

defineOptions({
  inheritAttrs: false,
})

// 👉 Is App Search Bar Visible
const isAppSearchBarVisible = ref(false)

// 👉 Default suggestions
const suggestionGroups: SuggestionGroup[] = [
  {
    title: 'Popular Searches',
    content: [
      { icon: 'mdi-chart-donut', title: 'Analytics', url: { name: 'dashboards-analytics' } },
      { icon: 'mdi-chart-bubble', title: 'CRM', url: { name: 'dashboards-crm' } },
      { icon: 'mdi-file-outline', title: 'Invoice List', url: { name: 'apps-invoice-list' } },
      { icon: 'mdi-account-group-outline', title: 'User List', url: { name: 'apps-user-list' } },
    ],
  },
  {
    title: 'Apps & Pages',
    content: [
      { icon: 'mdi-calendar', title: 'Calendar', url: { name: 'apps-calendar' } },
      { icon: 'mdi-file-plus-outline', title: 'Invoice Add', url: { name: 'apps-invoice-add' } },
      { icon: 'mdi-currency-usd', title: 'Pricing', url: { name: 'pages-pricing' } },
      { icon: 'mdi-account-cog-outline', title: 'Account Settings', url: { name: 'pages-account-settings-tab', params: { tab: 'account' } } },
    ],
  },
  {
    title: 'User Interface',
    content: [
      { icon: 'mdi-alpha-a-box-outline', title: 'Typography', url: { name: 'pages-typography' } },
      { icon: 'mdi-tab', title: 'Tabs', url: { name: 'components-tabs' } },
      { icon: 'mdi-gesture-tap-button', title: 'Buttons', url: { name: 'components-button' } },
      { icon: 'mdi-keyboard-settings-outline', title: 'Statistics', url: { name: 'pages-cards-card-statistics' } },
    ],
  },
  {
    title: 'Popular Searches',
    content: [
      { icon: 'mdi-format-list-checkbox', title: 'Select', url: { name: 'forms-select' } },
      { icon: 'mdi-lastpass', title: 'Combobox', url: { name: 'forms-combobox' } },
      { icon: 'mdi-calendar-range-outline', title: 'Date & Time Picker', url: { name: 'forms-date-time-picker' } },
      { icon: 'mdi-hexagram-outline', title: 'Rating', url: { name: 'forms-rating' } },
    ],
  },
]

// 👉 No Data suggestion
const noDataSuggestions: Suggestion[] = [
  {
    title: 'Analytics Dashboard',
    icon: 'mdi-cart-outline',
    url: { name: 'dashboards-analytics' },
  },
  {
    title: 'Account Settings',
    icon: 'mdi-account-outline',
    url: { name: 'pages-account-settings-tab', params: { tab: 'account' } },
  },
  {
    title: 'Pricing Page',
    icon: 'mdi-cash',
    url: { name: 'pages-pricing' },
  },
]

const searchQuery = ref('')
const searchResult = ref<(SearchItem | SearchHeader)[]>([])
const router = useRouter()

// 👉 fetch search result API
watchEffect(() => {
  axios.get('/app-bar/search', {
    params: {
      q: searchQuery.value,
    },
  }).then(response => {
    searchResult.value = response.data
  })
})

// 👉 redirect the selected page
const redirectToSuggestedOrSearchedPage = (selected: Suggestion) => {
  router.push(selected.url)

  isAppSearchBarVisible.value = false
  searchQuery.value = ''
}
</script>

<template>
  <div
    class="d-flex align-center cursor-pointer"
    v-bind="$attrs"
    @click="isAppSearchBarVisible = !isAppSearchBarVisible"
  >
    <!-- 👉 Search Trigger button -->
    <VBtn
      icon
      variant="text"
      color="default"
      size="small"
    >
      <VIcon
        icon="mdi-magnify"
        size="24"
      />
    </VBtn>

    <span class="d-none d-md-block text-disabled">Search (Ctrl+/)</span>
  </div>

  <!-- 👉 App Bar Search -->
  <AppBarSearch
    v-model:isDialogVisible="isAppSearchBarVisible"
    v-model:search-query="searchQuery"
    :search-result="searchResult"
    :suggestions="suggestionGroups"
    :no-data-suggestion="noDataSuggestions"
    @selected-item="redirectToSuggestedOrSearchedPage"
  >
    <!--
      <template #suggestions>
      use this slot if you want to override default suggestions
      </template>
    -->

    <!--
      <template #noData>
      use this slot to change the view of no data section
      </template>
    -->

    <!--
      <template #searchResult="{ item }">
      use this slot to change the search item
      </template>
    -->
  </AppBarSearch>
</template>
