<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable'

import avatar1 from '@images/avatars/avatar-1.png'
import product21 from '@images/ecommerce-images/product-21.png'
import product22 from '@images/ecommerce-images/product-22.png'
import product23 from '@images/ecommerce-images/product-23.png'
import product24 from '@images/ecommerce-images/product-24.png'

const route = useRoute('apps-ecommerce-order-details-id')

const headers = [
  { title: 'Product', key: 'product_name' },
  { title: 'Price', key: 'price' },
  { title: 'Quantity', key: 'quantity' },
  { title: 'Total', key: 'total', sortable: false },
]

const orderData = [
  {
    product_name: 'OnePlus 7 Pro',
    product_image: product21,
    brand: 'OnePlus',
    price: 799,
    quantity: 1,
  },
  {
    product_name: 'Magic Mouse',
    product_image: product22,
    brand: 'Apple',
    price: 89,
    quantity: 1,
  },
  {
    product_name: 'Wooden Chair',
    product_image: product23,
    brand: 'insofer',
    price: 289,
    quantity: 2,
  },
  {
    product_name: 'Air Jorden',
    product_image: product24,
    brand: 'Nike',
    price: 299,
    quantity: 2,
  },

]
</script>

<template>
  <div>
    <div class="d-flex justify-space-between align-center flex-wrap gap-y-4 mb-6">
      <div>
        <div class="d-flex gap-2 align-center mb-2 flex-wrap">
          <h5 class="text-h5">
            Order #{{ route.params.id }}
          </h5>
          <div class="d-flex gap-x-2">
            <VChip
              variant="tonal"
              color="success"
              density="compact"
            >
              Paid
            </VChip>
            <VChip
              variant="tonal"
              color="info"
              density="compact"
            >
              Ready to Pickup
            </VChip>
          </div>
        </div>
        <div>
          <span class="text-body-1">
            Aug 17, 2020, 5:48 (ET)
          </span>
        </div>
      </div>
      <VBtn
        variant="outlined"
        color="error"
      >
        Delete Order
      </VBtn>
    </div>

    <VRow>
      <VCol
        cols="12"
        md="8"
      >
        <!-- 👉 Order Details -->
        <VCard class="mb-6">
          <VCardItem>
            <template #title>
              <h5 class="text-h5">
                Order Details
              </h5>
            </template>
            <template #append>
              <span>Edit</span>
            </template>
          </VCardItem>

          <VDataTable
            :headers="headers"
            :items="orderData"
            show-select
          >
            <template #item.product_name="{ item }">
              <div class="d-flex gap-x-3">
                <VAvatar
                  size="38"
                  :image="item.raw.product_image"
                  :rounded="0"
                />
                <div class="d-flex flex-column">
                  <span class="text-body-1 font-weight-medium text-high-emphasis">
                    {{ item.raw.product_name }}
                  </span>
                  <span class="text-caption">
                    {{ item.raw.brand }}
                  </span>
                </div>
              </div>
            </template>

            <template #item.price="{ item }">
              <span>${{ item.raw.price }}</span>
            </template>

            <template #item.total="{ item }">
              <span>
                ${{ item.raw.price * item.raw.quantity }}
              </span>
            </template>

            <template #bottom />
          </VDataTable>

          <VCardText>
            <div class="d-flex align-end flex-column">
              <VTable class="text-high-emphasis">
                <tr>
                  <td width="200px">
                    Subtotal:
                  </td>
                  <td class="font-weight-medium">
                    $2,093
                  </td>
                </tr>
                <tr>
                  <td>Shipping Total: </td>
                  <td class="font-weight-medium">
                    $2
                  </td>
                </tr>
                <tr>
                  <td>Tax: </td>
                  <td class="font-weight-medium">
                    $28
                  </td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td class="font-weight-medium">
                    $2,113
                  </td>
                </tr>
              </VTable>
            </div>
          </VCardText>
        </VCard>

        <!-- 👉 Shipping Activity -->
        <VCard title="Shipping Activity">
          <VCardText>
            <VTimeline
              truncate-line="both"
              align="start"
              side="end"
              line-inset="10"
              line-color="primary"
              density="compact"
              class="v-timeline-density-compact"
            >
              <VTimelineItem
                dot-color="primary"
                size="x-small"
              >
                <div class="app-timeline-title mb-3">
                  Main
                </div>
                <p class="app-timeline-text">
                  Your order has been placed successfully
                </p>
              </VTimelineItem>

              <VTimelineItem
                dot-color="primary"
                size="x-small"
              >
                <div class="d-flex justify-space-between align-center mb-3">
                  <span class="app-timeline-title">Pick-up</span>
                  <span class="app-timeline-meta">Wednesday 11:29 AM</span>
                </div>
                <p class="app-timeline-text">
                  Pick-up scheduled with courier
                </p>
              </VTimelineItem>

              <VTimelineItem
                dot-color="primary"
                size="x-small"
              >
                <div class="d-flex justify-space-between align-center mb-3">
                  <span class="app-timeline-title">Dispatched</span>
                  <span class="app-timeline-meta">Thursday 8:15 AM</span>
                </div>
                <p class="app-timeline-text">
                  Item has been picked up by courier.
                </p>
              </VTimelineItem>

              <VTimelineItem
                dot-color="primary"
                size="x-small"
              >
                <div class="d-flex justify-space-between align-center mb-3">
                  <span class="app-timeline-title">Package arrived</span>
                  <span class="app-timeline-meta">Saturday 15:20 AM</span>
                </div>
                <p class="app-timeline-text">
                  Package arrived at an Amazon facility, NY
                </p>
              </VTimelineItem>

              <VTimelineItem
                dot-color="primary"
                size="x-small"
              >
                <div class="d-flex justify-space-between align-center mb-3">
                  <span class="app-timeline-title">Dispatched for delivery</span>
                  <span class="app-timeline-meta">Today 14:12 PM</span>
                </div>
                <p class="app-timeline-text">
                  Package has left an Amazon facility , NY
                </p>
              </VTimelineItem>

              <VTimelineItem
                dot-color="secondary"
                size="x-small"
              >
                <div class="d-flex justify-space-between align-center mb-3">
                  <span class="app-timeline-title">Delivery</span>
                </div>
                <p class="app-timeline-text">
                  Package will be delivered by tomorrow
                </p>
              </VTimelineItem>
            </VTimeline>
          </VCardText>
        </VCard>
      </VCol>

      <VCol
        cols="12"
        md="4"
      >
        <!-- 👉 Customer Details  -->
        <VCard class="mb-6">
          <VCardText class="d-flex flex-column gap-y-6">
            <div class="text-body-1 text-high-emphasis font-weight-medium">
              Customer Details
            </div>

            <div class="d-flex align-center">
              <VAvatar
                :image="avatar1"
                class="me-3"
              />
              <div>
                <div class="text-body-1 text-high-emphasis font-weight-medium">
                  Shamus Tuttle
                </div>
                <span class="text-caption">Customer ID: #47389</span>
              </div>
            </div>

            <div>
              <VAvatar
                variant="tonal"
                color="success"
                class="me-3"
              >
                <VIcon icon="mdi-cart-plus" />
              </VAvatar>
              <span class="text-sm font-weight-medium text-high-emphasis">12 Orders</span>
            </div>

            <div class="d-flex flex-column gap-y-1">
              <div class="d-flex justify-space-between text-body-2">
                <span class="text-body-2 text-high-emphasis font-weight-medium">Contact Info</span>
                <span class="text-primary font-weight-medium">Edit</span>
              </div>
              <span>Email: Sheldon88@yahoo.com</span>
              <span>Mobile: +1 (609) 972-22-22</span>
            </div>
          </VCardText>
        </VCard>

        <!-- 👉 Shipping Address -->
        <VCard class="mb-6">
          <VCardText>
            <div class="d-flex align-center justify-space-between mb-6">
              <div class="text-body-1 text-high-emphasis font-weight-medium">
                Shipping Address
              </div>
              <span class="text-body-2 text-primary font-weight-medium">Edit</span>
            </div>
            <div>
              45 Rocker Terrace <br> Latheronwheel <br> KW5 8NW, London <br> UK
            </div>
          </VCardText>
        </VCard>

        <!-- 👉 Billing Address -->
        <VCard>
          <VCardText>
            <div class="d-flex align-center justify-space-between mb-3">
              <div class="text-body-1 text-high-emphasis font-weight-medium">
                Billing Address
              </div>
              <span class="text-body-2 text-primary font-weight-medium">Edit</span>
            </div>
            <div>
              45 Rocker Terrace <br> Latheronwheel <br> KW5 8NW, London <br> UK
            </div>

            <div class="mt-6">
              <div class="text-body-1 text-body-1 text-high-emphasis font-weight-medium">
                Mastercard
              </div>
              <div class="text-body-2">
                Card Number: ******4291
              </div>
            </div>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
