<template>
    <div>
        <!-- <div class="container">
            <div class="row">
                <div class="content-box mb-3 bg-white shadow-sm">
                    <h3>Full conent</h3>
                    <p class="content-font-size">Here is content this website page.</p>
                </div>
            </div>
            
            <div class="row">
                <div class="mb-3 col-xl-6">
                    <div class="content-box bg-white shadow-sm">
                        <h3>50% content</h3>
                        <p class="content-font-size">Here is content this website page.</p>
                    </div>
                </div>
                <div class="mb-3 col-xl-6">
                    <div class="content-box bg-white shadow-sm">
                        <h3>50% content</h3>
                        <p class="content-font-size">Here is content this website page.</p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="content-box mb-3 bg-white shadow-sm">
                    <h3>Full conent</h3>
                    <p class="content-font-size">Here is content this website page.</p>
                </div>
            </div>
        </div> -->
    
        <div class="admin-section">
            <div class="admin-panel">
                <div class="slidebar">
                    <ul>
                        <li><a href="" name="tab1"><i class="fa fa-tachometer"></i>General</a></li>
                        <li><a href="" name="tab2"><i class="fa fa-eyedropper"></i>Styling</a></li>
                        <li><a href="" name="tab3"><i class="fa fa-pencil"></i>Typography</a></li>
                        <li><a href="" name="tab4"><i class="fa fa-picture-o"></i>Portfolio</a></li>
                        <li><a href="" name="tab5"><i class="fa fa-file-video-o"></i>Blog / News</a></li>
                        <li><a href="" name="tab6"><i class="fa fa-wrench"></i>Advanced</a></li>
                    </ul>
                </div>
            
                <div class="main">
                    <div id="tab1"><h2 class="header">Dashboard</h2> </div>
                    <div id="tab2"><h2 class="header">Styling</h2></div>
                    <div id="tab3"><h2 class="header">Typography</h2></div>
                    <div id="tab4"><h2 class="header">Portfolio</h2></div>
                    <div id="tab5"><h2 class="header">Blog /news</h2></div>
                    <div id="tab6"><h2 class="header">Advanced</h2></div>    
                </div>
            
            
            </div>
        </div>    
    </div>
</template>

<script>
    export default {
        name: 'Home1'
    }
</script>

<style scoped>
.admin-panel {
	width: 100%;
    max-width:900px;
    overflow: hidden;
    background-color:#fff;
    position:relative;
}

.slidebar {
	width:15%;
	float: left;
	background-color: #111;
}
.slidebar ul {
  position:relative;
  height:100%;
}

.slidebar a{
  color: #bbb;
  text-decoration:none;
}
.slidebar li{
  text-align:center;
  padding: 0x 0px;
}

ul {
	padding: 0;
	margin:0;
}
li {
	list-style-type: none;
	margin: 0;
	position: relative;
  text-align:center;
  color:#B3B3B3
}
.slidebar i {
  display:block;
  text-align:center;
  color:#B3B3B3;
  font-size: 40px;
  margin-bottom: 8px;
}

.slidebar ul a {
  color:#B3B3B3;
	text-decoration: none;
	box-sizing:border-box;
	display: block;
	text-transform: capitalize;
  padding: 20px;
}
.slidebar li:hover a, li#active{
	background-color: #313131;
}
.slidebar li:hover i, li#active i{
	color: #17BCE8;
}
.slidebar li:focus i {
	color: #17BCE8;
}

.main {
	float: left;
	width: 85%;
	background-color: rgb(255,255,255);
	position: relative;
}

.main h2 {
	margin:1em 30px;
	color:#17BCE8;
	font-size: 20px;
  font-weight:600;
  border-bottom: 1px solid #bbb;
  padding: 0px 0px 20px 0px;
}
</style>