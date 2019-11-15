<template>
  <div>
    <nav role="full-horizontal">
      <ul>
        <li><a href="#">Stream</a></li>
        <li><a href="#">Lab</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>
<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Cantora+One);

* {
  box-sizing: border-box;
}
nav[role="full-horizontal"] {
  width: 100%;

  ul {
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

    ul > li {
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
