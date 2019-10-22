<template>
    <div class="TarBarItem" @click="barItem" >
        <div v-if="!flag"><slot name="item_icon"></slot></div>
        <div v-else><slot name="item_icon_active"></slot></div>
        <div :style="activecolor"><slot name="item_text"></slot></div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                // flag: false
            }
        },
        props: {
            path: {     /*创建一个path类型为String*/
                type: String
            },
            color: {
                type: String,
                default: '#f10'
            }
        },
        name: "TarBarItem",
        methods: {
            barItem(){
                this.$router.replace(this.path)     /*path不能写死动态获取*/
                // console.log(this.$route.path.indexOf(this.path)== -1  ? true : false);
            }
        },
        computed: {
            flag(){
                // console.log(this.$route.path);
                return this.$route.path.indexOf(this.path)== -1 ? false : true
            },
            activecolor(){
                return this.flag ? {color:this.color}: {}
            }
        }
    }
</script>

<style scoped>
    .TarBarItem {
        flex: 1;
        font-size: 12px;
        font-family: "Times New Roman",Georgia,Serif;
        text-align: center;
    }
    .TarBarItem img {
        width: 27px;
        height: 27px;
        vertical-align: middle;
        margin-top: 4px;
    }
</style>