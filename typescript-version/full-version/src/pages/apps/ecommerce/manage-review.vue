<script setup lang="ts">
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import type { Options } from '@core/types'

const reviews = ref([])
const totalReviews = ref(0)

const options = ref<Options>({
  page: 1,
  itemsPerPage: 10,
  sortBy: [],
  groupBy: [],
  search: undefined,
})

const searchQuery = ref('')

const fetchReviews = async () => {
  const { data, error } = await useApi<any>(CreateUrl('/apps/ecommerce/reviews', {
    q: searchQuery.value,
    ...options.value,
    ...(options.value.sortBy
     && {
       sortBy: (options.value.sortBy)[0]?.key,
       orderBy: (options.value.sortBy)[0]?.order,
     }
    ),
  }))

  if (error.value) {
    console.log(error.value)
  }
  else {
    reviews.value = data.value.reviews
    totalReviews.value = data.value.total
  }
}

const deleteReview = async (id: number) => {
  await $api(`/apps/ecommerce/reviews/${id}`, {
    method: 'DELETE',
  })

  fetchReviews()
}

watch ([searchQuery, options], fetchReviews)

const reviewData = [
  { rating: 5, value: 124 },
  { rating: 4, value: 40 },
  { rating: 3, value: 12 },
  { rating: 2, value: 7 },
  { rating: 1, value: 2 },
]

const headers = [
  { title: 'Product', key: 'product' },
  { title: 'Reviewer', key: 'reviewer' },
  { title: 'Review', key: 'review' },
  { title: 'Date', key: 'date' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions' },
]
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 Total Review Card  -->
      <VCard>
        <VCardText>
          <VRow>
            <VCol cols="6">
              <div class="border-e">
                <div class="d-flex align-center gap-x-2">
                  <h4 class="text-h4 text-primary">
                    4.89
                  </h4>
                  <VIcon
                    icon="mdi-star"
                    color="primary"
                    size="32"
                  />
                </div>
                <div class="my-2 text-body-2 font-weight-medium text-high-emphasis">
                  Total 187 reviews
                </div>
                <div class="mb-2">
                  All reviews are from genuine customers
                </div>
                <VChip
                  color="primary"
                  density="comfortable"
                >
                  +5 This week
                </VChip>
              </div>
            </VCol>

            <VCol cols="6">
              <div
                v-for="(data, index) in reviewData"
                :key="index"
                class="d-flex align-center gap-x-4 mb-2"
              >
                <div class="text-no-wrap">
                  {{ data.rating }} Star
                </div>
                <div class="w-100">
                  <VProgressLinear
                    color="primary"
                    height="8"
                    :model-value="data.value"
                    rounded
                  />
                </div>
                <div>{{ data.value }}</div>
              </div>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>
    <VCol
      cols="12"
      md="6"
    >
      <VCard>
        <VCardText>
          <VRow>
            <VCol cols="6">
              <div>
                <h6 class="text-h6">
                  Reviews statistics
                </h6>
                <div class="mb-9">
                  <span class="me-2">12 New Reviews</span>
                  <VChip
                    color="success"
                    density="comfortable"
                  >
                    +8.4%
                  </VChip>
                </div>

                <div>
                  <div class="text-high-emphasis text-body-1">
                    <span class="text-success">87%</span> Positive Reviews
                  </div>
                  <div class="text-body-1">
                    Weekly Report
                  </div>
                </div>
              </div>
            </VCol>
            <VCol>
              <!-- Add Chart here -->
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VCardText>
          <div class="d-flex justify-space-between flex-wrap gap-y-4">
            <VTextField
              v-model="searchQuery"
              style="max-inline-size: 200px; min-inline-size: 200px;"
              placeholder="Search .."
              density="compact"
            />
            <div class="d-flex flex-row gap-4 align-center flex-wrap">
              <VSelect
                v-model="options.itemsPerPage"
                :items="[10, 25, 50, 100]"
                density="compact"
              />
              <VBtn
                prepend-icon="mdi-export-variant"
                variant="outlined"
                color="secondary"
              >
                Export
              </VBtn>
              <VBtn prepend-icon="mdi-plus">
                Add Product
              </VBtn>
            </div>
          </div>
        </VCardText>

        <VDataTableServer
          v-model:items-per-page="options.itemsPerPage"
          v-model:page="options.page"
          :headers="headers"
          :items="reviews"
          show-select
          :items-length="totalReviews"
          class="text-no-wrap"
          @update:options="options = $event"
        >
          <template #item.product="{ item }">
            <div class="d-flex gap-x-3 align-center">
              <VAvatar
                :image="item.raw.product_image"
                :size="38"
                variant="tonal"
                rounded
              />
              <div class="d-flex flex-column">
                <span class="text-body-2 text-high-emphasis font-weight-medium">{{ item.raw.product }}</span>
                <span class="text-xs">{{ item.raw.company_name }}</span>
              </div>
            </div>
          </template>

          <template #item.reviewer="{ item }">
            <div class="d-flex align-center gap-x-3">
              <VAvatar
                :image="item.raw.avatar"
                size="34"
              />
              <div class="d-flex flex-column">
                <span>{{ item.raw.reviewer }}</span>
                <span>{{ item.raw.email }}</span>
              </div>
            </div>
          </template>

          <template #item.review="{ item }">
            <VRating
              :model-value="item.raw.review"
              density="compact"
            />
            <div class="text-sm font-weight-medium mb-1">
              {{ item.raw.head }}
            </div>
            <p class="text-sm text-medium-emphasis text-wrap">
              {{ item.raw.para }}
            </p>
          </template>

          <template #item.date="{ item }">
            {{ new Date(item.raw.date).toDateString() }}
          </template>

          <template #item.status="{ item }">
            <VChip
              :color="item.raw.status === 'Published' ? 'success' : 'warning'"
              density="comfortable"
            >
              {{ item.raw.status }}
            </VChip>
          </template>

          <template #item.actions="{ item }">
            <IconBtn>
              <VIcon icon="mdi-dots-vertical" />
              <VMenu activator="parent">
                <VList>
                  <VListItem value="view">
                    <RouterLink :to="{ name: 'apps-ecommerce-order-details-id', params: { id: item.raw.id } }">
                      View
                    </RouterLink>
                  </VListItem>
                  <VListItem
                    value="delete"
                    @click="deleteReview(item.raw.id)"
                  >
                    Delete
                  </VListItem>
                </VList>
              </VMenu>
            </IconBtn>
          </template>
        </VDataTableServer>
      </VCard>
    </VCol>
  </VRow>
</template>
