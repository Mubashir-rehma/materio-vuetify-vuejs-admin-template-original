import type { vehicleParams } from './types'
import { axios } from '@axios'

export const useLogisticsStore = defineStore('LogisticsStore', {
  actions: {
    fetchVehicles(params: vehicleParams) { return axios.get('/apps/logistics', { params }) },
  },
})
