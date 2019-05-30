import Vue from 'vue'
import Router from 'vue-router'
import AppStartMenu from'@/components/AppStartMenu'
//import Menu from '@/components/Menu'
import Math from '@/components/Problems/Math'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppStartMenu',
      component: AppStartMenu
    },
    {
      path: '/math',
      name: 'Math',
      component: Math
    }
  ]
})
