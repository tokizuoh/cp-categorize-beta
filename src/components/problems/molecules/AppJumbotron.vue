<template>
  <p>
    <v-jumbotron>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex>
            <h3 class="display-3"> {{ categoryTitle }} </h3>
            <v-divider class="my-3"></v-divider>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
  </p>
</template>

<script>
  export default {
    props: {
      categoryTitle: {
        type: String
      }
    }
  }
</script>
