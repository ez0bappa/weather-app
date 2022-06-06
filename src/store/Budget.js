import { defineStore } from 'pinia'

export const useBudgetStore = defineStore({
  id: 'budget',
  state: () => ({
    monthlyIncome: 0
  }),
  getters: {
    getMonthlyIncome: (state) => state.monthlyIncome
  },
  actions: {
    // increment() {
    //   this.counter++
    // }
  }
})