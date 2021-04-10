import { mdiChartPie, mdiCircleOutline } from '@mdi/js'

export default [
  {
    title: 'Charts',
    icon: mdiChartPie,
    children: [
      {
        icons: mdiCircleOutline,
        title: 'Apex Chart',
        to: 'apex-chart',
      },
    ],
  },
]
