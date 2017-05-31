<template>
  <div class="navbar-fixed">
    <v-nav nav-class="red darken-1 fixe">
      <v-container class='container-nav'>
        <router-link to="/" class="brand-logo center" >{{ nameSite }}</router-link>
        <ul class="right hide-on-med-and-down">
          <li>
              <router-link to="/vocabulary" class="">Vocabulary</router-link>
          </li>
          <li>
              <v-btn v-dropdown:dropdown class="amber darken-2" hover>Dark Yellow</v-btn>
          </li>
        </ul>
        <a href="#" v-side-nav:demo="nav" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
        <v-side-nav id="demo">
          <li><router-link to="/vocabulary">Vocabulary</router-link></li>
          <li v-for="side in  sidebar[1].menu"><router-link :to="side.url">{{ side.name }}</router-link></li>
       </v-side-nav>
      </v-container>
    </v-nav>
    <v-dropdown id="dropdown">
        <li v-for="obj in sidebar[1].menu">
            <router-link :to="obj.url" class="amber-text text-darken-2">{{ obj.name }}</router-link>
        </li>
    </v-dropdown>
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
</style>
