<template>
    <div>
        <div id="root">
            <div class="container pt-2">
                <div class="row align-items-stretch">
                    <div class="c-dashboardInfo col-lg-3 col-md-6" style="animation: fadeInLeft 2s backwards;">
                        <div class="wrap">
                          <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Monthly Income (*)
                            <!-- <svg class="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path
                                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
                              </path>
                            </svg> -->
                          </h4>
                            <span class="hind-font caption-12 c-dashboardInfo__count" style="animation: fadeInLeft 0.7s backwards;">
                              ₹ {{ this.monthlyExpenses }}
                            </span>
                        </div>
                    </div>
                    <div class="c-dashboardInfo col-lg-3 col-md-6" style="animation: fadeInLeft 2s backwards;">
                        <div class="wrap">
                        <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Total Expenses (*)
                        </h4><span class="hind-font caption-12 c-dashboardInfo__count" style="animation: fadeInLeft 0.7s backwards;">₹ {{ this.totalExpenses }}</span>
                        </div>
                    </div>
                    <div class="c-dashboardInfo col-lg-3 col-md-6" style="animation: fadeInRight 4s backwards;">
                        <div class="wrap">
                        <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Categories selected (*)
                        </h4><span class="hind-font caption-12 c-dashboardInfo__count" style="animation: fadeInLeft 0.7s backwards;">{{ categoryLength }}</span>
                        </div>
                    </div>
                    <div class="c-dashboardInfo col-lg-3 col-md-6" style="animation: fadeInRight 4s backwards;">
                        <div class="wrap" :style="{'background-color': checkOverAllSavingTextColor ? this.cardBgColor : 'white'}"> 
                          <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title" :style="{'color': checkOverAllSavingTextColor ? '#f5f0f0' : '#6c6c6c'}">
                            {{ checkOverAllSavingTextColor ? `You'r run out of` : 'Overall savings (*)' }}
                          </h4>
                          <span class="hind-font caption-12 c-dashboardInfo__count" :style="{'color': checkOverAllSavingTextColor ? '#f1e9e9c7' : '#212529'}" style="animation: fadeInLeft 0.7s backwards;">₹ {{ this.monthlyExpenses - this.totalExpenses  }}</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </div>
</template>

<script>
    export default {
        name: 'CardInfo',
        props: {
            monthlyExpenses: Number,
            totalExpenses: Number,
            categoryLength: Number
        },
        data() {
          return {
            cardBgColor: '#ffffff'
          }
        },
        computed: {
          checkOverAllSavingTextColor() {
            let result = (this.monthlyExpenses - this.totalExpenses) < 0

            if((this.monthlyExpenses - this.totalExpenses) < 0 || (this.monthlyExpenses - this.totalExpenses) == 0) {
              console.log('red')
              this.cardBgColor = 'red'
            } else if((this.monthlyExpenses - this.totalExpenses) > 0 && (this.monthlyExpenses - this.totalExpenses) < 50) {
              console.log('yellow')
              this.cardBgColor = 'yellow'
            } else if((this.monthlyExpenses - this.totalExpenses) > 50 && (this.monthlyExpenses - this.totalExpenses) < 100) {
              console.log('green')
              this.cardBgColor = 'green'
            }

            return result
          }
        }
    }
</script>

<style scoped>
.c-dashboardInfo {
  margin-bottom: 15px;
}
.c-dashboardInfo .wrap {
  background: #ffffff;
  box-shadow: 2px 15px 20px rgb(0 0 0 / 29%);
  border-radius: 7px;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 40px 25px 20px;
  height: 100%;
}
.c-dashboardInfo__title,
.c-dashboardInfo__subInfo {
  color: #6c6c6c;
  font-size: 1.18em;
}
.c-dashboardInfo span {
  display: block;
}
.c-dashboardInfo__count {
  font-weight: 600;
  font-size: 2.5em;
  line-height: 64px;
  color: #323c43;
}
.c-dashboardInfo .wrap:after {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10px;
  content: "";
}

.c-dashboardInfo:nth-child(1) .wrap:after {
  background: linear-gradient(82.59deg, #00c48c 0%, #00a173 100%);
}
.c-dashboardInfo:nth-child(2) .wrap:after {
  background: linear-gradient(81.67deg, #0084f4 0%, #1a4da2 100%);
}
.c-dashboardInfo:nth-child(3) .wrap:after {
  background: linear-gradient(69.83deg, #0084f4 0%, #00c48c 100%);
}
.c-dashboardInfo:nth-child(4) .wrap:after {
  background: linear-gradient(81.67deg, #ff647c 0%, #1f5dc5 100%);
}
.c-dashboardInfo__title svg {
  color: #d7d7d7;
  margin-left: 5px;
}
.MuiSvgIcon-root-19 {
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 24px;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  user-select: none;
  flex-shrink: 0;
}

</style>