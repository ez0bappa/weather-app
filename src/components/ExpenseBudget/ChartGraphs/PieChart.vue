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
  name: "PieChart",
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
      default: 250,
    },
    height: {
      type: Number,
      default: 250,
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
   
  },
  data() {
    return {
      chartData: {
        labels: [
            'Food'              
        ],
        //datasets: [ { data: this.incomes }, { data: this.expenses } ]
        datasets: [
          {
            label: 'Food',
            backgroundColor: "#41b883",
            data: [10, 20, 30, 40, 50],
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
      console.log(this.keyLabel)
  }
};
</script>