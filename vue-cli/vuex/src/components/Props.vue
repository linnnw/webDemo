<template>
    <div>
      <p>----------Props---------</p>
      {{ $store.state.count }}

      {{ col }}

      <button @click="mul">-</button>
    </div>
</template>

<script>
    export default {
      name: "Props",
      props: {
          col: String
      },
      methods: {
        mul () {
          this.$store.commit('minus')
        }
      }
    }
</script>

<style scoped>

</style>
