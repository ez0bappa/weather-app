import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue'
import WeatherAppVue from '../components/WeatherApp/WeatherApp.vue';
import oldBudget from '../components/Calculator/Home.vue'
import ExpenseBudget from '../components/ExpenseBudget/Home.vue';
import BudgetStepOne from '../components/ExpenseBudget/BudgetSteps/BudgetStepOne.vue';

const routes = [
    {
        path: '/',
        name: Home,
        component: Home,
    },
    {
        path: '/weather-app',
        name: WeatherAppVue,
        component: WeatherAppVue,
    },
    {
        path: '/calculator',
        name: oldBudget,
        component: oldBudget,
    },
    {
        path: '/budget-app',
        name: ExpenseBudget,
        component: ExpenseBudget,
        children: [
            {
                path: '/budget-manager',
                name: 'BudgetStepOne',
                component: BudgetStepOne,
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router