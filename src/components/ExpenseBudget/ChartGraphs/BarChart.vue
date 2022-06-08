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
import moment from 'moment'
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

    dates: {
        type: String
    },

    data: {
        type: Array
    },


    budgetFormData: {
      type: Object,
      default: "label"
    }
   
  },
  data() {
    return {
      chartData: {
        labels: ['1/10/2022', '2/10/2022', '3/10/2022'],                       //['1/10/2022', '2/10/2022', '3/10/2022']      Bar label
        // labels:  this.budgetFormData.map(function (c) {
        //   return moment(c.date).format("DD MMM");
        // }),
        
        //datasets: [ { data: this.incomes }, { data: this.expenses } ]
        datasets: [
          {
            label: [this.budgetFormData.category],                                                    //Main Top label
            backgroundColor: ['#f87979', '#ffc107', '#6610f2'],
            data: [40, 20, 12]
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
    };
  },
  mounted() {
      console.log('Bar Chart: ', this.budgetFormData)
  }
};
</script>