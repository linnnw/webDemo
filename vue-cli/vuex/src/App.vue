<template>
  <div id="app" >
    {{ $store.state.count }}
    <button @click="addition(123)">+</button>
    <button @click="subtraction">-</button>
    <p>$store.getters.count2 方法</p>
    <h1>{{ $store.getters.count2 }}</h1>
    <p>$store.getters.count3 方法</p>
    <h1>{{ $store.getters.count3 }}</h1>
    <Props col="ass"></Props>


    <p>-------------action处理异步请求----------------</p>
    {{ $store.state.info }}
    <button @click="updateInfo">更新name</button>
  </div>
</template>

<script>
import Props from './components/Props'

export default {
  name: 'app',

  components: {
    Props
  },
  methods: {
    addition(test){
      console.log(test);
      this.$store.commit('add',test)  /*test传到store.js的add方法里面 .commit触发mutations中的事件*/
    },
    subtraction(){
      this.$store.commit('minus')
    },
    updateInfo(){
      this.$store.dispatch('aUpdateInfo') /*Action 通过 store.dispatch 方法触发*/
    }
  }
};
</script>

<style>

</style>
