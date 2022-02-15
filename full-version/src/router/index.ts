import { canNavigate } from '@layouts/plugins/casl'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import { getHomeRouteForLoggedInUser, getUserData, isUserLoggedIn } from './utils'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
})

router.beforeEach((to, _, next) => {
  const isLoggedIn = isUserLoggedIn()

  console.log('isLoggedIn :>> ', isLoggedIn)

  console.log('canNavigate(to) :>> ', canNavigate(to))

  if (!canNavigate(to)) {
    // Redirect to login if not logged in
    // ℹ️ Only add `to` query param if `to` route is not index route
    if (!isLoggedIn) return next({ name: 'login', query: { to: to.name !== 'index' ? to.fullPath : undefined } })

    // If logged in => not authorized
    return next({ name: 'not-authorized' })
  }

  // Redirect if logged in
  if (to.meta.redirectIfLoggedIn && isLoggedIn) {
    const userData = getUserData()
    next(getHomeRouteForLoggedInUser(userData ? userData.role : null))
  }

  return next()
})

export default router
