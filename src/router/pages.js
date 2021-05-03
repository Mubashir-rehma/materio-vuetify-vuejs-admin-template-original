const pages = [
  {
    path: '/pages/playground',
    name: 'page-playground',
    component: () => import('@/views/pages/playground-page/PlaygroundPage.vue'),
    meta: {
      layout: 'content',
    },
  },
]

export default pages
