<template>
  <p>
    <v-toolbar height="30px" flat>
      <v-icon>subject</v-icon>
      <v-toolbar-title>Introduction</v-toolbar-title>
    </v-toolbar>
    <v-card>
        <v-card-title primary-title>
        <div class="card-title">
            <h3 class="headline"><b>cp-categorize beta</b></h3>
        </div>
        </v-card-title>
        <div class="divider">
          <v-divider></v-divider>
        </div>
        <div class="card-text"> {{ card_text }} </div>
        <v-card-actions>
        <v-btn flat
               color="purple"
               href="https://github.com/ozikot/cp-categorize-beta"
               target="_blank">
          <div class="github-link">
            GitHub
          </div>
        </v-btn>
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

.card-text {
  padding: 10px 20px;
}

.card-title {
  padding: 0px 10px;
}

.divider {
  padding: 10px 20px;
}

.github-link {
  text-transform: none !important;
}

.headline {
  padding: 25px 0px 0px 0px;
}
</style>
