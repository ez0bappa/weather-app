<template>
    <div class="search-box">
        <div class="container">
            <div class="searchInputWrapper mb-4">
                <input class="searchInput" type="text" placeholder='Search location...' v-model="query" v-on:keyup.enter="fetchWeather" />
                <i class="searchInputIcon fa fa-search" v-on:click="fetchWeather"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import { useToast } from "vue-toastification";
    import axios from 'axios'

    export default {
        name: 'SearchBox',
        data() {
            return {
                query: 'kolkata',
                apiResponse: [],
                toast: useToast()
            }
        },
        methods: {
            async fetchWeather(e) {
                if (e.key) {
                    try {
                        let result = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=52b3ca2edfaf46a08d9190038222305&q=${this.query}&days=7`)
                        // let result = await axios.get(`api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=10&appid=52b3ca2edfaf46a08d9190038222305`)
                        if(result.status == 200) {
                            this.apiResponse = result.data
                            this.$emit('weatherApiData', [result.data])
                        }
                    } catch(err) {
                        this.toast.warning('something went wrong, Please check and try again...', {
                            timeout: 6000
                        });
                    }
                }
            }
        }
    }
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

.heading {
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
}

.searchInputWrapper {
  position: relative;
}

.searchInput {
  width: 42rem;
  height: 2rem;
  padding: 0 1rem; 
  border-radius: 2rem;
  border: none;
  transition: transform 0.1s ease-in-out;
  background: antiquewhite;
}

::placeholder {
  color: #a1a1a1;
}

/* hide the placeholder text on focus */
:focus::placeholder {
  text-indent: -999px
}

.searchInput:focus {
  outline: none;
  transform: scale(1.1);
  transition: all 0.1s ease-in-out;
}

.searchInputIcon {
    position: absolute;
    cursor: pointer;
    right: 3.2rem;
    top: 0.5rem;
    color: #a1a1a1;
    transition: all 0.1s ease-in-out;
}

.container:focus-within > 
.searchInputWrapper > .searchInputIcon {
  right: 0.2rem;
}
</style>