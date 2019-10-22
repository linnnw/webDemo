import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import About from './views/About.vue'
// import User from "./views/User";


const Home = () => import('./views/Home')
const About = () => import('./views/About')
const User = () => import('./views/User')

Vue.use(Router)

export default new Router({
  mode: 'history',    /*使用history来修改网址路径前不显示#号键*/
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: 'home'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: 'about'
      }
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: User,
      meta: {
        title: 'user'
      }
    }
  ]
})
