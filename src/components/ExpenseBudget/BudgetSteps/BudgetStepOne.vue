<template>
    <div class="budget-step-one mt-5">
        <div class="container">
            <div class="top-card">
              <CardInfo :monthlyExpenses="this.monthlyIncome" :totalExpenses="this.totalExpenses" :categoryLength="this.categoryWiseExpenses.length" />
            </div>
            <div class="row">
                <!-- One column -->
                <div class="col-xs-12 col-sm-12 shadow-box mb-4 text-white category-section mt-4">
                    <div class="box">
                        <div class="row">
                            <div class="header category-header">
                              <h4 class="text-uppercase mt-2" style="animation: fadeInLeft 3s backwards;">Budget App</h4><hr class="m-0">
                              <span class="add-new-category  mt-2">
                                <span v-on:click="enabledAddCategoryField = !enabledAddCategoryField" class="btn-shine">New Category</span>
                              </span>
                            </div>

                            <div class="codeblock-flexbox">
                              <div class="flexbox">
                                  <div class="leftside">
                                      <div class="row">
                                        <div class="col-6">
                                          <div class="form-floating mb-3">
                                              <input type="number" class="form-control monthly-income" v-model="monthlyIncome" placeholder="Total Income">
                                              <label for="floatingInput">Total Budget</label>
                                          </div>

                                          <div class="form-group">
                                            <div class="form-floating mb-3">
                                              <select class="form-control" v-model="selectedCategoryValue" @change="changeCategory($event)">
                                                  <option v-for="category in defaultCategories" v-bind:value="category.key" :key="category.key">
                                                      {{ category.key }}
                                                  </option>
                                              </select>
                                              <label for="floatingInput" >select category</label>
                                            </div>

                                            <div class="form-floating mb-3" v-if="enabledAddCategoryField" style="animation: fadeInRight 2s backwards;">
                                              <input type="text" v-model="addedNewCategory" class="form-control">
                                              <label for="floatingInput" >Add New category</label>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="col-6">
                                          <div class="form-floating mb-3">
                                            <input type="number" class="form-control" v-model="expenses">
                                            <label for="floatingInput">Expenditure</label>
                                          </div>

                                          <div class="form-floating mb-3">
                                            <input type="date" id="date_picker" class="form-control"  v-model="dateSelected">
                                            <label for="floatingInput">Date</label>
                                          </div>

                                          <div class="form-floating mb-3" v-if="addedNewCategory">
                                            <button 
                                              v-bind:disabled="addedNewCategory.length == 0"
                                              @click="addCategory"
                                              class="btn btn-outline-primary" 
                                              type="button">Add Category
                                            </button>
                                          </div>
                                        </div>

                                        <div class="col-12">
                                          <div class="d-grid gap-2">
                                            <button class="btn btn-outline-success btn-sm text-upercase" type="button" @click="addItem(this.selectedCategoryKey, this.selectedCategoryValue)">Add</button>
                                          </div>
                                        </div>

                                        <div class="col-12">
                                          <p v-if="formErrors.length" class="text-danger">
                                            <ul style="list-style-type:none;">
                                              <li v-for="e in formErrors" v-bind:key="e.id">
                                                <div class="form-error-message text-center">
                                                  <div class="generic" v-if="e.monthlyIncome">{{e.monthlyIncome}}</div>
                                                  <div class="generic" v-if="e.dateSelected">{{e.dateSelected}}</div>
                                                  <div class="generic" v-if="e.selectedCategoryValue">{{e.selectedCategoryValue}}</div>
                                                  <div class="generic" v-if="e.expenses">{{e.expenses}}</div>
                                                </div>
                                              </li>
                                            </ul>
                                          </p>
                                          <div class="d-grid gap-2 col-6 mx-auto" v-if="addedNewCategory.length > 0">
                                          </div>
                                        </div>
                                      </div>
                                  </div>
                                  <div class="rightside">
                                      <div class="row">
                                          <div class="col-12">
                                            <PercentageBar :percentage="percentage" :perValue="this.CategoryDateWiseData" :key="this.rerenderCount" />
                                          </div>
                                          <div class="col-6">
                                              <!-- Bappa -->
                                          </div>
                                      </div>
                                  </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-12 shadow-box budget-log-section">
                  <GenericChart :selectedTableValueData="this.expensesDataInTable" :key="this.rerenderCount" />
                  <!-- <form method="post">
                    <div class="box">
                      <div class="row">
                        <div class="header">
                            <h4 class="text-uppercase text-white mt-2">Budget Log</h4><hr class="m-0">
                            
                        </div>
                        <div class="py-0 ma-0 my-3 col-md-6 col-12">
                            
                        </div>
                        <div class="py-0 ma-0 my-3 col-md-6 col-12">
                          
                        </div>
                      </div>

                      <div class="row">
                        <div class="py-0 ma-0 my-3 col-md-6 col-12">
                          
                        </div>
                      </div>
                      
                      <div class="row">
                        
                      </div>
                    </div>
                  </form> -->
                </div>

                <!-- <div class="col-xs-12 col-sm-12 shadow-box ">
                  <div class="col-12">
                    <pre>You have {{ JSON.stringify(dateWiseExpenses, null, 2) }}</pre>
                    <PieChartVue :dateWiseExpenses="dateWiseExpenses" :categoryWiseExpenses="categoryWiseExpenses" :key="this.rerenderCount" />
                  </div>
                </div> -->

                <div class="category-date-wise-data mt-3">
                  <CategoryDateWiseData :dateWiseExpenses="dateWiseExpenses" :categoryWiseExpenses="categoryWiseExpenses" :key="this.rerenderCount" />
                </div>

                <!-- One column -->
                <div class="col-xs-12 col-sm-12 shadow-box mt-4 d-none">
                  <main class="flex">
                    <div class="flex-item" v-for="data in foodChartData" :key="data">
                    </div>
                  </main>
                </div>

                <!-- One column -->
                <div class="col-xs-12 col-sm-12 shadow-box mt-4 generic-table pb-3">
                  <h4 class="text-uppercase mt-3">Table section</h4><hr>
                  <!-- <h5><pre>You have {{ JSON.stringify(percentage, null, 2) }}% savings</pre></h5> -->

                  <table class="table caption-top">
                      <thead class="header">
                          <tr>
                            <th scope="col">#(ID)</th>
                            <th scope="col">category</th>
                            <th scope="col">Date</th>
                            <th scope="col">Expenditure</th>
                          </tr>
                      </thead>
                      <tbody style="font-size: 17px;">
                          <tr v-for="(item, index) in expensesDataInTable" :key="index">
                              <th scope="row">{{ index + 1 }}</th>
                              <td>{{ item.category }}</td>
                              <td>{{ item.date }}</td>
                              <td>{{ item.expenses }}</td>
                          </tr>
                      </tbody>
                  </table>
                  <div class="footer-data text-end">
                    total:
                    <strong><span 
                        :class="totalExpenses > this.totalBudget ? 'text-danger' : 'text-white'"
                        >{{totalExpenses}}/-</span></strong>
                  </div>
                  <!-- <Vue3EasyDataTable :Vue3EasyDataTable="this.expensesDataInTable" :key="this.rerenderCount" /> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import moment from 'moment'
  import { useToast } from "vue-toastification"
  import CategoryDateWiseData from '../../ExpenseBudget/BudgetTabledata/CategoryDateWiseData.vue'
  import CardInfo from '../BudgetSteps/CardInfo.vue'
  import PercentageBar from '../BudgetSteps/PercentageBar.vue'
  import Vue3EasyDataTable from '../BudgetTabledata/Vue3EasyDataTable.vue'
  import GenericChart from '../ChartGraphs/GenericChart.vue'
  import PieChartVue from '../ChartGraphs/PieChart.vue'
  export default {
    name: 'BudgetStepOne',
    data() {
      return {
        monthlyIncome: '',
        addedNewCategory: '',
        selectedCategoryValue: '',
        expensesDataInTable: [],
        dateSelected: moment().format('YYYY-MM-DD'),
        formErrors: [],
        expenses: '',
        rerenderCount: 0,
        categoryData: [],
        defaultCategories: [
          { key: 'travelling', value: 'Travelling'},
          { key: 'food', value: 'Food'},
          { key: 'pocket-money', value: 'Pocket Money'},
          { key: 'room-expenses', value: 'Room Expenses'},
        ],
        toast: useToast(),
        enabledAddCategoryField: false
      }
    },
    components: {
      GenericChart,
      PieChartVue,
      Vue3EasyDataTable,
      CategoryDateWiseData,
      CardInfo,
      PercentageBar
    },
    methods: {
      addCategory: function() {
        let result = this.defaultCategories.filter(item => {
          return item.key === this.addedNewCategory.replace(/\s+/g, '-').toLowerCase()
        })

        if(result.length == 0) {
          this.defaultCategories.push({key: this.addedNewCategory.replace(/\s+/g, '-').toLowerCase(), value: this.addedNewCategory})
          this.toast.success('Category Added successfully...', {
              timeout: 2000
          });
          this.addedNewCategory = ''
        } else {
          this.toast.warning('Category Already exists!', {
              timeout: 2000
          });
        }
        this.enabledAddCategoryField = false
      },
      changeCategory(event) {
        this.selectedCategoryValue = event.target.options[event.target.options.selectedIndex].text
        this.selectedCategoryKey = event.target.value
      },
      addItem(key, value) {
        this.formErrors = [];
        if(!this.monthlyIncome) {
          this.formErrors.push({monthlyIncome: 'Please enter you Total budget'})
        } else if(!this.dateSelected) {
          this.formErrors.push({dateSelected: 'Please select date'})
        } else if(!this.selectedCategoryValue || this.selectedCategoryValue == null || this.selectedCategoryValue == undefined) {
          this.formErrors.push({selectedCategoryValue: 'Please select any category'})
        } else if(!this.expenses) {
          this.formErrors.push({expenses: 'Please enter your expences for this category'})
        } else {
          // Insert data into the base table
          if(this.expensesDataInTable) {
            let result = this.expensesDataInTable.filter(item => {
              return item.date === this.dateSelected && item.category === this.selectedCategoryValue
            })

            if(result.length == 0) {
              this.expensesDataInTable.push({'key':this.selectedCategoryValue.replace(/\s+/g, '-').toLowerCase(), 'date': this.dateSelected, 'category': this.selectedCategoryValue, 'expenses': this.expenses})
            } else {
              let index = this.expensesDataInTable.findIndex((removeItem) => {
                return removeItem.date === result[0].date && removeItem.category === result[0].category;
              });
              this.expensesDataInTable.splice(index, 1)
              this.expensesDataInTable.push({'key':this.selectedCategoryValue.replace(/\s+/g, '-').toLowerCase(), 'date': this.dateSelected, 'category': this.selectedCategoryValue, 'expenses': Number(this.expenses) + Number(result[0].expenses) })
            }
          }

          this.rerenderCount++
        }
        
      },
      removeItem(selData) {
        if (confirm('Sure to delete')) {
          this.expensesDataInTable = this.expensesDataInTable.filter((item) => {
            console.log(item.key != selData.key)
          })
          alert('Deleted successfully...')
        }
        this.rerenderCount++
      },
    },
    computed: {
      totalExpenses() { 
        // console.log(this.expensesDataInTable) 
        let total = 0;  
          for(let p of this.expensesDataInTable) {
            total += p.expenses;                          // p.expenses * p.quantity   (if also quantity exists)
          }  
        return total;
      },
      foodChartData() {
        var obj = this.expensesDataInTable.reduce(function(r, e) {
          // console.log(r, "::" ,e)
          if (!r[e.key]) r[e.key] = e
          else r[e.key] = Array.isArray(r[e.key]) ? r[e.key].concat(e) : [r[e.key]].concat(e)
          return r;
        }, {})

        var result = Object.keys(obj).map(e => obj[e])

        return result.flat()
      },
      dateWiseExpenses() {
        const res = Array.from(this.expensesDataInTable.reduce((m, {date, expenses}) => m.set(date, (m.get(date) || 0) + expenses), new Map), ([date, expenses]) => ({date, expenses}));
        // let totalExpenses = res.reduce((a, {expenses}) => a + expenses, 0);
        // console.log(totalExpenses)
        return res
      },
      categoryWiseExpenses() {
        const res = Array.from(this.expensesDataInTable.reduce((m, {category, expenses}) => m.set(category, (m.get(category) || 0) + expenses), new Map), ([category, expenses]) => ({category, expenses}));
        return res
      },
      percentage() {
        const result = Math.round((this.monthlyIncome - this.totalExpenses)/this.monthlyIncome * 100)
        return (isNaN(result) || !result)  ? '0' : result

        // return (this.monthlyIncome - this.totalExpenses)
      }
    }
  }
</script>

<style scoped>
/* * {
  font-family: monospace;
} */
.codeblock-flexbox {
  filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.3));
}
.footer-data.text-end {
  font-size: 17px;
  padding-right: 9%;
  border: none;
  background: rgb(173, 152, 165);
}
/* codeblock-flexbox */
.leftside {
  background: #000599;
}
.rightside {
  background: #006999;
}
.leftside, .rightside {
  color: #161515b3;
  padding: 2%;
  text-align: left;
}
@media ( min-width : 600px ){
  body {
    background: linear-gradient(90deg, #000599 50%, #006999 50%);
  }
	.flexbox {
    width: 100%;
    margin: 0 auto;
    display: -webkit-flex;
    display: flex;
	}
  .leftside, .rightside {
    -webkit-flex: 1;
    flex: 1;
    background: none;
  }
}
/* General */

.generic-table {
    /* background: #e9c7d2; */
    box-shadow: 5px 5px 5px 0px rgb(0 0 0 / 30%);
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.3));
}

th {
  cursor:pointer;
}
.chart-section {
    background: #22b8b833;
}
.category-section {
    background: #18b7b733;;
}
.budget-log-section {
    background: #72767633;
}
.gallery {
  /* background: #1d88c2; */
}
.error-box {
  border: 2px solid red;
}
.gallery .tile .post {
  background: #1d88c2 !important;
}
.shadow-box{
    box-shadow: 1px 3px 5px rgb(0 0 0 / 33%);
}
.header.category-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #9c8888;
  padding: 10px 30px;
}

/* Pie graphs section start */
/* This is manually added */
.gallery {
  max-width: 100% !important;        
}
.gallery *, .gallery *:before, .gallery *:after{
  -moz-box-sizing:border-box;
  -webkit-box-sizing:border-box;
  box-sizing:border-box;
}
div{
  font-family:Georgia,TimesNewRoman,'Times New Roman',Times,serif;
  font-size:14px;
  line-height:18px;
}
.gallery{
  display:block;
  width:100%;
  margin:0 auto;
  overflow:hidden;
  max-width:960px;
}
.gallery .tile{
  display:block;
  width:100%;
  padding:0 0.5em 0.5em 0;
}
.gallery .tile .post{
  /* this is the content box; what follows is purely cosmetic */
  background-color:#003152;
  color:#f0f0f0;
  text-align:center;
  /* padding:6em 2em; */
}
.gallery .tile.wide .post{
  /* as above this is just cosmetic */
    background-color:#08457e;
    background-image:-webkit-gradient(linear,left bottom,right top,color-stop(1%,#08457e),color-stop(52%,#005f9e),
        color-stop(52%,#08457e),color-stop(100%,#007cc2));
    background-image:-webkit-linear-gradient(45deg,#08457e 1%,#005f9e 52%,#08457e 52%,#007cc2 100%);
    background-image:-moz-linear-gradient(45deg,#08457e 1%,#005f9e 52%,#08457e 52%,#007cc2 100%);
    background-image:-ms-linear-gradient(45deg,#08457e 1%,#005f9e 52%,#08457e 52%,#007cc2 100%);
    background-image:-o-linear-gradient(45deg,#08457e 1%,#005f9e 52%,#08457e 52%,#007cc2 100%);
    background-image:linear-gradient(45deg,#08457e 1%,#005f9e 52%,#08457e 52%,#007cc2 100%);
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#08457e',endColorstr='#007cc2',GradientType=1);
    color:#fff;
}
.gallery .tile.full .post{
  /* as above this is just cosmetic */
  background-color:#059029;
}
@media screen and (min-width:480px){
  .gallery .tile{
    width:50%;
    float:left;
  }
  .gallery .tile.wide,
  .gallery .tile.full{
    width:100%;
  }
}
@media screen and (min-width:720px){
  .gallery .tile{
    width:33.333%;
    float:left;
  }
  .gallery .tile.wide{
    width:66.667%;
  }
}
@media screen and (min-width:960px){
  .gallery .tile{
    width:25%;
    float:left;
  }
  .gallery .tile.wide{
    width:50%;
  }
}
/* Pie graphs section end */
/* Flex design start */
.flex {
  display: flex;
  flex-flow: row wrap;
  /*justify-content: space-between;*/ /* space-around */
  align-content: center;
  align-items: baseline;
}
/* body */
.flex-item {
  width: 100%;
  /* height: 300px; */
}
.flex-item:nth-of-type(2n-1) {
  background-color: #0eadca;
}
.flex-item:nth-of-type(2n) {
  background-color: #c5f7c5;
}
@media (min-width: 768px) {
  .flex-item {
    /*margin: 15px;*/
    flex: 1 1 0;
    /* using flex-sizing above or width below produces the same results */
    /*width: 33.3%;*/
    height: 275px;
  }
}
/* Flex design end */

/* Shine button design start */
.btn-shine {
  cursor: pointer;
  transform: translate(-50%, -50%);
  padding: 12px 48px;
  color: #fff;
  background: linear-gradient(to right, #4d4d4d 0, #fff 10%, #4d4d4d 20%);
  background-position: 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s infinite linear;
  animation-fill-mode: forwards;
  -webkit-text-size-adjust: none;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  white-space: nowrap;
}
@-moz-keyframes shine {
  0% {
    background-position: 0;
  }
  60% {
    background-position: 180px;
  }
  100% {
    background-position: 180px;
  }
}
@-webkit-keyframes shine {
  0% {
    background-position: 0;
  }
  60% {
    background-position: 180px;
  }
  100% {
    background-position: 180px;
  }
}
@-o-keyframes shine {
  0% {
    background-position: 0;
  }
  60% {
    background-position: 180px;
  }
  100% {
    background-position: 180px;
  }
}
@keyframes shine {
  0% {
    background-position: 0;
  }
  60% {
    background-position: 180px;
  }
  100% {
    background-position: 180px;
  }
}

/* Shine button design end */
</style>