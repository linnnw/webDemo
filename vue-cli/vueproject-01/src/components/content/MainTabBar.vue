<template>
    <div id="MainTabBar">
        <Navbar class="nb-color">
            <div slot="center">购物街</div>
        </Navbar>

        <TarBar>
            <TarBarItem path="/home" color="#f10">    <!--要跳转的路径赋值给path-->
                <img slot="item_icon" src="~@assets/images/tarBarImages/icon_home.svg" alt="">
                <img slot="item_icon_active" src="~@assets/images/tarBarImages/icon_home_active.svg" alt="">
                <div slot="item_text">主页</div>
            </TarBarItem>
            <TarBarItem path="/class" color="#f10">
                <img slot="item_icon" src="~@assets/images/tarBarImages/icon_class.svg" alt="">
                <img slot="item_icon_active" src="~@assets/images/tarBarImages/icon_class_active.svg" alt="">
                <div slot="item_text">分类</div>
            </TarBarItem>
            <TarBarItem path="/cart" color="#f10">
                <img slot="item_icon" src="~@assets/images/tarBarImages/icon_cart.svg" alt="">
                <img slot="item_icon_active" src="~@assets/images/tarBarImages/icon_cart_active.svg" alt="">
                <div slot="item_text">购物车</div>
            </TarBarItem>
            <TarBarItem path="/user" color="#f10">
                <img slot="item_icon" src="~@assets/images/tarBarImages/icon_user.svg" alt="">
                <img slot="item_icon_active" src="~@assets/images/tarBarImages/icon_user_active.svg" alt="">
                <div slot="item_text">用户</div>
            </TarBarItem>
        </TarBar>
    </div>
</template>

<script>
    import TarBar from '@components/common/tabbar/TarBar'
    import TarBarItem from '@components/common/tabbar/TarBarItem'

    import Navbar from '@components/common/navbar/Navbar'

    export default {
        name: "MainTabBar",
        components: {
            TarBar,
            TarBarItem,
            Navbar
        }
    }
</script>

<style scoped>
    .nb-color {
        background-color: #f10;
    }
</style>