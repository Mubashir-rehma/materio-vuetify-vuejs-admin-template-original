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
    path: '/cards/basic',
    name: 'card-basic',
    component: () => import('@/views/pages/cards/card-basic/CardBasic.vue'),
    meta: {
      layout: 'content',
    },
  },
]

export default pages
