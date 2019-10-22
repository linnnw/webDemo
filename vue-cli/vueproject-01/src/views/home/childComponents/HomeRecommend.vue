<template>
    <div id="homeRecommend">
        <!--<div v-for="(item,i) in recommend" :key="i">-->
            <!--<a :href="item.link">-->
                <!--<img :src="item.image" alt="">-->
            <!--</a>-->
            <!--<div>{{ item.title }}</div>-->
        <!--</div>-->
        <ul>
            <li v-for="(item,i) in recommend" :key="i">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                </a>
                <div>{{ item.title }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        props: {
            recommend: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style scoped>
    #homeRecommend ul {
        padding: 10px 0 20px 0;
        display: flex;
        width: 100%;
        border-bottom: 8px solid #EEE;
    }
    #homeRecommend li {
        flex: 1;
        padding: 7px;
    }
    #homeRecommend li img{
        height: 85%;
        width: 100%;
    }
    #homeRecommend ul {
        width: 100%;
        text-align: center;
    }
</style>