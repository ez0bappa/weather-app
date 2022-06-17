<template>
  <h3 class="text-center saving" style="color: #686468">Savings in Percentage(%)</h3>
  <CircleProgress
    :percent=percent
    :viewport="true"
    :show-percent="true"
    :is-gradient="true"
      :gradient="{
        angle: 90,
        startColor: '#ff0000',
        stopColor: '#ffff00'
    }"
  />


 </template>

<script>
import { ref, onMounted } from "vue";
import CircleProgress from "vue3-circle-progress";
import "vue3-circle-progress/dist/circle-progress.css";


export default {
  name: "App",
  components: {
    CircleProgress: CircleProgress,
  },
  props: {
    percentage: String
  },
  setup(props) {
    const percent = ref('');

    onMounted(() => {
      setInterval(() => {
        percent.value = props.percentage
      }, 1000);
    });

    return {
      percent,
    };
  },
};
</script>

<style scoped>
.vue3-circular-progressbar {
    margin-left: 35%;
}
</style>
