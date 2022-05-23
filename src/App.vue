<template>
  <div class="home-entry">
    <NavbarVue />
  </div>
</template>

<script>
  import NavbarVue from './components/Shared/Navbar.vue'

  export default {
    name: 'App',
    components: {
      NavbarVue
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