import { mdiChartPie } from '@mdi/js'

export default [
  {
    subheader: 'Charts and Maps',
  },
  {
    title: 'Charts',
    icon: mdiChartPie,
    children: [
      {
        title: 'Apex Chart',
        to: 'apex-chart',
      },
      {
        title: 'Chartjs',
        to: 'chartjs-chart',
      },
    ],
  },
]
