<template>
    <div class="budget-step-one">
        <h4>BudgetStepOne</h4>
        <div class="grid">
            <article class="main">
                <h1>The Little Prince</h1>
                <p>
                And he went back to meet the fox.
                "Goodbye," he said.
                "Goodbye," said the fox. "And now here is my secret, a very simple secret: It is only with the heart that one
                can see rightly; what is essential is invisible to the eye."
                "What is essential is invisible to the eye," the little prince repeated, so that he would be sure to remember.
                "It is the time you have wasted for your rose that makes your rose so important."
                "It is the time I have wasted for my rose--" said the little prince, so that he would be sure to remember.
                "Men have forgotten this truth," said the fox. "But you must not forget it. You become responsible, forever,
                for what you have tamed. You are responsible for your rose . . ."
                "I am responsible for my rose," the little prince repeated, so that he would be sure to remember.
                </p>
            </article>
            <section class="side">
                <h1>About</h1>
                <p>
                The Little Prince (French: Le Petit Prince), first published in 1943, is a novella and the most famous work of the French aristocrat, writer, poet and pioneering aviator Antoine de Saint-Exupéry (1900–1944).
                </p>
            </section>
            </div>
    </div>
</template>

<script>
    export default {
        name: 'BudgetStepOne'
    }
</script>

<style scoped>
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: 2fr 1fr;
}
.main {
  background: #fcc;
}
.side {
  background: #fea;
}
.main,
.side {
  padding: 2%;
  border-radius: 10px
}

@media(max-width: 400px){
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>