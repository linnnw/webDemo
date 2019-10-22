<template>
    <div>
        <h1>cpn组件</h1>
        <span>{{ msg }}</span>
    </div>
</template>

<script>
    export default {
        name: "Cpn",
        data(){
            return{
                msg: 'Cpn_--msg'
            }
        }
    }
</script>

<style scoped>
    h1 {
        color: green;
    }
</style>