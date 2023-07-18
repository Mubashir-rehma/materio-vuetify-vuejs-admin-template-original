import { defineStore } from 'pinia'
import type { CustomerParams, OrderParams, ProductParams, ReferralParams, ReviewParams } from './types'

import { axios } from '@axios'

export const useECommerceStore = defineStore('ECommerceStore', {
  actions: {
    // 👉 Fetch users data
    fetchProducts(params: ProductParams) { return axios.get('/apps/ecommerce/products/list', { params }) },

    fetchOrders(params: OrderParams) { return axios.get('/apps/ecommerce/orders/list', { params }) },

    deleteOrder(id: number) { return axios.delete(`/apps/ecommerce/orders/${id}`) },

    fetchCustomers(params: CustomerParams) { return axios.get('/apps/ecommerce/customers/list', { params }) },

    fetchSingleCustomer(id: number) { return axios.get(`/apps/ecommerce/customers/${id}`) },

    fetchReviews(params: ReviewParams) { return axios.get('/apps/ecommerce/reviews/list', { params }) },

    deleteReview(id: number) { return axios.delete(`/apps/ecommerce/reviews/${id}`) },

    fetchReferrals(params: ReferralParams) { return axios.get('/apps/ecommerce/referrals', { params }) },
  },
})
