<template>
  <div>
    <div id="app">
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <div class="wrapper animated bounce">
        <h1 v-if="checkRoute">Welcome</h1>
        <!-- will only be displayed when we are at the home page url has only a '/'-->

        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default{
    computed: {
        checkRoute: function(){
            if(this.$route.path==='/')
                return true;
            return false;
        }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  margin-top: 60px;
}
html {
  width: 100%;
  height: 100%;
}

<<<<<<< head body {
  width: 100%;
  height: 100%;
  font-family: "Open Sans", sans-serif;
  background: #092756;
  background-attachment: fixed;
  background: -moz-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -moz-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -moz-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -webkit-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -webkit-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(
            42,
            60,
            87,
            0.4
          )
          100%),
    -webkit-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -o-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -o-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -o-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -ms-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -ms-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -ms-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -webkit-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    linear-gradient(
      to bottom,
      rgba(57, 173, 219, 0.25) 0%,
      rgba(42, 60, 87, 0.4) 100%
    ),
    linear-gradient(135deg, #670d10 0%, #092756 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 );
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
  font-family: "Galada", cursive;
  color: #f4f4f4;
  letter-spacing: 8px;
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
<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Cantora+One);
======= </script>>>>>>>1886f602486652012f09abba2f36f21a13046b47 * {
  box-sizing: border-box;
}
nav[role="full-horizontal"] {
  width: 100%;

  <<<<<<< head ul {
    width: 100%;
    list-style: none;

    > li {
      position: relative;
      float: left;
      padding: 0.25em 1em;
      margin: 1.25em 1em;

      text-transform: uppercase;
      cursor: pointer;
      background: rgba(255, 255, 255, 0.8);
      text-align: center;
      border-radius: 0.75em;
      transition-duration: 0.3s;
      transition-timing-function: ease-in-out;
      transition-property: background, color, padding, border-radius;
      box-shadow: 0.1em -0.1em 0 0.1em rgba(0, 0, 0, 0.2),
        inset 0 0 0 0.15em rgba(0, 0, 0, 0.4),
        -0.1em 0.1em 0 0.1em rgba(0, 0, 0, 0.2);

      &:after {
        position: absolute;
        z-index: -1;
        content: "";
        right: 0;
        border-radius: 50%;
        box-shadow: 1em 1em 0 2em rgba(255, 255, 255, 0.5);
      }

      &:last-child:after {
        box-shadow: none;
      }

      &:hover {
        background-color: rgba(251, 93, 0, 0.8);
        padding-left: 3em;

        > a {
          color: #fff;
        }
      }

      > a {
        color: #333;
        text-decoration: none;
        font-size: 1.4em;
        transition: color 0.3s ease-in-out;
      }
    }
  }
}

/* small screens */
@media screen and (max-width: 44em) {
  body {
    margin: 1.5em 0;
  }

  nav[role="full-horizontal"] {
    ul {
      padding: 0 0.5em;
    }
    ======= <style>>>>>>>1886f602486652012f09abba2f36f21a13046b47 ul > li {
      width: 100%;
      padding: 0.45em 0.25em;
      margin: 0 0 0.55em 0;

      &:after {
        box-shadow: none;
      }
    }
  }
}
</style>
