<template>
  <div class="home-entry">
    <NavbarVue />
    <WeatherAppVue />

  </div>
</template>

<script>
  import NavbarVue from './components/Shared/Navbar.vue'
  import WeatherAppVue from './components/WeatherApp/WeatherApp.vue'

  export default {
    name: 'App',
    components: {
      NavbarVue,
      WeatherAppVue
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>