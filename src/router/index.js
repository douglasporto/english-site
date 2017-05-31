import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/app/pages/Index'
import Lesson from '@/app/pages/Lesson'
Vue.use(Router)
export default new Router({
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/vocabulary', name: 'vocabulary', component: Index },
    { path: '/lesson', name: 'lesson', component: Lesson }
  ]
})
