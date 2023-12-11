export default [
  { heading: 'UI Elements' },
  {
    title: 'Typography',
    icon: { icon: 'ri-font-family' },
    to: 'pages-typography',
  },
  {
    title: 'Icons',
    icon: { icon: 'ri-eye-line' },
    to: 'pages-icons',
  },
  {
    title: 'Cards',
    icon: { icon: 'ri-bank-card-line' },
    children: [
      { title: 'Basic', to: 'pages-cards-card-basic' },
      { title: 'Statistics', to: 'pages-cards-card-statistics' },
      { title: 'Gamification', to: 'pages-cards-card-gamification' },
      { title: 'Actions', to: 'pages-cards-card-actions' },
    ],
  },
  {
    title: 'Components',
    icon: { icon: 'ri-archive-line' },
    children: [
      { title: 'Alert', to: 'components-alert' },
      { title: 'Avatar', to: 'components-avatar' },
      { title: 'Badge', to: 'components-badge' },
      { title: 'Button', to: 'components-button' },
      { title: 'Chip', to: 'components-chip' },
      { title: 'Dialog', to: 'components-dialog' },
      { title: 'Expansion Panel', to: 'components-expansion-panel' },
      { title: 'List', to: 'components-list' },
      { title: 'Menu', to: 'components-menu' },
      { title: 'Pagination', to: 'components-pagination' },
      { title: 'Progress Circular', to: 'components-progress-circular' },
      { title: 'Progress Linear', to: 'components-progress-linear' },
      { title: 'Snackbar', to: 'components-snackbar' },
      { title: 'Tabs', to: 'components-tabs' },
      { title: 'Timeline', to: 'components-timeline' },
      { title: 'Tooltip', to: 'components-tooltip' },
    ],
  },
  {
    title: 'Extensions',
    icon: { icon: 'ri-box-3-line' },
    children: [
      { title: 'Tour', to: 'extensions-tour' },
      { title: 'Swiper', to: 'extensions-swiper' },
    ],
  },
]
