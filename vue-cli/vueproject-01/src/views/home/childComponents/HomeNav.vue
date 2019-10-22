<template>
    <div id="HomeNav">
        <ul>
            <li v-for="(item, k) in title" :key="k"
                :class="{active:k == currentIndex}"
                @click="currentClick(k)">
                <span>{{ item }}</span>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: "HomeNav",
        data(){
          return {
              currentIndex: 0
          }
        },
        props: {
            title: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            currentClick(k){
                this.currentIndex = k
                this.$emit('currentIndex',k)    /*把k传给父组件*/
            }
        }
    }
</script>

<style scoped>

    #HomeNav ul {
        display: flex;
        margin-top: 13px;
    }
    #HomeNav ul li {
        flex: 1;
        text-align: center;
        height: 30px;

    }
    .active span {
        color: #f10;
        border-bottom: 2px solid #f10;
        padding: 7px;
    }
</style>