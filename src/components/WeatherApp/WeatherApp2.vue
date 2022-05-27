<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-4 order-md-2 mb-4 p-0" v-if="this.apiResponseData">
                <div class="container">
                    <div class="row">
                        <!-- <pre>{{ JSON.stringify(filterDate, null, 2) }}</pre> -->
                        <div class="col">
                            <div class="left card-container" v-for="data in filterDate" :key="data">
                                <div class="front">
                                    <!-- <WeatherStockData :forecastData="this.apiResponseData.forecast" :day="date" /> -->
                                    <div id="forcast-info">
                                        <span class="Symbol">
                                            <b class="Stat">{{ data }}</b>
                                            <b class="Label"></b><br>
                                        </span><br>
                                        <div class="row">
                                            <div class="col-6 text-start mt-2" style="font-size: 12px;">
                                                <span class="Price"><b class="Label">Sunrise</b> <b class="Stat">04:00AM</b></span><br>
                                                <span class="Change"><b class="Label">Sunset</b> <b class="Stat">05:00PM</b> <b class="Stat"></b></span><br>
                                            </div>
                                            <div class="col-6 text-end mt-2" style="font-size: 12px;">
                                                <span class="Price"><b class="Label">Moonrise</b> <b class="Stat">07:00PM</b></span><br>
                                                <span class="Change"><b class="Label">Moonrset</b> <b class="Stat">11:00PM</b><b class="Stat"></b></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="back">
                                    <div class="row">
                                        high
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-8 order-md-1 p-0">
                <div class="weather-app2">
                    <SearchBox @weatherApiData="onClickChild" />
                    <div id="status">
                        <p>Welcome</p>
                        <button class="close"><i class="fa fa-times" aria-hidden="true"></i></button>
                    </div>
                    <div id="current" class="wrapper" v-if="this.apiResponseData">
                        <div class="section-search">
                            <!--  -->
                            <!-- <input id="location" type="text" placeholder="search for location"  v-model="query" v-on:keyup.enter="fetchWeather"> -->
                        </div>
                        <nav>
                            <button id="unitBtn" data-units="f">C</button>
                            <button id="unitBtn" data-units="f">F</button>
                        </nav>
                        <h1 class="location" v-if="this.apiResponseData">{{ this.apiResponseData ? this.apiResponseData.location.name : '' }}, {{ this.apiResponseData ? this.apiResponseData.location.country : '' }}</h1>
                        <h2 class="date" v-if="this.apiResponseData">{{ this.apiResponseData ? this.apiResponseData.location.localtime : '' }}</h2>
                        <div class="weatherIcon">
                            <div class="sunny">
                                <div class="inner" v-if="this.apiResponseData">
                                    <img class="weather-condition w-100" :src="this.apiResponseData ? this.apiResponseData.current.condition.icon : ''" alt="weather-pic">
                                    <!-- <img src="{{ this.apiResponseData ? this.apiResponseData.current.condition.icon : '' }}" alt="weather-condition"> -->
                                </div>
                            </div>
                        </div>
                        <p class="temp">{{ this.apiResponseData ? this.apiResponseData.current.temp_c : '' }}</p><span class="celcius-fahrenheit">C</span>
                        <p class="conditions" v-if="this.apiResponseData">{{ this.apiResponseData ? this.apiResponseData.current.condition.text : '' }}</p>
                        <div class="globe-left me-4">
                            <div class="floating humidity" v-if="this.apiResponseData">
                                <p>Humidity: {{ this.apiResponseData.current.humidity }}</p>
                            </div>

                            <div class="floating recipitation" v-if="this.apiResponseData">
                                <p>Wind Speed: {{ this.apiResponseData.current.wind_kph }} KM.</p>
                            </div>
                        </div>
                        <div class="globe-right me-4">
                            <span class="text-muted me-2">{{ this.apiResponseData ? this.apiResponseData.location.region : '' }}</span>
                            <span class="region" style="font-size: 15px;color: ivory;">{{ this.apiResponseData ? this.apiResponseData.location.tz_id : '' }}</span>
                        </div>
                    </div>
                    <div id="future" class="wrapper" v-if="this.apiResponseData">
                        <div class="container">
                            <div class="card-container">
                                <div class="front">
                                    <h3 class="day">Mon</h3>
                                </div>
                                <div class="back">
                                    <p class="conditions">Partly Cloudy</p>
                                    <p class="tempRange"><span class="high">64</span> | <span class="low">48</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="card-container">
                                <div class="front">
                                    <h3 class="day">Mon</h3>
                                </div>
                                <div class="back">
                                    <p class="conditions">Partly Cloudy</p>
                                    <p class="tempRange"><span class="high">64</span> | <span class="low">48</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="card-container">
                                <div class="front">
                                    <h3 class="day">Mon</h3>
                                </div>
                                <div class="back">
                                    <p class="conditions">Partly Cloudy</p>
                                    <p class="tempRange"><span class="high">64</span> | <span class="low">48</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <p id="lastUpdated">Last updated at {{ this.apiResponseData ? this.apiResponseData.current.last_updated : '' }}</p>
                        <!-- <p>Created by <a href="http://tiffanydu.com/" title="Visit Portfolio Site" target="_blank">Tiffany Du</a> | Weather data from <a href="https://www.wunderground.com/" title="Wunderground.com" target="_blank">Wunderground</a></p> -->
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SearchBox from './SearchBox.vue'
    import WeatherStockData from './WeatherStockData.vue'
    
    export default {
        name: 'WeatherApp2',
        data() {
            return {
                apiResponseData: ''
            }
        },
        components: {
            SearchBox,
            WeatherStockData
        },
        computed: {
            filterDate() {
                if (this.apiResponseData) {
                    var date = this.apiResponseData.forecast.forecastday.map(item => {
                        const dayOfWeekName = new Date(item.date).toLocaleString(
                            'default', {weekday: 'long'}
                        )
                        return dayOfWeekName
                    })

                    return date
                }
            }
        },
        methods: {
            onClickChild(value) {
                this.apiResponseData = value[0]
            },

            getImgUrl(img) {
                console.log('Image', img)

            }
        },
    }
</script>

<style scoped>

.weather-app2 {
    padding: 0% 0% 0% 5%;
}


:focus {
  outline: none;
}
html, body {
  height: 100%;
  width: 100%;
}
body {
  color: #e71212;
  font-family: 'Alegreya Sans', sans-serif;
  font-weight: 300;
  position: relative;
  letter-spacing: 0.05rem;
  line-height: 1.5;
  text-align: center;
}
a {
  color: #6D8CA0;
  font-weight: 700;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
footer {
  color: rgba(255,255,255,0.6);
  font-size: 0.8rem;
  letter-spacing: 0.07em;
  line-height: 2;
  padding: 30px 0;
  width: 100%;
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
  Containers
-----------------*/
.wrapper {
  color: #04043888;
  /* overflow: auto; */
  width: 100%;
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
/*** Error & Success Messages ***/
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
/* locateBtn Pulse Animation */
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
    /* background-image: url(https://www.visualcrossing.com/images/weather-data/accurate_affordable.jpg); */
  background: radial-gradient(circle at top, #ffa949, firebrick);
  padding: 10% 5% 20%;
  position: relative;
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

	font-family: BlinkMacSystemFont, "Segoe UI", sans-serif;
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
/* .front, .back {
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
} */

.globe-right {
    position: absolute;
    right: 0;
}

.globe-left.me-4 {
    position: absolute;
}

/* Floating div */
.floating {
    /* height: 50px; 
    width: 50px;  */
    /* background: rgb(212 69 188); */
}
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

.globe.info-box.me-4 {
    position: absolute;
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
#forcast-info b {
  font-weight: 300;
}
#forcast-info i {
  font-style: normal;
}
#forcast-info .Name,
#forcast-info .Label,
#forcast-info .LastUpdated {
  font-size: 0.7em;
  line-height: 1;
}
#forcast-info span {
  white-space: nowrap;
  display: inline-block;
  padding: 0 5px;
}
#forcast-info .Symbol,
#forcast-info .Stat {
  color: #88bd0a;
}
/* ---------------------------------- */
/* Animations */
#forcast-info span {
  animation: none;
}
#forcast-info.is-Visible span {
  opacity: 0;
  transform: translate(0, -1em) translateZ(0);
  animation-name: slide-in;
  animation-duration: 500ms;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
#forcast-info.is-Loading.is-Visible span {
  opacity: 1;
  transform: translateZ(0);
  animation-name: slide-out;
  animation-fill-mode: forwards;
}
#forcast-info.is-Loaded.is-Visible span {
  opacity: 0;
  transform: translate(0, -1em);
  animation-name: slide-in;
  animation-fill-mode: forwards;
}
#forcast-info span:nth-child(10) {
  animation-delay: 2000ms;
}
#forcast-info span:nth-child(9) {
  animation-delay: 1800ms;
}
#forcast-info span:nth-child(8) {
  animation-delay: 1600ms;
}
#forcast-info span:nth-child(7) {
  animation-delay: 1400ms;
}
#forcast-info span:nth-child(6) {
  animation-delay: 1200ms;
}
#forcast-info span:nth-child(5) {
  animation-delay: 1000ms;
}
#forcast-info span:nth-child(4) {
  animation-delay: 800ms;
}
#forcast-info span:nth-child(3) {
  animation-delay: 600ms;
}
#forcast-info span:nth-child(2) {
  animation-delay: 400ms;
}
#forcast-info span:nth-child(1) {
  animation-delay: 200ms;
}
@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translate(0, -1em);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
@keyframes slide-out {
  0% {
    opacity: 1;
    transform: translate(0, 0);
  }
  100% {
    opacity: 0;
    transform: translate(0, 1em);
  }
}
.no-js #forcast-info {
  display: none;
}
/* Flip box design end */
</style>