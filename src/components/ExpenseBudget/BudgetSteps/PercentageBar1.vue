<template>

  <h2>Counter test 2</h2>
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
  setup() {
    const percent = ref('');

    onMounted(() => {
      setInterval(() => {
        percent.value = 100
      }, 1000);
    });

    return {
      percent,
    };
  },
};
</script>
