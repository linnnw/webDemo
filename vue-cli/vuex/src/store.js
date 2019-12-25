import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 100,
    info: {
      name: 'asx',
      age: 33
    }
  },
  mutations: {
    /*修改state的值一定要经过mutations*/
    add(state,test){    /*接收test*/
      console.log(test);
      return state.count++

    },
    minus(){
      return this.state.count--
    },
    updateInfo(){
      return this.state.info.name = Math.ceil(Math.random()*10);
    }
  },
  getters: {
    count2(state,getters){  /*有个state参数和一个自身的gatter参数*/
      return state.count * state.count;
    },
    count3: state => state.count * 10
  },
  actions: {    /*异步请求在这里处理*/
      aUpdateInfo(content){		/*content等于$store*/
        console.log(content)
        setTimeout( () => {
          content.commit('updateInfo');
          content.commit('add')
        },1000)

      }
  },
});
