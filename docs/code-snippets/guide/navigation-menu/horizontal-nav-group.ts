/* @unocss-include */

import type { HorizontalNavItems } from '@layouts/types'

export default [
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
        icon: 'i-mdi-analytics',
      },
      {
        title: 'CRM',
        to: 'dashboards-crm',
        icon: 'i-mdi-monitor-dashboard',
      },
    ],
  },
] as HorizontalNavItems
