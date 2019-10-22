import {name,age} from "./js/math";     /*es6js导入*/

console.log(name);
console.log(age);


require('./css/normal.css')      /*导入css样式*/

require('./css/special.less')       /*导入less样式*/

document.writeln('<h2>我是less修改的样式</h2>');


import Vue from 'vue';      /*导入vue.ems.js文件*/


// var temp = {
//     template: '<h1>template --- {{ msg }}</h1>',
//     data(){
//         return{
//             msg: 'hello webpack'
//         }
//     }
// }

import App from './vue/App.vue';     /*使用vue需要vue-loader和相应配置*/
new Vue({        /*runtime-only,runtime-compiler两种方式运行only不支持组件所以切换compiler*/
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
})