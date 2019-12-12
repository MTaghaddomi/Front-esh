<template>
  <div id="app">
    <registerborder></registerborder>
  </div>
</template>

<script>
import RegisterBorder from "./RegisterBorder.vue";
export default {
  components: {
    registerborder: RegisterBorder
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
