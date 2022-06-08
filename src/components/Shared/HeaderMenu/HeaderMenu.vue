<template>
    <div class="header-menu">
        <header>
            <router-link class="logo text-white" to="/">Bappa</router-link>
            
            <div class="hamburger-on"></div>
            <ul class="nav-links">
                <li>
                    <router-link to="/" class="menu-link text-white">Home</router-link>
                </li>
                <li>
                    <router-link to="/weather-app" class="menu-link text-white">Weather App</router-link>
                </li>
                <li>
                    <router-link to="/calculator" class="menu-link text-white">Budget App(Depricated)</router-link>
                </li>
                <li>
                    <router-link to="/budget-app" class="menu-link text-white">Budget App(Beta)</router-link>
                </li>
            </ul>
        </header>
    </div>
</template>

<script>
    export default {
        name: 'Headermenu',
        mounted() {
            // const header = document.querySelector("header");
            const hamburger = document.querySelector('.hamburger-on')
            const navLinks = document.querySelector('.nav-links')

            let hambugerOpen = false;
            hamburger.addEventListener("click", function() {
                console.log('test')
                if(!hambugerOpen) {
                    navLinks.classList.toggle("show-navlinks")
                    hamburger.classList.toggle('hamburger-off')
                } else {
                    navLinks.classList.remove("show-navlinks")
                    hamburger.classList.remove('hamburger-off')
                    hambugerOpen = false;
                }
            })
        }
    }
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: cursive;
}

header{
    z-index: 9999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 30px;
    position: fixed;
    width: 100%;
    height: 60px;
    top: 0;
    transition: 250ms;
    background: linear-gradient(180deg, #b483aa, transparent);
    background-color: #000000b5;
}

.nav-links{
    position: absolute;
    right: 0;
    top: 34px;
    width: 60%;
    /* height: 70vh; */
    background: #000104bd;
    
    /* Lets remove display:flex property from mobile view */
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: menu_animation 500ms ease-in-out;
}

/* We will make nav-links appear only if hamburg menus is clicked */
/* Lets make class of show-links */
/* Trigger this class from javascript */
.show-navlinks{
    display: flex;
}


@keyframes menu_animation {
    from{
        opacity: 0;
        transform: translateX(100%);
    }
    to{
        opacity: 1;
        transform: translateX(0%);
    }
}

.logo{
    text-decoration: none;
    font-size: 1rem;
    font-weight: 800;

    /* Lets determine our own colo */
    /* color: var(--grey); */
    color: rgb(163, 163, 163);
    transition: 250ms;
}

header ul li{
    list-style: none;
    margin: 20px 0;
}

header ul li a{
    text-decoration: none;
    padding: 10px 30px;
    font-size: 1rem;
    color: rgb(163, 163, 163);
    transition: 250ms;
}

header ul li a:hover{
    /* color: var(--text-color); */
    color: rgb(10, 132, 255)
}

.hamburger-on{
    background: url('/src/assets/images/humburger-menu.png');
    width: 25px;
    height: 25px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    transition: 250ms ease-in-out;
}

/* Now lets change the humberger menu to close button */
/* This will triggered only when humburger menu button is clicked */
.hamburger-off{
    padding: 9px;
    background: url('/src/assets/images/close-humburger-menu.png');
    /* background: linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)), url('/src/assets/images/close-humburger-menu.png'); */
    
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 25px;
    height: 25px;
    cursor: pointer;
    transition: 250ms ease-in-out;
}

/* Now lets do it for bigger screen 
This code will run only if the screen width is 700px or larger
*/
@media screen and (min-width: 700px) {
    .nav-links{
        display: flex;
        flex-direction: row;
        position: unset;
        width: auto;
        height: auto;
        background: none;
    }

    header ul{
        display: flex;
    }

    header ul li{
        margin: 0;
    }

    header ul li a{
        padding: 0;
        margin: 5px 25px;
        font-size: 16px;
    }

    .hamburger-on{
        display: none;
    }

    .logo{
        font-size: 22px;
    }
}
</style>