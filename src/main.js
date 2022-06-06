import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router'
import { createPinia } from 'pinia' // Import
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueFusionCharts from 'vue-fusioncharts';

// import FusionCharts modules and resolve dependency
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';

createApp(App)
    .use(Toast)
    .use(createPinia)
    .use(VueFusionCharts, FusionCharts, Charts)
    .use(router)
    .mount('#app')
