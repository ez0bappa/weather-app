<template>
    <div class="PercentageBar3">
        <h4>PercentageBar3</h4>
        <div class="container">
            <div class="circular-progress">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PercentageBar3'
    }
</script>

<style scoped>
*,
*:before,
*:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    height: 100vh;
    background: linear-gradient(#e8f0f7, #4d5bf9);
}

.container{
    height: 270px;
    width: 400px;
    background-color: #ffff;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 100%;
    left: 80%;
    border-radius: 8px;
    box-shadow: 20px 20px 40px rgb(60 60 150 / 25%);
    display: grid;
    place-items: center;
}

.circular-progress{
    position: relative;
    height: 250px;
    width: 250px;
    background-color: #0000;
}
</style>