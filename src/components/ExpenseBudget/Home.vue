<template>
    <div class="expence-app">
        <div class="products">
            <div id="wrapper">
                <!-- Sidebar -->
                <!-- <div id="sidebar-wrapper d-none">
                    <ul class="sidebar-nav">
                        <li class="sidebar-brand">
                            <a href="#">
                                <span class="badge bg-primary">Welcome- Bappa</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <router-link to="/pinia-distribution" class="nav-link">Dashnoard</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/pinia-distribution" class="nav-link">Weather App</router-link>
                        </li>
                    </ul>
                </div> -->
                <!-- /#sidebar-wrapper -->
                <nav class="navbar navbar-expand-lg navbar-light bg-light shadow d-none">
                    <div class="container-fluid sub-header-menu">
                        <a class="navbar-brand" href="#">App version: <span class="badge bg-primary">v5.1.1</span></a>
                        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content">
                            <div class="hamburger-toggle">
                                <div class="hamburger">
                                <span></span>
                                <span></span>
                                <span></span>
                                </div>
                            </div>
                        </button>
                        <div class="collapse navbar-collapse" id="navbar-content">
                            <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/budget-manager" class="nav-link">Dashboard</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/budget-dashboard" class="nav-link">Budget chart</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/budget-data" class="nav-link">Table</router-link>
                                </li>
                            </ul>
                            <form class="d-flex ms-auto">
                                <div class="input-group">
                                <input class="form-control border-0 mr-2" type="search" placeholder="Search" aria-label="Search">
                                <button class="btn btn-primary border-0" type="submit">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>
                
                <!-- Page Content -->
                <!-- <div id="page-content-wrapper">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <router-view />
                            </div>
                        </div>
                    </div>
                </div> -->

                <router-view />
                <!-- /#page-content-wrapper -->

            </div>
        </div>
    
    </div>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>

<style scoped>
.sub-header-menu{
    padding: 0 12%;
}

#wrapper {
    padding-left: 0;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}

#wrapper.toggled {
    padding-left: 250px;
}

#sidebar-wrapper {
    z-index: 1000;
    position: fixed;
    left: 250px;
    width: 0;
    height: 100%;
    margin-left: -250px;
    overflow-y: auto;
    background: #000000f2;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}

#wrapper.toggled #sidebar-wrapper {
    width: 250px;
}

#page-content-wrapper {
    width: 100%;
    position: absolute;
    padding: 15px;
}

#wrapper.toggled #page-content-wrapper {
    position: absolute;
    margin-right: -250px;
}

/* Sidebar Styles */

.sidebar-nav {
    position: absolute;
    top: 0;
    width: 250px;
    margin: 0;
    padding: 0;
    list-style: none;
}

.sidebar-nav li {
    text-indent: 20px;
    line-height: 40px;
}

.sidebar-nav li a {
    display: block;
    text-decoration: none;
    color: #999999;
}

.sidebar-nav li a:hover {
    text-decoration: none;
    color: #fff;
    background: rgba(255,255,255,0.2);
}

.sidebar-nav li a:active,
.sidebar-nav li a:focus {
    text-decoration: none;
}

.sidebar-nav > .sidebar-brand {
    height: 65px;
    font-size: 18px;
    line-height: 60px;
}

.sidebar-nav > .sidebar-brand a {
    color: #999999;
}

.sidebar-nav > .sidebar-brand a:hover {
    color: #fff;
    background: none;
}

@media(min-width:768px) {
    #wrapper {
        /* padding-left: 250px; */
    }

    #wrapper.toggled {
        padding-left: 0;
    }

    #sidebar-wrapper {
        width: 250px;
    }

    #wrapper.toggled #sidebar-wrapper {
        width: 0;
    }

    #page-content-wrapper {
        /* padding: 20px; */
        padding: 20px 9%;
        position: relative;
    }

    #wrapper.toggled #page-content-wrapper {
        position: relative;
        margin-right: 0;
    }
}
/* Sidebar End */



* {
  font-family: "Source Sans Pro", "Roboto", Arial, sans-serif;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.dropdown-menu.show {
  -webkit-animation: fadeIn 0.3s alternate;
  /* Safari 4.0 - 8.0 */
  animation: fadeIn 0.3s alternate;
}
.nav-item.dropdown.dropdown-mega {
  position: static;
}
.nav-item.dropdown.dropdown-mega .dropdown-menu {
  width: 90%;
  top: auto;
  left: 5%;
}
.navbar-toggler {
  border: none;
  padding: 0;
  outline: none;
}
.navbar-toggler:focus {
  box-shadow: none;
}
.navbar-toggler .hamburger-toggle {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 50px;
  z-index: 11;
  float: right;
}
.navbar-toggler .hamburger-toggle .hamburger {
  position: absolute;
  transform: translate(-50%, -50%) rotate(0deg);
  left: 50%;
  top: 50%;
  width: 50%;
  height: 50%;
  pointer-events: none;
}
.navbar-toggler .hamburger-toggle .hamburger span {
  width: 100%;
  height: 4px;
  position: absolute;
  background: #333;
  border-radius: 2px;
  z-index: 1;
  transition: transform 0.2s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.2s cubic-bezier(0.77, 0.2, 0.05, 1), all 0.2s ease-in-out;
  left: 0px;
}
.navbar-toggler .hamburger-toggle .hamburger span:first-child {
  top: 10%;
  transform-origin: 50% 50%;
  transform: translate(0% -50%) !important;
}
.navbar-toggler .hamburger-toggle .hamburger span:nth-child(2) {
  top: 50%;
  transform: translate(0, -50%);
}
.navbar-toggler .hamburger-toggle .hamburger span:last-child {
  left: 0px;
  top: auto;
  bottom: 10%;
  transform-origin: 50% 50%;
}
.navbar-toggler .hamburger-toggle .hamburger.active span {
  position: absolute;
  margin: 0;
}
.navbar-toggler .hamburger-toggle .hamburger.active span:first-child {
  top: 45%;
  transform: rotate(45deg);
}
.navbar-toggler .hamburger-toggle .hamburger.active span:nth-child(2) {
  left: 50%;
  width: 0px;
}
.navbar-toggler .hamburger-toggle .hamburger.active span:last-child {
  top: 45%;
  transform: rotate(-45deg);
}
.icons {
  display: inline-flex;
  margin-left: auto;
}
.icons a {
  transition: all 0.2s ease-in-out;
  padding: 0.2rem 0.4rem;
  color: #ccc !important;
  text-decoration: none;
}
.icons a:hover {
  color: white;
  text-shadow: 0 0 30px white;
}
</style>