import Vue from 'vue'
import Router from 'vue-router'
import AppStartMenu from'@/components/AppStartMenu'
import AppMath from '@/components/problems/AppMath'
import AppGraph from '@/components/problems/AppGraph'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'AppStartMenu',
      component: AppStartMenu
    },
    {
      path: '/math',
      name: 'AppMath',
      component: AppMath
    },
    {
      path: '/graph',
      name: 'AppGraph',
      component: AppGraph
    }
  ]
})
