import { mdiChartDonut } from '@mdi/js'

export default [
  {
    title: 'Charts & Maps',
    icon: mdiChartDonut,
    children: [
      {
        title: 'Charts',
        icon: mdiChartDonut,
        children: [
          {
            title: 'Apex Chart',
            to: 'apex-chart',
          },
          {
            title: 'chartjs',
            to: 'chartjs-chart',
          },
        ],
      },
    ],
  },
]
