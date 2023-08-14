export default [
  {
    title: 'Dashboards',
    icon: { icon: 'mdi-home-outline' },
    children: [
      {
        title: 'Analytics',
        to: 'dashboards-analytics',
        icon: { icon: 'mdi-chart-timeline-variant' },
      },
      {
        title: 'CRM',
        to: 'dashboards-crm',
        icon: { icon: 'mdi-monitor-dashboard' },
      },
      {
        title: 'Logistics',
        to: 'apps-logistics-overview',
        icon: { icon: 'mdi-truck-outline' },
      },
    ],
  },
  {
    title: 'Front Pages',
    icon: { icon: 'mdi-flip-to-front' },
    children: [
      {
        title: 'Landing Page',
        to: 'front-pages-landing-page',
        target: '_blank',
        icon: { icon: 'mdi-rocket-outline' },
      },
      {
        title: 'Pricing',
        to: 'front-pages-pricing',
        target: '_blank',
        icon: { icon: 'mdi-cash' },
      },
      {
        title: 'Payment',
        to: 'front-pages-payment',
        target: '_blank',
        icon: { icon: 'mdi-credit-card-outline' },
      },
      {
        title: 'checkout',
        to: 'front-pages-checkout',
        target: '_blank',
        icon: { icon: 'mdi-cart-outline' },
      },
      {
        title: 'Help Center',
        to: 'front-pages-help-center',
        target: '_blank',
        icon: { icon: 'mdi-help-circle-outline' },
      },
    ],
  },
]
