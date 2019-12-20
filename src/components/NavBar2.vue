<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Almarai&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    />

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark  ">
      <a class="navbar-brand" style="color:white">EZlearn</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
        <ul class=" mr-auto mt-2 mt-lg-0"></ul>
        <form class="navbar-nav form-inline my-2 my-lg-0">
          <a
            class=" mr-sm-2 nav-link linky"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            @click="notifications()"
            >اعلانات</a
          >
          <a
            class=" mr-sm-2 nav-link linky"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            @click="classrooms()"
            >کلاس ها</a
          >
          <a
            class=" my-2 my-sm-0 nav-link linky"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            @click="profile()"
          >
            پروفایل</a
          >
        </form>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  methods: {
    home: function() {
      this.$router.push("/home");
    },
    profile: function() {
      this.$router.push("/profile");
    },
    classrooms: function() {
      this.$router.push("/classrooms");
    },
    notifications: function() {
      this.$router.push("/notifications");
    }
  }
};
</script>
<style>
@import "https://fonts.googleapis.com/css?family=Galada";
* {
  box-sizing: border-box;
}

body {
  margin: 0px;
  font-family: "Almarai", sans-serif;
}
.nav {
  height: 50px;
  width: 100%;
  background-color: #120429;
  position: relative;
}

.nav > .nav-header {
  display: inline;
}

.nav > .nav-header > .nav-title {
  display: inline-block;
  font-size: 22px;
  color: #fff;
  padding: 10px 10px 10px 10px;
  font-family: "Almarai", sans-serif;
}
.nav > .nav-header > .nav-title:hover {
  cursor: pointer;
}

.nav > .nav-btn {
  display: none;
}

.nav > .nav-links {
  display: inline;
  float: right;
  font-size: 18px;
}

.nav > .nav-links > a {
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #efefef;
  cursor: pointer;
  font-family: "Almarai", sans-serif;
}

.nav > .nav-links > a:hover {
  color: #fa923f;
  cursor: pointer;
}

.nav > #nav-check {
  display: none;
}

@media (max-width: 600px) {
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
  }
  .nav > .nav-btn > label:hover,
  .nav #nav-check:checked ~ .nav-btn > label {
    background-color: #120429;
  }
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: #333;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
  }
  .nav > .nav-links > a {
    display: block;
    width: 100%;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked ~ .nav-links {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
}
.linky {
  cursor: pointer;
  font-family: "Almarai", sans-serif;
}
.linky:hover {
  color: #fa923f;
}
a:hover {
  color: #fa923f;
}
</style>
