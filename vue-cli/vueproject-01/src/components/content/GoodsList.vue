<template>
    <div id="goodsList">
        <GoodsListItem v-for="(item, k) in goodsList.list" :popList="item" :key="k"></GoodsListItem>
    </div>

</template>

<script>
    import GoodsListItem from './GoodsListItem'

    export default {
        name: "GoodsList",
        props: {
            goodsList: {
                type: Object,
                defaults: () => {}
            }
        },
        components: {
            GoodsListItem
        }
    }
</script>

<style scoped>
#goodsList {
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;  /*均等分*/
}
</style>