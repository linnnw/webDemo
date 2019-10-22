<template>
    <div id="home">


        <div class="swiper">
            <HomeSwiper :banner="banner.list"></HomeSwiper>     <!--轮播-->
        </div>
        <HomeRecommend :recommend="recommend.list"></HomeRecommend>
        <HomePopular></HomePopular>
        <HomeNav :title="['流行','新款','精选']" @currentIndex="curindex"></HomeNav>
        <GoodsList :goodsList="goodsListData"></GoodsList>
    </div>
</template>

<script>


    import HomeSwiper from './childComponents/HomeSwiper'
    import HomeRecommend from './childComponents/HomeRecommend'
    import HomePopular from './childComponents/HomePopular'
    import HomeNav from './childComponents/HomeNav'
    import GoodsList from '@components/content/GoodsList'


    import { getHomeMultidata,getHomeData } from '@network/home'
    export default {
        name: "Home",
        data(){
          return {
              banner: [],
              recommend: [],

              goods: {
                  'pop': {page: 0, list: []},
                  'new': {page: 0, list: []},
                  'sell': {page: 0, list: []}
              },

              goodsData: 'pop'
          }
        },
        components: {
            HomeSwiper,
            HomeRecommend,
            HomePopular,
            HomeNav,
            GoodsList
        },
        created() {
            this.getHomeMultidata();

            this.getHomeData('pop');
            this.getHomeData('new');
            this.getHomeData('sell');
        },
        methods: {

            curindex(k){
                switch (k) {
                    case 0:
                        this.goodsData = 'pop';
                        break;
                    case 1:
                        this.goodsData = 'new';
                        break;
                    case 2:
                        this.goodsData = 'sell';
                        break;
                }
            },


            /*以下网络请求方法*/
            getHomeMultidata(){
                getHomeMultidata().then(res => {
                    this.banner = res.data.data.banner      /*轮播图数据*/
                    this.recommend = res.data.data.recommend
                })
            },
            getHomeData(type){
                let page = this.goods[type].page += 1
                getHomeData(type, page).then(res => {     /*得到数据*/
                    this.goods[type].list.push(...res.data.data.list)   /*添加数组*/

                })
                this.goods[type].page = page;      /*设置页数*/
            }
        },
        computed: {
            goodsListData(){
                return this.goods[this.goodsData];
            }
        }
    }
</script>

<style scoped>

.swiper {
    margin-top: 44px;
}

</style>