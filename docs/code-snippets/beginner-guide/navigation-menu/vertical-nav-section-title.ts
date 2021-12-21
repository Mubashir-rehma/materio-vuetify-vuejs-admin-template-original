/* @unocss-include */

import type { VerticalNavItems } from '@layouts/types'

export default [
  {
    heading: 'My Section',
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
] as VerticalNavItems
