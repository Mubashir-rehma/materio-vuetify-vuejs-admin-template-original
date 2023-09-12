import jwtDecoder from 'jwt-decode'
import type { Router } from 'vue-router'
import type { TokenPayload } from '@/plugins/fake-api/handlers/auth/type'
import { canNavigate } from '@layouts/plugins/casl'

export const setupGuards = (router: Router) => {
  // 👉 router.beforeEach
  // Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
  router.beforeEach(to => {
    const ability = useAbility()

    /*
     Check JWT Token Expired
    logout and redirect to login page if expired
    */
    const accessToken = useCookie('accessToken').value
    let isAccessTokenExpired = false

    if (accessToken) {
      const currentTime = Math.floor(Date.now() / 1000)

      const decodedToken = jwtDecoder<TokenPayload>(accessToken)
      if (decodedToken && decodedToken.exp) {
        if (decodedToken.exp > currentTime) {
          console.log('Token is still valid.')
        }
        else {
          isAccessTokenExpired = true

          // Remove "userData" from cookie
          const userData = useCookie<any>('userData')

          // Remove "accessToken" from cookie
          useCookie('accessToken').value = null
          userData.value = null

          // ℹ️ We had to remove abilities in then block because if we don't nav menu items mutation is visible while redirecting user to login page
          // Remove "userAbilities" from cookie
          useCookie('userAbilityRules').value = null

          // Reset ability to initial ability
          ability.update([])
          console.log('Token has expired.')
        }
      }
      else {
        console.log('Invalid token or no expiration information.')
      }
    }

    /*
     * If it's a public route, continue navigation. This kind of pages are allowed to visited by login & non-login users. Basically, without any restrictions.
     * Examples of public routes are, 404, under maintenance, etc.
     */
    if (to.meta.public)
      return

    /**
     * Check if user is logged in by checking if token & user data exists in local storage
     * Feel free to update this logic to suit your needs
     */
    const isLoggedIn = !!(useCookie('userData').value && useCookie('accessToken').value)

    /*
      If user is logged in and is trying to access login like page, redirect to home
      else allow visiting the page
      (WARN: Don't allow executing further by return statement because next code will check for permissions)
     */
    if (to.meta.unauthenticatedOnly) {
      if (isLoggedIn)
        return '/'
      else
        return undefined
    }

    if (!canNavigate(to) && isAccessTokenExpired) {
      /* eslint-disable indent */
      return isLoggedIn
        ? { name: 'not-authorized' }
        : {
            name: 'login',
            query: {
              ...to.query,
              to: to.name !== 'index' ? to.path : undefined,
            },
          }
      /* eslint-enable indent */
    }
  })
}
