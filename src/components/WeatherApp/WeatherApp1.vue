<template>
    <div class="center-div1"> 
        <div class="page-content page-container" id="page-content">
            <div class="padding">
                <div class="row container d-flex justify-content-center">
                    <div class="col-lg-8 grid-margin stretch-card">
                        <!--weather card-->
                        <div class="card card-weather">
                            <div class="card-body custom-card-body">
                                <div class="search-box">
                                    <div class="right">
                                        <input id="location" type="text" placeholder="search for location"  v-model="query" v-on:keyup.enter="fetchWeather">
                                    </div>
                                </div>
                                <div class="weather-date-location">
                                    <h3>{{ this.apiResponse[0] ? this.apiResponse[0].location.name : '' }}</h3>
                                    <p class="text-gray" v-if="this.apiResponse[0]">
                                        <span class="weather-date">{{ this.apiResponse[0] ? this.apiResponse[0].location.localtime : '' }} || </span>
                                        <span class="weather-location">{{ this.apiResponse[0] ? this.apiResponse[0].location.name : '' }} || </span>
                                        Region : <span class="weather-location">{{ this.apiResponse[0] ? this.apiResponse[0].location.region : '' }}</span>
                                    </p>
                                </div>
                                <div class="weather-data">
                                    <div class="custom-clouds">
                                        <Clouds 
                                            :weatherIs="this.apiResponse[0] ? this.apiResponse[0].current.condition.text : '' " 
                                            :nowTemperature="this.apiResponse[0] ? this.apiResponse[0].current.temp_c : ''"
                                            />
                                    </div>
                                    <div class="custom-clouds">
                                        
                                    </div>
                                    <div class="mr-auto temperature-data" v-if="this.apiResponse[0]">
                                        <h4 class="display-3">{{ this.apiResponse[0] ? this.apiResponse[0].current.temp_c : '' }} <span class="symbol">&deg;</span>C </h4>
                                        <p class="weather-condition">{{ this.apiResponse[0].current.condition.text }}</p>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="speed-fog-data">
                                Today, <span class="day">Monday 23</span>
                                Temperature: <span class="temp">32 °C</span>
                                Wind speed: <span id="wind">1.46m/s</span>
                                Humidity: <span id="humidity">63%</span>
                            </div> -->
                            <div class="card-body p-0" v-if="this.apiResponse[0]">
                                <div class="d-flex justify-content-center weakly-weather">
                                    <div class="weakly-weather-item" v-for="(item, index) in this.apiResponse[0].forecast.forecastday" :key="index">
                                        <p class="mb-0"> {{ item.date }}</p>
                                        <i class="mdi mdi-weather-cloudy"></i>
                                        <div class="temperaure-range">
                                            <span class="mb-0">{{ item.day.maxtemp_c }} &deg; C</span>
                                            <p class="mb-0">Min: {{ item.day.mintemp_c }} &deg; C</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--weather card ends-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Clouds from './Clouds/Clouds.vue'

    export default {
        name: 'WeatherApp1',
        data() {
            return {
                query: '',
                apiResponse: []
            }

        },
        components: { Clouds },
        methods: {
            async fetchWeather(e) {
                if (e.key) {
                    try {
                        let result = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=52b3ca2edfaf46a08d9190038222305&q=${this.query}&days=7`)
                        this.apiResponse = [result.data]
                        // console.log(this.apiResponse)
                    } catch(err) {
                        console.log(err.message)
                    }
                }
            }
        }
    }
</script>

<style scoped>
.center-div
{
  margin: 0 auto;
  /* max-width: 700px; */
  /* height: 200px; */
  background-color: #ccc;
  border-radius: 3px;
}
 .stretch-card>.card {
     width: 100%;
     min-width: 100%
 }

 body {
     background-color: #f9f9fa
 }

 .flex {
     -webkit-box-flex: 1;
     -ms-flex: 1 1 auto;
     flex: 1 1 auto
 }

 @media (max-width:991.98px) {
     .padding {
         padding: 1.5rem
     }
 }

 @media (max-width:767.98px) {
     .padding {
         padding: 1rem
     }
 }

 .padding {
     padding: 5rem
 }

.grid-margin, .purchace-popup > div {
    margin-bottom: 25px;
}

.card {
    border: 0;
    border-radius: 2px;
}

.card-weather {
    background: #e1ecff;
    background-image: linear-gradient(to left bottom, #d6eef6, #dff0fa, #e7f3fc, #eff6fe, #f6f9ff);
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
}


.card-weather .card-body:first-child {
    background: url(https://res.cloudinary.com/dxfq3iotg/image/upload/v1557323760/weather.svg) no-repeat center;
    background-size: cover;
}

.card .card-body {
    padding: 1.88rem 1.81rem;
}

.card-body {
    flex: 1 1 auto;
    padding: 1.25rem;
}

.card-weather .weather-date-location {
    padding: 0 0 38px;
}

.h3, h3 {
    font-size: 1.56rem;
}

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
}

.text-gray, .card-subtitle, .new-accounts ul.chats li.chat-persons a p.joined-date {
    color: #969696;
}

p {
    font-size: 13px;
}

.text-gray, .card-subtitle, .new-accounts ul.chats li.chat-persons a p.joined-date {
    color: #969696;
}

.card-weather .weather-data {
    padding: 0 0 4.75rem;
}

.mr-auto, .mx-auto {
    margin-right: auto !important;
}

.display-3 {
    font-size: 2.5rem;
}

.card-weather .card-body {
    background: #ffffff;
}

.card-weather .weakly-weather {
    background: #ffffff;
    overflow-x: auto;
}

.card-weather .weakly-weather .weakly-weather-item {
    flex: 0 0 14.28%;
    /* border-right: 1px solid #f2f2f2;  */
    padding: 1rem;
    text-align: center;
}

.mb-0, .my-0 {
    margin-bottom: 0 !important;
}
 
.card-weather .weakly-weather .weakly-weather-item i {
    font-size: 1.2rem;
} 

/* My Custom styles*/
.custom-card-body {
    position: relative;
}
.search-box {
    position: absolute;
}

#location {
    outline: none;
    border: none;
    background-color: transparent;
    cursor: text;
    /* font-size: 3em; */
    /* font-weight: 800; */
    text-align: center;
    border-bottom: 0.1em solid #aaa;
    margin-bottom: 0.1em;
}

.weakly-weather-item {
    border-right: 1px solid grey;
    border-left: 1px solid grey;
}

/* .custom-clouds {
    position: absolute;
    top: 30px;
    left: 0;
    margin-top: 40px;
}

.mr-auto.temperature-data {
    position: absolute;
    top: 50%;
    left: 65%;
} */
</style>