export default [
  // 1st level
  {
    title: 'Apps',
    icon: 'i-mdi-package-variant-closed',
    children: [
      // 2nd level
      {
        title: 'Invoice',
        icon: 'i-mdi-file-document-outline',
        children: [
          // 3rd level
          {
            title: 'List',
            to: 'apps-invoice-list',
          },
        ],
      },
    ],
  },
]
