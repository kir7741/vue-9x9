<template>
  <div id="app">
    <Dashboard/>
    <Footer/>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    Dashboard,
    Footer
  }
}
</script>

<style lang="scss">
@import './scss/_bootstrap-grid.scss';
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  background-color: #F0F0F0;
  font-family: 蘋方-繁, Medium;
}
</style>
