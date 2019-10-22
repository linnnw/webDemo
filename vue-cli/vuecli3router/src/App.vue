<template>
    <div>
        <!--tag修改渲染标签默认是a标签 设置replace静止浏览器前进后退-->
        <router-link to="/home" tag="button" replace="">Home</router-link> |
        <router-link to="/about" tag="button" replace="">About</router-link> |
        <router-link :to="'/user/'+userId" tag="button">User</router-link>
        <keep-alive>    <!--路由切换组件的时候不会销毁前一个组件-->
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: "App",
        data(){
            return {
                userId: 'zhangsan'
            }
        }
    }
</script>

<style scoped>

</style>