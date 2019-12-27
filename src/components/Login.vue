<template>
  <div id="app">
    <loginborder></loginborder>
  </div>
</template>

<script>
import LoginBorder from "./LoginBorder.vue";

export default {
  components: {
    loginborder: LoginBorder
  }
};
</script>

<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
