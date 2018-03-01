import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/app/pages/Index'
import Lesson from '@/app/pages/Lesson'
import Verbs from '@/app/pages/Verbs'
import Game from '@/app/pages/Game'
Vue.use(Router)
export default new Router({
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/vocabulary', name: 'vocabulary', component: Index },
    { path: '/lesson', name: 'lesson', component: Lesson },
    { path: '/verbs', name: 'verbs', component: Verbs },
    { path: '/game', name: 'game', component: Game }
  ]
})
