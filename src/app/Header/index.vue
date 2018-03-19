<template>
  <div class="navbar-fixed">
    <v-nav nav-class="red darken-1 fixe">
      <div class='container-nav' style="margin-left: 60px;">
        <router-link to="/" class="center brand-logo" >{{ nameSite }}</router-link>
        <ul class="nav-ul right hide-on-med-and-down">
          <li>
              <router-link to="/" class="">All Vocabulary</router-link>
          </li>
          <li>
              <router-link to="/verbs" class="">Irregular Verbs</router-link>
          </li>
          <li>
              <router-link to="/Game" class="">Verbs Game</router-link>
          </li>
          <!--<li>
              <v-btn v-dropdown:dropdown class="amber darken-2" hover>Dark Yellow</v-btn>
          </li>
          <li>
              <v-btn v-dropdown:orange class="orange darken-2" hover>Orange</v-btn>
          </li>-->
        </ul>
        <a href="#" v-side-nav:demo="nav" ><i class="material-icons">menu</i></a>
        <v-side-nav id="demo">
          <div class="side-header center blue darken-2">
            Modules
          </div>
          <ul class="collapsible" data-collapsible="accordion">
            <li>
              <div class="collapsible-header orange-text text-darken-2"><i class="material-icons">create</i>ORANGE</div>
              <div class="collapsible-body">
                <li v-for="obj in sidebar[2].menu">
                    <router-link :to="obj.url" class="orange-text text-darken-2">{{ obj.name }}</router-link>
                </li>
              </div>
            </li>
            <li>
              <div class="collapsible-header amber-text text-darken-2"><i class="material-icons">create</i>DARK YELLOW</div>
              <div class="collapsible-body">
                <li><router-link to="/lesson" class="amber-text text-darken-2">Review</router-link></li>
                <li v-for="obj in sidebar[1].menu">
                    <router-link :to="obj.url" class="amber-text text-darken-2">{{ obj.name }}</router-link>
                </li>
              </div>
            </li>
            <li>
              <div class="collapsible-header blue-grey darken-1"><i class="material-icons">start</i>IMPORTANT</div>
              <div class="collapsible-body">
                <li><router-link to="/" class="blue-grey-text text-darken-1">All Vocabulary</router-link></li>
                <li><router-link to="/verbs" class="blue-grey-text text-darken-1">Irregular Verbs</router-link></li>
                <li><router-link to="/game" class="blue-grey-text text-darken-1">Games</router-link></li>
              </div>
            </li>
          </ul>
       </v-side-nav>
      </div>
    </v-nav>
    <!--
    <v-dropdown id="dropdown">
        <li v-for="obj in sidebar[1].menu">
            <router-link :to="obj.url" class="amber-text text-darken-2">{{ obj.name }}</router-link>
        </li>
    </v-dropdown>
    <v-dropdown id="orange">
        <li v-for="obj in sidebar[2].menu">
            <router-link :to="obj.url" class="orange-text text-darken-2">{{ obj.name }}</router-link>
        </li>
    </v-dropdown>-->
  </div>
</template>
<script>
export default {
  data () {
    return {
      nav: {
        edge: 'left'
      },
      nameSite: this.$store.state.site.name,
      menu: this.$store.state.site.pages,
      sidebar: this.$store.state.site.pages
    }
  }
}
</script>

<style lang="css">
body {
  font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
  background-color: #bbdefb;
}
.navbar-fixed {
  margin-bottom: 50px;
}
.container-nav{
  width: 85%;
}
.usa_bra {
  width: 20px;
  height: 20px;
}
.nav-ul li{
  padding: 0 5px;
}
.side-header {
  font-size: 1.5rem;
  border-bottom: solid 5px #FF0000;
  margin-bottom: 20px;
}
.collapsible-header i{
  font-size: 1.5rem !important;
}
</style>
