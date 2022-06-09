<template>
    <div>
        <div class="container">
            <!-- <h1 class="pen-title">
                You have <br />
                Progress
            </h1> -->
            <div class="progress-wrapper">
                <div class="progress-details">
                <p class="percentage">
                    {{ this.percentage }}%
                    <!-- {{ this.percentage > 0 ? this.percentage : '100' }}% -->
                </p>
                <span class='description mt-2'>
                    Savings
                </span>
                </div>
                <svg class="progress" :style="{'background-color': bgColor ? bgColor : '#3bea077a'}">
                <circle class="base-circle" />
                <circle class="progress-circle" />
                </svg>
            </div>
            <!-- <h1 class="pen-title">
                Savings
            </h1> -->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PercentageBar',
        props: {
            percentage: Number,
            perValue: Array
        },
        data() {
            return{
                bgColor: '#13c61394'
            }
        },
        mounted() {
          if(this.percentage == 100) {
            this.bgColor = 'green'
          } else if(this.percentage < 100 && this.percentage > 50) {
            this.bgColor = '#ebeb27b0'
          } else if(this.percentage < 50) {
            this.bgColor = '#ef071cb0'
          }
        },
    }
</script>

<style scoped>
html {
  box-sizing: border-box;
  font-size: 62.5%;
}

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  padding: 0 1.5rem;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f1f1f1;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container .pen-title {
  font-size: 34px;
  margin-right: 1rem;
}

.progress-wrapper {
  height: 200;
  width: 200;
  position: relative;
}
.progress-wrapper .progress-details {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: Helvetica, Arial, sans-serif;
}
.progress-wrapper .progress-details .percentage {
  font-size: 40px;
}
.progress-wrapper .progress-details .description {
  font-size: 1.5rem;
  color: #777777;
}

.progress {
  height: 200px;
  width: 200px;
}
.progress .base-circle {
  stroke: #e1e4e8;
  fill: transparent;
  stroke-width: 12;
  r: 76;
  cx: 100;
  cy: 100;
}
.progress .progress-circle {
  stroke: #12a7b5;
  fill: transparent;
  stroke-width: 12;
  stroke-linecap: round;
  r: 76;
  cx: 100;
  cy: 100;
  stroke-dasharray: 477.5220828;
  stroke-dashoffset: 310.38935382;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

p.percentage {
  color: white;
  margin-bottom: 10px;
}
</style>