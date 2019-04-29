<template>
  <v-toolbar color="#4d4398">
    <v-toolbar-side-icon class="white--text"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">cp-categorize beta</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items >
      <v-btn flat class="white--text">
        <a class="nav-link" style="color: #fff" href="https://github.com/ozikot" target="_blank"><span class="nav">GitHub</span></a>
      </v-btn>
      <v-btn flat class="white--text">
        <a class="nav-link" style="color: #fff" href="https://beta.atcoder.jp/users/tokizo" target="_blank"><span class="nav">AtCoder</span></a>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<<script>
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
