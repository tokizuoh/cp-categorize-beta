<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <global-header/>
    <global-title/>
    <router-view/>
    <global-footer/>
  </div>
</template>

<script>
import GlobalHeader from './components/GlobalHeader'
import GlobalTitle from './components/GlobalTitle'
import GlobalFooter from './components/GlobalFooter'
export default {
  components: {
    GlobalHeader,
    GlobalTitle,
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
