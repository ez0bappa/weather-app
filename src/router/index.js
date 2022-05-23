import { createRouter, createWebHistory } from "vue-router";
import WeatherAppVue from '../components/WeatherApp/WeatherApp.vue';

const routes = [
    {
        path: '/',
        name: 'weather-app',
        component: WeatherAppVue,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router