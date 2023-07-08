import type { App } from 'vue'

import { setupLayouts } from 'virtual:generated-layouts'
import type { RouteRecordRaw } from 'vue-router/auto'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { isUserLoggedIn } from './utils'
import { canNavigate } from '@layouts/plugins/casl'

function recursiveLayouts(route: RouteRecordRaw): RouteRecordRaw {
  if (route.children) {
    for (let i = 0; i < route.children.length; i++)
      route.children[i] = recursiveLayouts(route.children[i])

    return route
  }

  return setupLayouts([route])[0]
}

// 👉 Redirects
export const redirects: RouteRecordRaw[] = [
  // ℹ️ We are redirecting to different pages based on role.
  // NOTE: Role is just for UI purposes. ACL is based on abilities.
  {
    path: '/',
    redirect: to => {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}')
      const userRole = (userData && userData.role) ? userData.role : null

      if (userRole === 'admin')
        return { name: 'dashboards-crm' }
      if (userRole === 'client')
        return { name: 'access-control' }

      return { name: 'login', query: to.query }
    },
  },
  {
    path: '/pages/user-profile',
    redirect: () => ({ name: 'pages-user-profile-tab', params: { tab: 'profile' } }),
  },
  {
    path: '/pages/account-settings',
    redirect: () => ({ name: 'pages-account-settings-tab', params: { tab: 'account' } }),
  },
]

// 👉 Routes to extend
const emailRouteComponent = () => import('/src/pages/apps/email/index.vue')

const routesToExtend: RouteRecordRaw[] = [
  // Email filter
  {
    path: '/apps/email/:filter',
    name: 'apps-email-filter',
    component: emailRouteComponent,
    meta: {
      navActiveLink: 'apps-email',
      layoutWrapperClasses: 'layout-content-height-fixed',
    },
  },

  // Email label
  {
    path: '/apps/email/label/:label',
    name: 'apps-email-label',
    component: emailRouteComponent,
    meta: {
      // contentClass: 'email-application',
      navActiveLink: 'apps-email',
      layoutWrapperClasses: 'layout-content-height-fixed',
    },
  },
]

// 👉 Router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: routes => [
    ...redirects,
    ...[
      ...routes,
      ...routesToExtend,
    ].map(route => recursiveLayouts(route)),
  ],
})

// 👉 router.beforeEach
// Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
router.beforeEach(to => {
  const isLoggedIn = isUserLoggedIn()

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

export { router }

export default function (app: App) {
  app.use(router)
}
