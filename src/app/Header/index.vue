<template>
  <div class="navbar-fixed">
    <v-nav nav-class="amber darken-1 fixe">
      <v-container class='container-nav'>
        <router-link to="/" class="brand-logo center" >{{ nameSite }}</router-link>
        <a href="#" v-side-nav:demo="nav" data-activates="mobile-demo"><i class="material-icons">menu</i></a>
        <v-side-nav id="demo">
          <li v-for="side in sidebar"><router-link :to="side.url">{{ side.name }}</router-link></li>
       </v-side-nav>
      </v-container>
    </v-nav>
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
  background-color: #edecec;
}
.navbar-fixed {
  margin-bottom: 50px;
}
.container-nav{
  width: 85%;
}
</style>
