<template>
  <v-toolbar color="#4d4398" height=47 scroll-toolbar-off-screen=true>
    <v-toolbar-side-icon class="white--text"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">cp-categorize beta <img src='./icon.png'></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items >
      <v-btn flat class="white--text" href="https://github.com/ozikot">
        GitHub
      </v-btn>
      <v-btn flat class="white--text" href="https://beta.atcoder.jp/users/tokizo">
        AtCoder
      </v-btn>
    </v-toolbar-items>
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
