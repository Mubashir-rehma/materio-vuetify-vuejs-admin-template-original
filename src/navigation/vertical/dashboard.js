import { mdiHomeOutline } from '@mdi/js'

export default [
  {
    title: 'Dashboards',
    icon: mdiHomeOutline,
    children: [
      {
        title: 'CRM',
        to: 'dashboard-crm',
      },
      {
        title: 'Analytics',
        to: 'dashboard-analytics',
      },
    ],
  },
]
