<template>
    <div class="budget-step-one">
        <div class="container">
            <div class="row">
                <!-- One column -->
                <div class="col-xs-12 col-sm-12 shadow-box mb-4">
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
                                                    <input type="number" class="form-control" v-model="monthlyIncome" placeholder="Total Income">
                                                    <label for="floatingInput">Total Budget</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="rightside">
                                        <div class="row">
                                            
                                            <div class="col-6">
                                                <div class="form-floating mb-3">
                                                    <input type="text" v-model="addedNewCategory" class="form-control" placeholder="Total Income">
                                                    <label for="floatingInput" >Add category</label>
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
                                                        class="btn btn-primary" 
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
                <div class="col-xs-12 col-sm-6 shadow-box p-4">
                    <form method="post">
                        <div class="box">
                            <div class="row">
                                <div class="header">
                                    <h4 class="text-uppercase">Budget Log</h4><hr>
                                </div>
                                <div class="py-0 ma-0 my-3 col-md-6 col-12">
                                    <div class="form-group input-material">
                                        <div class="form-floating mb-3" data-v-27795828="">
                                            <select class="form-control" v-model="selectedCategoryValue" @change="changeCategory($event)">
                                                <option v-for="category in defaultCategories" v-bind:value="category.key" :key="category.key">
                                                    {{ category.value }}
                                                </option>
                                            </select>
                                            <label for="">Choose your expenses</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="py-0 ma-0 my-3 col-md-6 col-12">
                                    <div class="form-floating mb-3">
                                        <input type="date" class="form-control"  v-model="dateSelected">
                                        <label for="floatingInput">Date</label>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="py-0 ma-0 my-3 col-md-6 col-12">
                                    <div class="form-floating mb-3">
                                        <input type="number" class="form-control"  placeholder="Total Income" v-model="expenses">
                                        <label for="floatingInput">Expenditure</label>
                                    </div>
                                </div>
                                <div class="py-0 ma-0 my-3 col-md-6 col-12">
                                    <div class="form-floating mb-3">
                                        <input type="number" class="form-control"  placeholder="Total Income">
                                        <label for="floatingInput">Amount spend</label>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="d-grid gap-2">
                                    <button class="btn btn-primary text-upercase" type="button" @click="addItem(this.selectedCategoryKey, this.selectedCategoryValue)">Add</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                    
                <div class="col-xs-12 col-sm-6 shadow-box p-4">
                    <div class="box">
                        <div class="row">
                            <div class="header">
                                <h4 class="text-uppercase">Chart</h4><hr>
                            </div>
                            <div class="py-0 ma-0 my-3 col-md-12 col-12">
                                <GenericChart :selectedTableValueData="this.expensesDataInTable" :key="this.rerenderCount" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- One column -->
                <div class="col-xs-12 col-sm-12 shadow-box mt-4">
                    <h4 class="text-uppercase">Pie graphs</h4>
                    <div class="gallery">
                      <div class="tile">
                        <div class="post">
                          <DoughnutVue />
                          <!-- <PieChartVue :selectedTableValueData="this.expensesDataInTable" :monthlyIncome="this.monthlyIncome" :key="this.rerenderCount" /> -->
                        </div>
                      </div>
                      <div class="tile">
                        <div class="post">
                          <DoughnutVue />
                          <!-- <PieChartVue :selectedTableValueData="this.expensesDataInTable" :key="this.rerenderCount" /> -->
                        </div>
                      </div>
                      <div class="tile">
                        <div class="post">
                          <DoughnutVue />
                          <!-- <PieChartVue :selectedTableValueData="this.expensesDataInTable" :key="this.rerenderCount" /> -->
                        </div>
                      </div>
                      <div class="tile">
                        <div class="post">
                          <DoughnutVue />
                          <!-- <PieChartVue :selectedTableValueData="this.expensesDataInTable" :key="this.rerenderCount" /> -->
                        </div>
                      </div>
                    </div>
                </div>

                <!-- One column -->
                <div class="col-xs-12 col-sm-12 shadow-box mt-4">
                    <h4 class="text-uppercase">Table section</h4>
                    <table class="table caption-top">
                        <caption class="list-user-caption text-end">List of users</caption>
                        <thead>
                            <tr>
                              <th scope="col">#(ID)</th>
                              <th scope="col">category</th>
                              <th scope="col">Date</th>
                              <th scope="col">Expenditure</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in expensesDataInTable" :key="index">
                            <!-- <pre>{{ JSON.stringify(item, null, 2) }}</pre> -->
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
                          :class="totalExpenses > this.totalBudget ? 'text-danger' : 'text-primary'"
                          >{{totalExpenses}}/-</span></strong> 
                      <!-- out of 
                      <strong><span>{{this.monthlyIncome}}/-</span></strong> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import GenericChart from '../ChartGraphs/GenericChart.vue'
    import PieChartVue from '../ChartGraphs/PieChart.vue'
    import DoughnutVue from '../ChartGraphs/Doughnut.vue'

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
                expenses: 10000,
                rerenderCount: 0,
                defaultCategories: [
                    { key: 'travelling', value: 'Travelling'},
                    { key: 'food', value: 'Food'},
                    { key: 'pocket-money', value: 'Pocket Money'},
                    { key: 'room-expenses', value: 'Room Expenses'},
                ],
            }
        },
        components: {
          GenericChart,
          PieChartVue,
          DoughnutVue
        },
        methods: {
            // addCategory: function() {
            //     // console.log('Key:', this.addedNewCategory.replace(/\s+/g, '-').toLowerCase())
            //     // console.log('Value: ', this.addedNewCategory)
            //     console.log('defaultCategories:', this.defaultCategories)

            //     // var ifKeyExists = this.defaultCategories.some(key => key === this.addedNewCategory.replace(/\s+/g, '-').toLowerCase())
            //     // console.log(ifKeyExists)

            //     var arr = this.defaultCategories
            //     var key = 'food'
            //     var result = arr.some(o =>key in o)
            //     console.log(result)


            //     this.defaultCategories.push({key: this.addedNewCategory.replace(/\s+/g, '-').toLowerCase(), value: this.addedNewCategory})
            //     this.addedNewCategory = ''
            // },
            changeCategory(event) {
                this.selectedCategoryValue = event.target.options[event.target.options.selectedIndex].text
                this.selectedCategoryKey = event.target.value
            },
            addItem(key, value) {

              let checkItem = [{
                  key,
                  category: value,
                  date: this.dateSelected,
                  expenses: this.expenses
              }]

              if(this.expensesDataInTable) {
                let checkItemByKey = this.expensesDataInTable.filter(item => item.key === key)
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
        computed: {
          totalExpenses() {  
            let total = 0;  
              for(let p of this.expensesDataInTable) {
                total += p.expenses;        // p.expenses * p.quantity   (if also quantity exists)
              }  
              return total;
            }

          // totalExpenses() {
          //   let total = 0
          //   return this.expensesDataInTable.reduce((total, next) => {
          //       console.log('total', total + next)
          //       return total + (next.price * next.quantity)
          //   }, 0) 
          // }
        }
    }
</script>

<style scoped>

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
.shadow-box{
    box-shadow: 1px 3px 5px rgb(0 0 0 / 33%);
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
</style>