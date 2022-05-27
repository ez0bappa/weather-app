<template>
    <div class="weather-stock-data">
        <div id="forcast-info">
            <span class="Symbol">
                <b class="Stat">PWR:<fc-quote symbol="PWR" field="exchangeShortName"></fc-quote></b>
                <b class="Label">( Quanta Services )</b><br>
            </span><br>
            <div class="row">
                <div class="col text-start">
                    <span class="Price"><b class="Label">Sunrise</b> <b class="Stat">$<fc-quote symbol="PWR" field="price"></fc-quote></b></span><br>
                    <span class="Change"><b class="Label">Sunset</b> <b class="Stat"><fc-quote symbol="PWR" field="changePrice"></fc-quote></b> <b class="Stat">(<fc-quote symbol="PWR" field="changePercent"></fc-quote>)</b></span><br>
                    <span class="Volume"><b class="Label">Volume</b> <b class="Stat"><fc-quote symbol="PWR" field="volume"></fc-quote></b></span>
                </div>
                <div class="col">
                    <span class="Price"><b class="Label">Moonrise</b> <b class="Stat">$<fc-quote symbol="PWR" field="price"></fc-quote></b></span><br>
                    <span class="Change"><b class="Label">Moonrset</b> <b class="Stat"><fc-quote symbol="PWR" field="changePrice"></fc-quote></b> <b class="Stat">(<fc-quote symbol="PWR" field="changePercent"></fc-quote>)</b></span><br>
                    <span class="Volume"><b class="Label">Volume</b> <b class="Stat"><fc-quote symbol="PWR" field="volume"></fc-quote></b></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WeatherStockData',
        props: ['forecastData'],
        created() {
            console.log(this.forecastData)
        }
    }
</script>

<style scoped>
#forcast-info {
  display: block;
  min-height: 1em;
  background: #171E2E;
  color: #FFF;
  padding: 20px;
  vertical-align: middle;
  line-height: 1.4;
  text-align: center;
  transform: translateZ(0);
  cursor: pointer;
  font-size: 20px;
  font-family: "Roboto", Helvetica;
  animation-play-state: paused;
}
#forcast-info b {
  font-weight: 300;
}
#forcast-info i {
  font-style: normal;
}
#forcast-info .Name,
#forcast-info .Label,
#forcast-info .LastUpdated {
  font-size: 0.7em;
  line-height: 1;
}
#forcast-info span {
  white-space: nowrap;
  display: inline-block;
  padding: 0 5px;
}
#forcast-info .Symbol,
#forcast-info .Stat {
  color: #88bd0a;
}
/* ---------------------------------- */
/* Animations */
#forcast-info span {
  animation: none;
}
#forcast-info.is-Visible span {
  opacity: 0;
  transform: translate(0, -1em) translateZ(0);
  animation-name: slide-in;
  animation-duration: 500ms;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
#forcast-info.is-Loading.is-Visible span {
  opacity: 1;
  transform: translateZ(0);
  animation-name: slide-out;
  animation-fill-mode: forwards;
}
#forcast-info.is-Loaded.is-Visible span {
  opacity: 0;
  transform: translate(0, -1em);
  animation-name: slide-in;
  animation-fill-mode: forwards;
}
#forcast-info span:nth-child(10) {
  animation-delay: 2000ms;
}
#forcast-info span:nth-child(9) {
  animation-delay: 1800ms;
}
#forcast-info span:nth-child(8) {
  animation-delay: 1600ms;
}
#forcast-info span:nth-child(7) {
  animation-delay: 1400ms;
}
#forcast-info span:nth-child(6) {
  animation-delay: 1200ms;
}
#forcast-info span:nth-child(5) {
  animation-delay: 1000ms;
}
#forcast-info span:nth-child(4) {
  animation-delay: 800ms;
}
#forcast-info span:nth-child(3) {
  animation-delay: 600ms;
}
#forcast-info span:nth-child(2) {
  animation-delay: 400ms;
}
#forcast-info span:nth-child(1) {
  animation-delay: 200ms;
}
@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translate(0, -1em);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
@keyframes slide-out {
  0% {
    opacity: 1;
    transform: translate(0, 0);
  }
  100% {
    opacity: 0;
    transform: translate(0, 1em);
  }
}
.no-js #forcast-info {
  display: none;
}
</style>