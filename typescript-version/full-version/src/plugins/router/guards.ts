import { useStorage } from '@vueuse/core'
import type { Router } from 'vue-router'
import { canNavigate } from '@layouts/plugins/casl'

export const setupGuards = (router: Router) => {
  // 👉 router.beforeEach
  // Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
  router.beforeEach(to => {
    /**
     * Check if user is logged in by checking if token & user data exists in local storage
     * Feel free to update this logic to suit your needs
     */
    const isLoggedIn = !!(useStorage('userData', null).value && useStorage('accessToken', null).value)

    if (canNavigate(to)) {
      if (to.meta.redirectIfLoggedIn && isLoggedIn)
        return '/'
    }
    else {
      if (isLoggedIn) {
        return { name: 'not-authorized' }
      }
      else {
        return {
          name: 'login',
          query: {
            ...to.query,
            to: to.name !== 'index' ? to.path : undefined,
          },
        }
      }
    }
  })
}
