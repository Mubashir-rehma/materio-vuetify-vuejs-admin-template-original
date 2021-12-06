/* @unocss-include */
import type { VerticalNavItems } from '@layouts/types'

export default [
  { heading: 'Dashboards' },
  {
    title: 'Home', icon: 'i-mdi-home', to: 'index',
  },
  {
    title: 'Dashboards',
    icon: 'i-mdi-view-dashboard-outline',
    children: [
      {
        title: 'Analytics', to: 'dashboards-analytics',
      },
      {
        title: 'CRM', to: 'dashboards-crm',
      },
    ],
    badgeContent: '2',
  },
  { heading: 'Apps & Pages' },
  {
    title: 'Calendar', icon: 'i-mdi-calendar-blank-outline', to: 'calendar',
  },
  {
    title: 'User',
    icon: 'i-mdi-account-outline',
    children: [
      { title: 'List', to: 'user-list' },
      { title: 'Detail', to: 'user-detail' },
      { title: 'Add', to: 'user-add' },
    ],
  },
  {
    title: 'Email', icon: 'i-mdi-email-outline', to: 'email',
  },
  {
    title: 'Invoice',
    icon: 'i-mdi-currency-usd',
    children: [
      { title: 'List', to: 'invoice-list' },
      { title: 'Detail', to: 'invoice-detail' },
      { title: 'Add', to: 'invoice-add' },
    ],
  },
  { heading: 'Other' },
  {
    title: 'Nav Levels',
    icon: 'i-mdi-menu',
    children: [
      {
        title: 'Level 2.1',
        to: 'other-nav-level-2.1',
      },
      {
        title: 'Level 3',
        children: [
          {
            title: 'Level 3.1',
            to: 'other-nav-level-3-nav-level-3.1',
          },
          {
            title: 'Level 3.2',
            to: 'other-nav-level-3-nav-level-3.2',
          },
        ],
      },
    ],
  },
  {
    title: 'Typography', icon: 'i-mdi-netflix', to: 'typography',
  },
] as VerticalNavItems
