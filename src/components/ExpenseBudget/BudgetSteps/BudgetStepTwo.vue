<template>
    <div class="budget-calculator">
        <nav>
            <div class="centre">
                <h4>Quantum Fuzziness</h4>
                <ul class="clearfix">    
                <li>
                    <h3>
                    <a href="#">Imaginary Time</a>
                    </h3>
                    <div class="date">3 hours ago</div>
                </li>
                
                <li>
                    <h3>
                    <a href="#">Alpha Particles</a>
                    </h3>
                    <div class="date">4 days ago</div>
                </li>
                
                <li>
                    <h3>
                    <a href="#">M Theory</a>
                    </h3>
                    <div class="date">1 week ago</div>
                </li>
                
                </ul>
            </div>
        </nav>

        <main>
            <article>
                <h2>Imaginary Time</h2>
                <p>Imaginary time is a concept derived from quantum mechanics and is essential in connecting quantum mechanics with statistical mechanics.</p>
            </article>

            <div class="container">
                <div class="row">
                    <div class="dt-container">
                        <div class="dt-grid">
                            
                            <!-- 2x1 -->
                            <div class="dt-g-box size-1of2">5</div>
                            <div class="dt-g-box size-1of2">6</div>
                            <!-- 1x2 -->
                            <div class="dt-g-box size-1of1 up-2">7</div>
                            <!-- 4x1 -->
                            <div class="dt-g-box size-1of2">5</div>
                            <div class="dt-g-box size-1of2">6</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'BudgetStepTwo'
    }
</script>

<style scoped>
html {
  height: 100%;
  min-width: 320px;
  max-height: 100%;
  font-size: 62.5%; }

body {
  height: 100%;
  max-height: 100%;
  font-size: 1.8rem;
  line-height: 1.5em;
  color: #3A4145;
  width: 100%;
  background: #333 }

::selection {
  color: #ffffff;
  background: #FF3399;
  text-shadow: none;
}

h2, h3, h4 {
  text-rendering: optimizeLegibility;
  line-height: 1;
  margin-top: 0;
  font-weight: 400;
  color: #566160; }

h2 {
  font-size: 2.8rem;
  line-height: 1.2em;
  letter-spacing: -1px;
  text-indent: -2px; }

h3 {
  font-size: 2.4rem; }

h4 {
  font-size: 2.0rem; }

a {
  color: #4a4a4a;
  transition: color ease 0.3s, border ease 0.3s, background ease 0.3s; }

a:hover {
  color: #57A3E8; }

h2 a, h3 a, h4 a {
  color: #50585D; }

p, ul, ol {
  margin: 1.6em 0; }

ol ol, ul ul,
ul ol, ol ul {
  margin: 0.4em 0; }

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #efefef;
  margin: 3.2em 0;
  padding: 0; }

blockquote {
  margin: 1.6em 0 1.6em 0;
  padding: 0 0 0 1.6em;
  border-left: #4a4a4a 0.4em solid;
  margin: 0.8em 0;
  font-style: italic; }

blockquote small {
  display: inline-block;
  margin: 0.8em 0 0.8em 1.5em;
  font-size: 0.9em;
  color: #ccc; }

blockquote small:before {
  content: '\2014 \00A0'; }

article p:first-of-type:first-letter {
  float: left;
  font-size: 5.8rem;
  line-height: 5.4rem;
  margin: 0 6px 0 0; }

nav {
  position: fixed;
  z-index: 1;
  font-size: 18px;
  line-height: 48px;
  top: 0px;
  bottom: 0;
  left: 0;
  width: 40%;
  background-color: black;
  color: #ffffff;
  text-align: center;
  overflow: auto;
}

h4 {
  font-size: 2rem;
  margin: 0 auto;
  padding: 0 10%;
  color: #ffffff; }

.centre {
  top: 25%;
  width: 100%;
  height: 50%;
  position: absolute;
}

nav ul {
  display: block;
  list-style: none;
  padding: 46px 11.4%;
  margin: 30px 0 30px 0;
}

nav li {
  float: left;
  width: 100%;
  border-bottom: 1px solid #555555;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px 0; }

nav li:last-child {
  border-bottom: none; }

nav {
  color: #666666; }

nav a {
  color: #666666;
  text-decoration: none; }

nav a:hover {
  color: #ffffff;
  text-decoration: none; }

h3, h4 {
  text-transform: uppercase;
  font-weight: 700; }

h3 {
  margin: 0;
  padding: 0;
  font-size: 2rem; 
}

nav li .date {
  font-size: 1.2rem;
  line-height: 2rem; }

main {
  width: 60%;
  position: relative;
  padding: 0;
  margin: 0 0 0 40%;
}

article {
  padding: 40px 11.14%;
  word-break: break-word;
  hyphens: auto;
  background-color: #ffffff;
  border-radius: 4px; }

h2 {
  font-size: 7.4rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  opacity: 0.95;
  padding: 0 11.4%;
  font-style: normal;
  font-size: 4.2rem;
    line-height: 4.6rem;
    padding: 0;
}

  h2, h2 a {
    color: #333638; }

.post-end {
  color: #BBC7CC;
  margin: 0;
}

.post-end span {
  float: right;
  font-style: italic; }

article img {
  display: block;
  max-width: 100%;
  margin: 0 auto; }

  article {
    padding: 8%; }


@media only screen and (min-width: 900px) {
  article {
    margin: 0;
    border-radius: 0;
    border-bottom: 1px dotted #222;
  } }

@media only screen and (max-width: 900px) {

  nav {
    display: none; }

  blockquote {
    margin-left: 0; }

  p:first-child:first-letter {
    font-size: 5.2rem;
    line-height: 5rem;
    margin: 0 4px 0 0; }

  main {
    width: 80%;
    max-width: none;
    margin: 10%; }

  article {
    font-size: 0.9em;
    line-height: 1.6em;
    margin-bottom: 30px;
    padding: 8%;
  }

  h2 {
    font-size: 2.4rem;
    line-height: 1.1em;
    letter-spacing: 0; }

  h3 {
    font-size: 2.0rem;
    line-height: 2.2rem; }

  h4 {
    font-size: 1.8rem;
    line-height: 2.0rem; }}

@media only screen and (max-width: 500px) {
  
  main {
    width: 95%;
    max-width: none;
    margin: 3% auto; }

  article {
    width: auto;
    font-size: 0.8em;
    line-height: 1.6em; }

  p:first-child:first-letter {
    font-size: 4.4rem;
    line-height: 4.6rem;
    margin: 0 4px 0 0; }

  h2 {
    font-size: 2.4rem;
    line-height: 1.1em;
    letter-spacing: 0; }

  h3 {
    font-size: 2.0rem;
    line-height: 2.2rem; }

  h4 {
    font-size: 1.8rem;
    line-height: 2.0rem; }
 }


/* dt grid layout */
 .dt-container {
  width: 100%;
  max-width: 1280px;
  position: relative;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
}
.dt-container .dt-g-box {
  background: cornflowerblue;
}
@media (max-width: 1280px) {
  .dt-container {
    width: 960px;
  }
  .dt-container .dt-g-box {
    background: violet;
  }
}
@media (max-width: 992px) {
  .dt-container {
    width: 720px;
  }
  .dt-container .dt-g-box {
    background: darkorange;
  }
}
@media (max-width: 768px) {
  .dt-container {
    width: 560px;
  }
  .dt-container .dt-g-box {
    background: teal;
  }
}
@media (max-width: 576px) {
  .dt-container {
    width: 95%;
  }
  .dt-container .dt-g-box {
    background: coral;
  }
}

.dt-grid {
  margin: 0 auto;
  display: grid;
  grid-gap: 15px;
  grid-auto-columns: 1fr;
  grid-auto-rows: 310px;
  grid-template-areas: "h h h h";
  grid-auto-flow: dense;
}
@media (max-width: 1280px) {
  .dt-grid {
    grid-auto-rows: 230px;
  }
}
@media (max-width: 992px) {
  .dt-grid {
    grid-auto-rows: 168px;
  }
}
@media (max-width: 768px) {
  .dt-grid {
    grid-auto-rows: 128px;
  }
}
@media (max-width: 576px) {
  .dt-grid {
    display: block;
  }
  .dt-grid .dt-g-box {
    margin-bottom: 15px;
    min-height: 120px;
  }
}
.dt-grid .dt-g-box.size-1of4 {
  grid-column-start: span 1;
}
.dt-grid .dt-g-box.size-1of2 {
  grid-column-start: span 2;
}
.dt-grid .dt-g-box.size-1of1 {
  grid-column-start: span 4;
}
.dt-grid .dt-g-box.up-2 {
  grid-row-start: span 2;
}
@media (max-width: 992px) {
  .dt-grid .md-half {
    grid-column-start: span 2 !important;
  }
  .dt-grid .md-full {
    grid-column-start: span 4 !important;
  }
}
@media (max-width: 768px) {
  .dt-grid .sm-quarter {
    grid-column-start: span 1 !important;
  }
  .dt-grid .sm-half {
    grid-column-start: span 2 !important;
  }
  .dt-grid .sm-full {
    grid-column-start: span 4 !important;
  }
}
@media (max-width: 576px) {
  .dt-grid .xs-falf {
    grid-column-start: span 2 !important;
  }
  .dt-grid .xs-full {
    grid-column-start: span 4 !important;
  }
}

.gbox-flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: stretch;
}
.gbox-flex > div {
  border: 1px solid white;
  color: #fff;
  flex: 1 0 100%;
}
</style>