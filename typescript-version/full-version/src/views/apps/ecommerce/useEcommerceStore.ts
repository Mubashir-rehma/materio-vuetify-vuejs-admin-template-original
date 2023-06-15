import { defineStore } from 'pinia'
import type { productParams } from './types'

// import type { productParams } from '@/views/apps/ecommerce/types'
import axios from '@axios'

export const useEcommerceStore = defineStore('EcommerceStore', {
  actions: {
    // 👉 Fetch users data
    fetchProducts(params: productParams) { return axios.get('/apps/ecommerce/products/list', { params }) },
  },
})
