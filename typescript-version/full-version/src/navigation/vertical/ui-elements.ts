export default [
  { heading: 'UI Elements' },
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
      { title: 'Gamification', to: 'pages-cards-gamification' },
      { title: 'Actions', to: 'pages-cards-card-actions' },
      { title: 'Statistics', to: 'pages-cards-card-statistics' },
    ],
  },
  {
    title: 'Components',
    icon: 'i-mdi-archive-outline',
    children: [
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
]
