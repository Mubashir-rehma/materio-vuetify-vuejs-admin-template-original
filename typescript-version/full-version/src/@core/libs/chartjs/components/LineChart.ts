import type { PluginOptionsByType } from 'chart.js'
import { Chart as ChartJS, Filler, LineController, LineElement, LinearScale, PointElement, Title } from 'chart.js'
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { Line } from 'vue-chartjs'

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title, Filler)

export default defineComponent({
  name: 'LineChart',
  props: {
    chartId: {
      type: String,
      default: 'line-chart',
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: '',
      type: String,
    },
    styles: {
      type: Object as PropType<Partial<CSSStyleDeclaration>>,
      default: () => {},
    },
    plugins: {
      type: Array as PropType<PluginOptionsByType<'line'>[]>,
      default: () => [],
    },
    chartData: {
      type: Object,
      default: () => {},
    },
    chartOptions: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    return () =>
      h(h(Line), {
        chartData: props.chartData,
        chartOptions: props.chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: props.styles,
        plugins: props.plugins,
      })
  },
})
