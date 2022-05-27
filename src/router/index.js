import { createRouter, createWebHistory } from "vue-router";
import WeatherAppVue from '../components/WeatherApp/WeatherApp.vue';

const routes = [
    {
        path: '/weather-app',
        name: WeatherAppVue,
        component: WeatherAppVue,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router