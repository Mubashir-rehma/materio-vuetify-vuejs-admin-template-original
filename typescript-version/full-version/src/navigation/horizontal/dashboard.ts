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
      },
      {
        title: 'Pricing',
        to: 'front-pages-pricing',
        target: '_blank',
      },
      {
        title: 'Payment',
        to: 'front-pages-payment',
        target: '_blank',
      },
      {
        title: 'checkout',
        to: 'front-pages-checkout',
        target: '_blank',
      },
      {
        title: 'Help Center',
        to: 'front-pages-help-center',
        target: '_blank',
      },
    ],
  },
]
