<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet">
    <app-header/>
    <br>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from './components/template/AppHeader'
import AppFooter from './components/template/AppFooter'

export default {
  components: {
    AppHeader,
    AppFooter
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
