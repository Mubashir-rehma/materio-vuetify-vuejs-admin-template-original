export default [
  {
    title: 'Apps',
    icon: { icon: 'mdi-package-variant' },
    children: [
      {
        title: 'Ecommerce',
        icon: { icon: 'mdi-cart-plus' },
        children: [
          {
            title: 'Product',
            children: [
              { title: 'List', to: 'apps-ecommerce-product-list' },
              { title: 'Add', to: 'apps-ecommerce-product-add' },
              { title: 'Category', to: 'apps-ecommerce-product-category-list' },
            ],
          },
          {
            title: 'Order',
            children: [
              { title: 'List', to: 'apps-ecommerce-order-list' },
              { title: 'Details', to: { name: 'apps-ecommerce-order-details-id', params: { id: '9042' } } },
            ],
          },
          {
            title: 'Customer',
            children: [
              {
                title: 'List',
                to: 'apps-ecommerce-customer-list'
              },
            ],
          },
        ],
      },
      {
        title: 'Email',
        icon: { icon: 'mdi-email-outline' },
        to: 'apps-email',
      },
      {
        title: 'Chat',
        icon: { icon: 'mdi-message-outline' },
        to: 'apps-chat',
      },
      {
        title: 'Calendar',
        to: 'apps-calendar',
        icon: { icon: 'mdi-calendar-blank' },
      },
      {
        title: 'Invoice',
        icon: { icon: 'mdi-file-document-outline' },
        children: [
          { title: 'List', to: 'apps-invoice-list' },
          { title: 'Preview', to: { name: 'apps-invoice-preview-id', params: { id: '5036' } } },
          { title: 'Edit', to: { name: 'apps-invoice-edit-id', params: { id: '5036' } } },
          { title: 'Add', to: 'apps-invoice-add' },
        ],
      },
      {
        title: 'User',
        icon: { icon: 'mdi-account-outline' },
        children: [
          { title: 'List', to: 'apps-user-list' },
          { title: 'View', to: { name: 'apps-user-view-id', params: { id: 21 } } },
        ],
      },
      {
        title: 'Roles & Permissions',
        icon: { icon: 'mdi-shield-account-outline' },
        children: [
          { title: 'Roles', to: 'apps-roles' },
          { title: 'Permissions', to: 'apps-permissions' },
        ],
      },
    ],
  },
]
