// ** Mock Adapter

// ** Types
import type { SearchResults } from '@/@fake-db/types'

const database: SearchResults[] = [
  {
    title: 'Dashboard',
    category: 'dashboards',
    children: [
      {
        url: { name: 'dashboards-analytics' },
        icon: 'mdi-chart-timeline-variant',
        title: 'Analytics Dashboard',
        category: 'dashboards',
      },
      {
        url: { name: 'dashboards-crm' },
        icon: 'mdi-cart-outline',
        title: 'CRM Dashboard',
        category: 'dashboards',
      },
    ],
  },
  {
    title: 'Apps & Pages',
    category: 'appsPages',
    children: [
      {
        url: { name: 'apps-email' },
        icon: 'mdi-email-outline',
        title: 'Email',
        category: 'appsPages',
      },
      {
        url: { name: 'apps-chat' },
        icon: 'mdi-message-outline',
        title: 'Chat',
        category: 'appsPages',
      },
      {
        url: { name: 'apps-calendar' },
        icon: 'mdi-calendar-blank-outline',
        title: 'Calendar',
        category: 'appsPages',
      },
      {
        url: { name: 'apps-invoice-list' },
        icon: 'mdi-format-list-numbered',
        title: 'Invoice List',
        category: 'appsPages',
      },
      {
        url: { name: 'apps-invoice-preview-id', params: { id: '5036' } },
        icon: 'mdi-file-document-outline',
        title: 'Invoice Preview',
        category: 'appsPages',
      },
      {
        url: { name: 'apps-invoice-edit-id', params: { id: '5036' } },
        icon: 'mdi-file-document-edit-outline',
        title: 'Invoice Edit',
        category: 'appsPages',
      },
      {
        url: { name: 'apps-invoice-add' },
        icon: 'mdi-file-plus-outline',
        title: 'Invoice Add',
        category: 'appsPages',
      },
      {
        url: { name: 'apps-user-list' },
        icon: 'mdi-account-group-outline',
        title: 'User List',
        category: 'appsPages',
      },
      {
        url: { name: 'apps-user-view-id', params: { id: 21 } },
        icon: 'mdi-eye-outline',
        title: 'User View',
        category: 'appsPages',
      },
      {
        url: { name: 'pages-help-center' },
        icon: 'mdi-help-circle-outline',
        title: 'Help Center',
        category: 'appsPages',
      },
      {
        url: { name: 'pages-user-profile-tab', params: { tab: 'profile' } },
        icon: 'mdi-account-cog-outline',
        title: 'User Profile - Profile',
        category: 'appsPages',
      },
      {
        url: { name: 'pages-account-settings-tab', params: { tab: 'account' } },
        icon: 'mdi-account-cog-outline',
        title: 'Account Settings - Account',
        category: 'appsPages',
      },
      {
        url: { name: 'pages-account-settings-tab', params: { tab: 'security' } },
        icon: 'mdi-lock-open-outline',
        title: 'Account Settings - Security',
        category: 'appsPages',
      },
      {
        url: { name: 'pages-account-settings-tab', params: { tab: 'billing-plans' } },
        icon: 'mdi-currency-usd',
        title: 'Account Settings - Billing',
        category: 'appsPages',
      },
      {
        url: { name: 'pages-account-settings-tab', params: { tab: 'notification' } },
        icon: 'mdi-bell-outline',
        title: 'Account Settings - Notifications',
        category: 'appsPages',
      },
      {
        url: { name: 'pages-account-settings-tab', params: { tab: 'connection' } },
        icon: 'mdi-link-variant',
        title: 'Account Settings - Connections',
        category: 'appsPages',
      },
      {
        url: { name: 'pages-pricing' },
        icon: 'mdi-currency-usd',
        title: 'Pricing',
        category: 'appsPages',
      },
      {
        url: { name: 'pages-faq' },
        icon: 'mdi-help-circle-outline',
        title: 'FAQ',
        category: 'appsPages',
      },
      {
        url: { name: 'pages-misc-coming-soon' },
        icon: 'mdi-clock-outline',
        title: 'Coming Soon',
        category: 'appsPages',
      },
      {
        url: { name: 'pages-misc-under-maintenance' },
        icon: 'mdi-cog-outline',
        title: 'Under Maintenance',
        category: 'appsPages',
      },
      {
        url: { name: 'pages-misc-not-found' },
        icon: 'mdi-alert-circle-outline',
        title: 'Page Not Found - 404',
        category: 'appsPages',
      },
      {
        url: { name: 'pages-misc-not-authorized' },
        icon: 'mdi-account-multiple-remove-outline',
        title: 'Not Authorized - 401',
        category: 'appsPages',
      },
      {
        url: { name: 'pages-misc-internal-server-error' },
        icon: 'mdi-view-list-outline',
        title: 'Server Error - 500',
        category: 'appsPages',
      },
      {
        url: { name: 'pages-authentication-login-v1' },
        icon: 'mdi-login',
        title: 'Login V1',
        category: 'appsPages',
      },
      {
        url: { name: 'pages-authentication-login-v2' },
        icon: 'mdi-login',
        title: 'Login V2',
        category: 'appsPages',
      },
      {
        url: { name: 'pages-authentication-register-v1' },
        icon: 'mdi-account-plus-outline',
        title: 'Register V1',
        category: 'appsPages',
      },
      {
        url: { name: 'pages-authentication-register-v2' },
        icon: 'mdi-account-plus-outline',
        title: 'Register V2',
        category: 'appsPages',
      },
      {
        icon: 'mdi-email-check-outline',
        category: 'appsPages',
        title: 'Verify Email V1',
        url: { name: 'pages-authentication-verify-email-v1' },
      },
      {
        icon: 'mdi-email-check-outline',
        category: 'appsPages',
        title: 'Verify Email V2',
        url: { name: 'pages-authentication-verify-email-v2' },
      },
      {
        url: { name: 'pages-authentication-forgot-password-v1' },
        icon: 'mdi-lock-alert-outline',
        title: 'Forgot Password V1',
        category: 'appsPages',
      },
      {
        url: { name: 'pages-authentication-forgot-password-v2' },
        icon: 'mdi-lock-alert-outline',
        title: 'Forgot Password V2',
        category: 'appsPages',
      },
      {
        url: { name: 'pages-authentication-reset-password-v1' },
        icon: 'mdi-lock-reset',
        title: 'Reset Password V1',
        category: 'appsPages',
      },
      {
        url: { name: 'pages-authentication-reset-password-v2' },
        icon: 'mdi-lock-reset',
        title: 'Reset Password V2',
        category: 'appsPages',
      },
      {
        icon: 'mdi-cellphone-link',
        category: 'appsPages',
        title: 'Two Steps V1',
        url: { name: 'pages-authentication-two-steps-v1' },
      },
      {
        icon: 'mdi-cellphone-link',
        category: 'appsPages',
        title: 'Two Steps V2',
        url: { name: 'pages-authentication-two-steps-v2' },
      },
      {
        url: { name: 'pages-dialog-examples' },
        icon: 'mdi-card-outline',
        title: 'Dialog Examples',
        category: 'appsPages',
      },
      {
        url: { name: 'pages-authentication-register-multi-steps' },
        icon: 'mdi-account-plus-outline',
        title: 'Register Multi-Steps',
        category: 'appsPages',
      },
      {
        url: { name: 'wizard-examples-checkout' },
        icon: 'mdi-cart-outline',
        title: 'Wizard - Checkout',
        category: 'appsPages',
      },
      {
        url: { name: 'wizard-examples-create-deal' },
        icon: 'mdi-gift-outline',
        title: 'Wizard - create deal',
        category: 'appsPages',
      },
      {
        url: { name: 'wizard-examples-property-listing' },
        icon: 'mdi-home-outline',
        title: 'Wizard - Property Listing',
        category: 'appsPages',
      },
      {
        url: { name: 'apps-roles' },
        icon: 'mdi-shield-account-outline',
        title: 'Roles',
        category: 'appsPages',
      },
      {
        url: { name: 'apps-permissions' },
        icon: 'mdi-shield-account-outline',
        title: 'Permissions',
        category: 'appsPages',
      },
    ],
  },
  {
    title: 'User Interface',
    category: 'userInterface',
    children: [
      {
        url: { name: 'pages-typography' },
        icon: 'mdi-format-letter-case',
        title: 'Typography',
        category: 'userInterface',
      },
      {
        url: { name: 'pages-icons' },
        icon: 'mdi-google-circles-extended',
        title: 'Icons',
        category: 'userInterface',
      },
      {
        url: { name: 'pages-cards-card-basic' },
        icon: 'mdi-card-outline',
        title: 'Card Basic',
        category: 'userInterface',
      },
      {
        url: { name: 'pages-cards-card-statistics' },
        icon: 'mdi-chart-box-outline',
        title: 'Card Statistics',
        category: 'userInterface',
      },
      {
        url: { name: 'pages-cards-card-gamification' },
        icon: 'mdi-card-account-details-outline',
        title: 'Card Gamification',
        category: 'userInterface',
      },
      {
        url: { name: 'pages-cards-card-actions' },
        icon: 'mdi-card-plus-outline',
        title: 'Card Actions',
        category: 'userInterface',
      },
      {
        url: { name: 'components-alert' },
        icon: 'mdi-alert-outline',
        title: 'Alerts',
        category: 'userInterface',
      },
      {
        url: { name: 'components-avatar' },
        icon: 'mdi-account-circle-outline',
        title: 'Avatars',
        category: 'userInterface',
      },
      {
        url: { name: 'components-badge' },
        icon: 'mdi-bell-badge-outline',
        title: 'Badges',
        category: 'userInterface',
      },
      {
        url: { name: 'components-button' },
        icon: 'mdi-gesture-tap-button',
        title: 'Buttons',
        category: 'userInterface',
      },
      {
        url: { name: 'components-chip' },
        icon: 'mdi-new-box',
        title: 'Chips',
        category: 'userInterface',
      },
      {
        url: { name: 'components-dialog' },
        icon: 'mdi-card-bulleted-outline',
        title: 'Dialogs',
        category: 'userInterface',
      },
      {
        url: { name: 'components-list' },
        icon: 'mdi-format-list-bulleted',
        title: 'List',
        category: 'userInterface',
      },
      {
        url: { name: 'components-menu' },
        icon: 'mdi-menu',
        title: 'Menu',
        category: 'userInterface',
      },
      {
        url: { name: 'components-pagination' },
        icon: 'mdi-page-last',
        title: 'Pagination',
        category: 'userInterface',
      },
      {
        url: { name: 'components-progress-circular' },
        icon: 'mdi-progress-helper',
        title: 'Progress Circular',
        category: 'userInterface',
      },
      {
        url: { name: 'components-progress-linear' },
        icon: 'mdi-progress-helper',
        title: 'Progress Linear',
        category: 'userInterface',
      },
      {
        url: { name: 'components-expansion-panel' },
        icon: 'mdi-format-vertical-align-center',
        title: 'Expansion Panel',
        category: 'userInterface',
      },
      {
        url: { name: 'components-snackbar' },
        icon: 'mdi-message-processing-outline',
        title: 'Snackbar',
        category: 'userInterface',
      },
      {
        url: { name: 'components-tabs' },
        icon: 'mdi-tab',
        title: 'Tabs',
        category: 'userInterface',
      },
      {
        url: { name: 'components-timeline' },
        icon: 'mdi-timeline-outline',
        title: 'Timeline',
        category: 'userInterface',
      },
      {
        url: { name: 'components-tooltip' },
        icon: 'mdi-tooltip-edit-outline',
        title: 'Tooltip',
        category: 'userInterface',
      },
      {
        url: { name: 'extensions-tour' },
        icon: 'mdi-cube-outline',
        title: 'Tour',
        category: 'userInterface',
      },
    ],
  },
  {
    title: 'Forms Tables',
    category: 'formsTables',
    children: [
      {
        url: { name: 'forms-textfield' },
        icon: 'mdi-lastpass',
        title: 'TextField',
        category: 'formsTables',
      },
      {
        url: { name: 'forms-select' },
        icon: 'mdi-format-list-checkbox',
        title: 'Select',
        category: 'formsTables',
      },
      {
        url: { name: 'forms-checkbox' },
        icon: 'mdi-checkbox-outline',
        title: 'Checkbox',
        category: 'formsTables',
      },
      {
        url: { name: 'forms-radio' },
        icon: 'mdi-radiobox-marked',
        title: 'Radio',
        category: 'formsTables',
      },
      {
        url: { name: 'forms-combobox' },
        icon: 'mdi-checkbox-outline',
        title: 'Combobox',
        category: 'formsTables',
      },
      {
        url: { name: 'forms-date-time-picker' },
        icon: 'mdi-calendar-range',
        title: 'Date Time picker',
        category: 'formsTables',
      },
      {
        url: { name: 'forms-textarea' },
        icon: 'mdi-card-text-outline',
        title: 'Textarea',
        category: 'formsTables',
      },
      {
        url: { name: 'forms-switch' },
        icon: 'mdi-toggle-switch-outline',
        title: 'Switch',
        category: 'formsTables',
      },
      {
        url: { name: 'forms-file-input' },
        icon: 'mdi-tray-arrow-up',
        title: 'File Input',
        category: 'formsTables',
      },
      {
        url: { name: 'forms-otp-input' },
        icon: 'mdi-two-factor-authentication',
        title: 'Otp Input',
        category: 'formsTables',
      },
      {
        url: { name: 'forms-rating' },
        icon: 'mdi-star-outline',
        title: 'Form Rating',
        category: 'formsTables',
      },
      {
        url: { name: 'forms-slider' },
        icon: 'mdi-gesture-swipe-horizontal',
        title: 'Slider',
        category: 'formsTables',
      },
      {
        url: { name: 'forms-range-slider' },
        icon: 'mdi-lastpass',
        title: 'Range Slider',
        category: 'formsTables',
      },
      {
        url: { name: 'forms-form-layouts' },
        icon: 'mdi-cube-outline',
        title: 'Form Layouts',
        category: 'formsTables',
      },
      {
        url: { name: 'forms-form-validation' },
        icon: 'mdi-checkbox-marked-circle-outline',
        title: 'Form Validation',
        category: 'formsTables',
      },
      {
        url: { name: 'forms-custom-input' },
        icon: 'mdi-format-list-checks',
        title: 'Custom Input',
        category: 'formsTables',
      },
      {
        url: { name: 'forms-autocomplete' },
        icon: 'mdi-format-align-left',
        title: 'Autocomplete',
        category: 'formsTables',
      },
      {
        url: { name: 'tables-data-table' },
        icon: 'mdi-table',
        title: 'Data Table',
        category: 'formsTables',
      },
      {
        url: { name: 'tables-simple-table' },
        icon: 'mdi-table',
        title: 'Simple Table',
        category: 'formsTables',
      },
      {
        url: { name: 'forms-form-wizard-numbered' },
        icon: 'mdi-align-vertical-distribute',
        title: 'Form Wizard Numbered',
        category: 'formsTables',
      },
      {
        url: { name: 'forms-form-wizard-icons' },
        icon: 'mdi-align-vertical-distribute',
        title: 'Form Wizard Icons',
        category: 'formsTables',
      },
    ],
  },
  {
    title: 'Chart & Misc',
    category: 'chartsMisc',
    children: [
      {
        url: { name: 'charts-apex-chart' },
        icon: 'mdi-chart-line',
        title: 'Apex Charts',
        category: 'chartsMisc',
      },
      {
        url: { name: 'charts-chartjs' },
        icon: 'mdi-chart-bell-curve',
        title: 'ChartJS',
        category: 'chartsMisc',
      },
      {
        url: { name: 'access-control' },
        icon: 'mdi-shield-outline',
        title: 'Access Control (ACL)',
        category: 'chartsMisc',
      },
    ],
  },
]

// ** GET Search Data

// mock.onGet('/app-bar/search').reply(config => {
//   const { q = '' } = config.params
//   const searchQuery = is.string(q) ? q : undefined
//   const queryLowered = (searchQuery ?? '').toString().toLowerCase()

//   const filteredSearchData = [] as SearchResults[]

//   database.forEach(item => {
//     if (item.children) {
//       const matchingChildren = item.children.filter(
//         child => child.title.toLowerCase().includes(queryLowered) || child.category.toLowerCase().includes(queryLowered),
//       )

//       if (matchingChildren.length > 0) {
//         const parentCopy = { ...item }

//         if (matchingChildren.length > 5)
//           parentCopy.children = matchingChildren.slice(0, 5)

//         else
//           parentCopy.children = matchingChildren

//         filteredSearchData.push(parentCopy)
//       }
//     }
//   })

//   if (filteredSearchData.length > 1) {
//     filteredSearchData.forEach((item, index) => {
//       if (item.children.length > 3)
//         filteredSearchData[index].children.splice(0, 3)
//     })
//   }

//   return [200, [...filteredSearchData]]
// })
