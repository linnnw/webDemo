<template>
    <wc-swiper class="heigh">
        <wc-slide v-for="(item, i) in banner" :key="i">
            <a :href="item.link">
                <img :src="item.image" alt="" >
            </a>
        </wc-slide>
    </wc-swiper>
</template>

<script>
    export default {
        name: "HomeSwiper",
        props:{
            banner: {
                type: Array,
                default: () => []
            }
        }

    }
</script>

<style scoped>
    .heigh img,
    .heigh {
        height: 20%;
        width: 100%;

    }
</style>