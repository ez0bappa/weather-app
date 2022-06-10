<template>
    <div class="container-fluid">
        <div class="row">
            <SearchBox @weatherApiData="gettingFromSearchBox" />
            <div class="col-md-4 order-md-2 mb-4 p-0" v-if="this.apiResponseData">
                <div class="container">
                    <div class="row">
                      <div class="header-section" style="font-family: fantasy;">
                        <h3 class="bg-secondary">Weather Forcast</h3>
                      </div>
                        
                        <div class="col">
                            <div class="left card-container" v-for="(data, index) in this.forecast.forecastday" :key="index">
                                <div class="flip-box">
                                    <div class="front">
                                    <pre>{{ JSON.stringify(forecastBgImage, null, 2) }}</pre>
                                        <div id="forcast-info">
                                            <span class="Symbol">
                                                <b class="Stat">{{ filterDate[index] }}</b>
                                                <b class="Label"></b><br>
                                            </span><br>
                                            <div class="row">
                                                <div class="col-6 text-start mt-2" style="font-size: 12px;">
                                                    <span class="Price"><b class="Label">Sunrise: </b> <b class="Stat">{{ data.astro.sunrise }}</b></span><br>
                                                    <span class="Change"><b class="Label">Sunset: </b> <b class="Stat">{{ data.astro.sunset }}</b> <b class="Stat"></b></span><br>
                                                    <span class="Price"><b class="Label">Moonrise: </b> <b class="Stat">{{ data.astro.moonrise }}</b></span><br>
                                                    <span class="Change"><b class="Label">Moonrset: </b> <b class="Stat">{{ data.astro.moonset }}</b><b class="Stat"></b></span>
                                                </div>
                                                <div class="col-6 text-end mt-2" style="font-size: 12px;">
                                                    <div class="temp-info">
                                                        <span class="Price"><b class="Label">Max. temp: </b> <b class="Stat">{{ data.day.maxtemp_c }}</b></span><br>
                                                    <span class="Change"><b class="Label">Min. temp: </b><b class="Stat">{{ data.day.mintemp_c }}</b> <b class="Stat"></b></span><br>
                                                    <span class="Price"><b class="Label">Avg. temp: </b> <b class="Stat">{{ data.day.avgtemp_c }}</b></span><br>
                                                    <span class="Change"><b class="Label">Chance of rain: </b> <b class="Stat">{{ data.day.daily_chance_of_rain }}%</b><b class="Stat"></b></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="back">
                                        <!-- <span class="Symbol">
                                            <b class="Stat">{{ data.date }}</b>
                                            <b class="Label"></b><br>
                                        </span><br> -->
                                        <div class="row">
                                            <div class="col-6 text-start mt-2" style="font-size: 12px;">
                                                <div class="d-flex justify-content-around funny-weather">
                                                    <img class="weather-condition" :src="this.apiResponseData ? data.day.condition.icon : ''" alt="weather-pic">
                                                    <p>{{ data.day.condition.text }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-8 order-md-1 p-0">
                <div class="weather-app2">
                    <div id="status">
                        <p>Welcome</p>
                        <button class="close"><i class="fa fa-times" aria-hidden="true"></i></button>
                    </div>
                    <!-- <div id="Testing">
                      Images Dev: <img :src="this.backgroundImage" />
                    </div> -->
                    <div id="current" class="wrapper" v-if="this.apiResponseData" :style="{backgroundImage:`url(${this.backgroundImage})`}">
                        <div class="time-info text-white">
                            {{ todayFilter.time }}
                        </div>
                        
                        <h1 class="location text-white block" v-if="this.apiResponseData">{{ this.location.name }}, {{ location.country }}</h1>
                        <h2 class="date text-white" v-if="this.apiResponseData">{{ todayFilter.todayIs }}, {{ todayFilter.time }}</h2>
                        <div class="weatherIcon text-white">
                            <div class="sunny">
                                <div class="inner" v-if="this.apiResponseData">
                                    <img class="weather-condition w-100" :src="this.apiResponseData ? this.current.condition.icon : ''" alt="weather-pic">
                                </div>
                            </div>
                        </div>
                        <p class="temp text-white">{{ this.current.temp_c ? this.current.temp_c : '' }}</p><span class="celcius-fahrenheit text-white">C</span>
                        <p class="conditions text-white" v-if="this.apiResponseData">Weather condition: {{ this.apiResponseData ? this.current.condition.text : '' }}</p>
                        <div class="globe-left me-4">
                            <div class="floating humidity" v-if="this.apiResponseData">
                                <p class="text-white">Humidity: {{ this.current.humidity }}</p>
                            </div>

                            <div class="floating recipitation text-white" v-if="this.apiResponseData">
                                <p>Wind Speed: {{ this.current.wind_kph }} KM.</p>
                            </div>
                        </div>
                        <div class="globe-info-box me-4 text-white">
                            <span class="me-2">Latitude: {{ this.location.lat }}</span><b></b>
                            <span class="region">Longitude: {{ this.location.lon }}</span>
                        </div>
                        <div class="globe-right me-4">
                            <span class="text-info me-2">{{ this.apiResponseData ? this.location.region : '' }}</span>
                            <span class="region" style="font-size: 15px;color: ivory;">{{ this.apiResponseData ? this.location.tz_id : '' }}</span>
                        </div>
                    </div>
                    <footer>
                        <p id="lastUpdated">Last updated at {{ this.apiResponseData ? this.current.last_updated : '' }}</p>
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SearchBox from './SearchBox.vue'
    
    export default {
        name: 'WeatherApp2',
        data() {
            return {
                show: true,
                apiResponseData: '',
                current: '',
                forecast: '',
                location: '',
                currentTemp: '',
                backgroundImage: ''
            }
        },
        components: {
            SearchBox
        },
        computed: {
            filterDate() {
                if (this.apiResponseData) {
                    let date = this.forecast.forecastday.map(item => {
                        const dayOfWeekName = new Date(item.date).toLocaleString(
                            'default', {weekday: 'long'}
                        )
                        return dayOfWeekName
                    })

                    return date
                }
            },
            todayFilter() {
                if (this.apiResponseData) {
                    let todayIs = this.apiResponseData.location.localtime.split(" ")
                    let date = todayIs[0]
                    let time = todayIs[1]


                    const dayOfWeekName = new Date(date).toLocaleString(
                        'default', {weekday: 'long'}
                    )

                    return ({
                        'todayIs': dayOfWeekName,
                        'date': date,
                        'time': time
                    })
                }
            },
            // forecastBgImage() {
            //   if (this.apiResponseData) {
            //         let bgImage = this.forecast.forecastday.map(item => {
            //           return item.day.condition.text
            //         })
            //         return bgImage
            //     }
            // }
        },
        methods: {
          randomItem (items) {
            return items[Math.floor(Math.random()*items.length)];
          },
          async gettingFromSearchBox(value) {
              this.apiResponseData = value[0]
              console.log(this.apiResponseData)
              this.current = this.apiResponseData.current
              this.forecast = this.apiResponseData.forecast
              this.location = this.apiResponseData.location

              // set Backgground image
              if(this.current.condition.text === 'Sunny') {
                this.backgroundImage = (await import(/* @vite-ignore */ `../../assets/images/weatherBackground/sunny1.jpg`)).default
              } else if(this.current.condition.text === 'Mist') {
                this.backgroundImage = (await import(/* @vite-ignore */ `../../assets/images/weatherBackground/mist2.jpeg`)).default
              } else if(this.current.condition.text === 'Partly cloudy' || this.current.condition.text === 'Cloudy') {
                this.backgroundImage = (await import(/* @vite-ignore */ `../../assets/images/weatherBackground/cloudy2.jpg`)).default
              } else if(this.current.condition.text === 'Patchy rain possible') {
                this.backgroundImage = (await import(/* @vite-ignore */ `../../assets/images/weatherBackground/rain2.jpg`)).default
              } else if(this.current.condition.text === 'Thundery outbreaks possible') {
                this.backgroundImage = (await import(/* @vite-ignore */ `../../assets/images/weatherBackground/thunder2.jpg`)).default
              }
          },

          cToF(celciusTemp) {
            var cToFahr = celciusTemp * 9 / 5 + 32;
            this.currentTemperature = cToFahr

            this.currentTemp = cToFahr
          },

          fToC(fahrenheitTemp) {
            var fToCel = (fahrenheitTemp - 32) * 5 / 9;

            this.currentTemp = fToCel
          }
        },
    }
</script>

<style scoped>

.weather-app2 {
    padding: 0% 0% 0% 5%;
}

#lastUpdated {
  color: #e71212;
  padding: 5% 0;
}
#lastUpdated:before {
  content: '-- ';
}
#lastUpdated:after {
  content: ' --';
}


/*----------------
  Status Bar
-----------------*/
#status {
  background-color: #FFECAE;
  color: rgba(0,0,0,0.5);
  display: none;
  font-size: 1rem;
  width: 100%;
  z-index: 100;
}
#status p {
  display: inline-block;
  padding: 10px 40px 6px;
}
#status a {
  color: #e71212;
}
#status .close {
  background: none;
  color: rgba(0,0,0,0.5);
  float: right;
  height: 40px;
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
}
#status.error {
  background-color: #EE9797;
}
#status.success {
  background-color: #82C886;
}
#status.error, #status.error .close,
#status.success, #status.success .close {
  color: #e71212;
}
#status.error .fa-exclamation-triangle,
#status.success .fa-check-circle {
  margin-right: 10px;
}

/*----------------
  Buttons
-----------------*/
button {
  border: none;
  cursor: pointer;
}
nav {
  font-size: 1rem;
  margin: 0 auto;
  padding: 5% 0 10%;
}
#locateBtn, #unitBtn {
  background: none;
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 50%;
  color: #ebe4e4;
  height: 40px;
  transition: background 1s ease-in-out, border 0.2s ease-in-out;
  width: 40px;
}
#locateBtn.on, #unitBtn.on {
  background: rgba(255,255,255,0.25);
}
#locateBtn:focus, #locateBtn:hover, #unitBtn:focus, #unitBtn:hover {
  border: 1px solid rgba(255,255,255,0.75);
}
#locateBtn {
  margin-right: 10px;
}
#unitBtn {
  font-weight: 300;
  padding-right: 3px;
  padding-top: 2px;
  text-transform: uppercase;
}
#unitBtn:before {
  content: '\00b0'; /* Degree symbol */
  padding: 1px;
}

#locateBtn.pulse {
  animation: pulse 2s infinite;
}
@keyframes pulse {
  20% { background: rgba(255,255,255,0.25); }
}

/*----------------
  Current Weather
-----------------*/
#current {
  /* background: linear-gradient(to bottom, #895acd, rgb(252 6 6 / 73%)); */
  padding: 10% 5% 20%;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.location {
  font-size: 2em;
  font-weight: 700;
  margin: 0;
}
.date {
  font-size: 1em;
  font-weight: 300;
  text-transform: uppercase;
}
#current .weatherIcon {
  height: 100px;
  margin: 10% auto 7%;
  width: 100px;
}
.temp {
  font-size: 3em;
  line-height: 1.3;
}
.temp:after {
  content: '\00b0';
  margin-right: -0.3em;
}
#current .conditions {
  font-size: 1.2em;
  text-transform: uppercase;
}

/*----------------
  Future Forecast
-----------------*/
#future {
  background: linear-gradient(to bottom, transparent, #8e8b8b) no-repeat bottom;
  margin-bottom: 10%;
  padding: 0 10%;
}
#future > .container {
  border-bottom: 1px solid rgba(255,255,255,0.25);
  margin: 0;
  padding: 5% 10%;
  width: 100%;
}
#future > .container:first-child {
  border-top: 1px solid rgba(255,255,255,0.25);
}
#future .day {
  padding: 0;
  text-align: left;
  text-transform: uppercase;
}
#future .weatherIcon {
  float: right;
  font-size: 0.5em;
  height: 50px;
  margin-left: 10%;
  margin-top: -5%;
  width: 50px;
}
#future p { text-align: left; }
.high:after, .low:after {
  content: '\00b0';
  padding: 1px;
}

/*----------------
  Media Queries
-----------------*/
@media (min-width: 375px) {
  nav {
    left: 5%;
    position: absolute;
    top: 10%;
  }
  #locateBtn, #unitBtn {
    display: block;
    margin-bottom: 10px;
  }
  #current { 
    padding-bottom: 15%;
    padding-top: 15%;
  }
}
@media (min-width: 550px) {
  nav { top: 8%; }
  /* Current Weather */
  #current { 
    font-size: 1.3rem;
    padding-bottom: 10%;
    padding-top: 10%;
  }
  .date, #current .conditions { font-size: 0.9em;}
  #current .weatherIcon {
    font-size: 0.95em;
    height: 120px;
    margin: 7% auto 3%;
    width: 120px;
  }
  /* Future Forecast */
  #future {
    font-size: 1.1rem;
    padding: 0;
    margin-bottom: 3%;
  }
  #future > .container {
    border-bottom: none;
    float: left;
    padding: 20px;
    width: 33.33%; 
  }
  #future > .container:first-child { border-top: none; }
  #future > .container:not(:last-child) { border-right: 1px solid rgba(255,255,255,0.25); }
  #future .day, #future p { text-align: center; }
  #future .weatherIcon {
    font-size: 0.56em;
    float: none;
    height: 60px;
    margin: 5% auto 5%;
    width: 60px;
  }
  footer { font-size: 0.9rem; }
}
@media (min-width: 880px) {
  nav { top: 5%; }
  #current {
    font-size: 1.5rem;
    padding-bottom: 7%;
    padding-top: 7%;
  }
  #current .weatherIcon {
    font-size: 0.82em;
    margin: 5% auto 2%;
  }
  #lastUpdated {
    padding: 3%;
  }
}

/* Flip design */
.card-container, .front, .back {
	width: 100%;
	height: 13rem;
}
.front, .back {
	box-sizing: border-box;
	padding: 2rem;
	border-radius: 4px;
	box-shadow: 0 1rem 2rem rgba(0, 0, 0, .25);

	/* font-size: 2rem; */
	color: #fff;
	text-transform: uppercase;
	text-align: center;
}
/* front side bg is green gradient */ .front {
	background-image: linear-gradient(to right bottom, #2ecc71, #229955);
}
/* back side bg is orange gradient */ .back {
	background-image: linear-gradient(to right bottom, #f1c40f, #e67e22);
}

.card-container {
	position: relative;
}
.front, .back {
	position: absolute;
	top: 0;
	left: 0;
	backface-visibility: hidden;
	overflow: hidden;
	transition: transform .8s ease;
}
.back {
	transform: rotateY(180deg);
}
.card-container:hover .front {
	transform: rotateY(-180deg);
}
.card-container:hover .back {
	transform: rotateY(0deg);
}

.card-container {
	perspective: 75rem;
}

.globe-right {
    position: absolute;
    right: 0;
}

.globe-left.me-4, .globe-info-box.me-4 {
    position: absolute;
}


/* Floating div */
.floating {  
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: -225px;
}

@keyframes floating {
    from { transform: translate(0,  0px); }
    65%  { transform: translate(0, 15px); }
    to   { transform: translate(0, -0px); }    
}

.floating.humidity {
    position: absolute;
    top: 45px;
    left: 80px;
    width: 145px;
    font-family: cursive;
    font-size: 18px;
}

.floating.recipitation {
    font-family: cursive;
    font-size: 16px;
}

span.celcius-fahrenheit {
    position: absolute;
    font-size: 45px;
    top: 64%;
    left: 64%;
}

.time-info {
    position: absolute;
    top: 5px;
    right: 10px;
}



/* Flip box design start */
#forcast-info {
  display: block;
  min-height: 1em;
  background: #171E2E;
  color: #FFF;
  padding: 20px;
  vertical-align: middle;
  line-height: 1.4;
  text-align: center;
  transform: translateZ(0);
  cursor: pointer;
  font-size: 20px;
  font-family: "Roboto", Helvetica;
  animation-play-state: paused;
}
.globe-info-box.me-4 {
    font-family: fantasy;
}

.globe-right.me-4 {
    font-family: -webkit-body;
}

</style>