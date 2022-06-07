<template>
  <Bar
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
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
export default {
  name: "DoughnutChart",
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 200,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
    },
    plugins: {
      type: Object,
    },
    incomes: {
      type: Object,
    },
    expenses: {
      type: Object,
    },
    barLables: {
      type: Object,
    },
    incomeLabel: {
      type: Array,
    },

    keyLabel: {
        type: String,
        default: "label",
    },

    dates: {
        type: String
    },

    data: {
        type: Array
    }
   
  },
  data() {
    return {
      chartData: {
        labels: ['Test'],                                                       //['1/10/2022', '2/10/2022', '3/10/2022']
        //datasets: [ { data: this.incomes }, { data: this.expenses } ]
        datasets: [
          {
            label: ['Bappa'],
            backgroundColor: ['#f87979', '#fff', '#6610f2'],
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }
        ],
      },
      chartOptions: {
        responsive: false,
        maintainAspectRatio: false
      },
    };
  },
  mounted() {
      console.log('Bar Chart: ', this.data)
  }
};
</script>