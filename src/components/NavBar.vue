<template>
  <header id="header">
    <nav>
      <ul>
        <li>
          <router-link to="/profile">Profile</router-link>
        </li>
        <li>
          <router-link to="/classrooms">Classrooms</router-link>
        </li>
        <li>
          <router-link to="/notifications">Notifications</router-link>
        </li>
      </ul>
    </nav>
    <div class="logo">
      <router-link to="/home">Our logo</router-link>
    </div>
  </header>
</template>

<style scoped>
  #header {
    height: 56px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color: #120429;
    padding: 0 0px;
    font-family: "Galada", cursive;
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