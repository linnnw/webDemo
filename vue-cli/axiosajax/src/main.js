import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// axios.defaults.baseURL = 'https://httpbin.org';
// axios.defaults.timeout = 5000;
// axios({
//   url: '/user-agent'
// }).then(res => {
//   console.log(res);
// })
//
// axios.all(
//     [
//         axios({
//           url: '/user-agent'
//         }),
//         axios({
//           url: '/headers'
//         })
//     ]
// ).then(res => {
//   console.log(res);   /*以数组的形式拿到*/
// })
// const axios1 = axios.create({   /*多个服务器设置多个地址用这个方法*/
//   baseURL: 'https://httpbin.org',
//   timeout: 5000
// })
//
// axios1({
//   url: '/user-agent'
// }).then(res => {
//   console.log(res);
// })

import {request} from './network/network'

// request({
//   url: '/user-agent',
//   success: function (res) {
//     console.log(res);
//   },
//   error: function (err) {
//     console.log(err);
//   }
// })
request({
  url: '/user-agent'
}).then(res => {
  console.log(res);
}).catch( err => {
  console.log(err);
})