<template>
    <div id="GoodsListItem">
        <a :href="popList.link">
            <img :src="popList.show.img" alt="">
            <p class="title">{{ popList.title }}</p>
            <span class="price">{{ popList.price }}</span>
            <span class="cfav">{{ popList.cfav }}</span>
        </a>
    </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
        props: {
            popList: {
                type: Object,
                defaults: () => {}
            }
        }
    }
</script>

<style scoped>
#GoodsListItem {
    width: 48%;
}

#GoodsListItem p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

#GoodsListItem img{
    width: 100%;
    border-radius: 5px;
}

</style>