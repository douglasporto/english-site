<template>
  <div id="app">
    <MainNav/>
    <v-container>
      <router-view></router-view>
    </v-container>
    <v-footer class="blue-grey darken-4">
       <div class="container" slot="copyright">
         &copy; Copyright 2017 - By
         <a href="http://brainmind.com.br" target="_blank">
             Brain&Mind
         </a>
       </div>
   </v-footer>
  </div>
</template>
<script>
import MainNav from './Header'
// import http from 'src/http'
// import { Jogador } from './Jogadores'
import dados from './dados.js'
export default {
  name: 'app',
  components: { MainNav },
  created: function created () {
    this.$store.state.site = dados.site
    this.$store.state.review = dados.review
    this.$store.state.classies = dados.classies
  }
}
</script>
<style>
.avatar {
  margin-top: 15px;
  width: 80px;
  border: 1px solid #FFF;
  background-color: #FFF;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.9),0 2px 10px 0 rgba(0,0,0,0.9);
}
</style>
