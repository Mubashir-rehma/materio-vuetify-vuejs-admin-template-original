/* @unocss-include */

export default [
  {
    title: 'Home',
    icon: 'i-mdi-home',
    to: 'index',
    badgeContent: 'new',
    badgeClass: 'some-class',
  },
  {
    title: 'Dashboards',
    icon: 'i-mdi-view-dashboard-outline',
    badgeContent: '2',
    badgeClass: 'another-class',
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
