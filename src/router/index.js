import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import Manage from '@/components/Manage'
import Borrow from '@/components/Borrow'
import Recommend from '@/components/Recommend'
import Contribute from '@/components/Contribute'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      children: [
        {
          path: '/',  
          name: 'Manage',
          component: Manage
        },
        {
          path: '/borrow',  
          name: 'Borrow',
          component: Borrow
        },
        {
          path: '/recommend',  
          name: 'Recommend',
          component: Recommend
        },
        {
          path: '/contribute',  
          name: 'Contribute',
          component: Contribute
        },
      ]
    }
  ]
})
