import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@views/home/Home.vue')
const Class = () => import('@views/class/Class')
const Cart = () => import('@views/cart/Cart')
const User = () => import('@views/user/User')


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/class',
      name: 'class',
      component: Class
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
