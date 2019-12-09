<template>
  <div class="topnav" id="myTopnav">
    <ul>
      <li>
        <router-link to="/profile">پروفایل</router-link>
      </li>
      <li>
        <router-link to="/classrooms">کلاس ها</router-link>
      </li>
      <li>
        <router-link to="/notifications">اعلانات</router-link>
      </li>
      <a href="javascript:void(0);" class="icon" @click="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
    </ul>

    <!-- <div class="logo">
      <router-link to="/home">لوگوی ما</router-link>
    </div>-->
  </div>
</template>
<script>
export default {
  methods: {
    myfunction: function() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  }
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
.topnav {
  overflow: hidden;
  background-color: #120429;
  height: 56px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  background-color: #120429;
  padding: 0 0px;
  font-family: "Galada", cursive;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}

.logo {
  font-weight: bold;
  color: white;
}

.logo a {
  text-decoration: none;
  color: white;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
}

li {
  margin: 0 16px;
}

li a {
  text-decoration: none;
  color: white;
}

li a:hover,
li a:active,
li a.router-link-active {
  color: #fa923f;
}
</style>
