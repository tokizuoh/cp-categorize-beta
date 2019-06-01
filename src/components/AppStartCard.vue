<template>
  <p>
    <v-toolbar height="30px" flat>
      <v-icon>subject</v-icon>
      <v-toolbar-title>Introduction</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
      </v-toolbar-items>
    </v-toolbar>
    <v-card>
        <v-card-title primary-title>
        <div>
            <br>
            <h3 class="headline mb-0"><b>cp-categorize beta</b></h3>
            <br>
            <v-divider></v-divider>
            <br>
            <div> {{ card_text }} </div>
        </div>
        </v-card-title>

        <v-card-actions>
        <v-btn flat color="orange" href="https://github.com/ozikot/cp-categorize-beta" target="_blank">GitHub</v-btn>
        </v-card-actions>
    </v-card>
  </p>
</template>

<script>
  export default {
    data () {
      return {
        card_text: 'AtCoder, Aizu Online Judge, CODE FORCES, CS Academy, yukicoderなどで出題された競技プログラミングの問題を勝手に分類'
      }
    }
  }
</script>

<style scoped>
p {
  width: 85%;
  margin: auto;
}
</style>
