<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <global-header/>
    <router-view/>
  </div>
</template>

<script>
import GlobalHeader from './components/GlobalHeader'
export default {
  components: {
    GlobalHeader,
  }
}
</script>

<style>
</style>
