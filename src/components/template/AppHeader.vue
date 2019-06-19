<template>
  <v-toolbar dark
             color="#16164ds"
             height=47
             scroll-toolbar-off-screen>
    <v-toolbar-title class="white--text">
      <router-link style="color: #fff" 
         　　　　　　to='/'>
        cp-categorize beta
      </router-link>
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    color: "purple"
  }
}
</script>

<style scoped>
*{
  text-transform: none !important;
  text-decoration: none;
}
</style>