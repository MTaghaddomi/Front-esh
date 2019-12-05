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

<style>
#app {
  font-family: "Baloo Bhaijaan", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
