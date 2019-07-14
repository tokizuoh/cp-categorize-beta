import Vue from 'vue'
import Router from 'vue-router'
import AppStartMenu from'@/components/AppStartMenu'
import AppAccumulateSum from '@/components/problems/AppAccumulateSum'
import AppBinarySearch from '@/components/problems/AppBinarySearch'
import AppBruteForce from '@/components/problems/AppBruteForce'
import AppDynamicProgramming from '@/components/problems/AppDynamicProgramming'
import AppMath from '@/components/problems/AppMath'
import AppGraph from '@/components/problems/AppGraph'
import AppSplitAndList from '@/components/problems/AppSplitAndList'
import AppTwoPointer from '@/components/problems/AppTwoPointer'
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
      path: '/brute_force',
      name: 'AppBruteForce',
      component: AppBruteForce
    },
    {
      path: '/graph',
      name: 'AppGraph',
      component: AppGraph
    },
    {
      path: '/accumulate_sum',
      name: 'AppAccumulateSum',
      component: AppAccumulateSum
    },
    {
      path: '/two_pointer',
      name: 'AppTwoPointer',
      component: AppTwoPointer
    },
    {
      path: '/binary_search',
      name: 'AppBinarySearch',
      component: AppBinarySearch
    },
    {
      path: '/dp',
      name: 'AppDynamicProgramming',
      component: AppDynamicProgramming
    },
    {
      path: '/split_and_list',
      name: 'AppSplitAndList',
      component: AppSplitAndList
    }
  ]
})
