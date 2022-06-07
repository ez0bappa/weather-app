<template>
  <Doughnut
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)
export default {
  name: 'DoughnutChart',
  components: {
    Doughnut
  },
  props: {
    chartId: {
      type: String,
      default: 'doughnut-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 120
    },
    height: {
      type: Number,
      default: 120
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object
    },
    plugins: {
      type: Array,
      default: () => []
    },
    incomes:{
      type: Number
    },
    expenses:{
      type: Number
    },
    savings:{
      type: Number
    },
    labels:{
      type:Object
    }
  },
  
  data() {
    return {
      chartData: {
        labels: ['Food', 'Travel'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
            data: [500, 200, 300]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true
      }
    }
  }
}
</script>