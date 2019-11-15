<template>
  <div class="wrapper animated bounce">
    <h1>Register</h1>
    <form action="post">
      <div>
        <input
          v-model="fullname.firstname"
          @blur="checkfirstname"
          type="text"
          id="first_name"
          name="first_name"
          required
          placeholder="Firstname "
        />
      </div>

      <div>
        <input
          type="text"
          v-model="fullname.lastname"
          @blur="checklastname"
          id="last_name"
          name="last_name"
          required
          placeholder="Lastname "
        />
      </div>
      <div>
        <input
          v-model="username"
          @blur="checkUsername"
          type="text"
          pattern=".{3,}"
          id="user_name"
          name="user_name"
          required
          placeholder="Username "
        />
      </div>
      <div>
        <input
          type="age"
          id="Age"
          name="Age"
          pattern="[0-9]{2}"
          required
          placeholder="age "
        />
      </div>
      <!--
      <select
        class="selectItems"
        required
        name="year"
        id="year"
        v-model="dateofbirth.year"
      >
        <option class="selectItems" v-for="y in 1398" v-bind:key="y">{{
          y
        }}</option>
      </select>
      <select
        class="selectItems"
        required
        name="month"
        id="month"
        v-model="dateofbirth.month"
      >
        <option class="selectItems" v-for="m in 12" v-bind:key="m">{{
          m
        }}</option>
      </select>
      <select
        class="selectItems"
        required
        name="day"
        id="day"
        v-model="dateofbirth.day"
      >
        <option class="selectItems" v-for="d in 31" v-bind:key="d">{{
          d
        }}</option>
      </select>-->

      <div>
        <input
          type="email"
          v-model="email"
          @blur="checkemail"
          id="email"
          name="email"
          required
          placeholder="Email Address "
        />

        <div class="requirements">
          Must be a valid email address.
        </div>
      </div>
      <div>
        <input
          type="phonenumber"
          v-model="phonenumber"
          @blur="checknumber"
          id="number"
          name="number"
          pattern="09[0-9]{9}"
          required
          placeholder="Phone number "
        />
        <div class="requirements">
          Must be a valid phonenumber.
        </div>
      </div>

      <div>
        <input
          type="password"
          v-model="password"
          @blur="checkPassword"
          id="password"
          name="password"
          required
          placeholder="Password "
          pattern=".{8,}"
        />

        <div class="requirements">
          Your password must be at least 8 characters
        </div>
      </div>

      <div class="button" id="button-3">
        <div id="circle"></div>
        <a href="#">Let's Go!</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      fullname: { firstname: "", lastname: "" },
      firstname: "",
      lastname: "",
      phonenumber: "",
      dateofbirth: { year: 1398, month: 8, day: 9 },
      email: "",
      username: "",
      password: "",
      subscribed: false,
      registerenable: false
    };
  },
  computed: {
    checkSubmission: function() {
      return (
        this.checkfirstname() &&
        this.checklastname() &&
        this.checknumber() &&
        this.checkemail() &&
        this.checkUsername() &&
        this.checkPassword()
      );
    }
  },
  methods: {
    checkfirstname: function() {
      var nametest = /^(?![\s.]+$)[a-zA-Z\s.]+$/;
      if (nametest.test(this.fullname.firstname)) {
        if (nametest.test(this.firstname)) {
          console.log("firstname is ok");

          return true;
        } else {
          console.log("firstname is wrong");
          //TODO
          //TODO change style of the firstname
          return false;
        }
      }
    },
    checklastname: function() {
      var nametest = /^(?![\s.]+$)[a-zA-Z\s.]+$/;
      if (nametest.test(this.fullname.lastname)) {
        if (nametest.test(this.lastname)) {
          console.log("lastname is ok");
          //TODO
          //TODO put a checkmark on lastname
          return true;
        } else {
          console.log("lastname is wrong");
          //TODO
          //TODO change style of the lastname
          return false;
        }
      }
    },
    checknumber: function() {
      //TODO: phone number validation using regex
      return true;
    },
    checkemail: function() {
      var emailtest = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (emailtest.test(this.email)) {
        console.log("email is ok");
        //TODO
        //TODO put a checkmark on email
        return true;
      } else {
        console.log("email is wrong");
        //TODO
        //TODO change style of the email
        return false;
      }
    },
    checkUsername: function() {
      //TODO: body should be implemented
      if (this.username.length > 3) {
        console.log("username is fine");
        //TODO: change style of the username field
        return true;
      } else {
        console.log("username is wrong");
        //TODO: change style of the username field
        return false;
      }
    },
    checkPassword: function() {
      if (this.password.length > 8) {
        console.log("password is fine");
        //TODO: change style of the username field
        return true;
      } else {
        console.log("password is wrong");
        //TODO: change style of the username field
        return false;
      }
    }
  }
};
</script>
<style>
body {
  background-attachment: fixed;
}
input {
  padding: 20px 20px 20px 50px;
  width: 100%;
  margin-bottom: 10px;

  background: rgba(0, 0, 0, 0.3);
  border: none;
  outline: none;
  font-size: 13px;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2),
    0 1px 1px rgba(255, 255, 255, 0.2);
  -webkit-transition: box-shadow 0.5s ease;
  -moz-transition: box-shadow 0.5s ease;
  -o-transition: box-shadow 0.5s ease;
  -ms-transition: box-shadow 0.5s ease;
  transition: box-shadow 0.5s ease;
}
input:focus {
  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.4),
    0 1px 1px rgba(255, 255, 255, 0.2);
}
.selectItems {
  padding: 20px 0px 20px 50px;
  width: 30%;
  margin-bottom: 10px;
  margin-right: 5px;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  outline: none;
  font-size: 13px;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2),
    0 1px 1px rgba(255, 255, 255, 0.2);
  -webkit-transition: box-shadow 0.5s ease;
  -moz-transition: box-shadow 0.5s ease;
  -o-transition: box-shadow 0.5s ease;
  -ms-transition: box-shadow 0.5s ease;
  transition: box-shadow 0.5s ease;
}
.selectItems:focus {
  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.4),
    0 1px 1px rgba(255, 255, 255, 0.2);
}
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
@import url(https://fonts.googleapis.com/css?family=PT+Sans:400);

// positioning context

input[type="text"] {
  &:valid {
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/check.svg);
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 20px 20px;
    & + label {
      opacity: 0;
    }
  }

  &:invalid:not(:focus):not(:placeholder-shown) {
    background: pink;
    & + label {
      opacity: 0;
    }
  }

  &:invalid:focus:not(:placeholder-shown) {
    & ~ .requirements {
      max-height: 200px;
      padding: 0 30px 20px 50px;
    }
  }
}
input[type="age"] {
  &:valid {
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/check.svg);
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 20px 20px;
    & + label {
      opacity: 0;
    }
  }

  &:invalid:not(:focus):not(:placeholder-shown) {
    background: pink;
    & + label {
      opacity: 0;
    }
  }

  &:invalid:focus:not(:placeholder-shown) {
    & ~ .requirements {
      max-height: 200px;
      padding: 0 30px 20px 50px;
    }
  }
}
input[type="password"] {
  &:valid {
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/check.svg);
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 20px 20px;
    & + label {
      opacity: 0;
    }
  }

  &:invalid:not(:focus):not(:placeholder-shown) {
    background: pink;
    & + label {
      opacity: 0;
    }
  }

  &:invalid:focus:not(:placeholder-shown) {
    & ~ .requirements {
      max-height: 200px;
      padding: 0 30px 20px 50px;
    }
  }
}
input[type="email"] {
  &:valid {
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/check.svg);
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 20px 20px;
    & + label {
      opacity: 0;
    }
  }

  &:invalid:not(:focus):not(:placeholder-shown) {
    background: pink;
    & + label {
      opacity: 0;
    }
  }

  &:invalid:focus:not(:placeholder-shown) {
    & ~ .requirements {
      max-height: 200px;
      padding: 0 30px 20px 50px;
    }
  }
}

.requirements {
  padding: 0 30px 0 50px;
  color: #999;
  max-height: 0;
  transition: 0.28s;
  overflow: hidden;
  color: rgb(182, 87, 118);
  font-style: italic;
}
input[type="phonenumber"] {
  &:valid {
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/check.svg);
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 20px 20px;
    & + label {
      opacity: 0;
    }
  }

  &:invalid:not(:focus):not(:placeholder-shown) {
    background: pink;
    & + label {
      opacity: 0;
    }
  }

  &:invalid:focus:not(:placeholder-shown) {
    & ~ .requirements {
      max-height: 200px;
      padding: 0 30px 20px 50px;
    }
  }
}

.button {
  display: inline-flex;
  height: 40px;
  width: 150px;
  border: 2px solid #bfc0c0;
  margin: 20px 20px 20px 20px;
  color: #bfc0c0;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.8em;
  letter-spacing: 1.5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
a {
  color: #bfc0c0;
  text-decoration: none;
  letter-spacing: 1px;
}
#button-3 {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

#button-3 a {
  position: relative;
  transition: all 0.45s ease-Out;
}

#circle {
  width: 0%;
  height: 0%;
  opacity: 0;
  line-height: 40px;
  border-radius: 50%;
  background: #bfc0c0;
  position: absolute;
  transition: all 0.5s ease-Out;
  top: 20px;
  left: 70px;
}

#button-3:hover #circle {
  width: 200%;
  height: 500%;
  opacity: 1;
  top: -70px;
  left: -70px;
}

#button-3:hover a {
  color: #2d3142;
}

* {
  box-sizing: border-box;
}
</style>
