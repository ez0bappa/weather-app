import { createRouter, createWebHistory } from "vue-router";
import WeatherAppVue from '../components/WeatherApp/WeatherApp.vue';
import Calculator from '../components/Calculator/Home.vue';

const routes = [
    {
        path: '/weather-app',
        name: WeatherAppVue,
        component: WeatherAppVue,
    },
    {
        path: '/calculator',
        name: Calculator,
        component: Calculator,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router