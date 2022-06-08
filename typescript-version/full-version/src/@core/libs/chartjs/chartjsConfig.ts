import { hexToRgb } from '@layouts/utils'

// 👉 colors variables
const colorVariables = (colors: { variables: Record<string, any>; colors: Record<string, string> }) => {
  const borderColor = `rgba(${hexToRgb(colors.variables['border-color'])},${colors.variables['border-opacity']})`
  const labelColor = `rgba(${hexToRgb(colors.colors['on-surface'])},${colors.variables['medium-emphasis-opacity']})`

  return { labelColor, borderColor }
}

// SECTION config

// 👉 Latest Bar Chart Config
export const getLatestBarChartConfig = (colors: { variables: Record<string, any>; colors: Record<string, string> }) => {
  const { borderColor, labelColor } = colorVariables(colors)

  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    scales: {
      x: {
        grid: {
          borderColor,
          color: borderColor,
        },
        ticks: {
          color: labelColor,
        },
      },
      y: {
        min: 0,
        max: 400,
        grid: {
          borderColor,
          color: borderColor,
        },
        ticks: {
          stepSize: 100,
          color: labelColor,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }
}

// 👉 Horizontal Bar Chart Config
export const getHorizontalBarChartConfig = (colors: { variables: Record<string, any>; colors: Record<string, string> }) => {
  const chartColors = colorVariables(colors)

  return {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    elements: {
      bar: {
        borderRadius: {
          topRight: 15,
          bottomRight: 15,
        },
      },
    },
    layout: {
      padding: { top: -4 },
    },
    scales: {
      x: {
        min: 0,
        grid: {
          borderColor: 'transparent',
          color: chartColors.borderColor,
          drawTicks: false,
        },
        ticks: {
          color: chartColors.labelColor,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: chartColors.labelColor,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }
}

// 👉 Line Chart Config
export const getLineChartConfig = (colors: { variables: Record<string, any>; colors: Record<string, string> }) => {
  const chartColors = colorVariables(colors)

  return {
    responsive: true,
    backgroundColor: false,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { color: chartColors.labelColor },
        grid: {
          borderColor: chartColors.borderColor,
          color: chartColors.borderColor,
        },
      },
      y: {
        min: 0,
        max: 400,
        scaleLabel: { display: true },
        ticks: {
          stepSize: 100,
          color: chartColors.labelColor,
        },
        grid: {
          borderColor: chartColors.borderColor,
          color: chartColors.borderColor,
        },
      },
    },
    plugins: {
      legend: {
        align: 'end',
        position: 'top',
        labels: {
          boxWidth: 10,
          color: chartColors.labelColor,
          usePointStyle: true,
        },
      },
    },
  }
}

// 👉 Radar Chart Config
export const getRadarChartConfig = (colors: { variables: Record<string, any>; colors: Record<string, string> }) => {
  const chartColors = colorVariables(colors)

  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    layout: {
      padding: { top: -20 },
    },
    scales: {
      r: {
        ticks: {
          display: false,
          maxTicksLimit: 1,
          color: chartColors.labelColor,
        },
        grid: { color: chartColors.borderColor },
        pointLabels: { color: chartColors.labelColor },
        angleLines: { color: chartColors.borderColor },
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          padding: 25,
          color: chartColors.labelColor,
        },
      },
    },
  }
}

// 👉 Polar Chart Config
export const getPolarChartConfig = (colors: { colors: Record<string, string>; variables: Record<string, any> }) => {
  const chartColors = colorVariables(colors)

  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    layout: {
      padding: {
        top: -5,
        bottom: -45,
      },
    },
    scales: {
      r: {
        grid: { display: false },
        ticks: { display: false },
      },
    },
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 25,
          boxWidth: 9,
          color: chartColors.labelColor,
          usePointStyle: true,
        },
      },
    },
  }
}

// 👉 Bubble Chart Config
export const getBubbleChartConfig = (colors: { variables: Record<string, any>; colors: Record<string, string> }) => {
  const chartColors = colorVariables(colors)

  return {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        min: 0,
        max: 140,
        grid: {
          borderColor: chartColors.borderColor,
          color: chartColors.borderColor,
        },
        ticks: {
          stepSize: 10,
          color: chartColors.labelColor,
        },
      },
      y: {
        min: 0,
        max: 400,
        grid: {
          borderColor: chartColors.borderColor,
          color: chartColors.borderColor,
        },
        ticks: {
          stepSize: 100,
          color: chartColors.labelColor,
        },
      },
    },
    plugins: {
      legend: { display: false },
    },
  }
}

// 👉 Doughnut Chart Config
export const getDoughnutChartConfig = () => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    cutout: 80,
    plugins: {
      legend: {
        display: false,
      },
    },
  }
}

// 👉 Scatter Chart Config
export const getScatterChartConfig = (colors: { variables: Record<string, any>; colors: Record<string, string> }) => {
  const chartColors = colorVariables(colors)

  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 800 },
    layout: {
      padding: { top: -20 },
    },
    scales: {
      x: {
        min: 0,
        max: 140,
        grid: {
          borderColor: chartColors.borderColor,
          drawTicks: false,
          color: chartColors.borderColor,
        },
        ticks: {
          stepSize: 10,
          color: chartColors.labelColor,
        },
      },
      y: {
        min: 0,
        max: 400,
        grid: {
          borderColor: chartColors.borderColor,
          drawTicks: false,
          color: chartColors.borderColor,
        },
        ticks: {
          stepSize: 100,
          color: chartColors.labelColor,
        },
      },
    },
    plugins: {
      legend: {
        align: 'start',
        position: 'top',
        pointStyle: 'circle',
        labels: {
          padding: 25,
          boxWidth: 9,
          color: chartColors.labelColor,
          usePointStyle: true,
        },
      },
    },
  }
}

// 👉 Line Area Chart Config
export const getLineAreaChartConfig = (colors: { variables: Record<string, any>; colors: Record<string, string> }) => {
  const chartColors = colorVariables(colors)

  return {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: { top: -20 },
    },
    scales: {
      x: {
        grid: {
          borderColor: chartColors.borderColor,
          color: 'transparent',
        },
        ticks: { color: chartColors.labelColor },
      },
      y: {
        min: 0,
        max: 400,
        grid: {
          borderColor: chartColors.borderColor,
          color: 'transparent',
        },
        ticks: {
          stepSize: 100,
          color: chartColors.labelColor,
        },
      },
    },
    plugins: {
      legend: {
        align: 'end',
        position: 'top',
        labels: {
          padding: 25,
          boxWidth: 9,
          color: chartColors.labelColor,
          usePointStyle: true,
        },
      },
    },
  }
}

// !SECTION
