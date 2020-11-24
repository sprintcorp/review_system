<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300&display=swap');

  #app {
    font-family: 'Exo 2', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }


</style>
<script>
  

  export default {
   name : 'App',
   data() {
     return {
       pageStatus : true
     }
   },
  }

</script>