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
]

export default pages
