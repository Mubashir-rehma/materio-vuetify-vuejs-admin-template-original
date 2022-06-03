import type { ThemeInstance } from 'vuetify'

export const getScatterChartConfig = (themeColors: ThemeInstance['themes']['value']['colors']) => {
  return {
    chart: {
      zoom: {
        enabled: true,
        type: 'xy',
      },
      toolbar: {
        show: false,
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    colors: [themeColors.colors.warning, themeColors.colors.primary, themeColors.colors.success],
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
    },
    xaxis: {
      tickAmount: 10,
      labels: {
        formatter(val: string) {
          return parseFloat(val).toFixed(1)
        },
      },
    },
    yaxis: {
      labels: { align: 'center' },
    },
  }
}
export const getLineChartSimpleConfig = (themeColors: ThemeInstance['themes']['value']['colors']) => {
  return {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    markers: {
      strokeWidth: 3,
      strokeOpacity: 1,
      strokeColors: [themeColors.colors['on-secondary']],
      colors: [themeColors.colors.warning],
    },
    colors: [themeColors.colors.warning],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    tooltip: {
      custom(data: any) {
        return `${'<div class="px-1 py-50"><span>'}${
            data.series[data.seriesIndex][data.dataPointIndex]
          }%</span></div>`
      },
    },
    xaxis: {
      categories: [
        '7/12',
        '8/12',
        '9/12',
        '10/12',
        '11/12',
        '12/12',
        '13/12',
        '14/12',
        '15/12',
        '16/12',
        '17/12',
        '18/12',
        '19/12',
        '20/12',
        '21/12',
      ],
    },
    yaxis: {
      labels: { align: 'center' },
    },
  }
}

export const getBarChartConfig = (themeColors: ThemeInstance['themes']['value']['colors']) => {
  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        barHeight: '30%',
        horizontal: true,
        startingShape: 'rounded',
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: -10,
      },
    },
    colors: themeColors.colors.info,
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['MON, 11', 'THU, 14', 'FRI, 15', 'MON, 18', 'WED, 20', 'FRI, 21', 'MON, 23'],
    },
    yaxis: {
      labels: { align: 'center' },
    },
  }
}

export const getCandlestickChartConfig = (themeColors: ThemeInstance['themes']['value']['colors']) => {
  return {
    chart: {
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      labels: { align: 'center' },
      tooltip: {
        enabled: true,
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: themeColors.colors.success,
          downward: themeColors.colors.error,
        },
      },
      bar: {
        columnWidth: '40%',
      },
    },
  }
}
export const getRadialBarChartConfig = (themeColors: ThemeInstance['themes']['value']['colors']) => {
  return {
    colors: [themeColors.colors.warning, themeColors.colors.info, themeColors.colors.primary],
    plotOptions: {
      radialBar: {
        size: 185,
        hollow: {
          size: '25%',
        },
        track: {
          margin: 15,
        },
        dataLabels: {
          name: {
            fontSize: '2rem',
          },
          value: {
            fontSize: '1rem',
          },
          total: {
            show: true,
            fontSize: '1rem',
            label: 'Comments',
            formatter() {
              return '80%'
            },
          },
        },
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ['Comments', 'Replies', 'Shares'],
  }
}
export const getDonutChartConfig = (themeColors: ThemeInstance['themes']['value']['colors']) => {
  const donut = {
    series1: '#ffe700',
    series2: '#FFA1A1',
    series3: '#826bf8',
  }

  return {
    legend: {
      show: true,
      position: 'bottom',
      fontSize: '14px',
    },
    colors: [donut.series1, donut.series2, donut.series3, themeColors.colors.info],
    dataLabels: {
      enabled: true,
      formatter(val: string) {
        return `${parseInt(val)}%`
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              fontSize: '2rem',
            },
            value: {
              fontSize: '1rem',
              formatter(val: string) {
                return `${parseInt(val)}%`
              },
            },
            total: {
              show: true,
              fontSize: '1.5rem',
              label: 'Operational',
              formatter() {
                return '31%'
              },
            },
          },
        },
      },
    },
    labels: ['Operational', 'Networking', 'Hiring', 'R&D'],
    responsive: [
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 380,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 320,
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: '1.5rem',
                  },
                  value: {
                    fontSize: '1rem',
                  },
                  total: {
                    fontSize: '1.5rem',
                  },
                },
              },
            },
          },
          legend: {
            show: true,
          },
        },
      },
    ],
  }
}

export const getAreaChartSplineConfig = () => {
  const area = {
    series3: '#e0cffe',
    series2: '#b992fe',
    series1: '#ab7efd',
  }

  return {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
      curve: 'straight',
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      categories: [
        '7/12',
        '8/12',
        '9/12',
        '10/12',
        '11/12',
        '12/12',
        '13/12',
        '14/12',
        '15/12',
        '16/12',
        '17/12',
        '18/12',
        '19/12',
        '20/12',
      ],
    },
    yaxis: {
      labels: { align: 'center' },
    },
    fill: {
      opacity: 1,
      type: 'solid',
    },
    tooltip: {
      shared: false,
    },
    colors: [area.series3, area.series2, area.series1],
  }
}

export const getColumnChartConfig = () => {
  const column = {
    series1: '#826af9',
    series2: '#d2b0ff',
    bg: '#f8d3ff',
  }

  return {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    colors: [column.series1, column.series2],
    plotOptions: {
      bar: {
        columnWidth: '15%',
        colors: {
          backgroundBarColors: [column.bg, column.bg, column.bg, column.bg, column.bg],
          backgroundBarRadius: 10,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
    },
    stroke: {
      show: true,
      colors: ['transparent'],
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      categories: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12'],
    },
    yaxis: {
      labels: { align: 'center' },
    },
    fill: {
      opacity: 1,
    },
  }
}

export const getHeatMapChartConfig = () => {
  return {
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      position: 'bottom',
    },
    plotOptions: {
      heatmap: {
        enableShades: false,
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 10,
              name: '0-10',
              color: '#b9b3f8',
            },
            {
              from: 11,
              to: 20,
              name: '10-20',
              color: '#aba4f6',
            },
            {
              from: 21,
              to: 30,
              name: '20-30',
              color: '#9d95f5',
            },
            {
              from: 31,
              to: 40,
              name: '30-40',
              color: '#8f85f3',
            },
            {
              from: 41,
              to: 50,
              name: '40-50',
              color: '#8176f2',
            },
            {
              from: 51,
              to: 60,
              name: '50-60',
              color: '#7367f0',
            },
          ],
        },
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: { align: 'center' },
    },
    chart: {
      height: 350,
      type: 'heatmap',
      toolbar: {
        show: false,
      },
    },
  }
}

export const getRadarChartConfig = () => {
  const donut = {
    series1: '#ffe700',
    series2: '#826bf8',
  }

  return {
    chart: {
      toolbar: {
        show: false,
      },
      parentHeightOffset: 0,
    },
    legend: {
      show: true,
    },
    yaxis: {
      show: false,
    },
    colors: [donut.series1, donut.series2],
    xaxis: {
      categories: ['Battery', 'Brand', 'Camera', 'Memory', 'Storage', 'Display', 'OS', 'Price'],
    },
    fill: {
      opacity: [1, 0.8],
    },
    stroke: {
      width: 0,
      show: false,
    },
    markers: {
      size: 0,
    },
    grid: {
      show: false,
      padding: {
        top: -20,
        bottom: -20,
      },
    },
  }
}

