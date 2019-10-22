<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
    .nav-bar {
        height: 44px;
        line-height: 44px;
        text-align: center;
        display: flex;
        /*box-shadow: 0px 1px 1px rgba(10,10,10,.5);*/
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 99;
    }
    .left,
    .right {
        width: 60px;
        height: 44px;
    }
    .center {
        flex: 1;
        color: #fff;
    }
</style>