export default [
  {
    title: 'Dashboards',
    icon: { icon: 'mdi-home-outline' },
    children: [
      {
        title: 'Analytics',
        to: 'dashboards-analytics',
      },
      {
        title: 'CRM',
        to: 'dashboards-crm',
      },
      {
        title: 'ecommerce',
        to: 'dashboards-ecommerce',
      },
      {
        title: 'Academy',
        to: 'apps-academy-overview',
      },
      {
        title: 'Logistics',
        to: { path: '/dashboards/logistics' },
      },
    ],
    badgeContent: '2',
    badgeClass: 'bg-primary',
  },
]
