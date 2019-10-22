<template>
    <div>
        <h1>template --- {{ msg }}</h1>
        <Cpn></Cpn>
    </div>
</template>

<script>
    import Cpn from './Cpn.vue';

    export default {
        name: "App",
        components: {
            Cpn
        },
        data(){
            return{
                msg: 'hello webpack'
            }
        }

    }
</script>

<style scoped>

</style>