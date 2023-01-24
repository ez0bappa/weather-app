import { createRouter, createWebHistory } from "vue-router";
import WeatherAppVue from '../components/WeatherApp/WeatherApp.vue';
import oldBudget from '../components/Calculator/Home.vue'
import ExpenseBudget from '../components/ExpenseBudget/Home.vue';
import BudgetStepOne from '../components/ExpenseBudget/BudgetSteps/BudgetStepOne.vue';
import BootstrapTable from '../components/ExpenseBudget/BudgetTabledata/Vue3EasyDataTable.vue';

const routes = [
    {
        path: '/',
        redirect: "/budget-manager",
    },
    {
        path: '/weather-app',
        name: WeatherAppVue,
        component: WeatherAppVue,
    },
    // {
    //     path: '/calculator',
    //     name: oldBudget,
    //     component: oldBudget,
    // },
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
            {
                path: '/budget-dashboard',
                name: 'BootstrapTable',
                component: BootstrapTable,
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router