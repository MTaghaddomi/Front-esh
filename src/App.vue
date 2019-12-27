<template>
  <div>
    <navBar />
    <div id="app">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar2 from "./components/NavBar2.vue";
export default {
  components: {
    navBar: NavBar2
  }
};
</script>

<style>
#app {
  font-family: "Almarai", sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  margin-top: 60px;
}
html {
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
  font-family: "Almarai", sans-serif;
  background-attachment: fixed;
  background: #d3cce3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #e9e4f0,
    #d3cce3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #e9e4f0,
    #d3cce3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

/* Position text in the middle of the page/image */

.wrapper {
  margin: 50px auto;
  width: 343px;
  height: 280px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}
.wrapper h1 {
  font-family: "Almarai", sans-serif;
  color: #f4f4f4;
  letter-spacing: 0px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
}
.wrapper hr {
  opacity: 0.2;
}
.crtacc {
  margin-left: 75px;
}
</style>
