<template>
    <div class="navbar">
        <div class="navbar-block">
            <header>
                <div class="logo">
                    <small><router-link to="/">🌞</router-link></small>
                </div>
                <i class="material-icons">=</i>
                <nav>
                    <div>
                        <router-link to="/weather-app">Weather App</router-link>
                    </div>
                    <div>
                        <router-link to="/calculator">Expense Calculator</router-link>
                    </div>
                </nav>
            </header>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<style scoped>
header {
    position: fixed;
    top: 0;
    z-index: 9999;
    width: 100%;
    height: 50px;
    background-color: #37a0a0;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

header > .logo {
    float: left;
    color: #6d955c;
    font-size: 28px;
    line-height: 50px;
    padding: 0 20px;
    background-color: #67b8b8;
}

header > nav {
    float: right;
}

header > nav > div {
    float: left;
    height: 100%;
    position: relative;
}

header > nav > div > a {
    text-align: center;
    width: 100%;
    height: 100%;
    display: block;
    line-height: 50px;
    padding: 0 15px;
    color: #fbfbfb;
    transition: background-color 0.2s ease;
    text-transform: uppercase;
    text-decoration: unset;
}

header > nav > div:hover > a {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

header > nav > div > div {
    display: none;
    overflow: hidden;
    background-color: white;
    min-width: 200%;
    position: absolute;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    padding: 10px;
}

header > nav > div:not(:first-of-type):not(:last-of-type) > div {
    left: -50%;
    border-radius: 0 0 3px 3px;
}

header > nav > div:first-of-type > div {
    left: 0;
    border-radius: 0 0 3px 0;
}

header > nav > div:last-of-type > div {
    right: 0;
    border-radius: 0 0 0 3px;
    min-width: 400%;
}

header > nav > div:hover > div {
    display: block;
    z-index: 1;
}

header > nav > div > div > a {
    display: block;
    float: left;
    padding: 8px 10px;
    width: 46%;
    margin: 2%;
    text-align: center;
    background-color: #f44355;
    color: #fbfbfb;
    border-radius: 2px;
    transition: background-color 0.2s ease;
}

header > nav > div > div > a:hover {
    background-color: #212121;
    cursor: pointer;
}

header > .material-icons {
	display: none;
}

h1 {
    margin-top: 10px;
    font-weight: 100;
}

p {
    color: #aaa;
    font-weight: 300;
}

@media (max-width:600px) {
    header > nav > div > div > a {
        margin: 5px 0;
        width: 100%;
    }
    header > nav > div > a > span {
        display: none;
    }
}

@media (max-width:715px) {
    header > nav {
        overflow-y: scroll;
        background-color: white;
        position: fixed;
        top: 0;
        right: -300px;
        width: 200px;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
        height: 100%;
        transition: right 0.3s ease;
        z-index: 2;
    }
    header > nav > div {
        height: initial;
        float: none;
        position: relative;
    }
    header > nav > div > a {
        color: #212121;
        text-align: right;
    }
    header > nav > div > div {
        display: block;
        position: static;
        min-width: 100% !important;
        float: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        border-radius: 1px !important;
    }
    header > nav > div > div > a {
        float: none;
        width: 100%;
        margin: 0;
        text-align: right;
        border-radius: 1px;
        padding: 8px 20px;
        background-color: #eee;
        color: #777;
    }
    header > nav > div > div > a:hover {
        background-color: #ccc;
    }
    header > .material-icons {
        display: block;
        color: #fbfbfb;
        line-height: 50px;
        float: right;
        font-size: 32px;
        padding: 0 15px;
        transition: background-color 0.2s ease;
    }
    header > .material-icons:hover {
        background-color: rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
    header > .material-icons:hover + nav,
    nav:hover {
        right: 0;
    }
    header .black {
        transition: background-color 0.3s ease;
    }
    header > .material-icons:hover ~ .black,
    nav:hover ~ .black {
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.2);
        z-index: 1;
        pointer-events: none;
    }
}

/* Menu link hover underline effects start */
a {
  position: relative;
  /* display: block; */
  cursor: pointer;
  padding: 8px 0;
  color: #fff;
  text-decoration: none;
}
a:hover{
  color: #fff;
  text-decoration: none;
}

a:before, a:after {
  content: '';
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: -2px;
  background: #fff;
}

a:before {
  left: 0;
}
a:after {
  right: 0;
  background: #fff;
  transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
}

a:hover:before {
  background: #fff;
  width: 100%;
  transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
}

a:hover:after {
  background: transparent;
  width: 100%;
  transition: 0s;
}
</style>