<template>
  <v-toolbar dark
             color="#16164ds"
             height=47
             scroll-toolbar-off-screen=true>
    <v-toolbar-title class="white--text">
      <a style="color: #fff" 
         href='/'>
        cp-categorize beta
      </a>
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    color: "purple"
  },
  methods: {
    pavePath(){
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
*{
  text-transform: none !important;
  text-decoration: none;
}
</style>