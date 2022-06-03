<template>
    <div class="nav-menu">
        <div class="header-menu">
            <HeaderMenuVue />
        </div>

        <!-- <div class="header-banner">
            <HeaderBannerVue />
        </div> -->
    </div>
</template>

<script>
    // import HeaderBannerVue from './HeaderBanner/HeaderBanner.vue'
    import HeaderMenuVue from './HeaderMenu/HeaderMenu.vue'
    export default {
        name: 'Navbar',
        data() {
            return {
                '--grey': 'rgb(163, 163, 163)',
                '--blue-dark': 'rgb(10, 132, 255)'
            }
        },
        components: {
            // HeaderBannerVue,
            HeaderMenuVue
        },
    }
</script>

<style scoped>

</style>