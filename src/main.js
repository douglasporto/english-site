// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app/Main'
import router from './router'
import Materials from 'vue-materials'
import store from './store/store'
import VueTyperPlugin from 'vue-typer'

Vue.use(VueTyperPlugin)
Vue.use(Materials)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
