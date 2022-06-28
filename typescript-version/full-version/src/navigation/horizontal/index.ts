/* @unocss-include */
import type { HorizontalNavItems } from '@layouts/types'

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
  {
    title: 'Apps & Pages',
    icon: 'i-mdi-package-variant',
    children: [
      { title: 'Calendar', to: 'calendar', icon: 'i-mdi-calendar-blank', action: 'read', subject: 'Auth' },
      { title: 'Email', to: 'email', icon: 'i-mdi-email-outline' },
      {
        title: 'Invoice',
        icon: 'i-mdi-file-document-outline',
        children: [
          { title: 'List', to: 'invoice-list' },
          { title: 'Preview', to: 'invoice-preview' },
          { title: 'Edit', to: 'invoice-edit' },
          { title: 'Add', to: 'invoice-add' },
        ],
      },
      {
        title: 'User',
        icon: 'i-mdi-account-outline',
        children: [
          { title: 'List', to: 'user-list' },
          { title: 'View', to: 'user-view' },
        ],
      },
      {
        title: 'Pages',
        icon: 'i-mdi-file-outline',
        children: [
          { title: 'Knowledge Base', to: 'pages-knowledge-base' },
          {
            title: 'Authentication',
            children: [
              {
                title: 'Login',
                children: [
                  { title: 'Login v1', to: 'pages-authentication-login-v1', target: '_blank' },
                  { title: 'Login v2', to: 'pages-authentication-login-v2', target: '_blank' },
                ],
              },
              {
                title: 'Register',
                children: [
                  { title: 'Register v1', to: 'pages-authentication-register-v1', target: '_blank' },
                  { title: 'Register v2', to: 'pages-authentication-register-v2', target: '_blank' },
                ],
              },
              {
                title: 'Forgot Password',
                children: [
                  { title: 'Forgot Password v1', to: 'pages-authentication-forgot-password-v1', target: '_blank' },
                  { title: 'Forgot Password v2', to: 'pages-authentication-forgot-password-v2', target: '_blank' },
                ],
              },
              {
                title: 'Reset Password',
                children: [
                  { title: 'Reset Password v1', to: 'pages-authentication-reset-password-v1', target: '_blank' },
                  { title: 'Reset Password v2', to: 'pages-authentication-reset-password-v2', target: '_blank' },
                ],
              },
            ],
          },
          { title: 'Account Settings', to: { name: 'pages-account-settings-tab', params: { tab: 'account' } } },
          { title: 'Pricing', to: 'pages-pricing' },
          {
            title: 'Miscellaneous',
            children: [
              { title: 'Coming Soon', to: 'pages-misc-coming-soon' },
              { title: 'Under Maintenance', to: 'pages-misc-under-maintenance', target: '_blank' },
              { title: 'Page Not Found - 404', to: 'pages-misc-not-found', target: '_blank' },
              { title: 'Not Authorized - 401', to: 'pages-misc-not-authorized', target: '_blank' },
              { title: 'Server Error - 500', to: 'pages-misc-internal-server-error', target: '_blank' },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'User Interface',
    icon: 'i-mdi-layers-outline',
    children: [
      {
        title: 'Icons',
        icon: 'i-mdi-eye-outline',
        to: 'pages-icons',
      },
      {
        title: 'Typography',
        icon: 'i-mdi-alpha-t-box-outline',
        to: 'pages-typography',
      },
      {
        title: 'Cards',
        icon: 'i-mdi-credit-card-outline',
        children: [
          { title: 'Basic', to: 'pages-cards-card-basic' },
          { title: 'Advance', to: 'pages-cards-card-advance' },
          { title: 'Actions', to: 'pages-cards-card-actions' },
          { title: 'Statistics', to: 'pages-cards-card-statistics' },
        ],
      },
      {
        title: 'Components',
        icon: 'i-mdi-archive-outline',
        children: [
          { title: 'Menu', to: 'components-menu' },
          { title: 'Alert', to: 'components-alert' },
          { title: 'Avatar', to: 'components-avatar' },
          { title: 'Button', to: 'components-button' },
          { title: 'Badge', to: 'components-badge' },
          { title: 'Chip', to: 'components-chip' },

          // { title: 'Dialog', to: 'components-dialog' },
          { title: 'Pagination', to: 'components-pagination' },
          { title: 'Expansion Panel', to: 'components-expansion-panel' },
          { title: 'List', to: 'components-list' },
          { title: 'Menu', to: 'components-menu' },
          { title: 'Snackbar', to: 'components-snackbar' },
          { title: 'Tabs', to: 'components-tabs' },
          { title: 'Tooltip', to: 'components-tooltip' },
        ],
      },
    ],
  },
  {
    title: 'Forms & Tables',
    icon: 'i-mdi-checkbox-multiple-outline',
    children: [
      {
        title: 'Form Elements',
        icon: 'i-mdi-content-copy',
        children: [
          {
            title: 'Checkbox',
            to: 'forms-checkbox',
          },
          {
            title: 'Combobox',
            to: 'forms-combobox',
          },
          {
            title: 'Radio',
            to: 'forms-radio',
          },
          {
            title: 'Range Slider',
            to: 'forms-range-slider',
          },
          {
            title: 'Rating',
            to: 'forms-rating',
          },
          {
            title: 'Select',
            to: 'forms-select',
          },
          { title: 'Slider', to: 'forms-slider' },
          {
            title: 'Switch',
            to: 'forms-switch',
          },
          {
            title: 'File Input',
            to: 'forms-file-input',
          },
          {
            title: 'Textfield',
            to: 'forms-textfield',
          },
          {
            title: 'Textarea',
            to: 'forms-textarea',
          },
          {
            title: 'File Input',
            to: 'forms-file-input',
          },
          {
            title: 'Date Time Picker',
            to: 'forms-date-time-picker',
          },

        ],
      },
      {
        title: 'Form Layouts',
        icon: 'i-mdi-checkbox-marked-circle-outline',
        to: 'forms-form-layouts',
      },
      {
        title: 'Form Validation',
        icon: 'i-mdi-checkbox-marked-circle-outline',
        to: 'forms-form-validation',
      },
    ],
  },
  {
    title: 'Charts & Maps',
    icon: 'i-mdi-chart-donut',
    children: [
      { title: 'Apex Chart', to: 'charts-and-maps-charts-apex-chart' },
      { title: 'Chartjs', to: 'charts-and-maps-charts-chartjs' },
    ],
  },
  {
    title: 'Others',
    icon: 'i-mdi-home',
    children: [
      {
        title: 'Access Control',
        icon: 'i-mdi-shield-outline',
        to: 'access-control',
        action: 'read',
        subject: 'Auth',
      },
      {
        title: 'Nav Levels',
        icon: 'i-mdi-menu',
        children: [
          {
            title: 'Level 2.1',
            to: null,
          },
          {
            title: 'Level 2.2',
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
    ],
  },
] as HorizontalNavItems
