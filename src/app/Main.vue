<template>
  <div id="app">
    <MainNav/>
    <v-container>
      <router-view></router-view>
    </v-container>
    <v-footer class="blue-grey darken-4">
       <div class="container" slot="content">
           <div class="row">
               <div class="col l6 s12">
                   <h5 class="white-text">Realização:</h5>
                   <p class="grey-text text-lighten-4">Amigos da Uranet.</p>
               </div>
               <div class="col l4 offset-l2 s12">
                   <h5 class="white-text">Patrocinadores Oficiais:</h5>
                   <a href="http://brainmind.com.br" target="_blank">
                       <img src="http://brainmind.com.br/uclleague2017/image/brain.png" alt="Brain&Mind" class="avatar circle z-depth-4">
                   </a>
                   <a href="https://www.playstation.com/pt-br/network/" target="_blank">
                       <img src="http://brainmind.com.br/uclleague2017/image/psn.jpg" alt="PS4" class="avatar circle z-depth-4">
                   </a>
                   <a href="https://www.easports.com/br/fifa" target="_blank">
                       <img src="http://brainmind.com.br/uclleague2017/image/fifa.jpg" alt="FIFA2017" class="avatar circle z-depth-4">
                   </a>
               </div>
           </div>
       </div>
       <div class="container" slot="copyright">&copy; Copyright 2017</div>
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
