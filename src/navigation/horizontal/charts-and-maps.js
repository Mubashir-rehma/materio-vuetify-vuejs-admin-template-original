import { mdiChartPie } from '@mdi/js'

export default [
  {
    title: 'Charts & Maps',
    icon: mdiChartPie,
    children: [
      {
        title: 'Charts',
        icon: mdiChartPie,
        children: [
          {
            title: 'Apex Chart',
            to: 'apex-chart',
          },
        ],
      },
    ],
  },
]
