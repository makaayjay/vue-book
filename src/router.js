import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home.vue'
import List from './components/list'
import Detail from './components/detail'
import Collect from './components/collect'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path: '/',
          redirect:'home'
      },

      {
          path: '/home',
          name: 'home',
          component: Home
      },

      {
        path:'/collect',
          name:'collect',
          component:Collect
      },
      {
       path:'/list',
       name:'list',
       component:List
      },
      {
          path:'/detail/:bid',
          name:'detail',
          component:Detail
      },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
