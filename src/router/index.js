import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/app/pages/Index'
Vue.use(Router)
export default new Router({
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/vocabulary', name: 'vocabulary', component: Index }
  ]
})
