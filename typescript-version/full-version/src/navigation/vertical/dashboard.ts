export default [
  {
    title: 'Dashboards',
    icon: { icon: 'mdi-view-dashboard-outline' },
    children: [
      {
        title: 'CRM',
        to: 'dashboards-crm',
      },
      {
        title: 'Analytics',
        to: 'dashboards-analytics',
      },
      {
        title: 'eCommerce',
        to: 'dashboards-ecommerce',
      },
    ],
    badgeContent: 'New',
    badgeClass: 'bg-error',
  },
]
