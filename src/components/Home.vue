<template>
    <div class="home mb-5">
        <NavbarVue />
        <router-view></router-view>
    </div>
</template>

<script>
    import NavbarVue from './Shared/Navbar.vue'

    export default {
        name: 'Home',
        components: {
            NavbarVue
        }
    }
</script>

<style scoped>

</style>