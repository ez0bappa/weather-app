<template>
    <section class="featured text-start">
        <!-- <div class="my-card">
            <h2 class="design-text">Design the happiness not the sorrow...</h2>
            <p class="lorem-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quis tempora laboriosam sit quia. Rerum cumque unde corporis exercitationem at. <strong>By Mr. Dey</strong></p>
            <button class="btn">Learn More</button>
        </div> -->
    </section>
</template>

<script>
    export default {
        name: 'Headerbanner'
    }
</script>

<style scoped>
.featured{
    /* position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    background-image: url('/src/assets/images/bike-background-2.jpg');
    background-position: center;
    background-size: cover;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
}

.my-card{
    padding: 20px;
    width: 95%;
    border-radius: 5px;
    backdrop-filter: blur(10px);
}

.my-card h2{
    text-transform: uppercase;
    line-height: 1.2;
    margin-bottom: 10px;
    color: rgb(10, 132, 255);
}

button.btn {
    margin-top: 20px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    padding: 10px 45px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    border: none;
    background-image: linear-gradient(to right, #649bff, #0070fa, #649bff);
    border-radius: 10px;
    transition: 250ms;
}

button.btn:hover{
    color: #e02a04;
    font-weight: 700;
    opacity: 0.5;
}
</style>