import { createFetch } from '@vueuse/core'

export const useApi = createFetch({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  fetchOptions: {
    headers: {
      Accept: 'application/json',
    },
  },
  options: {
    refetch: true,
    afterFetch(ctx) {
      const { data, response } = ctx

      // Parse data if it's JSON
      let parsedData = null
      try {
        parsedData = JSON.parse(data)
      }
      catch (error) {
        console.error(error)
      }

      return { data: parsedData, response }
    },
  },
})
