<template>
  <v-footer class="pa-3"
            absolute=true>
    <v-spacer></v-spacer>
    <div>
      &copy; {{ new Date().getFullYear() }} - 
      <strong>
        <a style="color: #000" 
           href='https://github.com/ozikot'
           target="_blank">
          ozikot
        </a>
      </strong>
    </div>
  </v-footer>
</template>

<style>
  .pa-3{
    position: fixed;
    bottom: 0;
  }
</style>
