<template>
    <div>
        <h5>Test</h5>
        <WeatherAppVue />
    </div>
</template>

<script>
    import WeatherAppVue from '../../components/WeatherApp/WeatherApp.vue'
    export default {
        name: 'Home',
        components() {
            WeatherAppVue
        }
    }
</script>

<style scoped>

</style>