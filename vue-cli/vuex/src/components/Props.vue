<template>
    <div>
      <p>----------Props---------</p>
      {{ $store.state.count }}
    </div>
</template>

<script>
    export default {
      name: "Props",
      props: {
          col: String
      }
    }
</script>

<style scoped>

</style>
