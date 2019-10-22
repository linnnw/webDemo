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
      return this.state.info.name = 'ssb'
    }
  },
  getters: {
    count2(state,getters){  /*有个state参数和一个自身的gatter参数*/
      return state.count * state.count;
    }
  },
  actions: {    /*异步请求在这里处理*/
      aUpdateInfo(content){		/*content等于$store*/
        setTimeout( () => {
          content.commit('updateInfo')
        },1000)

      }
  },
});
