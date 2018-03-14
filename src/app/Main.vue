<template>
  <v-app id="inspire">
    <v-navigation-drawer  class=''
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <router-link to="/game" tag="v-list-tile" class=''>
          <v-list-tile-action >
            <v-icon class=''>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <!--<router-link to="/" class="">All Vocabulary</router-link>-->
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left class='red darken-4 white--text'>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class='white--text'></v-toolbar-side-icon>
      <v-toolbar-title>English</v-toolbar-title>
    </v-toolbar>
    <v-content class='blue darken-4'>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app>
       <span>&copy; 2017
       &copy; Copyright 2017 - By
         <a href="http://brainmind.com.br" target="_blank">
             Brain&Mind
         </a>
       </span>
    </v-footer>
  </v-app>
</template>

<script>
  import dados from './dados.js'
  import verbs from './irregularverbs.js'
  export default {
    data: () => ({
      drawer: true
    }),
    props: {
      source: String
    },
    created: function created () {
      this.$store.state.site = dados.site
      this.$store.state.review = dados.review
      this.$store.state.classies = dados.classies
      this.$store.state.verbs = verbs
    }
  }
</script>


<!--<template>-->
<!--  <div id="app">-->
<!--    <MainNav/>-->
<!--    <v-container>-->
<!--      <router-view></router-view>-->
<!--    </v-container>-->
<!--    <v-footer class="blue-grey darken-4">-->
<!--       <div class="container" slot="copyright">-->
<!--         &copy; Copyright 2017 - By-->
<!--         <a href="http://brainmind.com.br" target="_blank">-->
<!--             Brain&Mind-->
<!--         </a>-->
<!--       </div>-->
<!--   </v-footer>-->
<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--import MainNav from './Header'-->
<!--import dados from './dados.js'-->
<!--import verbs from './irregularverbs.js'-->
<!--export default {-->
<!--  name: 'app',-->
<!--  components: { MainNav },-->
<!--  created: function created () {-->
<!--    this.$store.state.site = dados.site-->
<!--    this.$store.state.review = dados.review-->
<!--    this.$store.state.classies = dados.classies-->
<!--    this.$store.state.verbs = verbs-->
<!--  }-->
<!--}-->
<!--</script>-->
<!--<style>-->
<!--.avatar {-->
<!--  margin-top: 15px;-->
<!--  width: 80px;-->
<!--  border: 1px solid #FFF;-->
<!--  background-color: #FFF;-->
<!--  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.9),0 2px 10px 0 rgba(0,0,0,0.9);-->
<!--}-->
<!--</style>-->
