import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router'
import { createPinia } from 'pinia' // Import
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// Fustion chart
import VueFusionCharts from 'vue-fusioncharts';                                 // Include the vue-fusioncharts component

// import FusionCharts modules and resolve dependency
import FusionCharts from 'fusioncharts';                                        //Include the FusionCharts library
import Charts from 'fusioncharts/fusioncharts.charts';                          //Include the chart type
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';        //import the theme

// Sorting table


createApp(App)
    .use(Toast)
    .use(createPinia)
    .use(VueFusionCharts, FusionCharts, Charts, FusionTheme)                      // Register VueFusionCharts component
    .use(router)
    .mount('#app')
