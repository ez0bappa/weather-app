<template>
    <div class="budget-step-one mt-5">
        <div class="container">
            <div class="row">
                <!-- One column -->
                <div class="col-xs-12 col-sm-12 shadow-box mb-4 text-white category-section">
                    <div class="box">
                        <div class="row">
                            <div class="header">
                                <h4 class="text-uppercase">category</h4><hr>
                            </div>

                            <div class="codepen1-flexbox">
                                <div class="flexbox">
                                    <div class="leftside">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="form-floating mb-3">
                                                    <input type="number" class="form-control monthly-income" v-model="monthlyIncome" placeholder="Total Income">
                                                    <label for="floatingInput">Total Budget</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="rightside">
                                        <div class="row">
                                            
                                            <div class="col-6">
                                                <div class="form-floating mb-3">
                                                    <input type="text" v-model="addedNewCategory" class="form-control">
                                                    <label for="floatingInput" >Add New category</label>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-floating mb-3">
                                                    <input class="form-control input-lg" type="text" id="category" placeholder="category" :value="selectedCategoryValue" readonly />
                                                    <label for="floatingInput" >your selected category</label>
                                                </div>
                                                <div class="d-grid gap-2 col-6 mx-auto" v-if="addedNewCategory.length > 0">
                                                    <button 
                                                        v-bind:disabled="addedNewCategory.length == 0"
                                                        @click="addCategory"
                                                        class="btn btn-outline-primary btn-sm" 
                                                        type="button">Add Category
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Two column -->
                <div class="col-xs-12 col-sm-6 shadow-box p-4 budget-log-section">
                    <form method="post">
                        <div class="box">
                            <div class="row">
                                <div class="header">
                                    <h4 class="text-uppercase text-white">Budget Log</h4><hr>
                                    <p v-if="formErrors.length" class="text-danger">
                                      <!-- <b>Please correct the error</b> -->
                                      <ul style="list-style-type:none;">
                                        <li v-for="e in formErrors" v-bind:key="e.id">
                                          <div class="form-error-message">
                                            <!-- {{ e }} -->
                                            <div class="generic" v-if="e.monthlyIncome">{{e.monthlyIncome}}</div>
                                            <div class="generic" v-if="e.dateSelected">{{e.dateSelected}}</div>
                                            <div class="generic" v-if="e.selectedCategoryValue">{{e.selectedCategoryValue}}</div>
                                            <div class="generic" v-if="e.expenses">{{e.expenses}}</div>
                                          </div>
                                        </li>
                                      </ul>
                                    </p>
                                </div>
                                <div class="py-0 ma-0 my-3 col-md-6 col-12">
                                    <div class="form-group input-material">
                                        <div class="form-floating mb-3">
                                          <select class="form-control" v-model="selectedCategoryValue" @change="changeCategory($event)">
                                              <option v-for="category in defaultCategories" v-bind:value="category.key" :key="category.key">
                                                  {{ category.value }}
                                              </option>
                                          </select>

                                          <!-- <select class="form-control" v-model="selectedCategoryValue" @change="changeCategory($event)">
                                            <option v-for="option in defaultCategories" v-bind:key="option">
                                              {{ option.value }}
                                            </option>
                                            </select>
                                            <label for="">Choose your expenses</label> -->
                                        </div>
                                    </div>
                                </div>
                                <div class="py-0 ma-0 my-3 col-md-6 col-12">
                                  <div class="form-floating mb-3">
                                    <input type="date" id="date_picker" class="form-control"  v-model="dateSelected">
                                    <label for="floatingInput">Date</label>
                                  </div>
                                </div>
                            </div>

                            <div class="row">
                              <div class="py-0 ma-0 my-3 col-md-6 col-12">
                                <div class="form-floating mb-3">
                                  <input type="number" class="form-control" v-model="expenses">
                                  <label for="floatingInput">Expenditure</label>
                                </div>
                              </div>
                            </div>
                            
                            <div class="row">
                                <div class="d-grid gap-2">
                                  <button class="btn btn-outline-success btn-sm text-upercase" type="button" @click="addItem(this.selectedCategoryKey, this.selectedCategoryValue)">Add</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                    
                <div class="col-xs-12 col-sm-6 shadow-box p-4 text-white chart-section">
                  <div class="box">
                    <div class="row">
                      <div class="header">
                        <h4 class="text-uppercase">Data Chart</h4><hr>
                      </div>
                      <div class="py-0 ma-0 my-3 col-md-12 col-12">
                        <GenericChart :selectedTableValueData="this.expensesDataInTable" :key="this.rerenderCount" />
                      </div>
                    </div>
                  </div>
                </div>

                <!-- One column -->
                <div class="col-xs-12 col-sm-12 shadow-box mt-4">
                  <main class="flex">
                    <div class="flex-item">
                      <PieChartVue />
                    </div>
                  </main>
                </div>

                <!-- One column -->
                <div class="col-xs-12 col-sm-12 shadow-box mt-4">
                    <h4 class="text-uppercase">Table section</h4>
                    <table class="table caption-top">
                        <caption class="list-user-caption text-end">List of expenses</caption>
                        <thead>
                            <tr>
                              <th scope="col">#(ID)</th>
                              <th scope="col">category</th>
                              <th scope="col">Date</th>
                              <th scope="col">Expenditure</th>
                              <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in expensesDataInTable" :key="index">
                                <th scope="row">{{ index + 1 }}</th>
                                <td>{{ item.category }}</td>
                                <td>{{ item.date }}</td>
                                <td>{{ item.expenses }}</td>
                                <td>
                                  <button @click="editItem(item)" class="btn btn-secondary btn-sm me-1" style="background: #5f9ea0;">
                                      <i class="fa fa-pencil"></i>
                                    </button>
                                    <button @click="removeItem(item)" class="btn btn-warning btn-sm ms-1" style="background: #ffb49a">
                                      <i class="fa fa-trash-o" aria-hidden="true"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="footer-data text-end">
                      total:
                      <strong><span 
                          :class="totalExpenses > this.totalBudget ? 'text-danger' : 'text-primary'"
                          >{{totalExpenses}}/-</span></strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { useToast } from "vue-toastification"
    import GenericChart from '../ChartGraphs/GenericChart.vue'
    import PieChartVue from '../ChartGraphs/PieChart.vue'
    export default {
        name: 'BudgetStepOne',
        data() {
            return {
                monthlyIncome: 2000,
                addedNewCategory: '',
                selectedCategoryValue: '',
                expensesDataInTable: [],
                dateSelected: '',
                formErrors: [],
                expenses: '',
                rerenderCount: 0,
                defaultCategories: [
                  { key: 'travelling', value: 'Travelling'},
                  { key: 'food', value: 'Food'},
                  { key: 'pocket-money', value: 'Pocket Money'},
                  { key: 'room-expenses', value: 'Room Expenses'},
                ],
                toast: useToast()
            }
        },
        components: {
          GenericChart,
          PieChartVue,
        },
        methods: {
          addCategory: function() {
              // console.log('Key:', this.addedNewCategory.replace(/\s+/g, '-').toLowerCase())
              // console.log('Value: ', this.addedNewCategory)
              // console.log('defaultCategories:', this.defaultCategories)
              // var exists = this.addedNewCategory.filter(function (o) {
              //   return o.hasOwnProperty(this.addedNewCategory.replace(/\s+/g, '-').toLowerCase());
              // }).length > 0;
              // if (exists) {
              //     console.log('exists');
              // } else {
              //     console.log('does not exist');
              // }
              // var result = this.defaultCategories.some(o => this.addedNewCategory.replace(/\s+/g, '-').toLowerCase() in o)
          },
          changeCategory(event) {
            this.selectedCategoryValue = event.target.options[event.target.options.selectedIndex].text
            this.selectedCategoryKey = event.target.value
          },
          addItem(key, value) {
            console.log(this.expenses)
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
              let checkItem = [{
                key,
                category: value,
                date: this.dateSelected,
                expenses: this.expenses
              }]
              if(this.expensesDataInTable) {
                let checkItemByKey = this.expensesDataInTable.filter(item => item.key === key)
                let checkItemByDate = this.expensesDataInTable.filter(item => console.log(item))
                // console.
                let checkIsItemInTable = checkItemByKey.length > 0
                
                if(checkIsItemInTable === false) {
                  this.expensesDataInTable.push({'key':this.selectedCategoryValue.replace(/\s+/g, '-').toLowerCase(), 'category': this.selectedCategoryValue, 'expenses': this.expenses, 'date': this.dateSelected})
                  this.expenses = ''
                } else {
                  this.expensesDataInTable.filter(item => {
                    if(item.key === checkItem[0].key) {
                      item.expenses += checkItem[0].expenses
                    }
                  })
                }
              }
              this.rerenderCount++
            }
          },
          removeItem(selData) {
            if (confirm('Sure to delete')) {
              this.expensesDataInTable = this.expensesDataInTable.filter((item) => item.key != selData.key)
              this.toast.warning('Deleted successfully...', {
                timeout: 1000
              });
            }
            this.rerenderCount++
          },
        },
        computed: {
          totalExpenses() {  
            let total = 0;  
              for(let p of this.expensesDataInTable) {
                total += p.expenses;        // p.expenses * p.quantity   (if also quantity exists)
              }  
            return total;
          }
        }
    }
</script>

<style scoped>
* {
  font-family: monospace;
}
.footer-data.text-end {
    padding-right: 9%;
    border: none;
    background: rgb(173, 152, 165);
}
/* codepen1-flexbox */
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
th {
  cursor:pointer;
}
.chart-section {
    background: #5f9ea0d9;
}
.category-section {
    background: #008b8be6;
}
.budget-log-section {
    background: #8b45137a;
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
.header {
    background: linear-gradient(45deg, black, transparent);
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
    /* height: 200px; */
  }
}
/* Flex design end */
</style>