<template>
  <div id="app">
    <Dashboard/>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'app',
  components: {
    Dashboard
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  background-color: #F0F0F0;
  font-family: 蘋方-繁, Medium;
}
</style>
