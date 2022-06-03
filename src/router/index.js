import { createRouter, createWebHistory } from "vue-router";
import WeatherAppVue from '../components/WeatherApp/WeatherApp.vue';
import ExpenseBudget from '../components/ExpenseBudget/Home.vue';
import BudgetStepOne from '../components/ExpenseBudget/BudgetSteps/BudgetStepOne.vue';

const routes = [
    {
        path: '/weather-app',
        name: WeatherAppVue,
        component: WeatherAppVue,
    },
    {
        path: '/calculator',
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