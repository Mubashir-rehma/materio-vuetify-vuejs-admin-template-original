import type { SearchResults } from '@/plugins/fake-api/handlers/app-bar-search/type'

interface DB {
  searchItems: SearchResults[]
}

export const db: DB = {
  searchItems: [
    {
      title: 'Dashboard',
      category: 'dashboards',
      children: [
        {
          url: { name: 'dashboards-analytics' },
          icon: 'mdi-chart-timeline-variant',
          title: 'Analytics Dashboard',
        },
        {
          url: { name: 'dashboards-crm' },
          icon: 'mdi-cart-outline',
          title: 'CRM Dashboard',
        },
      ],
    },
    {
      title: 'Front Pages',
      category: 'frontPages',
      children: [
        {
          url: { name: 'front-pages-landing-page' },
          icon: 'mdi-file-document-outline',
          title: 'Landing Front',
        },
        {
          url: { name: 'front-pages-pricing' },
          icon: 'mdi-file-document-outline',
          title: 'Pricing Front',
        },
        {
          url: { name: 'front-pages-payment' },
          icon: 'mdi-file-document-outline',
          title: 'Payment Front',
        },
        {
          url: { name: 'front-pages-checkout' },
          icon: 'mdi-file-document-outline',
          title: 'Checkout Front',
        },
        {
          url: { name: 'front-pages-help-center' },
          icon: 'mdi-file-document-outline',
          title: 'Help Center Front',
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
        },
        {
          url: { name: 'apps-chat' },
          icon: 'mdi-message-outline',
          title: 'Chat',
        },
        {
          url: { name: 'apps-calendar' },
          icon: 'mdi-calendar-blank-outline',
          title: 'Calendar',
        },
        {
          url: { name: 'apps-ecommerce-product-list' },
          icon: 'mdi-list-box',
          title: 'Ecommerce - Product List',
        },
        {
          url: { name: 'apps-ecommerce-product-add' },
          icon: 'mdi-plus-circle-outline',
          title: 'Ecommerce - Add Product',
        },
        {
          url: { name: 'apps-ecommerce-product-category-list' },
          icon: 'mdi-format-list-bulleted',
          title: 'Ecommerce - Category List',
        },
        {
          url: { name: 'apps-ecommerce-order-list' },
          icon: 'mdi-format-list-bulleted',
          title: 'Ecommerce - Order List',
        },
        {
          url: { name: 'apps-ecommerce-order-details-id', params: { id: '9042' } },
          icon: 'mdi-playlist-check',
          title: 'Ecommerce - Order Details',
        },
        {
          url: { name: 'apps-ecommerce-customer-list' },
          icon: 'mdi-user-outline',
          title: 'Ecommerce - Customer List',
        },
        {
          url: { name: 'apps-ecommerce-customer-details-id', params: { id: '478426', tab: 'security' } },
          icon: 'mdi-format-list-bulleted',
          title: 'Ecommerce - Customer Details',
        },
        {
          url: { name: 'apps-ecommerce-manage-review' },
          icon: 'mdi-message-badge-outline',
          title: 'Ecommerce - Manage Review',
        },
        {
          url: { name: 'apps-ecommerce-referrals' },
          icon: 'mdi-account-group-outline',
          title: 'Ecommerce - Referrals',
        },
        {
          url: { name: 'apps-ecommerce-settings' },
          icon: 'mdi-cog-outline',
          title: 'Ecommerce - Settings',
        },
        {
          url: { name: 'apps-academy-overview' },
          icon: 'mdi-book-open-outline',
          title: 'Academy - Overview',
        },
        {
          url: { name: 'apps-academy-my-course' },
          icon: 'mdi-format-list-bulleted',
          title: 'Academy - My Courses',
        },
        {
          url: { name: 'apps-academy-course-details' },
          icon: 'mdi-play-circle-outline',
          title: 'Academy - Course Details',
        },
        {
          url: { name: 'apps-logistics-overview' },
          icon: 'mdi-book-open-outline',
          title: 'Logistics - Dashboard',
        },
        {
          url: { name: 'apps-logistics-fleet' },
          icon: 'mdi-car',
          title: 'Logistics - fleet',
        },
        {
          url: { name: 'apps-invoice-list' },
          icon: 'mdi-format-list-numbered',
          title: 'Invoice List',
        },
        {
          url: { name: 'apps-invoice-preview-id', params: { id: '5036' } },
          icon: 'mdi-file-document-outline',
          title: 'Invoice Preview',
        },
        {
          url: { name: 'apps-invoice-edit-id', params: { id: '5036' } },
          icon: 'mdi-file-document-edit-outline',
          title: 'Invoice Edit',
        },
        {
          url: { name: 'apps-invoice-add' },
          icon: 'mdi-file-plus-outline',
          title: 'Invoice Add',
        },
        {
          url: { name: 'apps-user-list' },
          icon: 'mdi-account-group-outline',
          title: 'User List',
        },
        {
          url: { name: 'apps-user-view-id', params: { id: 21 } },
          icon: 'mdi-eye-outline',
          title: 'User View',
        },
        {
          url: { name: 'pages-help-center' },
          icon: 'mdi-help-circle-outline',
          title: 'Help Center',
        },
        {
          url: { name: 'pages-user-profile-tab', params: { tab: 'profile' } },
          icon: 'mdi-account-cog-outline',
          title: 'User Profile - Profile',
        },
        {
          url: { name: 'pages-account-settings-tab', params: { tab: 'account' } },
          icon: 'mdi-account-cog-outline',
          title: 'Account Settings - Account',
        },
        {
          url: { name: 'pages-account-settings-tab', params: { tab: 'security' } },
          icon: 'mdi-lock-open-outline',
          title: 'Account Settings - Security',
        },
        {
          url: { name: 'pages-account-settings-tab', params: { tab: 'billing-plans' } },
          icon: 'mdi-currency-usd',
          title: 'Account Settings - Billing',
        },
        {
          url: { name: 'pages-account-settings-tab', params: { tab: 'notification' } },
          icon: 'mdi-bell-outline',
          title: 'Account Settings - Notifications',
        },
        {
          url: { name: 'pages-account-settings-tab', params: { tab: 'connection' } },
          icon: 'mdi-link-variant',
          title: 'Account Settings - Connections',
        },
        {
          url: { name: 'pages-pricing' },
          icon: 'mdi-currency-usd',
          title: 'Pricing',
        },
        {
          url: { name: 'pages-faq' },
          icon: 'mdi-help-circle-outline',
          title: 'FAQ',
        },
        {
          url: { name: 'pages-misc-coming-soon' },
          icon: 'mdi-clock-outline',
          title: 'Coming Soon',
        },
        {
          url: { name: 'pages-misc-under-maintenance' },
          icon: 'mdi-cog-outline',
          title: 'Under Maintenance',
        },
        {
          url: { path: '/pages/misc/page-not-found' },
          icon: 'mdi-alert-circle-outline',
          title: 'Page Not Found - 404',
        },
        {
          url: { name: 'pages-misc-not-authorized' },
          icon: 'mdi-account-multiple-remove-outline',
          title: 'Not Authorized - 401',
        },
        {
          url: { name: 'pages-misc-internal-server-error' },
          icon: 'mdi-view-list-outline',
          title: 'Server Error - 500',
        },
        {
          url: { name: 'pages-authentication-login-v1' },
          icon: 'mdi-login',
          title: 'Login V1',
        },
        {
          url: { name: 'pages-authentication-login-v2' },
          icon: 'mdi-login',
          title: 'Login V2',
        },
        {
          url: { name: 'pages-authentication-register-v1' },
          icon: 'mdi-account-plus-outline',
          title: 'Register V1',
        },
        {
          url: { name: 'pages-authentication-register-v2' },
          icon: 'mdi-account-plus-outline',
          title: 'Register V2',
        },
        {
          icon: 'mdi-email-check-outline',
          title: 'Verify Email V1',
          url: { name: 'pages-authentication-verify-email-v1' },
        },
        {
          icon: 'mdi-email-check-outline',
          title: 'Verify Email V2',
          url: { name: 'pages-authentication-verify-email-v2' },
        },
        {
          url: { name: 'pages-authentication-forgot-password-v1' },
          icon: 'mdi-lock-alert-outline',
          title: 'Forgot Password V1',
        },
        {
          url: { name: 'pages-authentication-forgot-password-v2' },
          icon: 'mdi-lock-alert-outline',
          title: 'Forgot Password V2',
        },
        {
          url: { name: 'pages-authentication-reset-password-v1' },
          icon: 'mdi-lock-reset',
          title: 'Reset Password V1',
        },
        {
          url: { name: 'pages-authentication-reset-password-v2' },
          icon: 'mdi-lock-reset',
          title: 'Reset Password V2',
        },
        {
          icon: 'mdi-cellphone-link',
          title: 'Two Steps V1',
          url: { name: 'pages-authentication-two-steps-v1' },
        },
        {
          icon: 'mdi-cellphone-link',
          title: 'Two Steps V2',
          url: { name: 'pages-authentication-two-steps-v2' },
        },
        {
          url: { name: 'pages-dialog-examples' },
          icon: 'mdi-card-outline',
          title: 'Dialog Examples',
        },
        {
          url: { name: 'pages-authentication-register-multi-steps' },
          icon: 'mdi-account-plus-outline',
          title: 'Register Multi-Steps',
        },
        {
          url: { name: 'wizard-examples-checkout' },
          icon: 'mdi-cart-outline',
          title: 'Wizard - Checkout',
        },
        {
          url: { name: 'wizard-examples-create-deal' },
          icon: 'mdi-gift-outline',
          title: 'Wizard - create deal',
        },
        {
          url: { name: 'wizard-examples-property-listing' },
          icon: 'mdi-home-outline',
          title: 'Wizard - Property Listing',
        },
        {
          url: { name: 'apps-roles' },
          icon: 'mdi-shield-account-outline',
          title: 'Roles',
        },
        {
          url: { name: 'apps-permissions' },
          icon: 'mdi-shield-account-outline',
          title: 'Permissions',
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
        },
        {
          url: { name: 'pages-icons' },
          icon: 'mdi-google-circles-extended',
          title: 'Icons',
        },
        {
          url: { name: 'pages-cards-card-basic' },
          icon: 'mdi-card-outline',
          title: 'Card Basic',
        },
        {
          url: { name: 'pages-cards-card-statistics' },
          icon: 'mdi-chart-box-outline',
          title: 'Card Statistics',
        },
        {
          url: { name: 'pages-cards-card-gamification' },
          icon: 'mdi-card-account-details-outline',
          title: 'Card Gamification',
        },
        {
          url: { name: 'pages-cards-card-actions' },
          icon: 'mdi-card-plus-outline',
          title: 'Card Actions',
        },
        {
          url: { name: 'components-alert' },
          icon: 'mdi-alert-outline',
          title: 'Alerts',
        },
        {
          url: { name: 'components-avatar' },
          icon: 'mdi-account-circle-outline',
          title: 'Avatars',
        },
        {
          url: { name: 'components-badge' },
          icon: 'mdi-bell-badge-outline',
          title: 'Badges',
        },
        {
          url: { name: 'components-button' },
          icon: 'mdi-gesture-tap-button',
          title: 'Buttons',
        },
        {
          url: { name: 'components-chip' },
          icon: 'mdi-new-box',
          title: 'Chips',
        },
        {
          url: { name: 'components-dialog' },
          icon: 'mdi-card-bulleted-outline',
          title: 'Dialogs',
        },
        {
          url: { name: 'components-list' },
          icon: 'mdi-format-list-bulleted',
          title: 'List',
        },
        {
          url: { name: 'components-menu' },
          icon: 'mdi-menu',
          title: 'Menu',
        },
        {
          url: { name: 'components-pagination' },
          icon: 'mdi-page-last',
          title: 'Pagination',
        },
        {
          url: { name: 'components-progress-circular' },
          icon: 'mdi-progress-helper',
          title: 'Progress Circular',
        },
        {
          url: { name: 'components-progress-linear' },
          icon: 'mdi-progress-helper',
          title: 'Progress Linear',
        },
        {
          url: { name: 'components-expansion-panel' },
          icon: 'mdi-format-vertical-align-center',
          title: 'Expansion Panel',
        },
        {
          url: { name: 'components-snackbar' },
          icon: 'mdi-message-processing-outline',
          title: 'Snackbar',
        },
        {
          url: { name: 'components-tabs' },
          icon: 'mdi-tab',
          title: 'Tabs',
        },
        {
          url: { name: 'components-timeline' },
          icon: 'mdi-timeline-outline',
          title: 'Timeline',
        },
        {
          url: { name: 'components-tooltip' },
          icon: 'mdi-tooltip-edit-outline',
          title: 'Tooltip',
        },
        {
          url: { name: 'extensions-tour' },
          icon: 'mdi-cube-outline',
          title: 'Tour',
        },
        {
          url: { name: 'extensions-swiper' },
          icon: 'mdi-image-outline',
          title: 'Swiper',
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
        },
        {
          url: { name: 'forms-select' },
          icon: 'mdi-format-list-checkbox',
          title: 'Select',
        },
        {
          url: { name: 'forms-checkbox' },
          icon: 'mdi-checkbox-outline',
          title: 'Checkbox',
        },
        {
          url: { name: 'forms-radio' },
          icon: 'mdi-radiobox-marked',
          title: 'Radio',
        },
        {
          url: { name: 'forms-combobox' },
          icon: 'mdi-checkbox-outline',
          title: 'Combobox',
        },
        {
          url: { name: 'forms-date-time-picker' },
          icon: 'mdi-calendar-range',
          title: 'Date Time picker',
        },
        {
          url: { name: 'forms-textarea' },
          icon: 'mdi-card-text-outline',
          title: 'Textarea',
        },
        {
          url: { name: 'forms-switch' },
          icon: 'mdi-toggle-switch-outline',
          title: 'Switch',
        },
        {
          url: { name: 'forms-file-input' },
          icon: 'mdi-tray-arrow-up',
          title: 'File Input',
        },
        {
          url: { name: 'forms-editors' },
          icon: 'mdi-file-document-edit-outline',
          title: 'Editors',
        },
        {
          url: { name: 'forms-rating' },
          icon: 'mdi-star-outline',
          title: 'Form Rating',
        },
        {
          url: { name: 'forms-slider' },
          icon: 'mdi-gesture-swipe-horizontal',
          title: 'Slider',
        },
        {
          url: { name: 'forms-range-slider' },
          icon: 'mdi-lastpass',
          title: 'Range Slider',
        },
        {
          url: { name: 'forms-form-layouts' },
          icon: 'mdi-cube-outline',
          title: 'Form Layouts',
        },
        {
          url: { name: 'forms-form-validation' },
          icon: 'mdi-checkbox-marked-circle-outline',
          title: 'Form Validation',
        },
        {
          url: { name: 'forms-custom-input' },
          icon: 'mdi-format-list-checks',
          title: 'Custom Input',
        },
        {
          url: { name: 'forms-autocomplete' },
          icon: 'mdi-format-align-left',
          title: 'Autocomplete',
        },
        {
          url: { name: 'tables-data-table' },
          icon: 'mdi-table',
          title: 'Data Table',
        },
        {
          url: { name: 'tables-simple-table' },
          icon: 'mdi-table',
          title: 'Simple Table',
        },
        {
          url: { name: 'forms-form-wizard-numbered' },
          icon: 'mdi-align-vertical-distribute',
          title: 'Form Wizard Numbered',
        },
        {
          url: { name: 'forms-form-wizard-icons' },
          icon: 'mdi-align-vertical-distribute',
          title: 'Form Wizard Icons',
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
        },
        {
          url: { name: 'charts-chartjs' },
          icon: 'mdi-chart-bell-curve',
          title: 'ChartJS',
        },
        {
          url: { name: 'access-control' },
          icon: 'mdi-shield-outline',
          title: 'Access Control (ACL)',
        },
      ],
    },
  ],
}
