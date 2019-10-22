import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to,from,next) => {

  document.title = to.matched[0].meta.title

  next()
})