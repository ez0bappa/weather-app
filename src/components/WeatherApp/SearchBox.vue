<template>
    <div class="search-box">
        <div class="main mb-3">
            <input v-model="query" v-on:keyup.enter="fetchWeather" type="text" name="input" class="input" placeholder="Enter location or place.....">
            <div class="icon">
                <i class="fa fa-search" aria-hidden="true"></i>
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
                query: '',
                apiResponse: [],
                toast: useToast()
            }
        },
        methods: {
            async fetchWeather(e) {
                if (e.key) {
                    try {
                        let result = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=52b3ca2edfaf46a08d9190038222305&q=${this.query}&days=7`)
                        
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
@import url('https://fonts.googleapis.com/css2?family=Aclonica&family=Audiowide&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

*{
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
}

body{
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
}

:root{
	--hieght: 60px;
	--border-radius: 30px;
}

.main{
	box-shadow: 0 0 10px #3498db,
				inset 0 0 15px #3498db;
	width: 100%;
	max-width: 600px;
	display: inline-flex;
	border-radius: var(--border-radius);
	position: relative;
	margin: 0 20px;
}

.input{
	width: 100%;
	/*width: 500px;*/
	height: var(--hieght);
	padding: 0 20px;
	font-size: 22px;
	color: #3498db;
	border: 2px solid #3498db;
	border-right: none;
	outline: none;
	border-radius: var(--border-radius);
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	font-family: 'Poppins', sans-serif;
	text-shadow: 0 0 10px #3498db;
	background: transparent;
}

.input::placeholder{
	color: #3498db;
}




.icon{
	width: 90px;
	height: var(--hieght);
	border: 2px solid #3498db;
	border-left: none;
	display: flex;
	justify-content: center;
	align-items: center;
	border-top-right-radius: var(--border-radius);
	border-bottom-right-radius: var(--border-radius);
	cursor: pointer;
	background: transparent;
}

i.fa-search{
	font-size: 23px;
	color: #3498db;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.5s;
	text-shadow: 0 0 10px #3498db;
	background: transparent;
}

.input:focus + .icon i.fa-search{
	transform: rotate(360deg);
}
</style>