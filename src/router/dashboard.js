const dashboard = [
  {
    path: '/dashboards/crm',
    name: 'dashboard-crm',
    component: () => import('@/views/dashboards/crm/Crm.vue'),
    meta: {
      layout: 'content',
    },
  },
]

export default dashboard
