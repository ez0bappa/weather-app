<template>
  <div class="home-entry">
    <Home />
  </div>
</template>

<script>
  import Home from './components/Home.vue'

  export default {
    name: 'App',
    components: {
      Home
    }
  }
</script>

<style>
#app {
  font-family: 'Rubik', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body{
  /* background: linear-gradient(180deg, #e94b83bf, transparent); */
}
</style>