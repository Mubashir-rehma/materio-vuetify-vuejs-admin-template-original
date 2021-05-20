const pages = [
  {
    path: '/pages/playground',
    name: 'page-playground',
    component: () => import('@/views/pages/playground-page/PlaygroundPage.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/ui/typography',
    name: 'ui-typography',
    component: () => import('@/views/pages/typography/Typography.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/ui/gamification',
    name: 'ui-gamification',
    component: () => import('@/views/pages/gamification/Gamification.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/cards/basic',
    name: 'card-basic',
    component: () => import('@/views/pages/cards/card-basic/CardBasic.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/cards/statistics',
    name: 'card-statistics',
    component: () => import('@/views/pages/cards/card-statistics/CardStatistics.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/cards/actions',
    name: 'card-actions',
    component: () => import('@/views/pages/cards/card-actions/CardActions.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/cards/chart',
    name: 'card-chart',
    component: () => import('@/views/pages/cards/card-chart/CardChart.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/cards/advance',
    name: 'card-advance',
    component: () => import('@/views/pages/cards/card-advance/CardAdvance.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/pages/authentication/login-v1',
    name: 'auth-login-v1',
    component: () => import('@/views/pages/authentication/login-v1/Login-v1.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/pages/authentication/register-v1',
    name: 'auth-register-v1',
    component: () => import('@/views/pages/authentication/register-v1/Register-v1.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/pages/authentication/forget-password-v1',
    name: 'auth-forgot-password-v1',
    component: () => import('@/views/pages/authentication/forgot-password-v1/ForgotPassword-v1.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/pages/authentication/reset-password-v1',
    name: 'auth-reset-password-v1',
    component: () => import('@/views/pages/authentication/reset-password-v1/ResetPassword-v1.vue'),
    meta: {
      layout: 'blank',
    },
  },
]

export default pages
