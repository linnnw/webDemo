<template class="user">
    <div>
        <h1>this is an User page</h1>
        {{ userId }}
    </div>
</template>

<script>
    export default {
        name: "User",
        computed: {
            userId: function () {
                return this.$route.params.userId;
            }
        }
    }
</script>

<style scoped>

</style>