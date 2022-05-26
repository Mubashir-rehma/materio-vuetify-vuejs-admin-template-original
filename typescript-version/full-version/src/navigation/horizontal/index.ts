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
        icon: 'i-mdi-analytics',
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
        title: 'Icons',
        icon: 'i-mdi-eye-outline',
        to: 'pages-icons',
      },
      {
        title: 'Cards',
        icon: 'i-mdi-credit-card-outline',
        children: [
          { title: 'Basic', to: 'pages-cards-card-basic' },
          { title: 'Action', to: 'pages-cards-card-actions' },
        ],
      },
      {
        title: 'Typography',
        icon: 'i-mdi-alpha-t-box-outline',
        to: 'pages-typography',
      },
      {
        title: 'Components',
        icon: 'i-mdi-home',
        children: [
          { title: 'Menu', to: 'components-menu' },
          { title: 'Alert', to: 'components-alert' },
          { title: 'Avatar', to: 'components-avatar' },
          { title: 'Button', to: 'components-button' },
          { title: 'Badge', to: 'components-badge' },
          { title: 'Chip', to: 'components-chip' },
          { title: 'Dialog', to: 'components-dialog' },
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
        title: 'Forms Elements',
        icon: 'i-mdi-content-copy',
        children: [
          {
            title: 'Checkbox',
            to: 'forms-checkbox',
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
          { title: 'Slider', to: 'forms-slider' },
          {
            title: 'Switch',
            to: 'forms-switch',
          },
        ],
      },
      {
        title: 'Form Layouts',
        icon: 'i-mdi-checkbox-marked-circle-outline',
        to: 'forms-form-layouts',
      },
    ],
  },
  {
    title: 'Forms & Tables',
    icon: 'i-mdi-checkbox-multiple-outline',
    children: [
      {
        title: 'Forms Elements',
        icon: 'i-mdi-content-copy',
        children: [
          {
            title: 'Combobox',
            to: 'forms-combobox',
          },
        ],
      },
    ],
  },
  {
    title: 'Forms & Tables',
    icon: 'i-mdi-checkbox-multiple-outline',
    children: [
      {
        title: 'Forms Elements',
        icon: 'i-mdi-content-copy',
        children: [
          {
            title: 'File Input',
            to: 'forms-file-input',
          },
        ],
      },
    ],
  },
  {
    title: 'Forms & Tables',
    icon: 'i-mdi-checkbox-multiple-outline',
    children: [
      {
        title: 'Forms Elements',
        icon: 'i-mdi-content-copy',
        children: [
          {
            title: 'Textfield',
            to: 'forms-textfield',
          },
          {
            title: 'Textarea',
            to: 'forms-textarea',
          },
        ],
      },
      {
        title: 'Form Validation',
        icon: 'i-mdi-checkbox-marked-circle-outline',
        to: 'forms-form-validation',
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
        title: 'Typography',
        icon: 'i-mdi-netflix',
        to: 'typography',
      },
    ],
  },
] as HorizontalNavItems
