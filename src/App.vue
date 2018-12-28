<template>
  <div id="app">
    <Skills/>
  </div>
</template>

<script>
import CardBootstrap from './components/CardBootstrap.vue';
import Skills from './components/Skills.vue';

export default {
  name: 'app',
  components: {
    CardBootstrap,
    Skills
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
}
body, html {
  margin: 0;
  height: 100%;
}
#app {
    width: 50%;
}

</style>
