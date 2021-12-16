/* @unocss-include */
import type { HorizontalNavItems } from '@layouts/types'

export default [
  {
    title: 'Home', to: 'index', icon: 'i-mdi-home-outline', action: 'read', subject: 'Auth',
  },
  {
    title: 'Dashboards',
    icon: 'i-mdi-view-dashboard-outline',
    children: [
      {
        title: 'Analytics', to: 'dashboards-analytics', icon: 'i-mdi-analytics', action: 'read', subject: 'Admin',
      },
      {
        title: 'CRM', to: 'dashboards-crm', icon: 'i-mdi-monitor-dashboard', action: 'read', subject: 'Auth',
      },
    ],
  },
  {
    title: 'Apps & Pages',
    icon: 'i-mdi-package-variant',

    children: [
      { title: 'Calendar', to: 'calendar', icon: 'i-mdi-calendar-blank', action: 'read', subject: 'Auth' },
      {
        title: 'User',
        icon: 'i-mdi-account-outline',
        children: [
          { title: 'List', to: 'user-list' },
          { title: 'Detail', to: 'user-detail' },
          { title: 'Add', to: 'user-add' },
        ],
      },
      { title: 'Email', to: 'email', icon: 'i-mdi-email-outline' },
      {
        title: 'Invoice',
        icon: 'i-mdi-currency-usd',
        children: [
          { title: 'List', to: 'invoice-list' },
          { title: 'Detail', to: 'invoice-detail' },
          { title: 'Add', to: 'invoice-add' },
        ],
      },
    ],
  },
  {
    title: 'User Interface',
    icon: 'i-mdi-home',
    children: [
      {
        title: 'Components',
        icon: 'i-mdi-home',
        children: [
          {
            title: 'Alert 1',
            to: 'dashboards-crm',
          },
          {
            title: 'Avatar 2',
            to: 'dashboards-crm',
          },
          {
            title: 'Alert 3',
            to: 'dashboards-crm',
          },
          {
            title: 'Alert 4',

            children: [
              {
                title: 'Admin',
                to: 'dashboards-crm',
              },
            ],
          },
          {
            title: 'Alert 5',
            to: 'dashboards-crm',
          },
          {
            title: 'Alert 6',
            to: 'dashboards-crm',
          },
          {
            title: 'Alert 7',
            to: 'dashboards-crm',
          },
          {
            title: 'Alert 8',
            to: 'dashboards-crm',
          },
          {
            title: 'Alert 9',
            to: 'dashboards-crm',
          },
          {
            title: 'Alert 10',
            to: 'dashboards-crm',
          },
          {
            title: 'Alert 11',
            to: 'dashboards-crm',
          },
          {
            title: 'Alert 12',
            to: 'dashboards-crm',
          },
          {
            title: 'Alert 13',
            to: 'dashboards-crm',
          },
          {
            title: 'Alert 14',
            to: 'dashboards-crm',
          },
          {
            title: 'Alert 15',
            to: 'dashboards-crm',
          },
          {
            title: 'Alert 16',
            to: 'dashboards-crm',
          },
          {
            title: 'Alert 17',
            to: 'dashboards-crm',
          },
          {
            title: 'Alert 18',
            to: 'dashboards-crm',
          },
          {
            title: 'Alert 19',
            to: 'dashboards-crm',
          },
          {
            title: 'Alert 20',
            to: 'dashboards-crm',
          },
          {
            title: 'Alert 21',
            to: 'dashboards-crm',
          },
          {
            title: 'Alert 22',
            to: 'dashboards-crm',
          },
          {
            title: 'Alert 23',
            to: 'dashboards-crm',
          },
          {
            title: 'Alert 24',
            to: 'dashboards-crm',
          },
          {
            title: 'Alert 25',
            to: 'dashboards-crm',
          },
        ],
      },
    ],
  },
  {
    title: 'Other',
    icon: 'i-mdi-home',
    children: [
      {
        title: 'Nav Levels',
        icon: 'i-mdi-menu',
        children: [
          {
            title: 'Level 2.1',
            to: null,
          },
          {
            title: 'Level 3',
            children: [
              {
                title: 'Level 3.1',
                to: null,
              },
              {
                title: 'Level 3.2',
                to: null,
              },
            ],
          },
        ],
      },
      {
        title: 'Typography', icon: 'i-mdi-netflix', to: 'typography',
      },
    ],
  },
] as HorizontalNavItems
