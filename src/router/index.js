import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import HalamanSatu from '@/pages/HalamanSatu'
import HalamanDua from '@/pages/HalamanDua'

Vue.use(Router)
import store from '../store/store.js'

let router = new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/satu',
      component: HalamanSatu
    },
    {
      path: '/dua',
      component: HalamanDua
    },
  ],
  mode : 'history'
})

router.beforeEach((to, from, next) => {
  next()
  if (to.path === '/' || store.state.isLoggedIn) {
    next()
  } else {
    next('/login')
  }
})
export default router