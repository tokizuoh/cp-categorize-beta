<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <global-header/>
    <router-view/>
    <global-footer/>
  </div>
</template>

<script>
import GlobalHeader from './components/GlobalHeader'
import GlobalFooter from './components/GlobalFooter'
export default {
  components: {
    GlobalHeader,
    GlobalFooter,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
