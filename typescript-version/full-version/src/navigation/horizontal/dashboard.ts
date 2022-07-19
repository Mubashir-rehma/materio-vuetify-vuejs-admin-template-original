export default [
  {
    title: 'Dashboards',
    icon: 'i-mdi-view-dashboard-outline',
    children: [
      {
        title: 'Analytics',
        to: 'dashboards-analytics',
        icon: 'i-mdi-chart-timeline-variant',
        action: 'read',
        subject: 'Admin',
      },
      {
        title: 'CRM',
        to: 'dashboards-crm',
        icon: 'i-mdi-monitor-dashboard',
        action: 'read',
        subject: 'Auth',
      },
    ],
  },
]
