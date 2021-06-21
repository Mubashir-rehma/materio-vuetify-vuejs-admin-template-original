const apps = [
  {
    path: '/apps/invoice/list',
    name: 'apps-invoice-list',
    component: () => import('@/views/apps/invoice/invoice-list/InvoiceList.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/apps/user/list',
    name: 'apps-user-list',
    component: () => import('@/views/apps/user/user-list/UserList.vue'),
    meta: {
      layout: 'content',
    },
  },
]

export default apps
