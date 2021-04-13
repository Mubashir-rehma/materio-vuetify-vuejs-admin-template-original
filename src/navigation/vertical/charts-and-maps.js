import { mdiChartDonut } from '@mdi/js'

export default [
  {
    subheader: 'Charts and Maps',
  },
  {
    title: 'Charts',
    icon: mdiChartDonut,
    children: [
      {
        title: 'Apex Chart',
        to: 'apex-chart',
      },
      {
        title: 'Chartjs',
        to: 'chartjs-chart',
      },
      {
        title: 'Leaflet',
        to: 'leaflet-maps',
      },
    ],
  },
]
