const apps = [
  {
    path: '/apps/invoice/list',
    name: 'apps-invoice-list',
    component: () => import('@/views/apps/invoice/invoice-list/InvoiceList.vue'),
    meta: {
      layout: 'content',
    },
  },
]

export default apps
