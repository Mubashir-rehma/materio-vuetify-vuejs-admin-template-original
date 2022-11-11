import { canNavigate } from '@layouts/plugins/casl'
import { setupLayouts } from 'virtual:generated-layouts'
import type { RouteRecordRaw } from 'vue-router/auto'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { getHomeRouteForLoggedInUser, getUserData, isUserLoggedIn } from './utils'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: routes => {
    const _routes: RouteRecordRaw[] = [
      // ℹ️ We are redirecting to different pages based on role.
    // NOTE: Role is just for UI purposes. ACL is based on abilities.
      {
        path: '/',
        redirect: to => {
          const userData = JSON.parse(localStorage.getItem('userData') || '{}')
          const userRole = userData && userData.role ? userData.role : null

          if (userRole === 'admin')
            return { name: '/dashboards/crm' }
          if (userRole === 'client')
            return { name: '/access-control' }

          return { name: 'login', query: to.query }
        },
      },
      {
        path: '/apps/email/:filter',
        name: '/apps/email/[filter]',
        component: () => import('@/pages/apps/email/index.vue'),
        meta: {
          navActiveLink: '/apps/email/',
          layoutWrapperClasses: 'layout-content-height-fixed',
        },
      },

      // Email label
      {
        path: '/apps/email/label/:label',
        name: '/apps/email/[label]',
        component: () => import('@/pages/apps/email/index.vue'),
        meta: {
          // contentClass: 'email-application',
          navActiveLink: '/apps/email/',
          layoutWrapperClasses: 'layout-content-height-fixed',
        },
      },
      ...routes,
    ]

    return setupLayouts(_routes)
  },
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach((to, _, next) => {
  const isLoggedIn = isUserLoggedIn()

  if (!canNavigate(to)) {
    // Redirect to login if not logged in
    // ℹ️ Only add `to` query param if `to` route is not index route
    if (!isLoggedIn)
      return next({ name: 'login', query: { to: to.name !== 'index' ? to.fullPath : undefined } })

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
