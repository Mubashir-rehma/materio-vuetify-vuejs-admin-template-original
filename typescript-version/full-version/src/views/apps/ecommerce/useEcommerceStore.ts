import { defineStore } from 'pinia'
import type { orderParams, productParams } from './types'

// import type { productParams } from '@/views/apps/ecommerce/types'
import axios from '@axios'

export const useEcommerceStore = defineStore('EcommerceStore', {
  actions: {
    // 👉 Fetch users data
    fetchProducts(params: productParams) { return axios.get('/apps/ecommerce/products/list', { params }) },

    fetchOrders(params: orderParams) { return axios.get('/apps/ecommerce/orders/list', { params }) },
  },
})
