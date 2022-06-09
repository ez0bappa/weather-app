<template>
  <!-- Test -->
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
      default: 500,
    },
    height: {
      type: Number,
      default: 500,
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

    props: {
      dateWiseExpenses: Array,
      categoryWiseExpenses: Array,
    },
  },
  data() {
    return {
      chartData: {
        // labels: ['1/10/2022', '2/10/2022', '3/10/2022'],          //['1/10/2022', '2/10/2022', '3/10/2022'], ['Food', 'Travel', 'Pocket Money', 'Room expenses']
        
        // labels:  this.budgetFormData.map(function (c) {
        //   return moment(c.date).format("DD MMM");
        // }),
        
        labels: ['Bappa'],                                //Bar Label
        datasets: [
          {
            label: ['Food'],
            backgroundColor: ["#495057", "#ffc107", '#198754'],
            data: [50, 20, 80],

            // label: this.budgetFormData.key,                              //Main Label
            // backgroundColor: ["#495057", "#ffc107", '#198754'],
            // data: this.budgetFormData.date,

            // label: this.budgetFormData.map(function (c) {
            //   return c.key;
            // }),
            // backgroundColor: ["#495057", "#ffc107", '#198754'],
            // data: this.budgetFormData.map(function (r) {
            //   return r.expenses;
            // }),
          }
        ],
      },
      chartOptions: {
        responsive: false,
        maintainAspectRatio: false
      },
    };
  },
  // created: function() {
  //   if(this.budgetFormData) {   
  //     let datasets = this.budgetFormData.map(item => {
  //       console.log(item)
  //       return {
  //           label: item.category,
  //           backgroundColor: ["#495057", "#ffc107", '#198754'],
  //           data: item.date,
  //       }
  //     });
  //     this.datasets = datasets
  //   }
  // },
  mounted() {
    console.log(this.categoryWiseExpenses)

    // if(this.budgetFormData) {
    //   let datasets = this.budgetFormData.map(item => {
    //     return {
    //         label: item.category,
    //         backgroundColor: ["#495057", "#ffc107", '#198754'],
    //         data: item.date,
    //     }
    //   });
    //   this.datasets = datasets
    // }
  }
};
</script>