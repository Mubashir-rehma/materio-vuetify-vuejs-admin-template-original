<script setup lang="ts">
import Shepherd from 'shepherd.js'
import { withQuery } from 'ufo'
import type { RouteLocationRaw } from 'vue-router'
import type { SearchResults } from '@/plugins/fake-api/handlers/app-bar-search/type'

interface Suggestion {
  icon: string
  title: string
  url: RouteLocationRaw
}

defineOptions({
  inheritAttrs: false,
})

const { appContentLayoutNav } = useThemeConfig()

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
      <VIcon icon="mdi-magnify" />
    </IconBtn>

    <span
      v-if="appContentLayoutNav === 'vertical'"
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
            icon="mdi-subdirectory-arrow-left"
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
@use "@styles/variables/_vuetify.scss";

.meta-key {
  border: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 6px;
  block-size: 1.5625rem;
  line-height: 1.3125rem;
  padding-block: 0.125rem;
  padding-inline: 0.25rem;
}
</style>
