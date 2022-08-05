export default [
  { heading: 'Others' },
  {
    title: 'Access Control',
    icon: { icon: 'mdi-shield-outline' },
    to: 'access-control',
    action: 'read',
    subject: 'Auth',
  },
  {
    title: 'Nav Levels',
    icon: { icon: 'mdi-menu' },
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
]
