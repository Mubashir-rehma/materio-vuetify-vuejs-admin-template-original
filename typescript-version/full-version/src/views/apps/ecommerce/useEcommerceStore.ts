import { defineStore } from 'pinia'
import type { customerParams, orderParams, productParams, referralParams, reviewParams } from './types'

// import type { productParams } from '@/views/apps/ecommerce/types'
import axios from '@axios'

export const useEcommerceStore = defineStore('EcommerceStore', {
  actions: {
    // 👉 Fetch users data
    fetchProducts(params: productParams) { return axios.get('/apps/ecommerce/products/list', { params }) },

    fetchOrders(params: orderParams) { return axios.get('/apps/ecommerce/orders/list', { params }) },

    deleteOrder(id: number) { return axios.delete(`/apps/ecommerce/orders/${id}`) },

    fetchCustomers(params: customerParams) { return axios.get('/apps/ecommerce/customers/list', { params }) },

    fetchSingleCustomer(id: number) { return axios.get(`/apps/ecommerce/customers/${id}`) },

    fetchReviews(params: reviewParams) { return axios.get('/apps/ecommerce/reviews/list', { params }) },

    deleteReview(id: number) { return axios.delete(`/apps/ecommerce/reviews/${id}`) },

    fetchReferrals(params: referralParams) { return axios.get('/apps/ecommerce/referrals', { params }) },
  },
})
