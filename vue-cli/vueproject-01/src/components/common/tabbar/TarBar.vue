<template>
    <div class="tab_bar">
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name: "TarBar",

    }
</script>

<style scoped>
.tab_bar {
    height: 49px;
    background-color: #f6f6f6;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>