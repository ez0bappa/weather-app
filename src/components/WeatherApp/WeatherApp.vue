<template>
    <div class="weather-app">
        <div class="center-div"> 
            <div class="page-content page-container" id="page-content">
                <div class="padding">
                    <div class="geo-data">
                        <div v-if="errorStr">
                            Sorry, but the following error
                            occurred: {{errorStr}}
                        </div>
                        
                        <div v-if="gettingLocation">
                            <i>Getting your location...</i>
                        </div>
                        
                        <div v-if="locationPos">
                            Your location data is {{  }}, {{ }}
                        </div>
                    </div>
                    <div class="row container d-flex justify-content-center">
                        <div class="col-lg-8 grid-margin stretch-card">
                            <!--weather card-->
                            <div class="card card-weather">
                                <div class="card-body custom-card-body">
                                    <div class="search-box">
                                        <div class="right">
                                            <input id="location" type="text" placeholder="search for location"  v-model="query" v-on:keyup.enter="fetchWeather">
                                            <!-- <h2>Today, <span class="day">Monday 23</span></h2>
                                            <h3 class="temperature">Temperature: <span class="temp">32 °C</span></h3>
                                            <h3>Wind speed: <span id="wind">1.46m/s</span></h3>
                                            <h3>Humidity: <span id="humidity">63%</span></h3> -->
                                        </div>
                                    </div>
                                    <div class="weather-date-location">
                                        <h3>city - {{ weatherApiData }}</h3>
                                        <p class="text-gray">
                                            <span class="weather-date">
                                                <!-- date -> {{ weatherApiData.value }} ||  -->
                                                <!-- <pre>{{ JSON.stringify(weatherApiData.value, null, 2) }}</pre> -->
                                            </span>
                                            <span class="weather-location">
                                                location - {{  }}
                                            </span>
                                        </p>
                                    </div>
                                    <div class="weather-data d-flex">
                                        <div class="mr-auto">
                                            <h4 class="display-3">32
                                    <span class="symbol">&deg;</span>C</h4>
                                            <!-- <p>{{ weather ? weather.weather[0].description : '' }}</p> -->
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body p-0">
                                    <div class="d-flex weakly-weather">
                                        <div class="weakly-weather-item">
                                            <p class="mb-0"> Sun </p> <i class="mdi mdi-weather-cloudy"></i>
                                            <p class="mb-0"> 30&deg; </p>
                                        </div>
                                        <div class="weakly-weather-item">
                                            <p class="mb-1"> Mon </p> <i class="mdi mdi-weather-hail"></i>
                                            <p class="mb-0"> 31&deg; </p>
                                        </div>
                                        <div class="weakly-weather-item">
                                            <p class="mb-1"> Tue </p> <i class="mdi mdi-weather-partlycloudy"></i>
                                            <p class="mb-0"> 28&deg; </p>
                                        </div>
                                        <div class="weakly-weather-item">
                                            <p class="mb-1"> Wed </p> <i class="mdi mdi-weather-pouring"></i>
                                            <p class="mb-0"> 30&deg; </p>
                                        </div>
                                        <div class="weakly-weather-item">
                                            <p class="mb-1"> Thu </p> <i class="mdi mdi-weather-pouring"></i>
                                            <p class="mb-0"> 29&deg; </p>
                                        </div>
                                        <div class="weakly-weather-item">
                                            <p class="mb-1"> Fri </p> <i class="mdi mdi-weather-snowy-rainy"></i>
                                            <p class="mb-0"> 31&deg; </p>
                                        </div>
                                        <div class="weakly-weather-item">
                                            <p class="mb-1"> Sat </p> <i class="mdi mdi-weather-snowy"></i>
                                            <p class="mb-0"> 32&deg; </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--weather card ends-->
                        </div>
                    </div>
                    
                    <div class="row">
                        <!-- <pre>{{ JSON.stringify(weatherApiData.value, null, 2) }}</pre> -->

                        <!-- {{ weather }} -->
                    </div>
                </div>
            </div>

            <!-- <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <WeatherApp1 />
                    </div>
                    <div class="col-md-6">
                        Test
                    </div> 
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
    import { computed, reactive, ref } from 'vue'
    import WeatherApp1Vue from './WeatherApp1.vue';
    import axios from "axios";
    import WeatherApp1 from './WeatherApp1.vue';

    export default {
    name: "WeatherApp",
    data() {
        return {
            query: "",
        };
    },
    setup() {
        const query = ref("");
        var weatherApiData = reactive([]);
        const gettingLocation = ref(Boolean);
        const locationPos = ref("");
        const errorStr = ref("");
        const curTemp = ref("")
        const apiData = reactive({})


        if (!("geolocation" in navigator)) {
            errorStr.value = "Geolocation is not available.";
            return;
        }
        gettingLocation.value = true;
        // get position
        navigator.geolocation.getCurrentPosition(pos => {
            gettingLocation.value = false;
            locationPos.value = pos;
        }, err => {
            gettingLocation.value = false;
            errorStr.value = err.message;
        });
        async function fetchWeather(e) {
            if (e.key) {
                try {
                    await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=52b3ca2edfaf46a08d9190038222305&q=${query.value}&days=7`).then((response) => {
                        if (response.status === 200) {
                            console.log(response.data)
                            weatherApiData.value = response.data
                        }
                    })

                    // let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${query.value}&APPID=85eb9f0808084442af914cdc92e4bddd`)

                    // let result = await axios.get(`http://history.openweathermap.org/data/2.5/history/city?lat=41.85&lon=-87.65&appid=52b3ca2edfaf46a08d9190038222305`); 



                    // console.log(result)
                }
                catch (err) {
                    console.log(err.message);
                }
                // const options = {
                //     method: 'GET',
                //     url: 'https://community-open-weather-map.p.rapidapi.com/weather',
                //     params: {
                //         q: 'London,uk',
                //         lat: '0',
                //         lon: '0',
                //         callback: 'testCB',
                //         id: '2172797',
                //         lang: 'null',
                //         units: 'imperial',
                //         mode: 'xml'
                //     },
                //     headers: {
                //         'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
                //         'X-RapidAPI-Key': 'db48f7ba68mshe6914830992a346p10b5a9jsn47bf2465e3ff'
                //     }
                // };
                // let result = await axios.request(options)
                // console.log(result)
                // weather.value = response.data
            }
        }
        return {
            query,
            fetchWeather,
            weatherApiData,
            gettingLocation,
            location,
            errorStr,
            apiData
        };
    },
    components: { WeatherApp1 }
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
    border-right: 1px solid #f2f2f2; 
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
</style>