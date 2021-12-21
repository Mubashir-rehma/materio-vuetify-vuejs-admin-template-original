/* @unocss-include */

export default [
  {
    heading: 'Section',
  },
  {
    title: 'Home',
    icon: 'i-mdi-home',
    to: 'index',
  },
  {
    title: 'Dashboards',
    icon: 'i-mdi-view-dashboard-outline',
    children: [
      {
        title: 'Analytics',
        to: 'dashboards-analytics',
      },
      {
        title: 'CRM',
        to: 'dashboards-crm',
      },
    ],
  },
]
