<template>
  <div class="wrapper animated bounce">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <h1>ثبت نام</h1>
    <form>
      <div>
        <input
          v-model="username"
          type="text"
          pattern="[a-z_A-Z0-9]{3,}"
          id="user_name"
          name="user_name"
          required
          placeholder="نام کاربری"
        />
        <div class="requirements">
          Your username must be at least 3 characters, only containing letters,
          numbers, and underscores
        </div>
      </div>

      <div>
        <input
          type="password"
          v-model="password"
          id="password"
          name="password"
          required
          placeholder="رمز عبور"
          pattern=".{8,}"
        />
        <div class="requirements">
          Your password must be at least 8 characters
        </div>
      </div>

      <div class="button" id="button-3" @click="postData">
        <div id="circle"></div>
        <a href="#">Let's Go!</a>
      </div>

      <i
        v-if="waiting"
        class="fa fa-spinner fa-spin"
        style="font-size:24px"
      ></i>
    </form>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      username: "",
      usernameStatus: true,
      password: "",
      passwordStatus: true
    };
  },
  computed: {
    checkSubmission: function() {
      return this.passwordStatus && this.usernameStatus;
    }
  },
  methods: {
    checkAll: function() {
      this.checkUsername();
      this.checkPassword();
    },
    checkUsername: function() {
      const usernameFormat = /^[a-z_A-Z0-9]{3,}$/;
      if (usernameFormat.test(this.username)) {
        console.log("username is fine");
        this.usernameStatus = true;
      } else {
        console.log("username is wrong");
        this.usernameStatus = false;
      }
    },

    checkPassword: function() {
      if (this.password.length >= 8) {
        console.log("password is fine");
        this.passwordStatus = true;
      } else {
        console.log("password is wrong");
        this.passwordStatus = false;
      }
    },
    postData() {
      console.log("checking your submission data");
      this.checkAll();
      if (this.checkSubmission) {
        const newRegister = {
          username: this.username,
          password: this.password
        };

        this.$store.dispatch("signup", {
          newRegister: newRegister,
          success: () => {
            this.$store.dispatch("getProfile", {
              success: () => {
                this.$router.push({ path: "/profile" });
              },
              failure: () => {
                console.log(
                  "success on register but failed to get your profile"
                );
              }
            });
          },
          failure: () => {
            console.log("register failed");
            console.log("failed to register");
          }
        });
      } else {
        alert("Wrong submission, check the errors!");
      }
    }
  }
};
</script>

<style scoped>
body {
  background-attachment: fixed;
}
input {
  padding: 20px 20px 20px 50px;
  width: 100%;
  margin-bottom: 10px;
  text-align: right;
  background-color: aliceblue;
  border: none;
  outline: none;
  font-size: 13px;
  font-family: "Baloo Bhaijaan", cursive;
  color: black;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  -webkit-transition: box-shadow 0.5s ease;
  -moz-transition: box-shadow 0.5s ease;
  -o-transition: box-shadow 0.5s ease;
  -ms-transition: box-shadow 0.5s ease;
  transition: box-shadow 0.5s ease;
}
input:focus {
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
  font-family: "Baloo Bhaijaan", cursive;
  color: black;
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
<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=PT+Sans:400);

// positioning context

input[type="text"] {
  &:valid {
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/check.svg);
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 20px 20px;
    background-color: white;
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
    background-color: white;
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
// input[type="email"] {
//   &:valid {
//     background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/check.svg);
//     background-size: 20px;
//     background-repeat: no-repeat;
//     background-position: 20px 20px;
//     & + label {
//       opacity: 0;
//     }
//   }

//   &:invalid:not(:focus):not(:placeholder-shown) {
//     background: pink;
//     & + label {
//       opacity: 0;
//     }
//   }

//   &:invalid:focus:not(:placeholder-shown) {
//     & ~ .requirements {
//       max-height: 200px;
//       padding: 0 30px 20px 50px;
//     }
//   }
// }

.requirements {
  padding: 0 30px 0 50px;
  max-height: 0;
  transition: 0.28s;
  overflow: hidden;
  color: rgb(182, 87, 118);
  font-style: italic;
}

button {
  display: inline-flex;
  height: 40px;
  width: 150px;
  border: 2px solid #bfc0c0;
  margin: 20px 20px 20px 20px;
  color: black;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.8em;
  letter-spacing: 1.5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: white;
}
a {
  color: black;
  text-decoration: none;
  letter-spacing: 1px;
}
#button-3 {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background-color: white;
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
.css-selector {
  font-family: "Baloo Bhaijaan", cursive;
}
</style>
